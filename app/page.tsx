"use client";

import { useMemo, useState } from "react";

type Evidence = {
  src: string;
  platform: string;
  title: string;
  type: string;
  year: string;
  summary: string;
  verified?: string;
};

const evidence: Evidence[] = [
  { src:"/proof/dscout-profile.png", platform:"dscout", title:"Participant profile", type:"Profile evidence", year:"2025", summary:"Participant dashboard showing 4 missions, 28 entries and $543 earned to date.", verified:"$543 earned · 4 missions · 28 entries" },
  { src:"/proof/dscout-ai-evaluation.png", platform:"dscout", title:"AI Evaluation", type:"Multi-day mission", year:"2025", summary:"A mission focused on how participants compare and use AI tools in everyday tasks." },
  { src:"/proof/dscout-search-party.png", platform:"dscout", title:"Search Party", type:"Longitudinal mission", year:"2025", summary:"A 14-day research mission exploring how and why different online search tools are used." },
  { src:"/proof/dscout-photo-album-art.png", platform:"dscout", title:"Photo Album Art", type:"Creative product study", year:"2025", summary:"A study involving a Google Photos album and feedback on creatively edited video reels." },
  { src:"/proof/dscout-whatsapp-devices.png", platform:"dscout", title:"WhatsApp Devices", type:"Express mission", year:"2025", summary:"Completed express mission with a documented $10 reward." },
  { src:"/proof/dscout-whatsapp-business.png", platform:"dscout", title:"WhatsApp messages from businesses", type:"Express usability study", year:"2025", summary:"Desktop usability study asking participants to record their screen and complete a series of prompts.", verified:"$35 paid · Jun 19, 2025" },
  { src:"/proof/dscout-sports-app.png", platform:"dscout", title:"Sports app design", type:"Express mission", year:"2025", summary:"A focused study about opinions and expectations around sports app design.", verified:"$6 paid · Apr 21, 2025" },
  { src:"/proof/userinterviews-studies.png", platform:"User Interviews", title:"Study dashboard", type:"Research participation", year:"2026", summary:"Study history showing confirmed, approved and paid research participation." },
  { src:"/proof/userinterviews-player-interview.png", platform:"User Interviews", title:"Player interview", type:"1:1 / unmoderated task", year:"2026", summary:"A 60-minute research opportunity seeking honest player feedback, ideas and experiences.", verified:"$35 compensation" },
  { src:"/proof/userinterviews-nodejs.png", platform:"User Interviews", title:"Developer tool research", type:"1:1 interview", year:"2026", summary:"A research study exploring how developers use Node.js, including workflow and website-building habits.", verified:"$50 compensation" },
  { src:"/proof/usercrowd-history.png", platform:"UserCrowd", title:"Participation history", type:"Rapid tests", year:"2025–26", summary:"History page showing repeated participation in short product and interface tests." },
  { src:"/proof/playbookux-completed-tests.png", platform:"PlaybookUX", title:"Completed tests", type:"Usability testing", year:"2024–25", summary:"Completed test history with payment status and study records." },
];

const platforms = [
  {name:"UserTesting", detail:"Usability testing and product feedback"},
  {name:"User Interviews", detail:"Interviews, online tasks and product research"},
  {name:"dscout", detail:"Missions, diary-style research and usability studies"},
  {name:"UserCrowd", detail:"Rapid interface and product feedback"},
  {name:"PlaybookUX", detail:"Usability tests and research tasks"},
  {name:"BetaTesting", detail:"Early product testing and feedback"},
  {name:"Testwork", detail:"Research participation and task-based feedback"},
];

const methods = [
  ["Usability testing","Evaluate real interfaces while completing realistic tasks."],
  ["1:1 interviews","Share detailed experiences, workflows and expectations."],
  ["Think-aloud feedback","Explain what feels clear, confusing, useful or unexpected."],
  ["Longitudinal missions","Return across multiple days and reflect on changing experiences."],
  ["AI product evaluation","Compare AI tools through practical, everyday use."],
  ["Mobile & web studies","Evaluate experiences across devices and interaction contexts."],
];

const principles = [
  ["01","Observe before judging","I describe what happened before deciding whether it was good or bad."],
  ["02","Explain the why","I try to connect an action to an expectation, need or friction point."],
  ["03","Separate preference from usability","A personal preference is different from a problem that may affect other users."],
  ["04","Respect the research context","I follow study instructions, deadlines, recording requirements and researcher guidance."],
];

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Evidence | null>(null);
  const filters = ["All","dscout","User Interviews","UserCrowd","PlaybookUX"];

  const visible = useMemo(() =>
    filter === "All" ? evidence : evidence.filter(e => e.platform === filter), [filter]);

  return (
    <main>
      <header className="nav">
        <a href="#top" className="brand">
          <img src="/YC.png" alt="YC" className="brand-mark" />
          <span>Yash Chaudhari</span>
        </a>
        <nav>
          <a href="#evidence">Evidence</a>
          <a href="#journey">Journey</a>
          <a href="#approach">Approach</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-cta">Connect ↗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="identity-line">
            <span className="status-dot"></span>
            <span>USER RESEARCH PARTICIPANT</span>
            <span className="identity-rule"></span>
            <span>2024 → 2026</span>
          </div>
          <h1>Yash<br /><em>Chaudhari.</em></h1>
          <h2>User Research Participant <span>·</span> UX Research Enthusiast</h2>
          <p className="hero-lede">
            For more than three years, I’ve participated in real-world user
            research across usability tests, interviews, missions, product
            evaluations and longitudinal studies.
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
            <a href="https://www.linkedin.com/in/yashchaudhari500" target="_blank">LinkedIn ↗</a>
            <a href="https://github.com/YashChaudhari999" target="_blank">GitHub ↗</a>
            <a href="https://x.com/_YashChaudhari" target="_blank">X ↗</a>
          </div>
        </div>

        <div className="hero-profile">
          <div className="profile-ring"></div>
          <div className="profile-card">
            <div className="profile-top">
              <span className="mono">PARTICIPANT PROFILE</span>
              <span className="verified">VERIFIED EVIDENCE</span>
            </div>
            <div className="profile-name">Yash<br /><em>Chaudhari</em></div>
            <div className="profile-caption">Curious user. Detailed observer. Consistent participant.</div>
            <div className="profile-stat">
              <div><strong>3+</strong><span>years</span></div>
              <div><strong>4</strong><span>dscout missions*</span></div>
              <div><strong>28</strong><span>dscout entries*</span></div>
            </div>
            <p className="footnote">*Shown in a supplied dscout profile screenshot.</p>
          </div>
          <div className="floating-note note-one">REAL-WORLD<br /><b>PRODUCT FEEDBACK</b></div>
          <div className="floating-note note-two">UX<br /><b>OBSERVATION</b></div>
        </div>
      </section>

      <section className="numbers">
        <div><span>01</span><strong>3+</strong><small>years participating</small></div>
        <div><span>02</span><strong>7</strong><small>research platforms shared</small></div>
        <div><span>03</span><strong>4</strong><small>dscout missions shown</small></div>
        <div><span>04</span><strong>28</strong><small>dscout entries shown</small></div>
      </section>

      <section className="intro-section" id="about">
        <div className="section-kicker">WHO I AM</div>
        <div>
          <h2>I see research participation as a way to understand <em>how products actually feel.</em></h2>
          <p>
            A product can look polished and still create hesitation. A flow can
            be technically correct and still feel unclear. Through repeated
            research participation, I’ve learned to pay attention to those small
            moments: what I expect, what I notice, where I hesitate, what makes
            me trust a screen and what makes me question it.
          </p>
          <p>
            This portfolio documents that experience through evidence from the
            platforms and studies I’ve participated in. It is intentionally
            participant-focused, not an academic or classroom portfolio.
          </p>
        </div>
      </section>

      <section className="evidence-section" id="evidence">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 · PROOF OF PARTICIPATION</p>
            <h2>Don’t take my word for it.<br /><em>See the evidence.</em></h2>
          </div>
          <p>
            Screenshots are the backbone of this portfolio. They show actual
            study records, missions, participant dashboards and compensation
            details without turning the site into a generic list of claims.
          </p>
        </div>

        <div className="filter-row">
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} className={filter === f ? "filter active" : "filter"}>{f}</button>
          ))}
        </div>

        <div className="evidence-grid">
          {visible.map((item, i) => (
            <button key={item.src} className={`evidence-card card-${i%4}`} onClick={() => setSelected(item)}>
              <div className="evidence-image">
                <img src={item.src} alt={`${item.title} evidence`} />
                <span className="open-proof">Open evidence ↗</span>
              </div>
              <div className="evidence-copy">
                <div className="meta"><span>{item.platform}</span><span>{item.year}</span></div>
                <h3>{item.title}</h3>
                <div className="type">{item.type}</div>
                <p>{item.summary}</p>
                {item.verified && <div className="verified-line">✓ {item.verified}</div>}
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="platform-section">
        <div className="platform-heading">
          <p className="eyebrow">02 · RESEARCH ECOSYSTEM</p>
          <h2>Seven platforms.<br /><em>One research habit.</em></h2>
          <p>
            I’ve used different research environments because each one asks a
            participant to behave differently. That variety has helped me become
            comfortable with both quick feedback and deeper study formats.
          </p>
        </div>
        <div className="platform-list">
          {platforms.map((p,i) => (
            <div className="platform-row" key={p.name}>
              <span className="platform-num">0{i+1}</span>
              <h3>{p.name}</h3>
              <p>{p.detail}</p>
              <span className="platform-mark">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="journey" id="journey">
        <div className="journey-side">
          <p className="eyebrow">03 · THREE YEARS</p>
          <h2>A habit became a <em>research lens.</em></h2>
          <p>
            The story is not about collecting tests. It is about becoming more
            observant with every study.
          </p>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <span>2024</span>
            <div><h3>Started participating</h3><p>Built a foundation through task-based usability tests, surveys and product feedback.</p></div>
          </div>
          <div className="timeline-item highlight">
            <span>2025</span>
            <div><h3>Moved into richer studies</h3><p>Expanded into dscout missions, usability studies, search behavior and product-specific research.</p></div>
          </div>
          <div className="timeline-item">
            <span>2026</span>
            <div><h3>More focused research participation</h3><p>Continued with interviews, developer research, AI-related studies, shopping research and product evaluation.</p></div>
          </div>
        </div>
      </section>

      <section className="methods" id="approach">
        <div className="method-head">
          <p className="eyebrow">04 · WHAT I’VE EXPERIENCED</p>
          <h2>Different methods.<br /><em>Same attention to detail.</em></h2>
        </div>
        <div className="method-grid">
          {methods.map(([title,desc],i) => (
            <div className="method-card" key={title}>
              <span>0{i+1}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="principles">
        <div className="principle-intro">
          <p className="eyebrow">05 · MY PARTICIPANT PRINCIPLES</p>
          <h2>Useful feedback starts with <em>attention.</em></h2>
        </div>
        <div className="principle-list">
          {principles.map(([n,title,desc]) => (
            <div key={n}><span>{n}</span><div><h3>{title}</h3><p>{desc}</p></div></div>
          ))}
        </div>
      </section>

      <section className="signature">
        <div className="signature-mark">“</div>
        <h2>Every study is a chance to make a product a little easier to understand.</h2>
        <p>YASH CHAUDHARI · USER RESEARCH PARTICIPANT</p>
      </section>

      <section className="connect" id="contact">
        <div>
          <p className="eyebrow">06 · FIND ME ONLINE</p>
          <h2>Want to see more of the person behind the <em>feedback?</em></h2>
          <p>
            My public professional profiles are the best place to connect,
            follow my work and learn more about my interests.
          </p>
        </div>
        <div className="connect-links">
          <a href="https://www.linkedin.com/in/yashchaudhari500" target="_blank"><span>LinkedIn</span><b>↗</b></a>
          <a href="https://github.com/YashChaudhari999" target="_blank"><span>GitHub</span><b>↗</b></a>
          <a href="https://x.com/_YashChaudhari" target="_blank"><span>X / Twitter</span><b>↗</b></a>
        </div>
      </section>

      <footer>
        <span>YASH CHAUDHARI · USER RESEARCH PARTICIPANT</span>
        <span>Evidence-led personal portfolio · 2026</span>
      </footer>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>×</button>
            <div className="modal-image"><img src={selected.src} alt="" /></div>
            <div className="modal-caption">
              <div className="meta"><span>{selected.platform}</span><span>{selected.year}</span></div>
              <h3>{selected.title}</h3>
              <p>{selected.summary}</p>
              {selected.verified && <div className="verified-line">✓ {selected.verified}</div>}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
