<script>
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { theme } from '$lib/stores/theme';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  $: ogUrl = `https://bradyhawkins.dev${$page.url.pathname}`;

  onMount(() => {
    const stored = localStorage.getItem('theme') || 'dark';
    theme.set(stored);
  });
</script>

<div class="layout" class:landing={$page.url.pathname === "/"}>
{#if $page.url.pathname !== "/"}<Sidebar />{/if}
  <main>
    <div class="content">
      <slot />
    </div>
  </main>
<Footer />
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
    margin-left: 248px;
    padding: 72px 56px 110px;
    width: calc(100% - 248px);
    box-sizing: border-box;
    position: relative;
    z-index: 1;
  }

  .landing main {
    margin-left: 0;
    padding: 0;
    width: 100%;
  }

  .landing .content {
    max-width: none;
  }

  .content {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }

  @media (max-width: 860px) {
    main {
      margin-left: 0;
      width: 100%;
      padding: 44px 22px 72px;
    }
  }
</style>
