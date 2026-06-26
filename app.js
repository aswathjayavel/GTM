// ============================================================
// $100 GTM — Renderer
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
    renderCurrentExperiment();
    renderCampaigns();
    renderThesis();
    bindFilters();
    bindMobileNav();
});

// --- Current Live Experiment ---
function renderCurrentExperiment() {
    const banner = document.getElementById("current-experiment");
    if (!banner) return;

    const live = CAMPAIGNS.find(c => c.outcome === "live");
    if (!live) {
        banner.classList.add("hidden");
        return;
    }

    banner.innerHTML = `
        <div class="current-info">
            <div class="current-label"><span class="current-dot"></span> Live Experiment</div>
            <h3>${live.company}: ${live.title}</h3>
            <p>${live.diagnosis}</p>
        </div>
        <div class="current-action">
            ${live.fullWriteup
                ? `<a href="${live.fullWriteup}" class="btn btn-primary">Follow Along</a>`
                : `<span class="spend-badge">Budget: ${live.spend || '$100'}</span>`
            }
        </div>
    `;
}

// --- Campaigns ---
function renderCampaigns(filter = "all") {
    const grid = document.getElementById("campaigns-grid");
    const empty = document.getElementById("empty-campaigns");
    if (!grid) return;

    const completed = CAMPAIGNS.filter(c => c.outcome !== "live");
    const filtered = filter === "all"
        ? completed
        : completed.filter(c => c.category === filter);

    if (filtered.length === 0) {
        grid.innerHTML = "";
        if (empty) empty.classList.remove("hidden");
        return;
    }

    if (empty) empty.classList.add("hidden");
    grid.innerHTML = filtered.map(c => {
        const outcomeLabel = c.outcome === "win" ? "Validated"
            : c.outcome === "learning" ? "Learning"
            : "In Progress";

        return `
        <div class="campaign-card" data-category="${c.category}" ${c.fullWriteup ? `onclick="window.location='${c.fullWriteup}'"` : ""}>
            <span class="card-tag tag-${c.category}">${c.category}</span>
            <div class="card-company">${c.company} &middot; ${c.stage}</div>
            <div class="card-title">${c.title}</div>
            <div class="card-diagnosis">${c.diagnosis}</div>
            <div class="card-meta">
                <span>${c.date} &middot; <span class="card-spend">${c.spend || ''}</span></span>
                <span class="card-outcome outcome-${c.outcome}">${outcomeLabel}</span>
            </div>
        </div>
    `}).join("");
}

// --- Thesis ---
function renderThesis() {
    const list = document.getElementById("thesis-list");
    const empty = document.getElementById("empty-thesis");
    if (!list) return;

    if (THESIS.length === 0) {
        list.innerHTML = "";
        if (empty) empty.classList.remove("hidden");
        return;
    }

    if (empty) empty.classList.add("hidden");
    list.innerHTML = THESIS.map(t => {
        const conf = t.confidence === "high" ? "High confidence"
            : t.confidence === "medium" ? "Medium confidence"
            : "Emerging";
        return `
        <div class="thesis-entry">
            <div class="thesis-claim">${t.claim}</div>
            <div class="thesis-evidence">${t.evidence}</div>
            <div class="thesis-source">${conf} &middot; Updated ${t.dateUpdated} &middot; Based on ${t.campaigns.length} experiment${t.campaigns.length !== 1 ? 's' : ''}</div>
        </div>
    `}).join("");
}

// --- Filters ---
function bindFilters() {
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderCampaigns(btn.dataset.filter);
        });
    });
}

// --- Mobile Nav ---
function bindMobileNav() {
    const toggle = document.querySelector(".mobile-toggle");
    const links = document.querySelector(".nav-links");
    if (!toggle || !links) return;

    toggle.addEventListener("click", () => {
        const open = links.style.display === "flex";
        links.style.display = open ? "none" : "flex";
        links.style.flexDirection = "column";
        links.style.position = "absolute";
        links.style.top = "64px";
        links.style.left = "0";
        links.style.right = "0";
        links.style.background = "rgba(10,10,11,0.95)";
        links.style.padding = open ? "0" : "24px";
        links.style.gap = "20px";
        links.style.alignItems = "center";
        links.style.borderBottom = "1px solid var(--border)";
    });
}
