<script>
  import { page } from '$app/stores';
  import { theme } from '$lib/stores/theme';
  import { onMount } from 'svelte';

  onMount(() => {
    const host = window.location.hostname;
    if (host === 'bradyhawkins.dev' || host === 'www.bradyhawkins.dev') {
      const script = document.createElement('script');
      script.src = '/badge.js';
      script.async = true;
      document.body.appendChild(script);
    }

    const observer = new MutationObserver(() => {
      const badge = document.getElementById('wcb');
      if (badge) {
        badge.classList.toggle('wcb-d', $theme === 'dark');
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  });
</script>

<footer class:landing={$page.url.pathname === "/"}>
  <div class="footer-inner">
    <div id="wcb" class="carbonbadge wcb-d"></div>
    <span class="copy">&copy; 2026 Brady Hawkins</span>
  </div>
</footer>

<style>
  footer {
    margin-left: 248px;
    padding: 0 56px 48px;
    width: calc(100% - 248px);
    box-sizing: border-box;
    color: var(--footer-text);
    position: relative;
    z-index: 1;
  }

  footer.landing {
    margin-left: 0;
    width: 100%;
  }

  .footer-inner {
    max-width: 800px;
    margin: 0 auto;
    border-top: 1px solid var(--border-color);
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  .copy {
    font-family: var(--font-mono);
    font-size: 10.5px;
    letter-spacing: 0.05em;
  }

  #wcb.carbonbadge {
    --b1: var(--footer-text) !important;
    --b2: var(--accent) !important;
    background: transparent !important;
  }

  #wcb.carbonbadge.wcb-d {
    --b1: #e0e0e0 !important;
    --b2: var(--accent) !important;
  }

  #wcb.carbonbadge:not(.wcb-d) {
    --b1: #2d2d2d !important;
    --b2: var(--accent) !important;
  }

  #wcb a {
    background: transparent !important;
  }

  #wcb #wcb_g {
    background: transparent !important;
    border: none !important;
  }

  #wcb #wcb_a {
    background: transparent !important;
    border: none !important;
  }

  .carbonbadge,
  .wcb,
  #wcb {
    background: transparent !important;
    background-color: transparent !important;
    --wcb-bg: transparent !important;
  }

  .carbonbadge.wcb-d,
  .wcb-d {
    color: #e0e0e0 !important;
  }

  #wcb.carbonbadge a {
    color: var(--footer-text) !important;
    text-decoration: none !important;
    background: transparent !important;
  }

  #wcb.carbonbadge.wcb-d a {
    color: #e0e0e0 !important;
  }

  :global([data-theme="light"]) #wcb.carbonbadge {
    color: #2d2d2d !important;
    background: transparent !important;
  }

  :global([data-theme="light"]) #wcb.carbonbadge a {
    color: #2d2d2d !important;
  }

  @media (max-width: 860px) {
    footer {
      margin-left: 0;
      width: 100%;
      padding: 0 22px 40px;
    }
  }
</style>
