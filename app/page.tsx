"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

type Evidence = {
  src: string;
  platform: string;
  title: string;
  type: string;
  year: string;
  summary: string;
  /** Payment / compensation note shown only in the modal (F5 — removed from card body) */
  payment?: string;
  /** Unique descriptive alt text for each screenshot (F6) */
  alt: string;
  /** Unique accessible label for the card button (F6) */
  openLabel: string;
};

// ── Data ─────────────────────────────────────────────────────────────────────

const evidence: Evidence[] = [
  {
    src: "/proof/dscout-profile.png",
    platform: "dscout",
    title: "Participant profile",
    type: "Profile evidence",
    year: "2025",
    summary: "Participant dashboard recording 4 missions, 28 diary entries and a running earnings total.",
    alt: "dscout participant dashboard showing 4 missions, 28 diary entries and earnings total",
    openLabel: "Open dscout participant profile screenshot",
  },
  {
    src: "/proof/dscout-ai-evaluation.png",
    platform: "dscout",
    title: "AI Evaluation",
    type: "Multi-day mission",
    year: "2025",
    summary: "A multi-day mission comparing how participants discover and use AI tools in everyday tasks.",
    alt: "dscout AI Evaluation mission screen showing multi-day task prompts and diary entry interface",
    openLabel: "Open dscout AI Evaluation mission screenshot",
  },
  {
    src: "/proof/dscout-search-party.png",
    platform: "dscout",
    title: "Search Party",
    type: "Longitudinal mission",
    year: "2025",
    summary: "A 14-day longitudinal mission exploring how and why different online search tools are used.",
    alt: "dscout Search Party mission screen showing 14-day longitudinal study tasks",
    openLabel: "Open dscout Search Party mission screenshot",
  },
  {
    src: "/proof/dscout-photo-album-art.png",
    platform: "dscout",
    title: "Photo Album Art",
    type: "Creative product study",
    year: "2025",
    summary: "A study involving Google Photos albums and feedback on creatively edited video reels.",
    alt: "dscout Photo Album Art study screen showing Google Photos task prompts",
    openLabel: "Open dscout Photo Album Art study screenshot",
  },
  {
    src: "/proof/dscout-whatsapp-devices.png",
    platform: "dscout",
    title: "WhatsApp Devices",
    type: "Express mission",
    year: "2025",
    summary: "Express mission collecting feedback on multi-device WhatsApp usage patterns.",
    payment: "$10 incentive",
    alt: "dscout WhatsApp Devices express mission completion screen with incentive confirmation",
    openLabel: "Open dscout WhatsApp Devices express mission screenshot",
  },
  {
    src: "/proof/dscout-whatsapp-business.png",
    platform: "dscout",
    title: "WhatsApp messages from businesses",
    type: "Express usability study",
    year: "2025",
    summary: "Desktop usability study: screen-recorded session completing prompts about business messaging in WhatsApp.",
    payment: "$35 incentive · Jun 2025",
    alt: "dscout WhatsApp Business usability study screen showing task prompts and screen-record instruction",
    openLabel: "Open dscout WhatsApp Business usability study screenshot",
  },
  {
    src: "/proof/dscout-sports-app.png",
    platform: "dscout",
    title: "Sports app design",
    type: "Express mission",
    year: "2025",
    summary: "A focused express mission collecting opinions and expectations around sports app design.",
    payment: "$6 incentive · Apr 2025",
    alt: "dscout Sports App design express mission screen showing task prompts",
    openLabel: "Open dscout Sports App design mission screenshot",
  },
  {
    src: "/proof/userinterviews-studies.png",
    platform: "User Interviews",
    title: "Study dashboard",
    type: "Research participation history",
    year: "2026",
    summary: "Study history showing confirmed, approved and paid research participation across multiple sessions.",
    alt: "User Interviews participant dashboard listing confirmed, approved and paid study sessions",
    openLabel: "Open User Interviews study dashboard screenshot",
  },
  {
    src: "/proof/userinterviews-player-interview.png",
    platform: "User Interviews",
    title: "Player interview",
    type: "60-min 1:1 interview",
    year: "2026",
    summary: "A 60-minute study seeking honest player feedback, ideas and experiences about a gaming product.",
    payment: "$35 incentive",
    alt: "User Interviews player interview study page showing 60-minute session brief and scheduling confirmation",
    openLabel: "Open User Interviews player interview study screenshot",
  },
  {
    src: "/proof/userinterviews-nodejs.png",
    platform: "User Interviews",
    title: "Developer tool research",
    type: "1:1 interview",
    year: "2026",
    summary: "A research study exploring how developers use Node.js, including workflow and website-building habits.",
    payment: "$50 incentive",
    alt: "User Interviews Node.js developer research study page showing interview brief and scheduling confirmation",
    openLabel: "Open User Interviews Node.js developer research screenshot",
  },
  {
    src: "/proof/usercrowd-history.png",
    platform: "UserCrowd",
    title: "Participation history",
    type: "Rapid tests",
    year: "2025–26",
    summary: "History page showing repeated participation in short product and interface feedback tests.",
    alt: "UserCrowd participation history page listing completed rapid-test sessions with dates",
    openLabel: "Open UserCrowd participation history screenshot",
  },
  {
    src: "/proof/playbookux-completed-tests.png",
    platform: "PlaybookUX",
    title: "Completed tests",
    type: "Usability testing",
    year: "2024–25",
    summary: "Completed test history with payment status and study records across multiple usability sessions.",
    alt: "PlaybookUX completed tests dashboard showing usability test records with payment status",
    openLabel: "Open PlaybookUX completed tests dashboard screenshot",
  },
];

/** Platforms list — evidence platforms first (dscout #1), platforms with no screenshot grouped at bottom */
const platforms = [
  { name: "dscout",          detail: "Missions, diary-style research and usability studies", hasEvidence: true  },
  { name: "User Interviews", detail: "Interviews, online tasks and product research",      hasEvidence: true  },
  { name: "UserCrowd",       detail: "Rapid interface and product feedback",               hasEvidence: true  },
  { name: "PlaybookUX",      detail: "Usability tests and research tasks",                 hasEvidence: true  },
  { name: "UserTesting",     detail: "Usability testing and product feedback",             hasEvidence: false, note: "No screenshot on file" },
  { name: "BetaTesting",     detail: "Early product testing and feedback",                 hasEvidence: false, note: "No screenshot on file" },
  { name: "Testerwork",      detail: "Research participation and task-based feedback",     hasEvidence: false, note: "No screenshot on file" },
];

const methods = [
  ["Usability testing",     "Evaluate real interfaces while completing realistic tasks."],
  ["1:1 interviews",        "Share detailed experiences, workflows and expectations."],
  ["Think-aloud feedback",  "Explain what feels clear, confusing, useful or unexpected."],
  ["Longitudinal missions", "Return across multiple days and reflect on changing experiences."],
  ["AI product evaluation", "Compare AI tools through practical, everyday use."],
  ["Mobile & web studies",  "Evaluate experiences across devices and interaction contexts."],
];

const principles = [
  ["01", "Observe before judging",            "I describe what happened before deciding whether it was good or bad."],
  ["02", "Explain the why",                   "I try to connect an action to an expectation, need or friction point."],
  ["03", "Separate preference from usability","A personal preference is different from a problem that may affect other users."],
  ["04", "Respect the research context",      "I follow study instructions, deadlines, recording requirements and researcher guidance."],
];

const filterOptions = ["All", "dscout", "User Interviews", "UserCrowd", "PlaybookUX"];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Home() {
  const [filter, setFilter]       = useState("All");
  const [selected, setSelected]   = useState<Evidence | null>(null);
  const [activeSection, setActive]= useState("top");
  const [copied, setCopied]       = useState(false);
  const liveRef = useRef<HTMLParagraphElement>(null);

  /** F8 — count per filter tab */
  const countFor = (f: string) =>
    f === "All" ? evidence.length : evidence.filter(e => e.platform === f).length;

  const visible = useMemo(
    () => filter === "All" ? evidence : evidence.filter(e => e.platform === filter),
    [filter]
  );

  /** F8 — announce filter result to screen readers */
  useEffect(() => {
    if (liveRef.current) {
      liveRef.current.textContent =
        `Showing ${visible.length} of ${evidence.length} evidence cards`;
    }
  }, [visible.length]);

  /** F12 — active section tracking for nav highlight */
  useEffect(() => {
    const ids = ["top", "evidence", "journey", "approach", "about", "contact"];
    const observers: IntersectionObserver[] = [];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  /** F12 — close modal on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /** F2 — copy email to clipboard */
  const copyEmail = () => {
    navigator.clipboard.writeText("yashchaudhari500@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  /** Filter grid by platform and scroll smoothly up to the evidence section */
  const handleViewEvidence = (platformName: string) => {
    setFilter(platformName);
    const element = document.getElementById("evidence");
    if (element) {
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      element.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    }
  };

  const navLink = (href: string, label: string) => {
    const id = href.replace("#", "");
    const isActive = activeSection === id;
    return (
      <a
        href={href}
        className={isActive ? "nav-active" : undefined}
        aria-current={isActive ? "location" : undefined}
      >
        {label}
      </a>
    );
  };

  return (
    <main>
      {/* ── Navigation ─────────────────────────────────────────── */}
      <header className="nav">
        <a href="#top" className="brand">
          {/* F6 — logo is decorative; adjacent text already names the site */}
          <img src="/YC.png" alt="" role="presentation" className="brand-mark" />
          <span>Yash Chaudhari</span>
        </a>
        <nav aria-label="Site sections">
          {navLink("#evidence", "Evidence")}
          {navLink("#journey",  "Journey")}
          {navLink("#approach", "Approach")}
          {navLink("#about",    "About")}
          {/* F10 — no ↗ on in-page anchor */}
          <a href="#contact" className="nav-cta">Connect</a>
        </nav>
      </header>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="identity-line">
            <span className="status-dot" aria-hidden="true"></span>
            <span>USER RESEARCH PARTICIPANT</span>
            <span className="identity-rule" aria-hidden="true"></span>
            {/* F1 — date range matches the timeline (2024 → 2026) */}
            <span>Since 2024</span>
          </div>
          <h1>Yash<br /><em>Chaudhari.</em></h1>
          {/* F11 — role tagline is not a section title; use <p> not <h2> */}
          <p className="hero-role">
            User Research Participant <span aria-hidden="true">·</span> UX Research Enthusiast
          </p>
          <p className="hero-lede">
            Since 2024, I&apos;ve participated in real-world user research across
            usability tests, interviews, missions, product evaluations and
            longitudinal studies.
          </p>
          <p className="hero-thesis">
            <strong>My role is simple:</strong> use the product honestly,
            notice the details, and give researchers feedback they can act on.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#evidence">Explore my evidence ↓</a>
            <a className="text-link" href="#journey">View my research journey →</a>
          </div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/yashchaudhari500" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/YashChaudhari999"          target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://x.com/_YashChaudhari"                 target="_blank" rel="noopener noreferrer">X ↗</a>
          </div>
        </div>

        <div className="hero-profile" aria-hidden="true">
          <div className="profile-ring"></div>
          <div className="profile-card">
            <div className="profile-top">
              <span className="mono">PARTICIPANT PROFILE</span>
              {/* F3 — relabelled from "VERIFIED EVIDENCE" */}
              <span className="evidence-badge">PLATFORM SCREENSHOTS</span>
            </div>
            <div className="profile-name">Yash<br /><em>Chaudhari</em></div>
            <div className="profile-caption">Curious user. Detailed observer. Consistent participant.</div>
            <div className="profile-stat">
              {/* F1 — "3+" removed; stat now shows start year for clarity */}
              <div><strong>Since</strong><span>2024</span></div>
              <div><strong>4</strong><span>dscout missions*</span></div>
              <div><strong>28</strong><span>dscout entries*</span></div>
            </div>
            {/* F1 — footnote clarifies the 4 missions vs 7 dscout cards */}
            <p className="footnote">
              *From the dscout profile screenshot. 3 additional express studies are
              shown separately in the evidence grid.
            </p>
          </div>
          <div className="floating-note note-one">REAL-WORLD<br /><b>PRODUCT FEEDBACK</b></div>
          <div className="floating-note note-two">UX<br /><b>OBSERVATION</b></div>
        </div>
      </section>

      {/* F9 — duplicate stats row removed; stats appear once in the hero card */}

      {/* ── Who I am ───────────────────────────────────────────── */}
      <section className="intro-section" id="about">
        <div className="section-kicker">WHO I AM</div>
        <div>
          <h2>
            I see research participation as a way to understand{" "}
            <em>how products actually feel.</em>
          </h2>
          <p>
            A product can look polished and still create hesitation. A flow can
            be technically correct and still feel unclear. Through repeated
            research participation, I&apos;ve learned to pay attention to those small
            moments: what I expect, what I notice, where I hesitate, what makes
            me trust a screen and what makes me question it.
          </p>
          <p>
            This portfolio documents that experience through evidence from the
            platforms and studies I&apos;ve participated in. It is intentionally
            participant-focused, not an academic or classroom portfolio.
          </p>
        </div>
      </section>

      {/* ── Evidence ───────────────────────────────────────────── */}
      <section className="evidence-section" id="evidence">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 · PROOF OF PARTICIPATION</p>
            <h2>Don&apos;t take my word for it.<br /><em>See the evidence.</em></h2>
          </div>
          <p>
            Screenshots are the backbone of this portfolio. They show actual study
            records, missions, participant dashboards and compensation details.
            Confidential details have been cropped or blurred where present.
          </p>
        </div>

        {/* F8 — polite live region announces filter result count to screen readers */}
        <p ref={liveRef} className="sr-only" aria-live="polite" aria-atomic="true"></p>

        {/* F8 — filter buttons use aria-pressed; F4 — counts shown per tab */}
        <div className="filter-row" role="group" aria-label="Filter evidence by platform">
          {filterOptions.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={filter === f ? "filter active" : "filter"}
              aria-pressed={filter === f}
            >
              {f}
              <span className="filter-count" aria-hidden="true"> ({countFor(f)})</span>
            </button>
          ))}
        </div>

        <div className="evidence-grid">
          {visible.map((item, i) => (
            /* F6 — unique aria-label on every card button */
            <button
              key={item.src}
              className={`evidence-card card-${i % 4}`}
              onClick={() => setSelected(item)}
              aria-label={item.openLabel}
            >
              <div className="evidence-image">
                {/* F6 — unique descriptive alt text; F12 — lazy-loaded with dimensions */}
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={800}
                  height={600}
                />
                {/* F6 — visible label is short; full label lives on the button */}
                <span className="open-proof" aria-hidden="true">View screenshot ↗</span>
              </div>
              <div className="evidence-copy">
                {/* F5 — standardised card template: platform, year, type, summary */}
                <div className="meta"><span>{item.platform}</span><span>{item.year}</span></div>
                <h3>{item.title}</h3>
                <div className="type">{item.type}</div>
                <p>{item.summary}</p>
                {/* F5 — payment removed from card body; shown only in modal */}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ── Research Ecosystem ─────────────────────────────────── */}
      <section className="platform-section">
        <div className="platform-heading">
          <p className="eyebrow">02 · RESEARCH ECOSYSTEM</p>
          <h2>Seven platforms.<br /><em>One research habit.</em></h2>
          {/* F4 — explains platforms without evidence cards */}
          <p>
            I&apos;ve used different research environments because each one asks a
            participant to behave differently. Platforms marked &ldquo;no screenshot on
            file&rdquo; are ones I&apos;ve used but don&apos;t have a shareable screenshot for.
          </p>
        </div>
        <div className="platform-list">
          {platforms.map((p, i) => (
            <div className="platform-row" key={p.name}>
              <span className="platform-num">0{i + 1}</span>
              <h3>{p.name}</h3>
              <p>{p.detail}</p>
              {/* Platforms with evidence link directly to filtered grid; others show status note */}
              {p.hasEvidence ? (
                <a
                  href="#evidence"
                  className="platform-evidence-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleViewEvidence(p.name);
                  }}
                  aria-label={`View evidence for ${p.name}`}
                >
                  View evidence ↑
                </a>
              ) : (
                <span className="platform-no-evidence">{p.note ?? "No screenshot on file"}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Journey / Timeline ─────────────────────────────────── */}
      <section className="journey" id="journey">
        <div className="journey-side">
          {/* F10 — section label now matches journey content, not just "three years" */}
          <p className="eyebrow">03 · RESEARCH JOURNEY</p>
          <h2>A habit became a <em>research lens.</em></h2>
          <p>
            The story is not about collecting tests. It is about becoming more
            observant with every study.
          </p>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <span>2024</span>
            <div>
              <h3>Started participating</h3>
              <p>Built a foundation through task-based usability tests, surveys and product feedback on PlaybookUX and UserCrowd.</p>
            </div>
          </div>
          <div className="timeline-item highlight">
            <span>2025</span>
            <div>
              <h3>Moved into richer studies</h3>
              <p>Expanded into dscout missions, multi-day diary studies, search-behaviour research and product-specific usability work.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span>2026</span>
            <div>
              <h3>More focused research participation</h3>
              <p>Continued with 1:1 interviews on User Interviews, developer research, AI-related studies and product evaluation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Methods ────────────────────────────────────────────── */}
      <section className="methods" id="approach">
        <div className="method-head">
          <p className="eyebrow">04 · WHAT I&apos;VE EXPERIENCED</p>
          <h2>Different methods.<br /><em>Same attention to detail.</em></h2>
        </div>
        <div className="method-grid">
          {methods.map(([title, desc], i) => (
            <div className="method-card" key={title}>
              <span aria-hidden="true">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Principles ─────────────────────────────────────────── */}
      <section className="principles">
        <div className="principle-intro">
          <p className="eyebrow">05 · MY PARTICIPANT PRINCIPLES</p>
          <h2>Useful feedback starts with <em>attention.</em></h2>
        </div>
        <div className="principle-list">
          {principles.map(([n, title, desc]) => (
            <div key={n}>
              <span aria-hidden="true">{n}</span>
              <div><h3>{title}</h3><p>{desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Closing quote ──────────────────────────────────────── */}
      <section className="signature" aria-label="Closing statement">
        <div className="signature-mark" aria-hidden="true">&ldquo;</div>
        {/* F11 — pull-quote is not a section heading; use <blockquote> */}
        <blockquote className="signature-quote">
          Every study is a chance to make a product a little easier to understand.
        </blockquote>
        <p>YASH CHAUDHARI · USER RESEARCH PARTICIPANT</p>
      </section>

      {/* ── Connect / Contact ──────────────────────────────────── */}
      <section className="connect" id="contact">
        <div>
          {/* F10 — nav label is "Connect"; section title now matches */}
          <p className="eyebrow">06 · CONNECT</p>
          <h2>Interested in inviting me to a <em>study?</em></h2>
          {/* F2 — availability line: time zone, languages, devices, study types */}
          <p className="connect-intro">
            I&apos;m open to usability tests, 1:1 interviews, diary missions and AI
            evaluation studies. Based in India · English · Available on desktop
            and mobile.
          </p>
          {/* F2 — primary CTA + visible email with copy button */}
          <div className="contact-actions">
            <a
              className="button button-dark invite-btn"
              href="mailto:yashchaudhari500@gmail.com"
              aria-label="Send an email to invite Yash to a study"
            >
              ✉ Invite me to a study
            </a>
            <button className="email-copy" onClick={copyEmail} aria-label="Copy email address to clipboard">
              <span>yashchaudhari500@gmail.com</span>
              <span className="copy-icon" aria-hidden="true">{copied ? "✓" : "⎘"}</span>
            </button>
          </div>
        </div>
        {/* F2 — LinkedIn listed first (most relevant to recruiters) */}
        <div className="connect-links-wrap">
          <div className="connect-links">
            <a href="https://www.linkedin.com/in/yashchaudhari500" target="_blank" rel="noopener noreferrer" aria-label="Yash Chaudhari on LinkedIn (opens in new tab)">
              <span>LinkedIn</span><b>↗</b>
            </a>
            <a href="https://github.com/YashChaudhari999" target="_blank" rel="noopener noreferrer" aria-label="Yash Chaudhari on GitHub (opens in new tab)">
              <span>GitHub</span><b>↗</b>
            </a>
            <a href="https://x.com/_YashChaudhari" target="_blank" rel="noopener noreferrer" aria-label="Yash Chaudhari on X / Twitter (opens in new tab)">
              <span>X / Twitter</span><b>↗</b>
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer>
        <span>YASH CHAUDHARI · USER RESEARCH PARTICIPANT</span>
        {/* F12 — back-to-top link */}
        <a href="#top" className="back-to-top" aria-label="Back to top of page">Back to top ↑</a>
        <span>Evidence-led personal portfolio · 2026</span>
      </footer>

      {/* ── Evidence modal ─────────────────────────────────────── */}
      {selected && (
        <div
          className="modal-backdrop"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Evidence: ${selected.title}`}
        >
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close evidence modal"
            >
              ×
            </button>
            <div className="modal-image">
              {/* F6 — descriptive alt text in modal too */}
              <img
                src={selected.src}
                alt={selected.alt}
                loading="lazy"
                width={1050}
                height={720}
              />
            </div>
            <div className="modal-caption">
              <div className="meta"><span>{selected.platform}</span><span>{selected.year}</span></div>
              <h3>{selected.title}</h3>
              <p>{selected.summary}</p>
              {/* F5 — payment shown only here, not on the card */}
              {selected.payment && (
                <div className="verified-line">✓ {selected.payment}</div>
              )}
              <p className="modal-privacy-note">
                Confidential details (names, emails, account balances) have been
                cropped or blurred where present.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

