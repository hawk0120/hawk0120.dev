<script>
  import CarbonBadge from 'svelte-carbonbadge';
  import { theme } from '$lib/stores/theme';
  import { onMount } from 'svelte';

  onMount(() => {
    // Force badge re-render on theme change
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

<footer>
  <div class="footer-content">
    <div class="carbon-wrapper">
      <CarbonBadge dark={$theme === 'dark'} />
    </div>
    <div class="icon-container">
      <a href="https://www.linkedin.com/in/brady-hawkins">
        <i class="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="https://github.com/hawk0120">
        <i class="fab fa-github fa-2x"></i>
      </a>
      <a href="/rss.xml" aria-label="RSS feed">
        <i class="fa-solid fa-rss fa-2x"></i>
      </a>
      <a href="https://bsky.app/profile/bradyhawkins.dev" class="bluesky-link" aria-label="Bluesky">
        <svg viewBox="0 0 600 530" width="28" height="25" xmlns="http://www.w3.org/2000/svg">
          <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" fill="currentColor"/>
        </svg>
      </a>
    </div>
  </div>
</footer>

<style>
  footer {
    padding: 1rem 2rem;
    background-color: var(--footer-bg);
    color: var(--footer-text);
    font-size: 0.9rem;
    margin-top: auto;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .carbon-wrapper {
    display: flex;
    align-items: center;
  }

  .carbon-wrapper :global(#wcb.carbonbadge) {
    --b1: var(--footer-text) !important;
    --b2: var(--accent-color) !important;
    background: transparent !important;
  }

  .carbon-wrapper :global(#wcb.carbonbadge.wcb-d) {
    --b1: #e0e0e0 !important;
    --b2: var(--accent-color) !important;
  }

  .carbon-wrapper :global(#wcb.carbonbadge:not(.wcb-d)) {
    --b1: #1a1a1a !important;
    --b2: var(--accent-color) !important;
  }

  .carbon-wrapper :global(#wcb a) {
    background: transparent !important;
  }

  .carbon-wrapper :global(#wcb #wcb_g) {
    background: transparent !important;
    border: none !important;
  }

  .carbon-wrapper :global(#wcb #wcb_a) {
    background: transparent !important;
    border: none !important;
  }

  .carbon-wrapper :global(.carbonbadge),
  .carbon-wrapper :global(.wcb),
  .carbon-wrapper :global(#wcb) {
    background: transparent !important;
    background-color: transparent !important;
    --wcb-bg: transparent !important;
  }

  .carbon-wrapper :global(.carbonbadge.wcb-d),
  .carbon-wrapper :global(.wcb-d) {
    color: #e0e0e0 !important;
  }

  .carbon-wrapper :global(a) {
    color: var(--footer-text) !important;
    text-decoration: none !important;
    background: transparent !important;
  }

  .carbon-wrapper :global(#wcb.carbonbadge.wcb-d a) {
    color: #e0e0e0 !important;
  }

  :global([data-theme="light"]) .carbon-wrapper :global(#wcb.carbonbadge) {
    color: #1a1a1a !important;
    background: transparent !important;
  }

  :global([data-theme="light"]) .carbon-wrapper :global(#wcb.carbonbadge a) {
    color: #1a1a1a !important;
  }

  .icon-container {
    display: flex;
    gap: 1.5rem;
  }

  .icon-container a {
    color: var(--footer-text);
    text-decoration: none;
    transition: opacity 0.2s;
  }

  .icon-container a:hover {
    opacity: 0.8;
  }

  footer a {
    color: var(--footer-text);
    text-decoration: underline;
  }

  footer a:hover {
    opacity: 0.8;
  }
</style>
