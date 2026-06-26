// ============================================================
// GTM Lab - Campaign & Thesis Data
// ============================================================
// This is the ONLY file you edit to add new campaigns and
// thesis entries. Everything renders automatically.
// ============================================================

const SITE_CONFIG = {
    name: "Your Name",
    tagline: "Proof-of-Work GTM Strategy",
    email: "your@email.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourhandle",
};

// ------------------------------------------------------------
// CAMPAIGNS
// ------------------------------------------------------------
// Copy the template below and fill it in for each new campaign.
//
// {
//     id: "company-slug",                    // URL-friendly ID
//     company: "Company Name",
//     stage: "Seed / Series A / Series B",
//     category: "positioning",               // positioning | acquisition | activation | monetization | retention
//     title: "The one-line diagnosis",
//     diagnosis: "2-3 sentence summary of the broken link you found.",
//     hypothesis: "What you predicted would happen.",
//     work: "What you actually built or tested.",
//     result: "What happened — data, screenshots, outcomes.",
//     thesisUpdate: "What this taught you that generalizes.",
//     outcome: "win" | "learning" | "pending",
//     date: "2026-06-26",
//     linkedinPost: "https://linkedin.com/posts/...",   // optional
//     fullWriteup: "campaigns/company-slug.html",       // optional: link to detailed page
// }
// ------------------------------------------------------------

const CAMPAIGNS = [
    // --- EXAMPLE (delete or replace with your first real campaign) ---
    // {
    //     id: "acme-positioning",
    //     company: "Acme Corp",
    //     stage: "Series A",
    //     category: "positioning",
    //     title: "Acme is selling to 5 ICPs at once — and none of them are buying",
    //     diagnosis: "Homepage tries to speak to developers, PMs, and execs simultaneously. Message is diluted, CAC is climbing. The wedge that got them seed traction (developer-first) is buried under enterprise language they copied from competitors.",
    //     hypothesis: "Rewriting the homepage around a single ICP (senior devs at 50-200 person startups) and testing it with $100 of paid traffic will produce a 2x click-through improvement.",
    //     work: "Rewrote hero copy + 3 landing page variants. Ran A/B via Google Ads for 5 days. Recorded Loom walkthrough of the diagnosis.",
    //     result: "Dev-focused variant: 4.2% CTR vs current 1.8%. CPC dropped 35%. Screenshots and data in full writeup.",
    //     thesisUpdate: "Post-seed companies that broaden positioning too early see CAC inflate 2-3x. The wedge that works at seed should sharpen at Series A, not soften.",
    //     outcome: "win",
    //     date: "2026-07-15",
    //     linkedinPost: "",
    //     fullWriteup: "",
    // },
];

// ------------------------------------------------------------
// THESIS
// ------------------------------------------------------------
// Your accumulated beliefs about GTM — each backed by campaign evidence.
//
// {
//     claim: "A sharp, opinionated statement about GTM.",
//     evidence: "The data/experience that supports it.",
//     campaigns: ["company-slug"],  // IDs of campaigns that back this claim
//     confidence: "high" | "medium" | "emerging",
//     dateUpdated: "2026-06-26",
// }
// ------------------------------------------------------------

const THESIS = [
    // --- EXAMPLE (delete or replace) ---
    // {
    //     claim: "Post-seed companies that broaden positioning too early see CAC inflate 2-3x.",
    //     evidence: "Tested with Acme Corp: narrowing to dev ICP produced 4.2% CTR vs 1.8% broad. Consistent with pattern seen at 2 other companies.",
    //     campaigns: ["acme-positioning"],
    //     confidence: "medium",
    //     dateUpdated: "2026-07-15",
    // },
];
