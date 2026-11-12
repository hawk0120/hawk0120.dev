<script>
  import { theme } from '$lib/stores/theme';
</script>

<section class="entrance" aria-label="Welcome">
  <picture class="landscape"><source media="(max-width: 860px)" srcset="/ivan-bandura-shore-mobile.webp" /><img src="/ivan-bandura-shore.webp" alt="" fetchpriority="high" /></picture>
  <a class="signature" href="/">Brady Hawkins</a>
  <div class="greeting">
    <h1>Hi, I'm Brady.</h1>
    <p>A Canadian software engineer in Middelburg, NL.</p>
  </div>
  <nav class="dock" aria-label="Main navigation">
    <a href="#about">About</a>
    <a href="/now">Now</a>
    <a href="/projects">Projects</a>
    <a href="/blog">Writing</a>
    <a href="/library">Library</a>
    <button on:click={theme.toggle} aria-label="Toggle theme">{$theme === 'dark' ? 'Light' : 'Dark'}</button>
  </nav>
  <a class="photo-credit" href="https://unsplash.com/it/foto/fotografia-aerea-della-riva-del-mare-KZJKg7pvIYA" target="_blank" rel="noopener">Photo by Ivan Bandura / Unsplash ↗</a>
  <a class="scroll-cue" href="#about" aria-label="Read more about Brady">Scroll to explore <span>↓</span></a>
</section>

<section class="about" id="about" aria-label="About Brady">

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

</section>

<style>
  .entrance {
    min-height: 100svh;
    position: relative;
    display: grid;
    place-items: center;
    text-align: center;
    padding: 100px 24px 170px;
    box-sizing: border-box;
  }
  .landscape img { width: 100%; height: 100%; object-fit: cover; }
  .landscape { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 50% 51%; z-index: -2; }
  .entrance { isolation: isolate; color: #fffaf2; }
  .entrance::before { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(16,28,28,.17), rgba(16,28,28,.32) 32%, rgba(16,28,28,.48)); z-index: -1; }
  :global([data-theme="dark"]) .entrance::before { background: linear-gradient(180deg, rgba(14,22,22,.34), rgba(14,22,22,.46) 32%, rgba(14,22,22,.68)); }
  .photo-credit { position: absolute; bottom: 29px; right: 32px; color: #fffaf2bb; text-decoration: none; font-family: var(--font-mono); font-size: 9px; }
  .signature {
    position: absolute;
    top: 36px;
    left: 44px;
    font-family: var(--font-serif);
    color: inherit;
    font-size: 18px;
    text-decoration: none;
  }
  .greeting { transform: translateY(-4vh); text-shadow: 0 2px 24px rgba(0, 0, 0, .25); }
  .greeting h1 {
    font-family: var(--font-serif);
    font-size: clamp(58px, 7.5vw, 112px);
    line-height: 1.06;
    font-weight: 400;
    letter-spacing: -0.045em;
    margin: 0 0 24px;
  }
  .greeting p {
    font-family: var(--font-sans);
    font-size: 15px;
    color: #fffaf2;
    letter-spacing: .015em;
    margin: 0;
  }
  .dock {
    position: absolute;
    bottom: 72px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px;
    border: 1px solid var(--border-color);
    border-radius: 999px;
    background: color-mix(in srgb, var(--surface-color) 86%, transparent);
    backdrop-filter: blur(18px);
    white-space: nowrap;
  }
  .dock a, .dock button {
    color: var(--text-color);
    font-family: var(--font-sans);
    font-size: 12px;
    text-decoration: none;
    padding: 11px 19px;
    background: none;
    border: 0;
    border-radius: 999px;
    cursor: pointer;
  }
  .dock a:hover, .dock button:hover { background: var(--border-color); }
  .dock button { border-left: 1px solid var(--border-color); border-radius: 0; color: var(--text-muted); }
  .scroll-cue {
    position: absolute;
    bottom: 28px;
    font-family: var(--font-mono);
    font-size: 9px;
    letter-spacing: .06em;
    color: #fffaf2bb;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .scroll-cue span { font-size: 15px; }
  .about { max-width: 800px; margin: 0 auto; padding: 100px 44px 110px; scroll-margin-top: 24px; }
  @media (max-width: 860px) {
    .landscape img { width: 100%; height: 100%; object-fit: cover; }
  .landscape { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 50% 51%; z-index: -2; }
  .entrance { isolation: isolate; color: #fffaf2; }
  .entrance::before { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(16,28,28,.17), rgba(16,28,28,.32) 32%, rgba(16,28,28,.48)); z-index: -1; }
  :global([data-theme="dark"]) .entrance::before { background: linear-gradient(180deg, rgba(14,22,22,.34), rgba(14,22,22,.46) 32%, rgba(14,22,22,.68)); }
  .photo-credit { position: absolute; bottom: 29px; right: 32px; color: #fffaf2bb; text-decoration: none; font-family: var(--font-mono); font-size: 9px; }
  .signature { left: 24px; top: 28px; font-size: 16px; }
    .greeting p { max-width: 27ch; margin: 0 auto; line-height: 1.7; font-size: 13px; }
    .dock { bottom: 76px; gap: 0; padding: 5px; }
    .dock a, .dock button { padding: 11px 10px; font-size: 11px; }
    .about { padding: 72px 24px; }
    .photo-credit { bottom: 12px; right: 0; width: 100%; text-align: center; font-size: 8px; }
    .scroll-cue { bottom: 36px; }
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
