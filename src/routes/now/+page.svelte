<script>
  const notes = [
  {
    "title": "A more deliberate internet",
    "text": "I am laying low, riding my bike. I thought the atmosphere was a positive place, it is. Too much of a good thing is still bad. Thoughtful use of these platforms matters regardless who owns your data.",
    "source": "https://eurosky.social/xrpc/com.atproto.repo.getRecord?repo=did%3Aplc%3Ada6iyhwpub7pnqbj5booh2by&collection=app.bsky.feed.post&rkey=3mzunyb6mnk2k",
    "date": "November 9, 2026"
  },
  {
    "title": "Agents and control",
    "text": "We probably don't need better prompts as much as we need more deterministic outcomes. It still feels like agents will require a fair amount of babysitting until there's some real notion of control flow.",
    "source": "https://eurosky.social/xrpc/com.atproto.repo.getRecord?repo=did%3Aplc%3Ada6iyhwpub7pnqbj5booh2by&collection=app.bsky.feed.post&rkey=3mlbruzolts25",
    "date": "May 7, 2026"
  },
  {
    "title": "Software is still engineering",
    "text": "Code quality affects coding agents. Clean code still matters. Hallelujah.",
    "source": "https://eurosky.social/xrpc/com.atproto.repo.getRecord?repo=did%3Aplc%3Ada6iyhwpub7pnqbj5booh2by&collection=app.bsky.feed.post&rkey=3msa7rou6x22y",
    "date": "August 4, 2026"
  },
  {
    "title": "Technology in the material world",
    "text": "Looking forward to wearing a rain jacket in the Netherlands today says all you need to know about the drought and the climate crisis.",
    "source": "https://eurosky.social/xrpc/com.atproto.repo.getRecord?repo=did%3Aplc%3Ada6iyhwpub7pnqbj5booh2by&collection=app.bsky.feed.post&rkey=3mtdfl7unyk2l",
    "date": "August 18, 2026"
  }
];
  const trail = [
  {
    "theme": "Attention, not another feed",
    "title": "It's getting harder to focus every day",
    "url": "https://glyphack.com/attention/",
    "savedAt": "2026-07-24T12:29:42.499Z",
    "recordUri": "at://did:plc:da6iyhwpub7pnqbj5booh2by/network.cosmik.card/3mrfe5j76pp24",
    "note": "A personal account of distraction and wanting focused time. Saved July 24."
  },
  {
    "theme": "Agents and control",
    "title": "One Developer, Two Dozen Agents, Zero Alignment",
    "url": "https://maggieappleton.com/zero-alignment",
    "savedAt": "2026-07-15T12:54:18.330Z",
    "recordUri": "at://did:plc:da6iyhwpub7pnqbj5booh2by/network.cosmik.card/3mqord7wqzk23",
    "note": "Maggie Appleton on collaborative agent workspaces and the limits of single-player tooling. Saved July 15."
  },
  {
    "theme": "Engineering and judgment",
    "title": "There is more to code review than (automatable) detection",
    "url": "https://www.adaptivecapacitylabs.com/2026/08/24/there-is-more-to-code-review-than-automatable-detection/",
    "savedAt": "2026-09-28T14:11:08.378Z",
    "recordUri": "at://did:plc:da6iyhwpub7pnqbj5booh2by/network.cosmik.card/3mwliloqzgc2r",
    "note": "A critique of reducing code review to automated defect detection. Saved September 28."
  },
  {
    "theme": "Engineering and judgment",
    "title": "The End of Code Review: Coding Agents Supersede Human Inspection",
    "url": "https://arxiv.org/abs/2606.13175",
    "savedAt": "2026-09-28T14:11:22.088Z",
    "recordUri": "at://did:plc:da6iyhwpub7pnqbj5booh2by/network.cosmik.card/3mwlim2motl2h",
    "note": "The opposing argument: replace human inspection with agent verification. Saved on the same day as the critique. An argument paper, not a new empirical study; pair them rather than treating either as Brady's position."
  },
  {
    "theme": "Climate and action",
    "title": "We're going to miss the 1.5 °C climate target. Now what?",
    "url": "https://drawdown.org/insights/were-going-to-miss-the-15-degc-climate-target-now-what",
    "savedAt": "2026-09-18T06:39:55.211Z",
    "recordUri": "at://did:plc:da6iyhwpub7pnqbj5booh2by/network.cosmik.card/3mvrkpmbp3f2t",
    "note": "Project Drawdown's argument against treating missed targets as a reason to stop climate action. Saved September 18."
  },
  {
    "theme": "Climate and place",
    "title": "Could We Dredge the Netherlands Without Fossil Fuels?",
    "url": "https://solar.lowtechmagazine.com/2018/08/could-we-dredge-the-netherlands-without-fossil-fuels",
    "savedAt": "2026-08-25T09:28:02.792Z",
    "recordUri": "at://did:plc:da6iyhwpub7pnqbj5booh2by/network.cosmik.card/3mtviw6iauf2j",
    "note": "Low-tech history and alternatives for dredging Dutch waterways. Saved August 25."
  }
];
</script>

<svelte:head>
  <title>Now - Brady Hawkins</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="page-label">Now</div>
<header>
  <p class="dateline">Draft / November 12, 2026</p>
  <h1>What I'm thinking about.</h1>
  <p class="intro">A snapshot, not a manifesto.</p>
</header>
<aside class="draft-note" aria-label="Draft notice">
  <strong>Draft for review.</strong> These are personal notes and excerpts from my public posts, grouped by theme.
  They are not a new statement of my views. Wording, emphasis and what still feels current are up for review.
</aside>

<div class="notes">
  <section>
    <h2>Outside</h2>
    <p>I'm a lumberjack and would be in the forest or by the sea all the time if I could.</p>
    <p class="personal-draft">Draft in my words / for review</p>
  </section>
  <section>
    <h2>Competing</h2>
    <p>I'm an athlete and I love to compete.</p>
    <div class="placeholder"><span>To fill in</span> My events, what I train for, and what competing means to me.</div>
  </section>

  {#each notes as note}
    <section>
      <h2>{note.title}</h2>
      <p>{note.text}</p>
      <a class="source" href={note.source} target="_blank" rel="noopener">From my post / {note.date} ↗</a>
    </section>
  {/each}
</div>

<aside class="reading-option">
  <span class="theme">Optional / for review</span>
  <h2>Reading</h2>
  <p><em>Endure</em> by Alex Hutchinson. <a href="/library">On my bookshelf ↗</a></p>
  <p class="muted">Bookhive lists this as Reading. Keep this line here, or leave books in the Library?</p>
</aside>

<section class="reading-trail">
  <h2>A small reading trail</h2>
  <p class="muted">A few links I've saved. Interest is not agreement, and saving is not the same as finishing.</p>
  <div class="links">
    {#each trail as item}
      <a class="reading-link" href={item.url} target="_blank" rel="noopener">
        <span class="theme">{item.theme}</span>
        <span class="title">{item.title} <span class="arrow">↗</span></span>
      </a>
    {/each}
  </div>
</section>
<p class="endnote">Draft assembled November 12, 2026. Excerpts shortened for length; spelling and punctuation lightly edited. The linked originals are the source. <a href="https://semble.so/profile/bradyhawkins.dev" target="_blank" rel="noopener">Saved links on Semble ↗</a></p>

<style>
  .page-label, .dateline, .source, .theme, .endnote {
    font-family: var(--font-mono);
    font-size: 10.5px;
    line-height: 1.7;
    color: var(--text-muted);
  }
  .page-label { display: flex; gap: 14px; align-items: center; text-transform: uppercase; letter-spacing: .12em; margin-bottom: 44px; }
  .page-label::after { content: ""; height: 1px; flex: 1; background: var(--border-color); }
  header { max-width: 600px; }
  .dateline { margin: 0 0 18px; text-transform: uppercase; letter-spacing: .07em; }
  h1 { font-family: var(--font-serif); font-size: clamp(36px, 4vw, 48px); font-weight: 400; letter-spacing: -.025em; line-height: 1.15; margin: 0 0 18px; }
  .intro { font-size: 17px; color: var(--text-muted); margin: 0; }
  .draft-note { max-width: 590px; margin: 36px 0 56px; padding: 16px 20px; border-left: 2px solid var(--accent); background: var(--surface-color); font-size: 12px; line-height: 1.7; color: var(--text-muted); }
  .draft-note strong { color: var(--text-color); font-weight: 500; }
  .notes { max-width: 610px; }
  .notes section { padding: 0 0 32px; margin-bottom: 32px; border-bottom: 1px solid var(--border-color); }
  h2 { font-family: var(--font-serif); font-size: 25px; font-weight: 400; line-height: 1.25; margin: 0 0 16px; letter-spacing: -.015em; }
  .notes p { font-size: 15px; line-height: 1.8; margin: 0 0 16px; }
  a { color: var(--text-muted); text-decoration: none; }
  a:hover { color: var(--accent); }
  .personal-draft { font-family: var(--font-mono); font-size: 9px !important; color: var(--text-muted); }
  .placeholder { padding: 16px 18px; border: 1px dashed var(--border-color); color: var(--text-muted); font-size: 12px; line-height: 1.8; }
  .placeholder span { display: block; font-family: var(--font-mono); font-size: 9px; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 6px; }
  .reading-option { max-width: 590px; padding: 22px; margin-top: 40px; border: 1px dashed var(--border-color); }
  .reading-option h2 { margin-top: 14px; }
  .reading-option p { font-size: 14px; line-height: 1.7; }
  .reading-option .muted { font-size: 11px; }
  .reading-trail { margin-top: 64px; }
  .muted { color: var(--text-muted); font-size: 13px; line-height: 1.8; max-width: 55ch; }
  .links { margin-top: 30px; }
  .reading-link { display: grid; grid-template-columns: 160px 1fr; gap: 24px; padding: 18px 0; border-bottom: 1px solid var(--border-color); }
  .theme { font-size: 9px; text-transform: uppercase; letter-spacing: .03em; padding-top: 4px; }
  .title { font-family: var(--font-serif); font-size: 18px; color: var(--text-color); line-height: 1.5; }
  .reading-link:hover .title { color: var(--accent); }
  .arrow { color: var(--text-muted); font-family: var(--font-sans); font-size: 12px; }
  .endnote { margin-top: 40px; max-width: 65ch; font-size: 9px; }
  .endnote a { border-bottom: 1px solid var(--border-color); }
  @media (max-width: 860px) {
    .page-label { margin-bottom: 32px; }
    .draft-note { margin-bottom: 40px; }
    h2 { font-size: 23px; }
    .reading-link { grid-template-columns: 1fr; gap: 5px; }
  }
</style>
