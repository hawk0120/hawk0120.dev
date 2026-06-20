<script>
</script>

<div class="home fade-in">
  <div class="intro">
    <p class="tagline">Software engineer exploring memory, trust, and long-term AI systems.</p>
    <p>
      I'm Brady, a Canadian software engineer based in the Netherlands.
      I work on financial systems at Keylane and build AI systems that
      remember, reflect, and earn trust over time.
    </p>
    <p class="email">
      <a href="mailto:brady93hawkins@gmail.com">brady93hawkins&#64;gmail.com</a>
    </p>
  </div>
  <div class="photo-wrapper">
    <img src="/photo-me.webp" alt="Photo of Brady" class="photo" />
  </div>
</div>

<div class="section">
  <h2>Current Work</h2>
  <ul class="work-list">
    <li><strong>Watney4</strong> &mdash; Persistent AI assistant exploring memory architectures, tool use, and long-term human-AI interaction. Built in Kotlin, self-hosted.</li>
    <li><strong>Research Program</strong> &mdash; Reading toward 100 papers across CHI, CSCW, IUI, and FAccT. Synthesizing findings on memory, trust, and transparency in AI systems.</li>
    <li><strong>Reading Program</strong> &mdash; Working through books on HCI, AI systems, and decentralized technology.</li>
  </ul>
</div>

<div class="section">
  <h2>Current Questions</h2>
  <ul class="questions">
    <li>What should AI remember?</li>
    <li>When should memories be surfaced?</li>
    <li>Does transparency increase trust?</li>
    <li>How should long-term assistants behave?</li>
  </ul>
</div>

<div class="section">
  <h2>Writing</h2>
  <p>
    I write about AI systems, memory architecture, human-computer interaction, and what happens when software remembers.
    <a href="/blog">Read my posts &rarr;</a>
  </p>
</div>

<style>
  .home {
    display: flex;
    gap: 2.5rem;
    align-items: flex-start;
    margin-bottom: 2rem;
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

  .section {
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: var(--text-muted);
    margin: 0 0 0.75rem;
    font-weight: 600;
  }

  .work-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .work-list li {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--text-color);
    margin-bottom: 0.75rem;
    padding-left: 1rem;
    border-left: 2px solid var(--border-color);
  }

  .work-list strong {
    font-weight: 600;
  }

  .questions {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .questions li {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--text-color);
    margin-bottom: 0.5rem;
  }

  .questions li::before {
    content: "? ";
    color: var(--accent);
  }

  .section p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--text-color);
    margin: 0;
  }

  .section a {
    color: var(--accent);
    text-decoration: none;
  }

  .section a:hover {
    color: var(--accent-hover);
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
