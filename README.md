<div align="center">

# GoNow Systems — Marketing Website

**Master Your Deliveries. Optimize Your Growth.**  
The public-facing marketing website for [GoNow Systems](https://gonow-systems.com) — an AI-native logistics management platform built for modern delivery teams.

[![Cloudflare Pages](https://img.shields.io/badge/Hosted%20on-Cloudflare%20Pages-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Font Awesome](https://img.shields.io/badge/Icons-Font%20Awesome-528DD7?logo=fontawesome&logoColor=white)](https://fontawesome.com)
[![Google Fonts](https://img.shields.io/badge/Fonts-Google%20Fonts-4285F4?logo=google&logoColor=white)](https://fonts.google.com)

[![Built with Claude](https://img.shields.io/badge/Built%20with-Claude%20Code-7C3AED?logo=anthropic&logoColor=white)](https://claude.ai/code)
[![Deploy Status](https://img.shields.io/badge/Deploy-Automatic%20on%20Push-00C7B7?logo=cloudflare&logoColor=white)](#deployment)
[![License](https://img.shields.io/badge/License-Proprietary-red)](#)

</div>

---

## About GoNow

GoNow was born from a simple observation: **logistics is the heartbeat of modern commerce, but managing it shouldn't be a headache.**

Founded in **2026**, GoNow gives small and medium-sized delivery teams the same high-tech tools used by global giants — combining advanced web technologies with real-world logistics insights to create a platform that is powerful and easy to use. Whether you're delivering groceries, furniture, or medical supplies, GoNow ensures your journey is optimized, your team is empowered, and your customers are satisfied.

> GoNow is a fully AI-native platform — conceived, architected, and built entirely using **[Claude Code](https://claude.ai/code) by Anthropic** and **Google Gemini**, without a single line written in a traditional IDE.

---

## Features

| Module | Description |
|--------|-------------|
| **Smart Route Planning** | AI-assisted route orchestration with Smart IDs (`#YYMMDD.n`), drag-and-drop scheduling, and real-time team assignment |
| **Reliable Verification (PoD)** | Watermarked photo proofs (store name, GPS, timestamp) with on-device compression and 3-photo compliance enforcement |
| **Warehouse & Inventory** | Consolidated picking manifests, per-truck loading plans, and one-click professional PDF slips |
| **Analytics & Performance** | Completion rates, driver performance metrics, deep-dive visit history, and CSV/PDF exports |
| **Enterprise Management** | RBAC with 4 roles, login audit logs, storage cost controls, and one-click disaster recovery |

---

## Why GoNow

| Advantage | Detail |
|-----------|--------|
| Zero-entry data | Paste a Google Maps URL — coordinates are parsed automatically |
| Fraud-proof PoD | GPS proximity + server-side timestamps burned into watermarked images |
| High-density scheduling | Manage 50+ routes from a single screen without losing orientation |
| Warehouse-to-road sync | Single source of truth — stop updates reflect instantly across all views |
| Cost-first infrastructure | Storage analyzer, recursive cleanup, and an emergency upload kill switch |
| Native bilingual (EN / AR) | Structural RTL support built from day one, not bolted on |
| Lean & fast | Vite + React 19 — loads instantly on low-end smartphones in the field |

---

## Pricing

> GoNow is currently in active development (MVP stage). All pricing CTAs direct users to the inquiry form — access is granted by request.

| Plan | Price | Highlights |
|------|-------|------------|
| **Starter** | Free | Up to 500 deliveries/mo · 5 team members · Standard PoD · EN only |
| **Pro** | $49 / mo | Unlimited deliveries · 25 members · AI planning · EN + AR · GPS watermark · CSV/JSON export |
| **Enterprise** | Custom | Unlimited everything · Warehouse manifests · PDF loading slips · Dedicated support · Custom dev |

---

## Pages

| File | Description |
|------|-------------|
| [`index.html`](index.html) | Main landing page — hero, features, how it works, tech stack, contact |
| [`features/planning.html`](features/planning.html) | Smart Route Planning feature detail |
| [`features/verification.html`](features/verification.html) | Reliable Verification (PoD) feature detail |
| [`features/warehouse.html`](features/warehouse.html) | Warehouse & Inventory feature detail |
| [`features/analytics.html`](features/analytics.html) | Analytics & Performance feature detail |
| [`features/management.html`](features/management.html) | Enterprise Management feature detail |
| [`privacy.html`](privacy.html) | Privacy Policy |
| [`terms.html`](terms.html) | Terms of Service |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Hosting | Cloudflare Pages |
| Languages | HTML5, CSS3, Vanilla JavaScript |
| Icons | Font Awesome 6.4.0 |
| Fonts | Google Fonts — Inter |

No build tools. No frameworks. No dependencies to install.

---

## Cloudflare Configuration

| File | Purpose |
|------|---------|
| [`_headers`](_headers) | HTTP response headers — CSP, cache-control, security headers |
| [`_redirects`](_redirects) | URL routing and trailing slash normalisation |
| [`sitemap.xml`](sitemap.xml) | Page index for search engines |

---

## Development

```bash
npx serve .
# or
python3 -m http.server 8080
```

Open any `.html` file directly in a browser. No install step required.

---

## Deployment

```bash
git add .
git commit -m "your change"
git push origin main
```

Cloudflare Pages detects the push and deploys automatically.

---

## Contact

| Channel | Details |
|---------|---------|
| Email | support@gonow.app |
| Office | Msheireb Downtown, Doha, Qatar |
| LinkedIn | [linkedin.com/company/gonow](https://linkedin.com/company/gonow) |
| Twitter / X | [@gonowapp](https://twitter.com/gonowapp) |

---

Developed by [Michael Bitar](https://artiportal.com) · © 2026 GoNow Planner. All rights reserved.
