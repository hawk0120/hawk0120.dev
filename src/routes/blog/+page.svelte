<script>
  import { onMount } from 'svelte';

  let documents = [];
  let loading = true;
  let error = null;

  onMount(async () => {
    try {
      const response = await fetch('https://bsky.social/xrpc/com.atproto.repo.listRecords?repo=did:plc:da6iyhwpub7pnqbj5booh2by&collection=site.standard.document');
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

{#if loading}
  <div class="loading">Loading posts...</div>
{:else if error}
  <div class="error">Error loading posts: {error}</div>
{:else}
  <ul class="blog-post">
    {#each documents as doc}
      <li>
        <a href="/blog/{encodeURIComponent(doc.id)}">{doc.title}</a>
        <small>| {formatDate(doc.publishedAt)}</small>
      </li>
    {/each}
  </ul>
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
    list-style: none;
    padding: 0;
    max-width: 800px;
    margin: 0 auto;
  }

  .blog-post li {
    padding: 1rem 0;
    border-bottom: 1px solid var(--border-color);
  }

  .blog-post li:last-child {
    border-bottom: none;
  }

  .blog-post a {
    color: var(--accent-color);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .blog-post a:hover {
    text-decoration: underline;
  }

  .blog-post small {
    color: var(--text-color);
    opacity: 0.7;
    margin-left: 0.5rem;
  }
</style>
