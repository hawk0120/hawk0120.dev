<script>
  import { theme } from '$lib/stores/theme';
  import { page } from '$app/stores';

  function toggleTheme() {
    const currentTheme = $theme === 'light' ? 'dark' : 'light';
    theme.set(currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
  }
</script>

<header class="header">
  <div class="photo-container">
    <a href="/">
      <img src="/favicon.webp" alt="Brady Hawkins" width="40" height="40" class="hero-photo" />
    </a>
  </div>
  <div class="header-right">
    <a href="/" class:active={$page.url.pathname === '/'}>home</a>
    <a href="/blog" class:active={$page.url.pathname.startsWith('/blog')}>writing</a>
    <button class="icon-btn" on:click={toggleTheme} aria-label="Toggle dark mode">
      {#if $theme === 'dark'}
        <i class="fa-solid fa-campground"></i>
      {:else}
        <i class="fa-solid fa-fire"></i>
      {/if}
    </button>
  </div>
</header>

<style>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: var(--header-bg);
    color: var(--header-text);
    position: relative;
    z-index: 10;
  }

  .photo-container {
    display: flex;
    align-items: center;
  }

  .hero-photo {
    border-radius: 50%;
    object-fit: cover;
  }

  .header-right {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .header-right a {
    text-decoration: none;
    color: var(--header-text);
    font-weight: 500;
    transition: opacity 0.2s;
  }

  .header-right a:hover {
    opacity: 0.8;
  }

  .header-right a.active {
    border-bottom: 2px solid var(--accent-color);
    padding-bottom: 2px;
  }

  .icon-btn {
    background: none;
    border: none;
    color: var(--header-text);
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    transition: background-color 0.2s;
  }

  .icon-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 640px) {
    .header {
      flex-direction: column;
      gap: 1rem;
    }

    .header-right {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
