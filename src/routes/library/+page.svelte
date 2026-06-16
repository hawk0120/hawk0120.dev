<script>
  import { onMount } from 'svelte';

  const PDS = 'https://eurosky.social';
  const DID = 'did:plc:da6iyhwpub7pnqbj5booh2by';

  let books = { reading: [], wantToRead: [], read: [] };
  let loading = true;
  let error = null;

  onMount(async () => {
    try {
      let records = [];
      let cursor = null;

      do {
        const url = `${PDS}/xrpc/com.atproto.repo.listRecords?repo=${DID}&collection=buzz.bookhive.book&limit=100${cursor ? `&cursor=${cursor}` : ''}`;
        const res = await fetch(url).then(r => r.json());
        records = records.concat(res.records);
        cursor = res.cursor || null;
      } while (cursor);

      const reading = [];
      const wantToRead = [];
      const read = [];

      records.forEach(r => {
        const book = {
          title: r.value.title,
          author: r.value.authors,
          status: r.value.status,
          coverCid: r.value.cover?.ref?.$link,
          startedAt: r.value.startedAt,
          finishedAt: r.value.finishedAt,
          progress: r.value.bookProgress
        };

        if (book.status === 'buzz.bookhive.defs#reading') {
          reading.push(book);
        } else if (
          book.status === 'buzz.bookhive.defs#wantToRead' ||
          book.status === 'buzz.bookhive.defs#abandoned'
        ) {
          wantToRead.push(book);
        } else if (book.status === 'buzz.bookhive.defs#finished') {
          read.push(book);
        }
      });

      books = { reading, wantToRead, read };
      loading = false;
    } catch (e) {
      error = e.message;
      loading = false;
    }
  });

  function coverUrl(cid) {
    return `${PDS}/xrpc/com.atproto.sync.getBlob?did=${DID}&cid=${cid}`;
  }
</script>

<h2>Library</h2>

{#if loading}
  <p class="muted">Loading library...</p>
{:else if error}
  <p class="error">Error: {error}</p>
{:else}
  {#if books.reading.length > 0}
    <section>
      <h3>Reading</h3>
      <div class="book-grid">
        {#each books.reading as book}
          <div class="book-card">
            {#if book.coverCid}
              <img src={coverUrl(book.coverCid)} alt="{book.title} cover" class="cover" />
            {/if}
            <div class="info">
              <h4>{book.title}</h4>
              <p class="author">{book.author}</p>
            </div>
          </div>
        {/each}
      </div>
    </section>
  {/if}

  {#if books.wantToRead.length > 0}
    <section>
      <h3>Want to Read</h3>
      <div class="book-grid">
        {#each books.wantToRead as book}
          <div class="book-card">
            {#if book.coverCid}
              <img src={coverUrl(book.coverCid)} alt="{book.title} cover" class="cover" />
            {/if}
            <div class="info">
              <h4>{book.title}</h4>
              <p class="author">{book.author}</p>
            </div>
          </div>
        {/each}
      </div>
    </section>
  {/if}

  {#if books.read.length > 0}
    <section>
      <h3>Read in the past</h3>
      <div class="book-grid">
        {#each books.read as book}
          <div class="book-card">
            {#if book.coverCid}
              <img src={coverUrl(book.coverCid)} alt="{book.title} cover" class="cover" />
            {/if}
            <div class="info">
              <h4>{book.title}</h4>
              <p class="author">{book.author}</p>
            </div>
          </div>
        {/each}
      </div>
    </section>
  {/if}
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

  section {
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 0.75rem;
    color: var(--text-color);
  }

  .book-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
  }

  .book-card {
    background: rgba(0,0,0,0.03);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    overflow: hidden;
    transition: transform 0.15s;
  }

  :global([data-theme="dark"]) .book-card {
    background: rgba(255,255,255,0.03);
  }

  .book-card:hover {
    transform: translateY(-2px);
  }

  .cover {
    width: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
    display: block;
  }

  .info {
    padding: 0.5rem;
  }

  h4 {
    font-size: 0.85rem;
    font-weight: 600;
    margin: 0 0 0.15rem;
    color: var(--text-color);
    line-height: 1.3;
  }

  .author {
    font-size: 0.75rem;
    color: var(--text-muted);
    margin: 0;
  }
</style>
