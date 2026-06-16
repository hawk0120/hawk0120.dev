<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Water from '$lib/components/Water.svelte';
  import { theme } from '$lib/stores/theme';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  $: ogUrl = `https://bradyhawkins.dev${$page.url.pathname}`;

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
  <a href="#top" class="back-to-top">&uarr; top</a>
</div>

<svelte:head>
  <meta property="og:site_name" content="Brady Hawkins" />
  <meta property="og:url" content={ogUrl} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Brady Hawkins" />
  <meta property="og:description" content="Software engineer. Tinkerer. Canadian in the Netherlands." />
  <meta property="og:image" content="https://bradyhawkins.dev/photo-me.webp" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Brady Hawkins" />
  <meta name="twitter:description" content="Software engineer. Tinkerer. Canadian in the Netherlands." />
  <meta name="twitter:image" content="https://bradyhawkins.dev/photo-me.webp" />
</svelte:head>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  main {
    flex: 1;
    padding: 2rem 2rem;
    max-width: 720px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
  }

  .back-to-top {
    display: block;
    text-align: center;
    padding: 0 2rem 3rem;
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.85rem;
    transition: color 0.15s;
  }

  .back-to-top:hover {
    color: var(--accent);
  }
</style>
