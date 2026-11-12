<script>
  import { onMount } from 'svelte';

  let documents = [];
  let loading = true;
  let error = null;

  onMount(async () => {
    try {
      const response = await fetch('https://eurosky.social/xrpc/com.atproto.repo.listRecords?repo=did:plc:da6iyhwpub7pnqbj5booh2by&collection=site.standard.document');
      const res = await response.json();

      documents = res.records.map(record => ({
        id: record.uri,
        title: record.value.title,
        author: 'Brady Hawkins',
        description: record.value.description || '',
        publishedAt: record.value.publishedAt
      })).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

      loading = false;
    } catch (e) {
      error = e.message;
      loading = false;
    }
  });

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<div class="page-label">03 / Writing</div>

{#if loading}
  <p class="muted">Loading posts...</p>
{:else if error}
  <p class="error">Error loading posts: {error}</p>
{:else}
  <div class="index">
    {#each documents as doc, i}
      <a class="index-row" href="/blog/{encodeURIComponent(doc.id)}">
        <span class="no">{String(i + 1).padStart(2, '0')}</span>
        <span class="body">
          <span class="title">{doc.title}</span>
        </span>
        <span class="meta">{formatDate(doc.publishedAt)}</span>
      </a>
    {/each}
  </div>
{/if}

<style>
  .page-label {
    font-family: var(--font-mono);
    font-size: 10.5px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin: 0 0 40px;
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .page-label::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--border-color);
  }

  .muted {
    color: var(--text-muted);
  }

  .error {
    color: #ff5252;
  }

  .index-row {
    display: flex;
    align-items: baseline;
    gap: 24px;
    padding: 16px 0;
    border-bottom: 1px solid var(--border-color);
    text-decoration: none;
  }

  .index-row .no {
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
    width: 26px;
    flex-shrink: 0;
  }

  .index-row .body {
    flex: 1;
    min-width: 0;
  }

  .index-row .title {
    font-family: var(--font-serif);
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: var(--text-color);
    transition: color 0.15s;
  }

  .index-row:hover .title {
    color: var(--accent);
  }

  .index-row .meta {
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
    white-space: nowrap;
    letter-spacing: 0.05em;
  }

  @media (max-width: 860px) {
    .index-row {
      flex-wrap: wrap;
      gap: 4px 14px;
    }

    .index-row .meta {
      width: 100%;
    }
  }
</style>
