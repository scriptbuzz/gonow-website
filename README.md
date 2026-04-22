<div align="center">

# GoNow Systems — Marketing Website

**The public-facing marketing website for [GoNow Systems](https://gonow-systems.com)**  
An AI-native logistics management platform for delivery teams.

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

## Overview

A static HTML/CSS/JS website hosted on **Cloudflare Pages**, serving as the landing page for the GoNow product. It showcases features, the tech stack, and provides a contact/inquiry form.

Deployment is fully automatic — every push to `main` triggers a Cloudflare Pages build and goes live in seconds.

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

Open any `.html` file directly in a browser, or spin up a local server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

No install step required.

---

## Deployment

```bash
git add .
git commit -m "your change"
git push origin main
```

Cloudflare Pages detects the push and deploys automatically. No CI configuration needed.

---

## About GoNow

GoNow is a fully AI-native logistics platform — conceived, architected, and built entirely using **[Claude Code](https://claude.ai/code) by Anthropic** and **Google Gemini**, without a single line written in a traditional IDE.

The platform itself (separate repository) is built with React 19, TypeScript, Firebase, Tailwind CSS, Framer Motion, Leaflet, and Google Maps.

Developed by [Michael Bitar](https://artiportal.com).
