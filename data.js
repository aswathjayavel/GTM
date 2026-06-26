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

const CAMPAIGNS = [
    // =====================================================
    // SAMPLE EXPERIMENT — Tally (form builder)
    // This is a complete example. Replace with your own.
    // =====================================================
    {
        id: "tally-positioning",
        company: "Tally",
        stage: "Series A",
        category: "positioning",

        // --- THE NARRATIVE ---
        whyInteresting: "Found Tally through a Product Hunt thread where someone called it 'the Notion of forms.' The product is genuinely excellent — free, fast, beautiful. But their homepage opens with 'The simplest way to create forms.' That's the same line Typeform, Google Forms, and Jotform all use. They're positioning on ease in a category where everyone claims ease. Meanwhile, the thing that actually makes Tally different — it works like a document, not a drag-and-drop builder — is buried below the fold. They have a Porsche and they're advertising it as 'a car that drives.'",

        whyMe: "I've been tracking how PLG tools position themselves after raising A rounds. My emerging thesis is that most of them retreat to generic 'simple and easy' language right when they should be sharpening their wedge. Tally is a textbook case, and the fix is testable for under $100.",

        // --- THE EXPERIMENT ---
        title: "Tally has the best form builder on the market — and the most generic positioning",
        diagnosis: "Tally's homepage leads with 'The simplest way to create forms' — indistinguishable from 5 competitors. Their actual differentiator (document-style form creation, no drag-and-drop, free unlimited forms) is buried. They're competing on a claim everyone makes instead of the experience only they offer.",
        hypothesis: "If I rewrite Tally's hero messaging around their actual differentiator ('Forms that feel like docs — just start typing') and test both versions with $75 of Google Ads on 'form builder' keywords, the differentiated version will produce at least 1.5x higher CTR because it gives searchers a reason to click that no other result offers.",
        work: "Built 2 landing page variants in Carrd ($9/yr). Variant A mirrored Tally's current 'simplest way to create forms' messaging. Variant B led with 'Stop dragging and dropping. Just type. Forms that work like documents.' Ran both on Google Ads targeting 'online form builder' and 'typeform alternative' keywords for 6 days. Split $75 evenly. Tracked CTR, CPC, and bounce rate via Google Analytics.",
        spend: "$84",
        result: "Variant B (differentiated): 5.1% CTR vs Variant A (current): 2.3%. CPC dropped from $1.82 to $0.94. Bounce rate on B was 12% lower. The 'typeform alternative' keyword performed even stronger for B — 6.8% CTR, suggesting people actively looking for alternatives respond to messaging that explains HOW you're different, not just that you exist. Total: 122% CTR lift from messaging alone, zero product changes.",
        thesisUpdate: "In crowded categories, positioning on a shared attribute ('simple,' 'easy,' 'fast') is invisible. Positioning on a unique mechanism ('works like a doc, not a builder') creates a reason to click. The differentiator doesn't have to be a feature — it can be the experience of using the product.",

        outcome: "win",
        date: "2026-07-15",

        distribution: {
            linkedin: "",
            youtube: "",
            twitter: "",
        },
        fullWriteup: "campaigns/tally-positioning.html",
    },

    // =====================================================
    // SAMPLE EXPERIMENT 2 — Cal.com (scheduling)
    // Shows a "learning" outcome — the hypothesis was wrong
    // =====================================================
    {
        id: "cal-acquisition",
        company: "Cal.com",
        stage: "Series A",
        category: "acquisition",

        whyInteresting: "Cal.com is open-source Calendly. Raised $25M Series A. The product is solid and the open-source angle is a real differentiator. But their organic acquisition seems to rely almost entirely on 'Calendly alternative' SEO and developer word-of-mouth. I wanted to test whether they could unlock a completely different acquisition channel — cold outreach to agencies — for under $100.",

        whyMe: "I've been studying how open-source tools translate developer love into business revenue. The pattern I keep seeing: great bottom-up adoption, zero top-down sales motion. Wanted to test whether a lightweight outbound experiment could prove the channel.",

        title: "Cal.com has developer love but no outbound motion — can cold outreach work at $100?",
        diagnosis: "Cal.com grows through open-source community, SEO for 'Calendly alternative,' and developer word-of-mouth. No visible outbound or sales-assisted motion. For a tool used in every sales and recruiting workflow, agencies and recruiting firms are an obvious high-volume segment that won't find them through GitHub stars.",
        hypothesis: "If I send 200 cold emails to digital marketing agency owners positioning Cal.com as 'the scheduling tool you can white-label and self-host,' at least 8% will book a demo link, because agencies care about branding control (white-label) and client data ownership (self-host) — two things Calendly can't offer.",
        work: "Scraped 200 digital marketing agencies (10-50 employees) from Apollo.io ($0 — free tier). Wrote a 3-email sequence in Instantly ($30/mo trial). Email angle: 'Your agency sends clients to Calendly.com — what if the booking page said YourAgency.com instead?' Sent over 8 days with 3-day spacing. Tracked open rate, reply rate, and demo bookings via a Cal.com booking link (free).",
        spend: "$30",
        result: "Open rate: 62%. Reply rate: 11% (22 replies). But only 3 booked a demo (1.5%, below the 8% target). Most replies were 'interesting but we already use Calendly and switching is a pain.' The switching cost objection killed it — agencies had existing workflows, Zapier integrations, and team habits built around Calendly. The value prop landed (white-label + self-host resonated) but the activation energy to switch was too high for a cold email to overcome. Hypothesis: not validated.",
        thesisUpdate: "Cold outreach can surface demand for open-source alternatives, but switching-cost-heavy categories need more than a cold email to convert. The right play might be catching agencies BEFORE they've adopted a scheduling tool — target newly-founded agencies instead of established ones. Or offer a migration concierge.",

        outcome: "learning",
        date: "2026-08-01",

        distribution: {
            linkedin: "",
            youtube: "",
            twitter: "",
        },
        fullWriteup: "campaigns/cal-acquisition.html",
    },
];

// ------------------------------------------------------------
// THESIS
// ------------------------------------------------------------

const THESIS = [
    {
        claim: "In crowded categories, positioning on shared attributes is invisible. Position on your unique mechanism instead.",
        evidence: "Tested with Tally: 'simplest way to create forms' (shared attribute) produced 2.3% CTR. 'Forms that work like documents — just type' (unique mechanism) produced 5.1% CTR. 122% lift from messaging alone. The differentiator doesn't have to be a feature — it can be the experience of using the product.",
        campaigns: ["tally-positioning"],
        confidence: "medium",
        dateUpdated: "2026-07-15",
    },
    {
        claim: "Cold outreach can validate demand for alternatives, but high-switching-cost categories need a migration bridge to actually convert.",
        evidence: "Cal.com cold email to agencies: 62% open rate, 11% reply rate (interest was real), but only 1.5% booked demos. Every objection was about switching cost, not value. The message worked — the conversion path didn't. Targeting pre-adoption prospects or offering migration support might change the math.",
        campaigns: ["cal-acquisition"],
        confidence: "emerging",
        dateUpdated: "2026-08-01",
    },
];
