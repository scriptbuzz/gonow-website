# GoNow Website — Issues & Fix Tracker

## Critical
| # | Issue | File | Line(s) | Status |
|---|---|---|---|---|
| 1 | XSS via `innerHTML` with user input in demo parser | script.js | 102–136 | ✅ Fixed |
| 2 | `backToTopBtn` accessed in scroll listener before null check | script.js | 152–160 | ✅ Fixed |
| 3 | Fake contact form — success message but no data sent | script.js | 55–73 | ⏸ Deferred |

## Security
| # | Issue | File | Line(s) | Status |
|---|---|---|---|---|
| 4 | No Content Security Policy (CSP) meta tag | all pages | — | ✅ Fixed |
| 4a | Inline `onclick` handlers on feature cards prevent strict CSP (need to move to script.js) | index.html | 71–111 | ✅ Fixed |
| 5 | External CDN resources missing SRI hashes (Font Awesome, Google Fonts) | index.html | 14, 17 | ✅ Fixed (Font Awesome only — Google Fonts doesn't support SRI) |
| 6 | External links missing `rel="noopener noreferrer"` | index.html, privacy.html, terms.html | various | ✅ Fixed (all 9 occurrences across 8 files) |

## JavaScript
| # | Issue | File | Line(s) | Status |
|---|---|---|---|---|
| 7 | `console.log` left in production code | script.js | 147 | ✅ Fixed |
| 8 | No null guards before DOM manipulation (demo elements) | script.js | 85–88 | ✅ Fixed |

## HTML / SEO
| # | Issue | File | Line(s) | Status |
|---|---|---|---|---|
| 9 | Missing Open Graph / Twitter card meta tags | index.html | — | ✅ Fixed |
| 10 | Missing canonical URLs | all pages | — | ✅ Fixed (all 8 pages) |
| 11 | No sitemap.xml | — | — | ✅ Fixed |
| 12 | No JSON-LD schema/structured data | index.html | — | ✅ Fixed |
| 13 | Missing form `<label>` elements (WCAG) | index.html | 351–368 | ✅ Fixed |

## CSS / Performance
| # | Issue | File | Line(s) | Status |
|---|---|---|---|---|
| 14 | Desktop-first CSS (should be mobile-first) | style.css | various | ⏸ Deferred |
| 15 | Google Fonts missing `display=swap` (render blocking) | index.html | 14 | ✅ Already present |

## CloudFlare
| # | Issue | File | Line(s) | Status |
|---|---|---|---|---|
| 16 | Missing `_headers` file for cache-control | — | — | ✅ Fixed |
| 17 | Missing `_redirects` file for URL routing | — | — | ✅ Fixed |
