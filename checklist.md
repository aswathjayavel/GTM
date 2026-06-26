# $100 GTM — Experiment Launch Checklist

Use this for every experiment. Copy this section, paste into your notes, check off as you go.

---

## PHASE 1: FIND THE PROBLEM (Week 1, Days 1-3)

### Source Scan (pick 2-3 sources per cycle)
- [ ] Crunchbase alerts — check recent Seed/Series A raises in target vertical
- [ ] Product Hunt — browse new launches, look for great product + bad positioning
- [ ] G2/Capterra — high review score + low review count = distribution gap
- [ ] YC Launches — fresh companies, pre-GTM
- [ ] IndieHackers — founders posting stalled growth numbers
- [ ] Reddit (r/SaaS, r/startups) — founders asking for growth/positioning help
- [ ] Twitter/X — search "struggling with distribution," "how to position"
- [ ] LinkedIn — founders posting about GTM struggles
- [ ] Job boards (Wellfound, LinkedIn Jobs) — companies hiring Head of Growth / GTM roles

### Qualify the Target
- [ ] Do they have a real product that works? (not vaporware)
- [ ] Is there a visible GTM gap you can diagnose from the outside?
- [ ] Did they recently raise, or do they have open growth roles? (signals budget + intent)
- [ ] Is the problem interesting enough that you'd spend $100 of your own money on it?
- [ ] Can you run a meaningful test in under 2 weeks?
- [ ] Write one sentence: "This company has [X] but is struggling with [Y] because [Z]"

---

## PHASE 2: DIAGNOSE (Week 1, Days 3-5)

### Walk the Growth Chain
- [ ] **Positioning:** Visit homepage. Can a stranger tell who it's for and why it's different in 10 seconds? Screenshot it.
- [ ] **Acquisition:** How are customers finding them? Check their ads (Facebook Ad Library, Google Ads transparency), SEO (Ahrefs/Ubersuggest free tier), social presence. Is there one working channel or just founder hustle?
- [ ] **Activation:** Sign up for the product. Time how long it takes to reach value. Screenshot the onboarding. Where do you get lost or drop off?
- [ ] **Monetization:** Check pricing page. Does the packaging match the ICP? Is there an obvious gap (no free tier when PLG would work, enterprise pricing on a self-serve product)?
- [ ] **Retention:** Any sign of community, changelog, email sequences, expansion prompts?

### Lock the Diagnosis
- [ ] Name the earliest broken link in the chain
- [ ] Confirm it matches their stage (seed = wedge + first channel, Series A = repeatable channel, Series B = layered motion)
- [ ] Write the hypothesis: "If [change], then [outcome], because [reasoning]"
- [ ] Define the success metric and the threshold that counts as a win
- [ ] Set the budget (under $100) and the timebox (under 2 weeks)

---

## PHASE 3: BUILD & TEST (Week 2, Days 1-7)

### Run the Experiment
- [ ] Build the artifact (landing page rewrite, ad variants, cold sequence, onboarding prototype, positioning doc)
- [ ] Set up tracking/measurement before spending a dollar
- [ ] Deploy the spend — track every dollar
- [ ] Document everything as you go: screenshots, screen recordings, data exports
- [ ] Log daily observations in a scratch note

### Capture Results
- [ ] Export all data (CTRs, CPCs, reply rates, conversion numbers, whatever you measured)
- [ ] Grade the hypothesis: validated, partially validated, or wrong
- [ ] Write the honest result — what worked, what didn't, what surprised you
- [ ] Write the thesis update: "I now believe [X] because this experiment showed [Y]"
- [ ] Calculate total spend with breakdown

---

## PHASE 4: PACKAGE (Week 2, Days 5-7)

### Write the Full Experiment (on site)
- [ ] Copy `campaign-template.html` to `campaigns/[company-slug].html`
- [ ] Fill in every section:
  - [ ] Why This Problem Caught My Eye (the hook)
  - [ ] Why I Wanted to Work on This (your credibility)
  - [ ] The Diagnosis (growth chain walkthrough with evidence)
  - [ ] The Hypothesis (falsifiable, specific)
  - [ ] What I Built / Tested (artifacts, tools, spend breakdown)
  - [ ] Results (numbers, honest grading)
  - [ ] What This Taught Me (thesis update)
  - [ ] What I'd Do Next — 30/60/90 (the conversion section)
- [ ] Add entry to `CAMPAIGNS` array in `data.js`
- [ ] Add/update thesis entry in `THESIS` array in `data.js`
- [ ] Proofread once. Cut anything that reads like filler.
- [ ] Push to GitHub

### Prepare Distribution Assets
- [ ] Write LinkedIn post (native text or carousel — NO external links in main post, link in first comment)
  - First line = the diagnosis (hook)
  - Middle = the experiment + key data point
  - End = "Full experiment with all data: [link in comments]"
  - Tag the company page. Tag 1-2 people at the company (founder, head of growth)
- [ ] Write Twitter/X thread
  - Tweet 1: Hook (the one-line diagnosis)
  - Tweet 2-3: The experiment setup
  - Tweet 4: The result with the key number
  - Tweet 5: The thesis update (what you now believe)
  - Tweet 6: Link to full writeup + "follow for the next one"
  - Tag the company handle
- [ ] Record YouTube video (8-12 min)
  - Screen-record walkthrough of the company's current funnel
  - Show the artifacts you built
  - Reveal the data
  - End with thesis update + "subscribe for the next experiment"
  - Title format: "[Company Name]'s GTM Problem — I Spent $[X] Testing a Fix"
  - Thumbnail: Company logo + key metric + your face (optional)
- [ ] Write Reddit post (pick ONE community per drop, rotate)
  - r/SaaS or r/startups or IndieHackers
  - Format: "I spent $[X] testing [Company]'s [problem] — here's what happened"
  - Include enough substance that it stands alone (don't just link out)
- [ ] Draft the founder DM (LinkedIn or email)
  - Keep it to 3 sentences max:
  - "Spent a weekend pulling apart your [acquisition/positioning/activation] and ran a small experiment — thought you'd want to see the results."
  - "[One sentence with the key finding]"
  - "[Link to full writeup]. No agenda — just thought it'd be useful."

---

## PHASE 5: LAUNCH DAY

### Public Launch (do all on the same day, stagger by 2 hours)
- [ ] Post LinkedIn (Tuesday or Wednesday, 8-9am target timezone)
- [ ] Post Twitter/X thread (2 hours after LinkedIn)
- [ ] Publish YouTube video (same day or within 48 hours)
- [ ] Post to one community (same day, afternoon)

### Private Launch (same day as public)
- [ ] DM the founder (LinkedIn or email)
- [ ] DM/email the head of growth or marketing lead (if they have one)
- [ ] Send to 1-2 VCs who invested in the company (find on Crunchbase, message on Twitter/LinkedIn)
- [ ] Share in 1-2 relevant Slack communities (Lenny's, Exit Five, etc.)

### Engage
- [ ] Reply to every comment on LinkedIn within 4 hours
- [ ] Reply to every Twitter reply
- [ ] Reply to Reddit comments
- [ ] If the founder or anyone from the company responds — reply immediately, be collaborative not defensive

---

## PHASE 6: BETWEEN DROPS (ongoing, 2-3x per week)

### Keep the Feed Alive
- [ ] Post 2-3 short LinkedIn observations per week
  - "Noticed [thing] on [company]'s pricing page — here's why it matters"
  - "Quick thought on [GTM pattern] I keep seeing"
  - Comment thoughtfully on founder/growth leader posts
- [ ] 1-2 Twitter posts with quick GTM observations
- [ ] Engage in communities (comment on others' posts, be helpful)
- [ ] Save interesting GTM problems you spot for future experiments

---

## CONVERSION (when someone responds)

### If the founder/company reaches out:
- [ ] Respond within 2 hours
- [ ] Offer a free 30-min call to walk through the full diagnosis
- [ ] On the call: present the 30/60/90 plan from your writeup
- [ ] Propose a paid pilot: "30-day growth sprint, I'll execute the playbook. $[X]."
- [ ] If they want ongoing: fractional/retainer/full-time conversation

### If a different company reaches out because they saw your work:
- [ ] Same process — they're already pre-sold on your approach
- [ ] "I'll do the same thing for your company. Here's how the sprint works."
