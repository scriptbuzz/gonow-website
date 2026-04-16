# GoNow Systems — Marketing Website

The public-facing marketing website for [GoNow Systems](https://gonow-systems.com), an AI-native logistics management platform for delivery teams.

---

## About

This is a static HTML/CSS/JS website hosted on **CloudFlare Pages**. It serves as the landing page for the GoNow product — showcasing features, the tech stack, and providing a contact/inquiry form.

Deployment is automatic: every push to `main` triggers a CloudFlare Pages build and deploys to production.

---

## Pages

| Page | Description |
|---|---|
| `index.html` | Main landing page — hero, features, about, how it works, tech stack, contact |
| `features/planning.html` | Smart Route Planning feature detail |
| `features/verification.html` | Reliable Verification (PoD) feature detail |
| `features/warehouse.html` | Warehouse & Inventory feature detail |
| `features/analytics.html` | Analytics & Performance feature detail |
| `features/management.html` | Enterprise Management feature detail |
| `privacy.html` | Privacy Policy |
| `terms.html` | Terms of Service |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Hosting | CloudFlare Pages |
| Languages | HTML5, CSS3, Vanilla JavaScript |
| Icons | Font Awesome 6.4.0 |
| Fonts | Google Fonts (Inter) |
| Maps embed | YouTube iframe |

No build tools, no frameworks, no dependencies to install.

---

## Development

Open any `.html` file directly in a browser, or use a local server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

---

## Deployment

Push to `main` — CloudFlare Pages handles the rest.

```bash
git add .
git commit -m "your change"
git push origin main
```

CloudFlare configuration is defined in:
- `_headers` — HTTP response headers (CSP, cache-control, security headers)
- `_redirects` — URL routing and trailing slash normalisation
- `sitemap.xml` — Page index for search engines

---

## About GoNow

GoNow is a fully AI-native logistics platform — conceived, architected, and built entirely using **Claude Code by Anthropic** and **Google Gemini**, without a single line written in a traditional IDE.

The platform itself (separate repository) is built with React 19, TypeScript, Firebase, Tailwind CSS, Framer Motion, Leaflet, and Google Maps.

Developed by [Michael Bitar](https://artiportal.com).
