export default async () => {
  const { sveltekit } = await import('@sveltejs/kit/vite');
  const { defineConfig } = await import('vite');

  return defineConfig({
    plugins: [sveltekit()]
  });
};
