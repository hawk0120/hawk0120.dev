<script>
  import { theme } from '$lib/stores/theme';
  import { onMount } from 'svelte';

  onMount(() => {
    const script = document.createElement('script');
    script.src = '/badge.js';
    script.async = true;
    document.body.appendChild(script);

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
    <div id="wcb" class="carbonbadge wcb-d"></div>
    <div class="links">
      <a href="https://www.linkedin.com/in/brady-hawkins" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i> linkedin</a>
      <a href="https://github.com/hawk0120" target="_blank" rel="noopener"><i class="fab fa-github"></i> github</a>
      <a href="https://bsky.app/profile/bradyhawkins.dev" target="_blank" rel="noopener">
        <svg viewBox="0 0 600 530" width="14" height="12" xmlns="http://www.w3.org/2000/svg">
          <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" fill="currentColor"/>
        </svg>
        bsky
      </a>
      <a href="/rss.xml"><i class="fa-solid fa-rss"></i> rss</a>
    </div>
  </div>
</footer>

<style>
  footer {
    padding: 2rem;
    font-size: 0.85rem;
    color: var(--footer-text);
    max-width: 720px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    border-top: 1px solid var(--border-color);
    gap: 1rem;
    flex-wrap: wrap;
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

  .links {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }

  .links a {
    color: var(--footer-text);
    text-decoration: none;
    transition: color 0.15s;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .links a:hover {
    color: var(--accent);
  }
</style>
