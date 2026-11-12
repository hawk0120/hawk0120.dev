<div class="page-label">01 / Home</div>

<div class="hero fade-in">
  <h1>I'm Brady, a Canadian software engineer based in the Netherlands.</h1>
  <div class="hero-grid">
    <div class="hero-bio">
      <p>
        I work on the financials team at <strong>Keylane</strong>, building
        products that put more control back in users' hands.
      </p>
      <p>
        I focus on <strong>Kotlin, Java and TypeScript</strong>, with a soft
        spot for local LLMs, homelab infrastructure and agentic AI memory.
      </p>
      <a class="bigmail" href="mailto:brady93hawkins@gmail.com">brady93hawkins@gmail.com</a>
    </div>
    <figure class="hero-photo">
      <img src="/photo-me.webp" alt="Photo of Brady" />
      <figcaption>THE AUTHOR</figcaption>
    </figure>
  </div>
</div>

<div class="currently">
  <h2>Currently</h2>
  <div class="row">
    <span class="k">Working</span>
    <span class="v">Financials team <span>at Keylane</span></span>
  </div>
  <div class="row">
    <span class="k">Building</span>
    <span class="v">On pause <span>- baby arriving any day now</span></span>
  </div>
  <div class="row">
    <span class="k">Reading</span>
    <span class="v">Endure <span>- Alex Hutchinson</span></span>
  </div>
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
  .fade-in > *:nth-child(2) { animation-delay: 0.15s; }

  .hero h1 {
    font-family: var(--font-serif);
    font-size: 44px;
    line-height: 1.18;
    font-weight: 500;
    letter-spacing: -0.01em;
    margin: 0 0 40px;
    max-width: 19ch;
  }

  .hero-grid {
    display: flex;
    gap: 56px;
    align-items: flex-start;
  }

  .hero-bio {
    flex: 1;
    min-width: 0;
  }

  .hero-bio p {
    font-size: 15.5px;
    line-height: 1.7;
    color: var(--text-muted);
    margin: 0 0 14px;
    max-width: 50ch;
  }

  .hero-bio p strong {
    color: var(--text-color);
    font-weight: 600;
  }

  .hero-photo {
    width: 180px;
    flex-shrink: 0;
    margin: 4px 0 0;
  }

  .hero-photo img {
    width: 100%;
    display: block;
    border-radius: 8px;
  }

  .hero-photo figcaption {
    font-family: var(--font-mono);
    font-size: 9.5px;
    color: var(--text-muted);
    padding-top: 8px;
    margin: 0;
    letter-spacing: 0.06em;
  }

  .bigmail {
    display: inline-block;
    margin-top: 18px;
    font-family: var(--font-serif);
    font-size: 17px;
    text-decoration: none;
    color: var(--text-color);
    border-bottom: 1px solid var(--accent);
    padding-bottom: 2px;
    transition: color 0.15s;
  }

  .bigmail:hover {
    color: var(--accent);
  }

  .currently {
    margin-top: 72px;
    border-top: 1px solid var(--border-color);
    max-width: 560px;
  }

  .currently h2 {
    font-family: var(--font-mono);
    font-size: 10.5px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
    font-weight: 400;
    margin: 18px 0 2px;
  }

  .currently .row {
    display: flex;
    gap: 24px;
    padding: 11px 0;
    border-bottom: 1px solid var(--border-color);
    align-items: baseline;
  }

  .currently .k {
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--accent);
    width: 76px;
    flex-shrink: 0;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .currently .v {
    font-size: 14px;
  }

  .currently .v span {
    color: var(--text-muted);
  }

  @media (max-width: 860px) {
    .hero h1 {
      font-size: 32px;
    }

    .hero-grid {
      flex-direction: column;
      gap: 32px;
    }

    .hero-photo {
      width: 150px;
    }

    .currently .row {
      flex-direction: column;
      gap: 2px;
    }
  }
</style>
