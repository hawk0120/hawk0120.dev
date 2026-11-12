<script>
  import { projects } from '$lib/stores/projects';
</script>

<div class="page-label">Projects</div>

<div class="index">
  {#each projects as project, i}
    <a class="index-row" href={project.url} target="_blank" rel="noopener">
      <span class="body">
        <span class="title">{project.name}</span>
        <div class="desc">{project.description}</div>
      </span>
      {#if project.tag}
        <span class="meta">{project.tag.toUpperCase()}</span>
      {/if}
    </a>
  {/each}
</div>

<style>
  .page-label {
    font-family: var(--font-mono);
    font-size: 10.5px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin: 0 0 40px;
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .page-label::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--border-color);
  }

  .index-row {
    display: flex;
    align-items: baseline;
    gap: 24px;
    padding: 22px 0;
    border-bottom: 1px solid var(--border-color);
    text-decoration: none;
  }


  .index-row .body {
    flex: 1;
    min-width: 0;
  }

  .index-row .title {
    font-family: var(--font-serif);
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: var(--text-color);
    transition: color 0.15s;
  }

  .index-row:hover .title {
    color: var(--accent);
  }

  .index-row .desc {
    font-size: 13.5px;
    color: var(--text-muted);
    margin-top: 5px;
    line-height: 1.6;
    max-width: 58ch;
  }

  .index-row .meta {
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
    white-space: nowrap;
    letter-spacing: 0.05em;
  }

  @media (max-width: 860px) {
    .index-row {
      flex-wrap: wrap;
      gap: 4px 14px;
    }

    .index-row .meta {
      width: 100%;
    }
  }
</style>
