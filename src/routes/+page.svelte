<script>
  import { projects } from '$lib/stores/projects';
</script>

<div class="home fade-in">
  <div class="intro">
    <p class="tagline">Software engineer. Tinkerer. Canadian in the Netherlands.</p>
    <p>Hi! Thanks for stopping by.</p>
    <p>
      I'm Brady, a Canadian software engineer based in the Netherlands.
      I work on the financials team at Keylane, building products that
      put more control back in users' hands.
    </p>
    <p class="email">
      <a href="mailto:brady93hawkins@gmail.com">brady93hawkins&#64;gmail.com</a>
    </p>
  </div>
  <div class="photo-wrapper">
    <img src="/photo-me.webp" alt="Photo of Brady" class="photo" />
  </div>
</div>

<div class="projects-section">
  <h2>Projects</h2>
  <div class="projects-list">
    {#each projects as project}
      <div class="project">
        <a href={project.url} target="_blank" rel="noopener">{project.name}</a>
        <p>{project.description}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .home {
    display: flex;
    gap: 2.5rem;
    align-items: flex-start;
    margin-bottom: 3rem;
  }

  .fade-in > * {
    opacity: 0;
    transform: translateY(10px);
    animation: fadeIn 1s forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-in > *:nth-child(1) { animation-delay: 0s; }
  .fade-in > *:nth-child(2) { animation-delay: 0.2s; }

  .intro {
    flex: 1;
  }

  .intro p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-color);
    margin: 0 0 0.75rem;
  }

  .tagline {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .email a {
    color: var(--accent);
    text-decoration: none;
  }

  .email a:hover {
    color: var(--accent-hover);
  }

  .photo-wrapper {
    flex-shrink: 0;
    padding-top: 0.5rem;
  }

  .photo {
    width: 160px;
    height: auto;
    border-radius: 12px;
  }

  .projects-section {
    margin-top: 1rem;
  }

  h2 {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: var(--text-muted);
    margin: 0 0 1rem;
    font-weight: 600;
  }

  .project {
    margin-bottom: 1.25rem;
  }

  .project a {
    font-size: 1rem;
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

  @media (max-width: 580px) {
    .home {
      flex-direction: column-reverse;
      align-items: center;
      text-align: center;
    }

    .photo {
      width: 140px;
    }
  }
</style>
