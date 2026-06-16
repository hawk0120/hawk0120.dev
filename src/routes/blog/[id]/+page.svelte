<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  let document = null;
  let loading = true;
  let error = null;

  onMount(async () => {
    try {
      const id = $page.params.id;
      const response = await fetch('https://eurosky.social/xrpc/com.atproto.repo.listRecords?repo=did:plc:da6iyhwpub7pnqbj5booh2by&collection=site.standard.document');
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
        readingTime: calcReadingTime(record.value.content?.pages || []),
        pages: record.value.content?.pages?.map(p => {
          let blocks = p.blocks?.reduce((acc, b) => {
            const blockType = b.block?.$type || '';

            if (blockType.endsWith('unorderedList') || blockType.endsWith('orderedList')) {
              (b.block?.children || []).forEach(c => {
                const text = c.content?.plaintext || '';
                if (text.trim()) {
                  acc.push({
                    plaintext: '• ' + text.trim(),
                    type: 'unorderedList',
                    _nativeListItem: true
                  });
                }
              });
              return acc;
            }

            const block = {};
            if (b.block?.plaintext) {
              block.plaintext = b.block.plaintext;
              block.type = detectBlockType(b.block.plaintext);
            }
            if (b.block?.image?.ref?.$link) {
              block.imageUrl = `https://eurosky.social/xrpc/com.atproto.sync.getBlob?did=did:plc:da6iyhwpub7pnqbj5booh2by&cid=${b.block.image.ref.$link}`;
              block.alt = b.block.image.alt || '';
            }
            acc.push(block);
            return acc;
          }, []) || [];

          const expandedBlocks = [];
          blocks.forEach(block => {
            if (block.plaintext && block.plaintext.includes('•') && !block._nativeListItem) {
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

  function calcReadingTime(pages) {
    let words = 0;
    for (const p of pages) {
      for (const b of p.blocks || []) {
        if (b.block?.plaintext) {
          words += b.block.plaintext.split(/\s+/).filter(Boolean).length;
        }
      }
    }
    const mins = Math.ceil(words / 200);
    return Math.max(1, mins);
  }
</script>

{#if loading}
  <p class="muted">Loading...</p>
{:else if error}
  <p class="error">Error: {error}</p>
{:else if document}
  <article>
    <header>
      <h1>{document.title}</h1>
      <p class="meta">
        {formatDate(document.publishedAt)} &middot; {document.readingTime} min read
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

  <a href="#top" class="back-to-top">&uarr; back to top</a>
{/if}

<svelte:head>
  <title>{document ? document.title + ' — Brady Hawkins' : 'Brady Hawkins'}</title>
  <meta property="og:title" content={document ? document.title : 'Brady Hawkins'} />
  <meta property="og:description" content={document ? (document.description || 'Blog post by Brady Hawkins') : 'Software engineer. Tinkerer. Canadian in the Netherlands.'} />
  <meta name="twitter:title" content={document ? document.title : 'Brady Hawkins'} />
  <meta name="twitter:description" content={document ? (document.description || 'Blog post by Brady Hawkins') : 'Software engineer. Tinkerer. Canadian in the Netherlands.'} />
</svelte:head>

<style>
  .muted {
    color: var(--text-muted);
  }

  .error {
    color: #ff5252;
  }

  article header {
    margin-bottom: 2.5rem;
  }

  h1 {
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 1.3;
    margin: 0 0 0.5rem;
    color: var(--text-color);
    letter-spacing: -0.02em;
  }

  h2 {
    font-size: 1.35rem;
    font-weight: 600;
    margin: 2rem 0 0.75rem;
    color: var(--text-color);
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 1.5rem 0 0.5rem;
    color: var(--text-color);
  }

  .meta {
    color: var(--text-muted);
    font-size: 0.85rem;
    margin: 0;
  }

  .description {
    color: var(--text-muted);
    font-style: italic;
    margin-top: 1rem;
    line-height: 1.5;
  }

  p {
    line-height: 1.6;
    color: var(--text-color);
    margin: 1rem 0;
  }

  pre {
    background-color: rgba(0,0,0,0.05);
    padding: 1rem;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 0.9rem;
  }

  :global([data-theme="dark"]) pre {
    background-color: rgba(255,255,255,0.05);
  }

  blockquote {
    border-left: 3px solid var(--accent);
    padding-left: 1rem;
    margin: 1.5rem 0;
    color: var(--text-muted);
    line-height: 1.6;
  }

  ul, ol {
    padding-left: 1.25rem;
    color: var(--text-color);
    line-height: 1.6;
  }

  li {
    margin: 0.3rem 0;
  }

  figure {
    margin: 1.5rem 0;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  figcaption {
    text-align: center;
    color: var(--text-muted);
    font-size: 0.85rem;
    margin-top: 0.5rem;
  }

  a {
    color: var(--accent);
  }

  a:hover {
    color: var(--accent-hover);
  }

  .back-to-top {
    display: block;
    margin-top: 3rem;
    text-align: center;
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.85rem;
    transition: color 0.15s;
  }

  .back-to-top:hover {
    color: var(--accent);
  }
</style>
