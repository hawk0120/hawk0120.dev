<script>
  import { theme } from '$lib/stores/theme';
  import { page } from '$app/stores';
</script>

<header>
  <a href="/" class="logo">
    <img src="/favicon.webp" alt="Brady Hawkins" width="28" height="28" class="avatar" />
    <span>Brady Hawkins</span>
  </a>
  <nav>
    <a href="/" class:active={$page.url.pathname === '/'}>home</a>
    <a href="/research" class:active={$page.url.pathname.startsWith('/research')}>research</a>
    <a href="/blog" class:active={$page.url.pathname.startsWith('/blog')}>writing</a>
    <a href="/projects" class:active={$page.url.pathname.startsWith('/projects')}>projects</a>
    <a href="/library" class:active={$page.url.pathname.startsWith('/library')}>library</a>
    <a href="/now" class:active={$page.url.pathname.startsWith('/now')}>now</a>
    <button class="theme-btn" on:click={theme.toggle} aria-label="Toggle theme">
      {#if $theme === 'dark'}
        <i class="fa-solid fa-campground"></i>
      {:else}
        <i class="fa-solid fa-fire"></i>
      {/if}
    </button>
  </nav>
</header>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 2rem 0.5rem;
    max-width: 720px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    z-index: 10;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: var(--header-text);
  }

  .avatar {
    border-radius: 50%;
    object-fit: cover;
  }

  .logo span {
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  nav {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  nav a {
    text-decoration: none;
    color: var(--text-muted);
    font-size: 0.9rem;
    transition: color 0.15s;
  }

  nav a:hover {
    color: var(--text-color);
  }

  nav a.active {
    color: var(--text-color);
  }

  nav button {
    background: none;
    border: none;
    color: var(--text-muted);
    font-size: 1.2rem;
    padding: 0.25rem;
    border-radius: 50%;
    cursor: pointer;
    transition: color 0.15s, background-color 0.15s;
    font-family: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
  }

  nav button:hover {
    color: var(--text-color);
    background-color: rgba(128,128,128,0.1);
  }

  @media (max-width: 580px) {
    header {
      flex-direction: column;
      gap: 0.75rem;
      padding: 1rem 1.5rem 0.5rem;
    }

    nav {
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.75rem;
    }
  }
</style>
