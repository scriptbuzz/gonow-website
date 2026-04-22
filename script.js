document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    // Scroll Reveal Animation (IntersectionObserver)
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is fully in view
    });

    revealElements.forEach(el => observer.observe(el));

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Offset for fixed nav
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '1rem 10%';
            nav.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
        } else {
            nav.style.padding = '1.5rem 10%';
            nav.style.boxShadow = 'none';
        }
    });

    // Feature card navigation (replaces inline onclick handlers)
    document.querySelectorAll('.feature-card[data-href]').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('a')) {
                window.location.href = card.dataset.href;
            }
        });
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
        });
    });

    // Contact Form Handling
    const form = document.getElementById('inquiry-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const status = document.getElementById('form-status');
            const btn = form.querySelector('.submit-btn');

            btn.textContent = 'Sending...';
            btn.disabled = true;

            // Simulate form submission to info@gonow-systems.com
            setTimeout(() => {
                status.textContent = 'Inquiry sent successfully! We will contact you soon.';
                status.className = 'form-status success';
                btn.textContent = 'Inquiry Sent';
                form.reset();
            }, 1000);
        });
    }

    // Immediate Hero Reveal
    const hero = document.querySelector('.hero');
    if (hero) {
        setTimeout(() => {
            hero.classList.add('active');
        }, 100);
    }

    // Zero-Entry Demo Logic
    const mockUrl = "https://www.google.com/maps/place/Doha+Festival+City/@25.3789312,51.4421111,15z";
    const demoInput = document.getElementById('demo-url-input');
    const demoMockBtn = document.getElementById('demo-mock-btn');
    const demoParseBtn = document.getElementById('demo-parse-btn');
    const demoResult = document.getElementById('demo-result');

    if (demoMockBtn && demoInput) {
        demoMockBtn.addEventListener('click', () => {
            demoInput.value = mockUrl;
        });
    }

    if (demoParseBtn && demoInput && demoResult) {
        demoParseBtn.addEventListener('click', () => {
            const url = demoInput.value;
            if (!url) return;

            // Show loader
            demoResult.innerHTML = '<div class="parsing-loader"></div>';

            setTimeout(() => {
                // Mock parsing logic
                const latMatch = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
                const nameMatch = url.match(/place\/([^\/]+)/);

                const lat = latMatch ? latMatch[1] : "25.3789";
                const lng = latMatch ? latMatch[2] : "51.4421";
                const locName = nameMatch ? decodeURIComponent(nameMatch[1].replace(/\+/g, ' ')) : "Extracted Location";

                const createItem = (label, value, extraStyle) => {
                    const item = document.createElement('div');
                    item.className = 'data-item';
                    if (extraStyle) item.style.cssText = extraStyle;

                    const labelSpan = document.createElement('span');
                    labelSpan.className = 'data-label';
                    labelSpan.textContent = label;

                    const valueSpan = document.createElement('span');
                    valueSpan.className = 'data-value';
                    if (extraStyle && extraStyle.includes('color')) valueSpan.style.color = '#10b981';
                    valueSpan.textContent = value;

                    item.appendChild(labelSpan);
                    item.appendChild(valueSpan);
                    return item;
                };

                const parsed = document.createElement('div');
                parsed.className = 'parsed-data';
                parsed.appendChild(createItem('Status', 'SUCCESS', 'color: #10b981'));
                parsed.appendChild(createItem('Location Name', locName));
                parsed.appendChild(createItem('Latitude', lat));
                parsed.appendChild(createItem('Longitude', lng));
                parsed.appendChild(createItem('Engine Time', '12ms', 'border: none'));

                demoResult.innerHTML = '';
                demoResult.appendChild(parsed);
            }, 800);
        });
    }

    // Mobile menu toggle (placeholders for now)

    // Back to Top Button Logic
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    // Fetch last updated date from GitHub repository (Replaced with Pre-commit Hook)
    const LAST_UPDATED_DATE = "April 22, 2026, 05:24 PM EDT"; // This will be auto-updated by Git pre-commit hook
    const lastUpdatedSpan = document.querySelector('#last-updated .placeholder');
    if (lastUpdatedSpan && LAST_UPDATED_DATE) {
        lastUpdatedSpan.textContent = LAST_UPDATED_DATE;
        lastUpdatedSpan.classList.remove('placeholder');
    }
});

