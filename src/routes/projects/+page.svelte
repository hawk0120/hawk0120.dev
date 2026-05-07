<script>
  import { projects } from '$lib/stores/projects';
</script>

<div class="projects-container">
  <h2>Projects</h2>
  <div class="projects-grid">
    {#each projects as project}
      <div class="project-card">
        <h3><a href={project.url} target="_blank" rel="noopener">{project.name}</a></h3>
        <p>{project.description}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .projects-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
  }

  h2 {
    color: var(--text-color);
    border-bottom: 2px solid var(--accent-color);
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .project-card {
    background-color: var(--bg-color);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 1.5rem;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .project-card h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .project-card a {
    color: var(--accent-color);
    text-decoration: none;
  }

  .project-card a:hover {
    text-decoration: underline;
  }

  .project-card p {
    color: var(--text-color);
    line-height: 1.6;
    margin: 0;
    font-size: 0.95rem;
  }

  @media (max-width: 640px) {
    .projects-container {
      padding: 1rem;
    }

    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
