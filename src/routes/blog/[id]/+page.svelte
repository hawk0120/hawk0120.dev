<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  let document = null;
  let loading = true;
  let error = null;

  onMount(async () => {
    try {
      const id = $page.params.id;
      const response = await fetch('https://bsky.social/xrpc/com.atproto.repo.listRecords?repo=did:plc:da6iyhwpub7pnqbj5booh2by&collection=site.standard.document');
      const res = await response.json();
      
      const record = res.records.find(r => r.uri === decodeURIComponent(id));
      
      if (!record) {
        error = 'Post not found';
        loading = false;
        return;
      }

      document = {
        id: record.uri,
        title: record.value.title,
        author: 'Brady Hawkins',
        description: record.value.description || '',
        publishedAt: record.value.publishedAt,
        pages: record.value.content?.pages?.map(p => {
          let blocks = p.blocks?.map(b => {
            const block = {};
            if (b.block?.plaintext) {
              block.plaintext = b.block.plaintext;
              block.type = detectBlockType(b.block.plaintext);
            }
            if (b.block?.image?.ref?.$link) {
              block.imageUrl = `https://bsky.social/xrpc/com.atproto.sync.getBlob?did=did:plc:da6iyhwpub7pnqbj5booh2by&cid=${b.block.image.ref.$link}`;
              block.alt = b.block.image.alt || '';
            }
            return block;
          }) || [];

          // Split text blocks containing "•" into separate list items
          const expandedBlocks = [];
          blocks.forEach(block => {
            if (block.plaintext && block.plaintext.includes('•')) {
              const parts = block.plaintext.split(/\s*•\s*/).filter(s => s.trim());
              parts.forEach(part => {
                expandedBlocks.push({
                  plaintext: '• ' + part.trim(),
                  type: 'unorderedList'
                });
              });
            } else {
              expandedBlocks.push(block);
            }
          });
          blocks = expandedBlocks;

          // Group consecutive list items
          const groupedBlocks = [];
          let currentList = null;

          blocks.forEach(block => {
            if (block.type === 'unorderedList' || block.type === 'orderedList') {
              if (!currentList || currentList.type !== block.type) {
                if (currentList) groupedBlocks.push(currentList);
                currentList = { type: block.type, items: [] };
              }
              currentList.items.push(block.plaintext);
            } else {
              if (currentList) {
                groupedBlocks.push(currentList);
                currentList = null;
              }
              groupedBlocks.push(block);
            }
          });

          if (currentList) groupedBlocks.push(currentList);

          return { blocks: groupedBlocks };
        }) || []
      };

      loading = false;
    } catch (e) {
      error = e.message;
      loading = false;
    }
  });

  function detectBlockType(text) {
    const trimmed = text.trim();
    if (trimmed.startsWith('# ')) return 'heading1';
    if (trimmed.startsWith('## ')) return 'heading2';
    if (trimmed.startsWith('### ')) return 'heading3';
    if (trimmed.startsWith('```') || trimmed.startsWith('    ')) return 'code';
    if (trimmed.startsWith('> ')) return 'blockquote';
    if (/^[-*•]\s/.test(trimmed) || trimmed.startsWith('•')) return 'unorderedList';
    if (/^\d+\.\s/.test(trimmed)) return 'orderedList';
    return 'paragraph';
  }

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

{#if loading}
  <div class="loading">Loading post...</div>
{:else if error}
  <div class="error">Error: {error}</div>
{:else if document}
  <article class="blog-post">
    <header>
      <h1>{document.title}</h1>
      <p class="meta">
        By {document.author} | {formatDate(document.publishedAt)}
      </p>
      {#if document.description}
        <p class="description">{document.description}</p>
      {/if}
    </header>

    {#each document.pages as page}
      {#each page.blocks as block}
        {#if block.type === 'heading1'}
          <h1>{block.plaintext.replace(/^# /, '')}</h1>
        {:else if block.type === 'heading2'}
          <h2>{block.plaintext.replace(/^## /, '')}</h2>
        {:else if block.type === 'heading3'}
          <h3>{block.plaintext.replace(/^### /, '')}</h3>
        {:else if block.type === 'code'}
          <pre><code>{block.plaintext}</code></pre>
        {:else if block.type === 'blockquote'}
          <blockquote>{block.plaintext.replace(/^> /, '')}</blockquote>
        {:else if block.type === 'unorderedList'}
          <ul>
            {#each block.items as item}
              <li>{item.replace(/^[-*•]\s*/, '').trim()}</li>
            {/each}
          </ul>
        {:else if block.type === 'orderedList'}
          <ol>
            {#each block.items as item}
              <li>{item.replace(/^\d+\. /, '')}</li>
            {/each}
          </ol>
        {:else if block.imageUrl}
          <figure>
            <img src={block.imageUrl} alt={block.alt} />
            {#if block.alt}
              <figcaption>{block.alt}</figcaption>
            {/if}
          </figure>
        {:else if block.plaintext}
          <p>{block.plaintext}</p>
        {/if}
      {/each}
    {/each}
  </article>
{/if}

<style>
  .loading, .error {
    text-align: center;
    padding: 2rem;
    color: var(--text-color);
  }

  .error {
    color: #ff5252;
  }

  .blog-post {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  header {
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  h1, h2, h3 {
    color: var(--text-color);
  }

  .meta {
    color: var(--text-color);
    opacity: 0.7;
    font-size: 0.9rem;
  }

  .description {
    color: var(--text-color);
    opacity: 0.8;
    font-style: italic;
  }

  p {
    line-height: 1.6;
    color: var(--text-color);
    margin: 1rem 0;
  }

  pre {
    background-color: var(--header-bg);
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
  }

  blockquote {
    border-left: 4px solid var(--accent-color);
    padding-left: 1rem;
    margin: 1rem 0;
    color: var(--text-color);
    opacity: 0.8;
  }

  ul, ol {
    padding-left: 2rem;
    color: var(--text-color);
  }

  li {
    margin: 0.5rem 0;
  }

  figure {
    margin: 1rem 0;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  figcaption {
    text-align: center;
    color: var(--text-color);
    opacity: 0.7;
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
</style>
