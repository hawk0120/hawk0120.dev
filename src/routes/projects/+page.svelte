<script>
  import { projects } from '$lib/stores/projects';
</script>

<h2>Projects</h2>

<p class="lede">
  Systems I build to investigate questions about AI, memory, tooling, and human-computer interaction.
</p>

{#each projects as project}
  <div class="project">
    <div class="project-header">
      <a href={project.url} target="_blank" rel="noopener">{project.name}</a>
      <p class="description">{project.description}</p>
    </div>

    <div class="details">
      <div class="detail">
        <span class="label">Question</span>
        <p>{project.question}</p>
      </div>
      <div class="detail">
        <span class="label">Architecture</span>
        <p>{project.architecture}</p>
      </div>
      <div class="detail">
        <span class="label">Findings</span>
        <p>{project.findings}</p>
      </div>
      <div class="detail">
        <span class="label">Future Work</span>
        <p>{project.futureWork}</p>
      </div>
    </div>
  </div>
{/each}

<style>
  h2 {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: var(--text-muted);
    margin: 0 0 0.75rem;
    font-weight: 600;
  }

  .lede {
    font-size: 0.95rem;
    line-height: 1.5;
    color: var(--text-muted);
    margin: 0 0 2rem;
  }

  .project {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
  }

  .project:last-of-type {
    border-bottom: none;
  }

  .project-header {
    margin-bottom: 1rem;
  }

  .project-header a {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.15s;
  }

  .project-header a:hover {
    color: var(--accent);
  }

  .description {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin: 0.25rem 0 0;
    line-height: 1.5;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .detail {
    padding-left: 0.75rem;
    border-left: 2px solid var(--border-color);
  }

  .label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    font-weight: 600;
    display: block;
    margin-bottom: 0.15rem;
  }

  .detail p {
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--text-color);
    margin: 0;
  }
</style>
