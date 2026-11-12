<script>
  import { theme } from '$lib/stores/theme';
  import { page } from '$app/stores';
</script>

<aside class="sidebar">
  <a class="brand" href="/">
    <div class="name">Brady Hawkins</div>
    <div class="role">SOFTWARE ENGINEER &middot; MIDDELBURG, NL</div>
  </a>
  <nav class="main-nav">
    <a href="/" class:active={$page.url.pathname === '/'}><span class="idx">01</span>Home</a>
    <a href="/projects" class:active={$page.url.pathname.startsWith('/projects')}><span class="idx">02</span>Projects</a>
    <a href="/blog" class:active={$page.url.pathname.startsWith('/blog')}><span class="idx">03</span>Writing</a>
    <a href="/library" class:active={$page.url.pathname.startsWith('/library')}><span class="idx">04</span>Library</a>
  </nav>
  <div class="bottom">
    <div class="socials">
      <a href="https://github.com/hawk0120" target="_blank" rel="noopener">github &#8599;</a>
      <a href="https://www.linkedin.com/in/brady-hawkins" target="_blank" rel="noopener">linkedin &#8599;</a>
      <a href="https://bsky.app/profile/bradyhawkins.dev" target="_blank" rel="noopener">bsky &#8599;</a>
      <a href="/rss.xml">rss &#8599;</a>
    </div>
    <button class="theme-btn" on:click={theme.toggle} aria-label="Toggle theme">
      {$theme === 'dark' ? 'light' : 'dark'} mode
    </button>
  </div>
</aside>

<div class="topbar">
  <a class="name" href="/">Brady Hawkins</a>
  <nav>
    <a href="/" class:active={$page.url.pathname === '/'}>home</a>
    <a href="/projects" class:active={$page.url.pathname.startsWith('/projects')}>projects</a>
    <a href="/blog" class:active={$page.url.pathname.startsWith('/blog')}>writing</a>
    <a href="/library" class:active={$page.url.pathname.startsWith('/library')}>library</a>
    <button class="theme-btn" on:click={theme.toggle} aria-label="Toggle theme">
      {$theme === 'dark' ? 'light' : 'dark'}
    </button>
  </nav>
</div>

<style>
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 248px;
    border-right: 1px solid var(--border-color);
    padding: 44px 36px;
    display: flex;
    flex-direction: column;
    z-index: 10;
    background: var(--bg-color);
  }

  .brand {
    text-decoration: none;
  }

  .brand .name {
    font-family: var(--font-serif);
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.01em;
    line-height: 1.15;
    color: var(--header-text);
  }

  .brand .role {
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
    margin-top: 8px;
    letter-spacing: 0.05em;
  }

  .main-nav {
    margin-top: 52px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .main-nav a {
    display: flex;
    align-items: baseline;
    gap: 10px;
    text-decoration: none;
    padding: 8px 0;
    font-size: 14px;
    color: var(--text-muted);
    transition: color 0.15s;
  }

  .main-nav a .idx {
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
  }

  .main-nav a:hover {
    color: var(--text-color);
  }

  .main-nav a.active {
    color: var(--accent);
  }

  .bottom {
    margin-top: auto;
  }

  .socials {
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-bottom: 22px;
  }

  .socials a {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.15s;
  }

  .socials a:hover {
    color: var(--accent);
  }

  .theme-btn {
    font-family: var(--font-mono);
    font-size: 10.5px;
    letter-spacing: 0.05em;
    background: none;
    border: 1px solid var(--border-color);
    border-radius: 999px;
    color: var(--text-muted);
    padding: 6px 14px;
    cursor: pointer;
    transition: color 0.15s, border-color 0.15s;
  }

  .theme-btn:hover {
    color: var(--accent);
    border-color: var(--accent);
  }

  .topbar {
    display: none;
  }

  @media (max-width: 860px) {
    .sidebar {
      display: none;
    }

    .topbar {
      display: flex;
      position: sticky;
      top: 0;
      z-index: 10;
      background: var(--bg-color);
      border-bottom: 1px solid var(--border-color);
      padding: 14px 20px;
      align-items: center;
      justify-content: space-between;
    }

    .topbar .name {
      font-family: var(--font-serif);
      font-weight: 600;
      font-size: 15px;
      text-decoration: none;
      color: var(--header-text);
    }

    .topbar nav {
      display: flex;
      gap: 14px;
      align-items: center;
    }

    .topbar nav a {
      font-family: var(--font-mono);
      font-size: 10.5px;
      color: var(--text-muted);
      text-decoration: none;
    }

    .topbar nav a.active {
      color: var(--accent);
    }

    .topbar .theme-btn {
      padding: 4px 10px;
      font-size: 10px;
    }
  }
</style>
