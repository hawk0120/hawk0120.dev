<script>
  import { projects } from '$lib/stores/projects';
</script>

<h2>Projects</h2>

<div class="projects">
  {#each projects as project}
    <div class="project">
      <a href={project.url} target="_blank" rel="noopener">{project.name}</a>
      <p>{project.description}</p>
    </div>
  {/each}
</div>

<style>
  h2 {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: var(--text-muted);
    margin: 0 0 1.5rem;
    font-weight: 600;
  }

  .project {
    margin-bottom: 1.5rem;
  }

  .project a {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.15s;
  }

  .project a:hover {
    color: var(--accent);
  }

  .project p {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin: 0.25rem 0 0;
    line-height: 1.5;
  }
</style>
