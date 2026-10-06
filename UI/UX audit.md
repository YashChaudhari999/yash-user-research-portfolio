[Summary](#summary) [Scope](#scope) [Scorecard](#scores) [Findings](#findings) [Strengths](#strengths) [Fix order](#plan) [To verify](#verify)

UI/UX audit · 6 Oct 2026

# research.yashchaudhari.me

A heuristic review of the User Research Participant Portfolio against Nielsen's usability heuristics, WCAG 2.2 and common portfolio conventions.

Single-page site6 content sections12 evidence cards7 platforms listed

## Summary

2 high 6 medium 4 low 6 strengths

The concept is strong. The page leads with proof, uses a clear story arc (who, evidence, platforms, timeline, methods, principles, contact) and keeps the copy short and specific. The biggest risks are credibility gaps inside the page itself: numbers that disagree with each other, and a "verified" claim that nothing on the page verifies. For a portfolio whose whole pitch is attention to detail, a reader who spots these will discount the rest.

The second theme is conversion. A researcher who likes the page has no direct way to invite Yash to a study: the only contact routes are three social profiles.

## Scope and method

I read the full page content and structure, then judged it against the heuristics below. I could not reach the site from my shell, so I did not render it, run Lighthouse, measure colour contrast, test touch targets or check it on a phone. Findings about those areas are marked Verify and listed in the final section with how to check each one.

| Framework | Used for |
| --- | --- |
| Nielsen's 10 heuristics | Navigation, feedback, consistency, error prevention, content match |
| WCAG 2.2 AA | Accessibility signals visible in the content: headings, alt text, link purpose, contrast needs |
| Portfolio conventions | Credibility, call to action, contact path, scannability |

## Scorecard

Scores are out of 5 and come from content and structure only. Areas that need a rendered page carry a lower confidence.

| Area | Score | Confidence | Reason |
| --- | --- | --- | --- |
| Information architecture | 4.0 | High | Logical order, five-item nav, one clear job per section. |
| Content and credibility | 2.8 | High | Strong proof, undercut by inconsistent figures and an unbacked "verified" label. |
| Navigation and wayfinding | 3.4 | Medium | Anchors work for one page. Mislabelled link affordances and no way back to the top. |
| Visual hierarchy | 3.6 | Medium | Numbered sections and short headings scan well. Repeated stats and numbering dilute it. |
| Conversion and contact | 2.2 | High | No email, no resume, no "invite me to a study" action. |
| Accessibility | 2.8 | Low | Generic alt text and a filter control that needs checking. Contrast and focus untested. |
| Responsive and performance | 3.0 | Low | 12 full screenshots on one page is a load and layout risk. Not measured. |

## Findings

F1HighHeuristic: match between system and real world · Credibility

### The numbers on the page disagree with each other

Observed

The hero says "more than three years" and calls it "a three-year portfolio". The date label reads 2024 → 2026, the timeline starts in 2024, and the earliest platform record is 2024–25. That spans roughly two and a half years as of today. Separately, the page shows "4 dscout missions", yet six distinct dscout studies appear in the evidence grid.

Impact

A reader checking the evidence against the claims finds mismatches in the first minute. The footnote ("shown in a supplied dscout profile screenshot") explains the 4 and 28, but it sits in small print and does not explain the six cards.

Fix

Make one source of truth for every figure. Either start the timeline earlier or say "since 2024". Say "4 missions on the profile screenshot, plus 2 express studies" or whatever is accurate, and place that wording next to the number, not in a footnote.

F2HighConversion · Recognition over recall

### No direct way to contact or invite Yash

Observed

The "Find me online" section offers LinkedIn, GitHub and X. There is no email address, no contact form, no downloadable one-page summary and no statement of what kinds of studies he is open to. The nav item "Connect ↗" jumps down the same page, so the arrow suggests an external link that does not exist.

Impact

The audience is researchers and recruiters. A GitHub profile is a poor destination for them, and X is rarely read for hiring. Every visitor who wants to act has to leave and guess.

Fix

Add a visible email (as selectable text, with a copy button), a primary "Invite me to a study" button, and a short availability line (time zone, languages, devices, study types). Put LinkedIn first. Drop the arrow on the in-page "Connect" item.

F3MediumCredibility · Visibility of system status

### "Verified evidence" is a claim with no verification

Observed

The profile card carries a "Verified evidence" badge, but the evidence is self-supplied screenshots and the page offers no way to confirm them.

Impact

Readers who care about research rigour will notice the gap. It can read as overclaiming.

Fix

Relabel to "Evidence from platform screenshots", or add real verification, such as a public profile link or a reference who can confirm participation.

F4MediumHeuristic: consistency and standards

### The platform filter does not match the platform list

Observed

The evidence filter offers All, dscout, User Interviews, UserCrowd and PlaybookUX. The ecosystem section lists seven platforms, adding UserTesting, BetaTesting and Testwork, which have no evidence cards and no filter.

Impact

Three of the seven platforms are claims with nothing behind them, which weakens the "evidence-led" promise and leaves the user wondering whether something failed to load.

Fix

Add evidence for those three, or mark them "no screenshot available (NDA or no record)". Show how many cards each filter holds, for example "dscout (7)".

F5MediumHeuristic: consistency · Aesthetic and minimalist design

### Evidence cards carry inconsistent detail

Observed

Some cards end with a payment line (for example "$35 paid · Jun 19, 2025", "$50 compensation"), while most have none. The profile card shows earnings, the others show a description only. Date labels also vary (a year, a range, or a full date).

Impact

Readers cannot compare studies. The money lines make the page feel more about payment than about insight.

Fix

Use one card template: platform, year, method, duration, and one sentence on what Yash contributed or learned. Treat payment as optional detail, or drop it from cards and keep a single total.

F6MediumWCAG 1.1.1 · 2.4.4

### Alt text and link text are generic

Observed

Images use patterns such as "Participant profile evidence" and "AI Evaluation evidence", and each card has the same "Open evidence ↗" link text. The logo image is named "YC" next to the text "Yash Chaudhari".

Impact

Screen reader users hear twelve identical links. The alt text names the card but does not say what the screenshot shows.

Fix

Make link names unique ("Open dscout participant profile screenshot"), keep the visible text short, and describe each image's key content. Mark the logo decorative since the adjacent text already names the site.

F7MediumPrivacy · Error prevention

### Screenshots may expose more than intended

Observed

Cards show dashboards, payment history and unreleased-sounding study titles from third-party platforms.

Impact

Study names and earnings can breach a platform's confidentiality terms, and a careful research recruiter may read that as poor judgment about participant ethics, which is the exact trait the portfolio sells.

Fix

Check each platform's terms, blur or crop names, emails and balances, and say on the page that confidential details were removed.

F8MediumWCAG 4.1.2 · Verify

### The filter tabs need a keyboard and screen reader check

Observed

The All / dscout / User Interviews / UserCrowd / PlaybookUX control is a custom widget. Whether it exposes its selected state, uses arrow-key navigation and announces the result count cannot be confirmed from content alone.

Fix

Use buttons with `aria-pressed` (or a proper tab pattern), keep a visible focus ring, and announce "Showing 7 of 12" in a polite live region.

F9LowAesthetic and minimalist design

### The same statistics appear twice

Observed

"3+ years / 4 missions / 28 entries" appear in the hero profile card and again as a numbered stat row, with "7 platforms" added.

Fix

Show them once, near the top. Use the second spot for a short quote or a featured study.

F10LowConsistency · Information scent

### Numbering is used for two different things

Observed

Sections are numbered 01 to 06, and the cards inside them (platforms, methods, principles) restart at 01. "Who I am" has no number, and the last section is "06 · Find me online" while the nav calls it "Connect".

Fix

Number only where order matters (the timeline). Make nav labels match section titles.

F11LowHeading structure · WCAG 1.3.1

### Heading levels are used for styling

Observed

The role line under the name and the closing quote both appear as level-2 headings, so the outline contains headings that are not section titles.

Fix

Use a paragraph for the tagline and a blockquote for the quote. Keep h2 for sections and h3 for cards.

F12LowWayfinding · Verify on device

### Long single page with no persistent orientation

Observed

The page has twelve screenshots, seven platform cards, a timeline, six methods and four principles. Whether the nav stays visible, highlights the current section or offers a "back to top" control could not be confirmed.

Fix

Keep the nav sticky, highlight the active section, lazy-load below-the-fold screenshots with set width and height to avoid layout shift, and add a back-to-top link at the end.

## What works well

- **Evidence first.** The "Don't take my word for it" section puts proof ahead of the process explanation, which suits a skeptical reader.
- **Clear role definition.** "Use the product honestly, notice the details, and give researchers feedback they can act on" is a one-line value proposition.
- **Participant principles.** "Separate preference from usability" and "Respect the research context" show method knowledge and good practice, and are the most differentiating content on the page.
- **Short, scannable copy.** Sections open with a plain heading and a sentence or two. There are no walls of text.
- **Honest scope statement.** Saying the portfolio is "participant-focused, not an academic or classroom portfolio" sets expectations correctly.
- **Sound page basics.** The page has a title, meta description and viewport tag, and the external links are clearly marked with an arrow.

## Suggested fix order

1. **Reconcile every number** (F1). Years, missions, entries and cards must agree, with the wording next to the figure.
2. **Add a real contact path** (F2). Email, a primary invitation button and an availability line.
3. **Remove or back the "Verified" label** (F3), and align the filter with the platform list (F4).
4. **Review screenshots for confidentiality** (F7) before sharing the link more widely.
5. **Standardise the evidence card** (F5) and rewrite alt and link text (F6).
6. **Run the on-device checks** in the next section, then fix filter semantics (F8) and orientation (F12).
7. **Tidy repeated stats, numbering and heading levels** (F9 to F11).

## Still to verify on a real device

These need a rendered page, so I could not confirm them. Each takes a few minutes.

| Check | How | Pass mark |
| --- | --- | --- |
| Colour contrast | Browser dev tools, or the WebAIM contrast checker on text and badge colours | 4.5:1 body text, 3:1 large text and UI |
| Keyboard use | Tab through the whole page without a mouse | Visible focus, logical order, filter operable |
| Touch targets | Open on a phone, tap nav items, filter chips and card links | At least 24px (WCAG 2.2), ideally 44px |
| Phone layout | Test at 360 to 400px width | No sideways scroll, readable stats and cards |
| Load speed | Lighthouse in Chrome, mobile profile, throttled | Largest paint under 2.5s, no layout shift |
| Image weight | Network tab, filter by images | Each screenshot compressed, lazy-loaded, sized |
| Screen reader | VoiceOver or NVDA through the hero and evidence grid | Unique link names, sensible heading outline |
| Reduced motion | Turn on "reduce motion" in OS settings | Animations stop or soften |

Heuristic review of research.yashchaudhari.me, based on page content and structure as fetched on 6 Oct 2026. Rendering, contrast and performance were not measured.