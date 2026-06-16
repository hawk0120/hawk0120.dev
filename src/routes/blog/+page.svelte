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

<h2>Writing</h2>

{#if loading}
  <p class="muted">Loading posts...</p>
{:else if error}
  <p class="error">Error loading posts: {error}</p>
{:else}
  <ul class="posts">
    {#each documents as doc}
      <li>
        <a href="/blog/{encodeURIComponent(doc.id)}">{doc.title}</a>
        <span class="date">{formatDate(doc.publishedAt)}</span>
      </li>
    {/each}
  </ul>
{/if}

<style>
  h2 {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: var(--text-muted);
    margin: 0 0 1.5rem;
    font-weight: 600;
  }

  .muted {
    color: var(--text-muted);
  }

  .error {
    color: #ff5252;
  }

  .posts {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .posts li {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0.75rem 0;
    gap: 1rem;
  }

  .posts a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 400;
    transition: color 0.15s;
  }

  .posts a:hover {
    color: var(--accent);
  }

  .date {
    color: var(--text-muted);
    font-size: 0.85rem;
    white-space: nowrap;
    flex-shrink: 0;
  }
</style>
