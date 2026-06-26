// ============================================================
// GTM Lab - Renderer
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
    renderStats();
    renderCampaigns();
    renderThesis();
    bindFilters();
    bindMobileNav();
});

// --- Stats ---
function renderStats() {
    const el = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
    el("campaign-count", CAMPAIGNS.length);
    el("thesis-count", THESIS.length);
    el("experiment-count", CAMPAIGNS.filter(c => c.outcome !== "pending").length);
}

// --- Campaigns ---
function renderCampaigns(filter = "all") {
    const grid = document.getElementById("campaigns-grid");
    const empty = document.getElementById("empty-campaigns");
    if (!grid) return;

    const filtered = filter === "all"
        ? CAMPAIGNS
        : CAMPAIGNS.filter(c => c.category === filter);

    if (filtered.length === 0) {
        grid.innerHTML = "";
        empty.classList.remove("hidden");
        return;
    }

    empty.classList.add("hidden");
    grid.innerHTML = filtered.map(c => `
        <div class="campaign-card" data-category="${c.category}" ${c.fullWriteup ? `onclick="window.location='${c.fullWriteup}'"` : ""}>
            <span class="card-tag tag-${c.category}">${c.category}</span>
            <div class="card-company">${c.company} &middot; ${c.stage}</div>
            <div class="card-title">${c.title}</div>
            <div class="card-diagnosis">${c.diagnosis}</div>
            <div class="card-meta">
                <span>${c.date}</span>
                <span class="card-outcome outcome-${c.outcome}">${c.outcome === "win" ? "Validated" : c.outcome === "learning" ? "Learning" : "In Progress"}</span>
            </div>
        </div>
    `).join("");
}

// --- Thesis ---
function renderThesis() {
    const list = document.getElementById("thesis-list");
    const empty = document.getElementById("empty-thesis");
    if (!list) return;

    if (THESIS.length === 0) {
        list.innerHTML = "";
        empty.classList.remove("hidden");
        return;
    }

    empty.classList.add("hidden");
    list.innerHTML = THESIS.map(t => {
        const conf = t.confidence === "high" ? "High confidence"
            : t.confidence === "medium" ? "Medium confidence"
            : "Emerging";
        return `
        <div class="thesis-entry">
            <div class="thesis-claim">${t.claim}</div>
            <div class="thesis-evidence">${t.evidence}</div>
            <div class="thesis-source">${conf} &middot; Updated ${t.dateUpdated} &middot; Based on ${t.campaigns.length} campaign${t.campaigns.length !== 1 ? "s" : ""}</div>
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
