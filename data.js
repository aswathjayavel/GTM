// ============================================================
// $100 GTM — Experiment & Thesis Data
// ============================================================
// This is the ONLY file you edit. Everything renders automatically.
// ============================================================

const SITE_CONFIG = {
    name: "Aswath Jayavel",
    email: "aswathofficial1505@gmail.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    youtube: "https://youtube.com/@yourhandle",
    twitter: "https://twitter.com/yourhandle",
};

// ------------------------------------------------------------
// CAMPAIGNS (Experiments)
// ------------------------------------------------------------
// Each experiment follows this structure. Copy, fill, done.
//
// {
//     id: "company-slug",
//     company: "Company Name",
//     stage: "Seed / Series A / Series B",
//     category: "positioning",                    // positioning | acquisition | activation | monetization | retention
//
//     // --- THE NARRATIVE (why this problem matters) ---
//     whyInteresting: "What caught your eye about this company's GTM problem. The thing that made you stop scrolling and say 'wait, that's broken.' This is the hook — it's what makes people care about the experiment before they see the result.",
//     whyMe: "Why you specifically want to work on this. What about your skills, experience, or thesis makes you the right person to test this. This builds credibility.",
//
//     // --- THE EXPERIMENT ---
//     title: "One-line diagnosis (this shows on the card)",
//     diagnosis: "2-3 sentences on the broken link you found.",
//     hypothesis: "If [change], then [expected outcome], because [reasoning].",
//     work: "What you actually built or tested.",
//     spend: "$47",                                // actual dollar amount spent
//     result: "What happened — data, numbers, screenshots.",
//     thesisUpdate: "The generalizable lesson.",
//
//     // --- STATUS ---
//     outcome: "win",                              // "live" | "win" | "learning" | "pending"
//     date: "2026-07-01",
//
//     // --- DISTRIBUTION (where you published this) ---
//     distribution: {
//         linkedin: "",                            // URL to LinkedIn post
//         youtube: "",                             // URL to YouTube video
//         twitter: "",                             // URL to tweet/thread
//     },
//     fullWriteup: "",                             // "campaigns/company-slug.html"
// }
// ------------------------------------------------------------

const CAMPAIGNS = [
    // --- EXAMPLE (uncomment and edit for your first experiment) ---
    // {
    //     id: "acme-positioning",
    //     company: "Acme Corp",
    //     stage: "Series A",
    //     category: "positioning",
    //     whyInteresting: "Found Acme through a Product Hunt launch. Great dev tool, 4.8 stars, but their homepage is trying to sell to developers, PMs, and C-suite all at once. Classic post-seed identity crisis — they raised A money and panicked into broadening. I've seen this pattern kill three companies. Wanted to see if the data backs what I suspect.",
    //     whyMe: "I've been studying positioning failures at the seed-to-A transition. My thesis is that companies broaden too early and it inflates CAC. This is a clean test case.",
    //     title: "Acme is selling to 5 ICPs at once — and none of them are buying",
    //     diagnosis: "Homepage tries to speak to developers, PMs, and execs simultaneously. The dev-first wedge that got them traction is buried under enterprise copy they borrowed from competitors. CAC is probably climbing.",
    //     hypothesis: "If I rewrite the homepage around a single ICP (senior devs at 50-200 person startups) and test with $80 of paid traffic, the dev-focused version will produce at least 2x the CTR of the current broad version.",
    //     work: "Rewrote hero copy + 3 landing page variants in Figma. Ran A/B via Google Ads for 5 days targeting 'developer tools' keywords. Recorded Loom walkthrough of the full diagnosis.",
    //     spend: "$82",
    //     result: "Dev-focused variant: 4.2% CTR vs current 1.8%. CPC dropped 35%. 230% CTR improvement on the narrow version. Full data and screenshots in writeup.",
    //     thesisUpdate: "Post-seed companies that broaden positioning too early see CAC inflate 2-3x. The wedge that works at seed should sharpen at Series A, not soften.",
    //     outcome: "win",
    //     date: "2026-07-15",
    //     distribution: {
    //         linkedin: "",
    //         youtube: "",
    //         twitter: "",
    //     },
    //     fullWriteup: "",
    // },
];

// ------------------------------------------------------------
// THESIS
// ------------------------------------------------------------
// Beliefs that cost you money to form. Each backed by experiments.
//
// {
//     claim: "A sharp, opinionated statement about GTM.",
//     evidence: "The data/experience that supports it.",
//     campaigns: ["company-slug"],
//     confidence: "high" | "medium" | "emerging",
//     dateUpdated: "2026-07-01",
// }
// ------------------------------------------------------------

const THESIS = [
    // --- EXAMPLE ---
    // {
    //     claim: "Post-seed companies that broaden positioning too early see CAC inflate 2-3x.",
    //     evidence: "Tested with Acme Corp: narrowing to dev ICP produced 4.2% CTR vs 1.8% broad. 230% improvement from simply picking one audience.",
    //     campaigns: ["acme-positioning"],
    //     confidence: "medium",
    //     dateUpdated: "2026-07-15",
    // },
];
