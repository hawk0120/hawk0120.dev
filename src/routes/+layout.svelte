<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Water from '$lib/components/Water.svelte';
  import { theme } from '$lib/stores/theme';
  import { onMount } from 'svelte';

  onMount(() => {
    const stored = localStorage.getItem('theme') || 'dark';
    theme.set(stored);

    if (!document.querySelector('link[href*="font-awesome"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      document.head.appendChild(link);
    }
  });
</script>

<div class="layout">
<Water />
<Header />
  <main>
    <slot />
  </main>
<Footer />
</div>

<style>
  :global(body) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  :global(#svelte) {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .layout {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  :global([data-theme="dark"]) {
    --bg-color: #0a0a0a;
    --text-color: #e0e0e0;
    --header-bg: transparent;
    --header-text: #e0e0e0;
    --footer-bg: transparent;
    --footer-text: #e0e0e0;
    --border-color: #333;
    --accent-color: #64b5f6;
  }

  :global([data-theme="light"]) {
    --bg-color: #ffffff;
    --text-color: #1a1a1a;
    --header-bg: transparent;
    --header-text: #1a1a1a;
    --footer-bg: transparent;
    --footer-text: #1a1a1a;
    --border-color: #ddd;
    --accent-color: #1976d2;
  }

  main {
    flex: 1;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }
</style>
