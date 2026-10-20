/* ==========================================================================
   POP — "POP MEAN" | MASTER JAVASCRIPT ENGINE (main.js)
   3D Perspective Tilt, Custom SVG Bottle Generator, Catalog, Cart & Studio
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     1. BRAND & PRODUCT CATALOG DATA (POP — "Pop Mean")
     Sizes: 330ml, 500ml, 1000ml (1 Liter), 1500ml (1.5 Liter)
     MOQ Tiers: 50 Bottles, 100 Bottles, 250 Bottles, 500+ Bottles
     ------------------------------------------------------------------------ */
  const POP_PRODUCTS = [
    {
      id: 'pop-500-custom-corp',
      name: 'POP 500ml Custom Branded Corporate Bottle',
      shortName: 'POP 500ml Corporate',
      category: 'corporate',
      categoryLabel: 'Corporate Branding Series',
      size: '500ml',
      moq: 100,
      unitPrice: 45,
      packPrice: 4500,
      badge: 'Bestseller • 500ml',
      capColor: '#00b4d8',
      labelBg: '#071e34',
      labelAccent: '#00e5ff',
      brandText: 'YOUR LOGO',
      subText: 'POP MEAN • 500ML',
      specs: ['500ml Standard', 'Waterproof Matte Label', 'Min 100 Bottles'],
      description: 'Our signature 500ml pure mineralized water bottle featuring full-wrap waterproof custom branding for corporate boardrooms, offices, and client hospitality.'
    },
    {
      id: 'pop-1000-executive',
      name: 'POP 1 Liter (1000ml) Executive Hydration Bottle',
      shortName: 'POP 1L Executive',
      category: 'corporate',
      categoryLabel: 'Corporate Branding Series',
      size: '1000ml',
      moq: 50,
      unitPrice: 70,
      packPrice: 3500,
      badge: '1 Liter • Executive',
      capColor: '#0077b6',
      labelBg: '#041322',
      labelAccent: '#38bdf8',
      brandText: 'EXECUTIVE',
      subText: 'POP MEAN • 1 LITER',
      specs: ['1000ml (1 Liter)', 'Crystal Heavy PET', 'Min 50 Bottles'],
      description: 'Designed for conferences, hotels, and executive desks. Full 1 Liter capacity with high-definition custom name or company logo wrap.'
    },
    {
      id: 'pop-1500-jumbo-supply',
      name: 'POP 1.5 Liter (1500ml) Pure Family & Event Supply',
      shortName: 'POP 1.5L Jumbo',
      category: 'bulk',
      categoryLabel: 'Bulk Hydration Supply',
      size: '1500ml',
      moq: 50,
      unitPrice: 95,
      packPrice: 4750,
      badge: '1.5 Liter • Max Value',
      capColor: '#0284c7',
      labelBg: '#0c2b48',
      labelAccent: '#6ee7b7',
      brandText: 'POP PURE',
      subText: 'POP MEAN • 1.5 LITER',
      specs: ['1500ml (1.5 Liter)', '7-Stage RO + UV Pure', 'Min 50 Bottles'],
      description: 'Maximum hydration 1.5 Liter bottle engineered for dining tables, corporate cafeterias, retail distribution, and long-duration outdoor events.'
    },
    {
      id: 'pop-500-wedding-gold',
      name: 'POP 500ml Bespoke Wedding & Nikkah Monogram Edition',
      shortName: 'POP 500ml Wedding Gold',
      category: 'events',
      categoryLabel: 'Weddings & Events Series',
      size: '500ml',
      moq: 50,
      unitPrice: 55,
      packPrice: 2750,
      badge: 'Metallic Foil Label',
      capColor: '#d97706',
      labelBg: '#1e1b18',
      labelAccent: '#fbbf24',
      brandText: 'A & Z • WEDDING',
      subText: 'POP MEAN • 500ML',
      specs: ['500ml Event Size', 'Gold Foil Monogram', 'Min 50 Bottles'],
      description: 'Elevate weddings, receptions, and private galas with custom couple names, event dates, and gold/silver metallic foil waterproof labels.'
    },
    {
      id: 'pop-330-mini-event',
      name: 'POP 330ml Pocket Event & Airline Hospitality Bottle',
      shortName: 'POP 330ml Event Mini',
      category: 'events',
      categoryLabel: 'Weddings & Events Series',
      size: '330ml',
      moq: 100,
      unitPrice: 35,
      packPrice: 3500,
      badge: 'Compact 330ml',
      capColor: '#10b981',
      labelBg: '#062c24',
      labelAccent: '#34d399',
      brandText: 'VIP EVENT',
      subText: 'POP MEAN • 330ML',
      specs: ['330ml Mini', 'Zero-Waste Portion', 'Min 100 Bottles'],
      description: 'Compact, easy-carry 330ml personalized bottles ideal for seminars, welcome trays, salons, clinics, and high-turnover hospitality.'
    },
    {
      id: 'pop-1000-horeca-glass',
      name: 'POP 1 Liter Luxury Glass Special Edition (HoReCa)',
      shortName: 'POP 1L Glass Special',
      category: 'special',
      categoryLabel: 'Special Editions',
      size: '1000ml',
      moq: 50,
      unitPrice: 160,
      packPrice: 8000,
      badge: 'Special Edition',
      capColor: '#0f172a',
      labelBg: '#0f172a',
      labelAccent: '#00e5ff',
      brandText: 'POP RESERVE',
      subText: 'POP MEAN • 1L GLASS',
      specs: ['1000ml Flint Glass', 'Ceramic Screen Print', 'Min 50 Bottles'],
      description: 'Ultra-prestige 1 Liter reusable glass bottle with direct ceramic name branding for five-star suites, fine dining, and VIP gifting.'
    },
    {
      id: 'pop-500-alkaline-sport',
      name: 'POP 500ml pH 8.5+ Alkaline & Electrolyte Sport Edition',
      shortName: 'POP 500ml Alkaline',
      category: 'special',
      categoryLabel: 'Special Editions',
      size: '500ml',
      moq: 100,
      unitPrice: 65,
      packPrice: 6500,
      badge: 'pH 8.5+ Sport Cap',
      capColor: '#00e5ff',
      labelBg: '#05192d',
      labelAccent: '#00e5ff',
      brandText: 'POP ACTIVE',
      subText: 'POP MEAN • pH 8.5+',
      specs: ['500ml Flip-Sport Cap', 'Ionized Alkaline', 'Min 100 Bottles'],
      description: 'High-pH ionized hydration with custom gym, marathon, or fitness club branding and ergonomic flip-top sport nozzle.'
    },
    {
      id: 'pop-1500-corporate-bulk',
      name: 'POP 1.5 Liter Corporate Monthly Pantry Supply Pack',
      shortName: 'POP 1.5L Office Pack',
      category: 'bulk',
      categoryLabel: 'Bulk Hydration Supply',
      size: '1500ml',
      moq: 100,
      unitPrice: 88,
      packPrice: 8800,
      badge: 'Wholesale Rate',
      capColor: '#0077b6',
      labelBg: '#071e34',
      labelAccent: '#00b4d8',
      brandText: 'CORP SUPPLY',
      subText: 'POP MEAN • 1.5 LITER',
      specs: ['1500ml Heavy Duty', 'Scheduled Delivery', 'Min 100 Bottles'],
      description: 'Cost-effective 1.5L bulk hydration program with your organization logo printed on every bottle and automated weekly restocking.'
    }
  ];

  window.POP_PRODUCTS = POP_PRODUCTS;

  /* ------------------------------------------------------------------------
     2. DYNAMIC 3D-STYLE SVG BOTTLE GENERATOR
     ------------------------------------------------------------------------ */
  function generateBottleSVG(options = {}) {
    const {
      size = '500ml',
      capColor = '#00b4d8',
      labelBg = '#071e34',
      labelAccent = '#00e5ff',
      brandText = 'POP MEAN',
      subText = 'CUSTOM BRANDED',
      width = 150,
      height = 220
    } = options;

    const scaleMap = {
      '330ml': 0.86,
      '500ml': 0.94,
      '1000ml': 1.0,
      '1500ml': 1.06
    };
    const sc = scaleMap[size] || 1;
    const uid = 'btl-' + Math.random().toString(36).substring(2, 8);

    return `
      <svg class="pop-bottle-svg" width="${width}" height="${height}" viewBox="0 0 180 280" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: scale(${sc});">
        <defs>
          <linearGradient id="${uid}-body" x1="35" y1="30" x2="145" y2="260" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.92"/>
            <stop offset="28%" stop-color="#caf0f8" stop-opacity="0.78"/>
            <stop offset="68%" stop-color="#90e0ef" stop-opacity="0.65"/>
            <stop offset="100%" stop-color="#00b4d8" stop-opacity="0.82"/>
          </linearGradient>
          <linearGradient id="${uid}-water" x1="45" y1="80" x2="135" y2="255" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#00e5ff" stop-opacity="0.32"/>
            <stop offset="100%" stop-color="#0077b6" stop-opacity="0.58"/>
          </linearGradient>
          <linearGradient id="${uid}-shine" x1="58" y1="50" x2="58" y2="245" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.85"/>
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0.05"/>
          </linearGradient>
        </defs>

        <!-- Floor Shadow -->
        <ellipse cx="90" cy="268" rx="48" ry="7" fill="rgba(4, 19, 34, 0.22)"/>

        <!-- Bottle Cap -->
        <rect x="70" y="14" width="40" height="20" rx="5" fill="${capColor}"/>
        <rect x="68" y="31" width="44" height="5" rx="2.5" fill="${labelAccent}"/>
        <line x1="76" y1="16" x2="76" y2="30" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
        <line x1="84" y1="16" x2="84" y2="30" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
        <line x1="96" y1="16" x2="96" y2="30" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
        <line x1="104" y1="16" x2="104" y2="30" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>

        <!-- Bottle Neck & Shoulders -->
        <path d="M73 36 H107 L116 62 C132 76 138 92 138 112 V238 C138 252 127 262 113 262 H67 C53 262 42 252 42 238 V112 C42 92 48 76 64 62 L73 36 Z"
              fill="url(#${uid}-body)" stroke="rgba(0, 180, 216, 0.55)" stroke-width="2"/>

        <!-- Inner Pure Water Fill -->
        <path d="M45 96 Q90 90 135 96 V236 C135 248 125 258 112 258 H68 C55 258 45 248 45 236 V96 Z"
              fill="url(#${uid}-water)"/>

        <!-- Ribbed Grip Contours -->
        <line x1="44" y1="88" x2="136" y2="88" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/>
        <line x1="44" y1="215" x2="136" y2="215" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/>
        <line x1="44" y1="232" x2="136" y2="232" stroke="rgba(255,255,255,0.45)" stroke-width="1.5"/>

        <!-- Custom Branded Wrap Label -->
        <rect x="42" y="108" width="96" height="90" rx="4" fill="${labelBg}" stroke="${labelAccent}" stroke-width="1.8"/>
        <rect x="42" y="108" width="96" height="8" fill="${labelAccent}"/>

        <!-- POP Crest on Label -->
        <circle cx="90" cy="133" r="11" fill="rgba(0, 229, 255, 0.16)" stroke="${labelAccent}" stroke-width="1.3"/>
        <path d="M90 125 C90 125 84 132 84 136 C84 139.3 86.7 142 90 142 C93.3 142 96 139.3 96 136 C96 132 90 125 90 125 Z" fill="${labelAccent}"/>

        <!-- Dynamic Custom Brand Text -->
        <text x="90" y="162" text-anchor="middle" fill="#ffffff" font-family="Space Grotesk, sans-serif" font-weight="700" font-size="11.5" letter-spacing="0.8">${brandText.slice(0, 15)}</text>
        <text x="90" y="177" text-anchor="middle" fill="${labelAccent}" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="7.5" letter-spacing="1.2">${subText.slice(0, 20)}</text>
        <text x="90" y="191" text-anchor="middle" fill="rgba(255,255,255,0.65)" font-family="Plus Jakarta Sans, sans-serif" font-weight="600" font-size="6.5">PURE CUSTOMIZED WATER • ${size.toUpperCase()}</text>

        <!-- Vertical 3D Specular Highlight -->
        <rect x="52" y="66" width="10" height="178" rx="5" fill="url(#${uid}-shine)"/>
      </svg>
    `;
  }

  window.generateBottleSVG = generateBottleSVG;

  /* ------------------------------------------------------------------------
     3. SHOPPING CART STATE MANAGEMENT (localStorage)
     ------------------------------------------------------------------------ */
  const CART_KEY = 'pop_mean_water_cart_v1';

  function getCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    updateCartBadge();
  }

  function updateCartBadge() {
    const items = getCart();
    const totalPacks = items.reduce((sum, item) => sum + Number(item.batches || 1), 0);
    document.querySelectorAll('.cart-count-badge').forEach((el) => {
      el.textContent = totalPacks;
    });
  }

  function addToCart(item) {
    const cart = getCart();
    const signature = `${item.id}__${item.customBrand || 'Standard'}__${item.size || '500ml'}__${item.bottlesPerBatch || item.moq || 100}`;
    const existing = cart.find((i) => i.signature === signature);

    if (existing) {
      existing.batches += Number(item.batches || 1);
    } else {
      cart.push({
        signature,
        id: item.id,
        name: item.name,
        size: item.size || '500ml',
        customBrand: item.customBrand || 'POP Mean Standard Branding',
        capColor: item.capColor || '#00b4d8',
        labelBg: item.labelBg || '#071e34',
        labelAccent: item.labelAccent || '#00e5ff',
        bottlesPerBatch: Number(item.bottlesPerBatch || item.moq || 100),
        unitPrice: Number(item.unitPrice || 45),
        batches: Number(item.batches || 1)
      });
    }

    saveCart(cart);
    showToast(`Added "${item.name}" (${item.size}) to your order bag!`);
  }

  window.PopCart = {
    getCart,
    saveCart,
    addToCart,
    updateCartBadge
  };

  /* ------------------------------------------------------------------------
     4. TOAST NOTIFICATION HELPER
     ------------------------------------------------------------------------ */
  function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'pop-toast';
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
        <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 260);
    }, 3200);
  }

  window.showPopToast = showToast;

  /* ------------------------------------------------------------------------
     5. HEADER SCROLL, PROGRESS BAR & FLOATING BACK-TO-TOP
     ------------------------------------------------------------------------ */
  function initScrollEffects() {
    const header = document.querySelector('.site-header');
    const progressBar = document.querySelector('.scroll-progress-bar');
    const backToTopBtn = document.querySelector('.fab-top');

    function onScroll() {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

      if (progressBar) {
        progressBar.style.width = `${pct}%`;
      }
      if (header) {
        header.classList.toggle('scrolled', scrollY > 36);
      }
      if (backToTopBtn) {
        backToTopBtn.classList.toggle('visible', scrollY > 380);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('mobile-open');
      });
    }
  }

  /* ------------------------------------------------------------------------
     6. 3D PERSPECTIVE TILT ENGINE & HERO 3D STAGE INTERACTION
     ------------------------------------------------------------------------ */
  function init3DTiltEngine() {
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5.5;
        const rotateY = ((x - centerX) / centerX) * 5.5;

        card.style.setProperty('--mx', `${x}px`);
        card.style.setProperty('--my', `${y}px`);
        card.style.transform = `perspective(950px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(950px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });

    // Hero 3D Bottle Stage Interactive Parallax + Size Switcher
    const heroStage = document.querySelector('.hero-3d-stage');
    if (heroStage) {
      heroStage.addEventListener('mousemove', (e) => {
        const rect = heroStage.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        heroStage.style.transform = `rotateY(${(x * 14).toFixed(2)}deg) rotateX(${(-y * 14).toFixed(2)}deg)`;
      });

      heroStage.addEventListener('mouseleave', () => {
        heroStage.style.transform = 'rotateY(0deg) rotateX(0deg)';
      });
    }

    // Hero Bottle Size Switcher Buttons
    const heroBottleMount = document.getElementById('hero-bottle-3d-mount');
    const stageSizeBtns = document.querySelectorAll('.stage-size-btn');
    if (heroBottleMount) {
      const renderHeroBottle = (sizeLabel) => {
        heroBottleMount.innerHTML = generateBottleSVG({
          size: sizeLabel,
          capColor: '#00e5ff',
          labelBg: '#041322',
          labelAccent: '#00e5ff',
          brandText: 'POP MEAN',
          subText: `CUSTOM • ${sizeLabel.toUpperCase()}`,
          width: 225,
          height: 335
        });
      };
      renderHeroBottle('500ml');

      stageSizeBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          stageSizeBtns.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          renderHeroBottle(btn.dataset.size || '500ml');
        });
      });
    }
  }

  /* ------------------------------------------------------------------------
     7. TYPEWRITER HERO EFFECT & ANIMATED COUNTERS + 3D SCROLL REVEAL
     ------------------------------------------------------------------------ */
  function initTypewriterAndCounters() {
    const typeEl = document.getElementById('hero-typewriter');
    if (typeEl) {
      const words = [
        'Custom Name & Logo Bottles',
        '500ml • 1 Liter • 1.5 Liter Sizes',
        '50 & 100+ Bottle Event Batches',
        'Corporate & Wedding Branding'
      ];
      let wordIdx = 0;
      let charIdx = 0;
      let deleting = false;

      const tick = () => {
        const current = words[wordIdx];
        if (!deleting) {
          charIdx++;
          typeEl.textContent = current.slice(0, charIdx);
          if (charIdx === current.length) {
            deleting = true;
            setTimeout(tick, 1900);
            return;
          }
        } else {
          charIdx--;
          typeEl.textContent = current.slice(0, charIdx);
          if (charIdx === 0) {
            deleting = false;
            wordIdx = (wordIdx + 1) % words.length;
          }
        }
        setTimeout(tick, deleting ? 36 : 68);
      };
      tick();
    }

    // Scroll Reveal & Counter Observer
    const revealEls = document.querySelectorAll('.reveal-3d');
    const counterEls = document.querySelectorAll('[data-count]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            if (entry.target.hasAttribute('data-count') && !entry.target.dataset.counted) {
              entry.target.dataset.counted = 'true';
              animateCounter(entry.target);
            }
          }
        });
      },
      { threshold: 0.14 }
    );

    revealEls.forEach((el) => observer.observe(el));
    counterEls.forEach((el) => observer.observe(el));
  }

  function animateCounter(el) {
    const target = parseFloat(el.dataset.count || '0');
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(eased * target);
      el.textContent = val.toLocaleString() + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    }
    requestAnimationFrame(step);
  }

  /* ------------------------------------------------------------------------
     8. PRODUCT CARD RENDERER (HOME & COLLECTIONS CATALOG)
     ------------------------------------------------------------------------ */
  function renderProductCardHTML(product) {
    const svgGraphic = generateBottleSVG({
      size: product.size,
      capColor: product.capColor,
      labelBg: product.labelBg,
      labelAccent: product.labelAccent,
      brandText: product.brandText,
      subText: product.subText,
      width: 145,
      height: 215
    });

    const specsHTML = product.specs
      .map((s) => `<span class="spec-pill">${s}</span>`)
      .join('');

    return `
      <article class="product-card" data-category="${product.category}" data-size="${product.size}" data-moq="${product.moq}">
        <div class="product-visual">
          <span class="product-badge-top">${product.badge}</span>
          <span class="product-moq-tag">MOQ: ${product.moq} Bottles</span>
          <div class="product-svg-wrap">${svgGraphic}</div>
        </div>
        <div class="product-body">
          <div class="product-category">${product.categoryLabel}</div>
          <h3 class="product-title">${product.name}</h3>
          <p class="product-desc">${product.description}</p>
          <div class="product-specs-row">${specsHTML}</div>
          <div class="product-footer">
            <div class="product-price-block">
              <span>PKR ${product.unitPrice}/bottle (${product.moq} pack)</span>
              <strong>PKR ${product.packPrice.toLocaleString()}</strong>
            </div>
            <div class="product-actions">
              <a href="custom.html?product=${product.id}&size=${product.size}" class="btn btn-outline-dark btn-sm" title="Customize Name/Logo">
                Customize
              </a>
              <button type="button" class="btn btn-primary btn-sm js-add-product" data-id="${product.id}">
                Add Batch
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function initProductCatalogGrids() {
    // Home Featured Grid
    const homeGrid = document.getElementById('home-products-grid');
    if (homeGrid) {
      homeGrid.innerHTML = POP_PRODUCTS.slice(0, 4).map(renderProductCardHTML).join('');
    }

    // Full Catalog Grid on collections.html
    const catalogGrid = document.getElementById('catalog-products-grid');
    if (catalogGrid) {
      const renderFiltered = () => {
        const catFilter = document.querySelector('.js-cat-filter.active')?.dataset.filter || 'all';
        const sizeFilter = document.getElementById('filter-size-select')?.value || 'all';
        const moqFilter = document.getElementById('filter-moq-select')?.value || 'all';
        const searchVal = (document.getElementById('filter-search-input')?.value || '').toLowerCase();

        const filtered = POP_PRODUCTS.filter((p) => {
          const matchCat = catFilter === 'all' || p.category === catFilter;
          const matchSize = sizeFilter === 'all' || p.size === sizeFilter;
          const matchMoq = moqFilter === 'all' || String(p.moq) === moqFilter;
          const matchSearch =
            !searchVal ||
            p.name.toLowerCase().includes(searchVal) ||
            p.description.toLowerCase().includes(searchVal) ||
            p.size.toLowerCase().includes(searchVal);
          return matchCat && matchSize && matchMoq && matchSearch;
        });

        const countEl = document.getElementById('catalog-result-count');
        if (countEl) {
          countEl.textContent = `Showing ${filtered.length} of ${POP_PRODUCTS.length} Custom & Supply Bottle Lines`;
        }

        if (filtered.length === 0) {
          catalogGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: #fff; border-radius: 20px;">
              <h3>No matching bottle configuration found</h3>
              <p style="color: var(--text-muted); margin: 8px 0 18px;">Try clearing your size or category filter or build a custom bottle in our studio.</p>
              <a href="custom.html" class="btn btn-primary">Launch Custom Branding Studio</a>
            </div>
          `;
        } else {
          catalogGrid.innerHTML = filtered.map(renderProductCardHTML).join('');
        }
      };

      // Check URL query parameters from Quick Finder
      const params = new URLSearchParams(window.location.search);
      const qSize = params.get('size');
      const qCat = params.get('category');
      if (qSize && document.getElementById('filter-size-select')) {
        document.getElementById('filter-size-select').value = qSize;
      }
      if (qCat) {
        document.querySelectorAll('.js-cat-filter').forEach((btn) => {
          btn.classList.toggle('active', btn.dataset.filter === qCat);
        });
      }

      document.querySelectorAll('.js-cat-filter').forEach((btn) => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.js-cat-filter').forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          renderFiltered();
        });
      });

      ['filter-size-select', 'filter-moq-select', 'filter-search-input'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          el.addEventListener('input', renderFiltered);
          el.addEventListener('change', renderFiltered);
        }
      });

      renderFiltered();
    }

    // Delegate Add-to-Cart clicks
    document.body.addEventListener('click', (e) => {
      const btn = e.target.closest('.js-add-product');
      if (!btn) return;
      const prod = POP_PRODUCTS.find((p) => p.id === btn.dataset.id);
      if (prod) {
        addToCart({
          id: prod.id,
          name: prod.name,
          size: prod.size,
          customBrand: `${prod.brandText} (Custom Branded)`,
          capColor: prod.capColor,
          labelBg: prod.labelBg,
          labelAccent: prod.labelAccent,
          bottlesPerBatch: prod.moq,
          unitPrice: prod.unitPrice,
          batches: 1
        });
      }
    });
  }

  /* ------------------------------------------------------------------------
     9. CUSTOM BRANDING & LABEL BUILDER STUDIO (custom.html)
     ------------------------------------------------------------------------ */
  function initCustomBrandingStudio() {
    const studioPreviewMount = document.getElementById('studio-live-svg-mount');
    if (!studioPreviewMount) return;

    const state = {
      size: '500ml',
      unitPrice: 45,
      moq: 100,
      capColor: '#00b4d8',
      labelBg: '#071e34',
      labelAccent: '#00e5ff',
      brandText: 'YOUR BRAND NAME',
      subText: 'POP MEAN • PURE WATER',
      categoryType: 'Corporate Branding',
      finishType: 'Waterproof Matte Wrap'
    };

    const params = new URLSearchParams(window.location.search);
    if (params.get('size')) {
      state.size = params.get('size');
    }

    const priceBySize = {
      '330ml': 35,
      '500ml': 45,
      '1000ml': 70,
      '1500ml': 95
    };

    function updateStudioUI() {
      state.unitPrice = priceBySize[state.size] || 45;
      const totalCost = state.unitPrice * state.moq;

      studioPreviewMount.innerHTML = generateBottleSVG({
        size: state.size,
        capColor: state.capColor,
        labelBg: state.labelBg,
        labelAccent: state.labelAccent,
        brandText: state.brandText || 'POP MEAN',
        subText: state.subText || `PURE • ${state.size}`,
        width: 230,
        height: 340
      });

      const summarySize = document.getElementById('studio-summary-size');
      const summaryQty = document.getElementById('studio-summary-qty');
      const summaryUnit = document.getElementById('studio-summary-unit');
      const summaryTotal = document.getElementById('studio-summary-total');

      if (summarySize) summarySize.textContent = state.size;
      if (summaryQty) summaryQty.textContent = `${state.moq} Custom Bottles`;
      if (summaryUnit) summaryUnit.textContent = `PKR ${state.unitPrice} / bottle`;
      if (summaryTotal) summaryTotal.textContent = `PKR ${totalCost.toLocaleString()}`;
    }

    // Size Selector Pills
    document.querySelectorAll('[data-studio-size]').forEach((btn) => {
      if (btn.dataset.studioSize === state.size) {
        document.querySelectorAll('[data-studio-size]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      }
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-studio-size]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.size = btn.dataset.studioSize;
        updateStudioUI();
      });
    });

    // MOQ Batch Quantity Pills (50, 100, 250, 500, 1000)
    document.querySelectorAll('[data-studio-moq]').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-studio-moq]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.moq = parseInt(btn.dataset.studioMoq, 10) || 100;
        updateStudioUI();
      });
    });

    // Cap Color Swatches
    document.querySelectorAll('[data-studio-cap]').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-studio-cap]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.capColor = btn.dataset.studioCap;
        updateStudioUI();
      });
    });

    // Label Theme Swatches
    document.querySelectorAll('[data-studio-label]').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-studio-label]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.labelBg = btn.dataset.studioLabel;
        state.labelAccent = btn.dataset.studioAccent || '#00e5ff';
        updateStudioUI();
      });
    });

    // Brand Name & Tagline Inputs
    const brandInput = document.getElementById('studio-brand-input');
    const subInput = document.getElementById('studio-sub-input');
    if (brandInput) {
      brandInput.addEventListener('input', (e) => {
        state.brandText = e.target.value.toUpperCase() || 'YOUR BRAND NAME';
        updateStudioUI();
      });
    }
    if (subInput) {
      subInput.addEventListener('input', (e) => {
        state.subText = e.target.value.toUpperCase() || 'POP MEAN • PURE WATER';
        updateStudioUI();
      });
    }

    // Add Custom Configured Batch to Cart
    const addStudioBtn = document.getElementById('studio-add-cart-btn');
    if (addStudioBtn) {
      addStudioBtn.addEventListener('click', () => {
        addToCart({
          id: `pop-custom-${state.size}`,
          name: `POP ${state.size} Custom Branded Bottle (${state.brandText})`,
          size: state.size,
          customBrand: `${state.brandText} — ${state.subText}`,
          capColor: state.capColor,
          labelBg: state.labelBg,
          labelAccent: state.labelAccent,
          bottlesPerBatch: state.moq,
          unitPrice: state.unitPrice,
          batches: 1
        });
      });
    }

    updateStudioUI();
  }

  /* ------------------------------------------------------------------------
     10. SHOPPING BAG & CHECKOUT ENGINE (cart.html)
     ------------------------------------------------------------------------ */
  function initCartPage() {
    const cartMount = document.getElementById('cart-items-mount');
    if (!cartMount) return;

    function renderCart() {
      const items = getCart();
      const subtotalEl = document.getElementById('cart-subtotal');
      const deliveryEl = document.getElementById('cart-delivery');
      const totalEl = document.getElementById('cart-grand-total');
      const totalBottlesEl = document.getElementById('cart-total-bottles');

      if (items.length === 0) {
        cartMount.innerHTML = `
          <div style="text-align: center; padding: 54px 24px; background: #fff; border-radius: 22px; border: 1px solid rgba(7,30,52,0.1);">
            <h3 style="margin-bottom: 10px;">Your POP Custom Hydration Bag is Empty</h3>
            <p style="color: var(--text-muted); margin-bottom: 22px;">Start by selecting 500ml, 1 Liter, or 1.5 Liter custom-branded bottle batches (50 or 100+ bottles).</p>
            <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
              <a href="collections.html" class="btn btn-primary">Explore Bottle Sizes</a>
              <a href="custom.html" class="btn btn-outline-dark">Customize Your Label</a>
            </div>
          </div>
        `;
        if (subtotalEl) subtotalEl.textContent = 'PKR 0';
        if (deliveryEl) deliveryEl.textContent = 'PKR 0';
        if (totalEl) totalEl.textContent = 'PKR 0';
        if (totalBottlesEl) totalBottlesEl.textContent = '0 Bottles';
        return;
      }

      let subtotal = 0;
      let totalBottles = 0;

      cartMount.innerHTML = items
        .map((item, idx) => {
          const lineBottles = item.bottlesPerBatch * item.batches;
          const linePrice = lineBottles * item.unitPrice;
          subtotal += linePrice;
          totalBottles += lineBottles;

          const miniSvg = generateBottleSVG({
            size: item.size,
            capColor: item.capColor,
            labelBg: item.labelBg,
            labelAccent: item.labelAccent,
            brandText: item.customBrand.split('—')[0].trim(),
            subText: item.size,
            width: 72,
            height: 108
          });

          return `
            <div style="display: grid; grid-template-columns: 90px 1fr auto; gap: 20px; align-items: center; background: #fff; padding: 20px; border-radius: 18px; border: 1px solid rgba(7,30,52,0.1); margin-bottom: 16px;">
              <div style="background: var(--bg-ice); border-radius: 14px; display: flex; align-items: center; justify-content: center; padding: 8px;">
                ${miniSvg}
              </div>
              <div>
                <span class="spec-pill" style="margin-bottom: 6px; display: inline-block;">Size: ${item.size} • Batch: ${item.bottlesPerBatch} Bottles</span>
                <h4 style="font-size: 1.08rem; margin-bottom: 4px;">${item.name}</h4>
                <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 8px;">Custom Branding: <strong>${item.customBrand}</strong></p>
                <div style="font-size: 0.82rem; color: var(--aqua-deep); font-weight: 700;">
                  PKR ${item.unitPrice}/bottle × ${lineBottles} bottles = PKR ${linePrice.toLocaleString()}
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 10px;">
                <div style="display: inline-flex; align-items: center; gap: 8px; background: var(--bg-light); padding: 5px 10px; border-radius: 10px;">
                  <button type="button" class="js-cart-dec" data-idx="${idx}" style="font-weight: 800; padding: 2px 8px;">−</button>
                  <span style="font-weight: 700; font-size: 0.88rem;">${item.batches} Batch</span>
                  <button type="button" class="js-cart-inc" data-idx="${idx}" style="font-weight: 800; padding: 2px 8px;">+</button>
                </div>
                <button type="button" class="js-cart-remove" data-idx="${idx}" style="font-size: 0.78rem; color: #ef4444; font-weight: 700;">Remove</button>
              </div>
            </div>
          `;
        })
        .join('');

      const deliveryFee = subtotal >= 10000 ? 0 : 600;
      const grandTotal = subtotal + deliveryFee;

      if (subtotalEl) subtotalEl.textContent = `PKR ${subtotal.toLocaleString()}`;
      if (deliveryEl) deliveryEl.textContent = deliveryFee === 0 ? 'FREE (Bulk Order)' : `PKR ${deliveryFee}`;
      if (totalEl) totalEl.textContent = `PKR ${grandTotal.toLocaleString()}`;
      if (totalBottlesEl) totalBottlesEl.textContent = `${totalBottles.toLocaleString()} Custom Bottles`;
    }

    cartMount.addEventListener('click', (e) => {
      const items = getCart();
      const incBtn = e.target.closest('.js-cart-inc');
      const decBtn = e.target.closest('.js-cart-dec');
      const remBtn = e.target.closest('.js-cart-remove');

      if (incBtn) {
        const i = Number(incBtn.dataset.idx);
        if (items[i]) items[i].batches += 1;
        saveCart(items);
        renderCart();
      } else if (decBtn) {
        const i = Number(decBtn.dataset.idx);
        if (items[i]) {
          items[i].batches = Math.max(1, items[i].batches - 1);
          saveCart(items);
          renderCart();
        }
      } else if (remBtn) {
        const i = Number(remBtn.dataset.idx);
        items.splice(i, 1);
        saveCart(items);
        renderCart();
      }
    });

    // Checkout Submission (WhatsApp / Email Direct Dispatch)
    const checkoutForm = document.getElementById('pop-checkout-form');
    if (checkoutForm) {
      checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const items = getCart();
        if (items.length === 0) {
          showToast('Please add at least one bottle batch to your bag first.');
          return;
        }
        const name = document.getElementById('chk-name')?.value || 'Valued Client';
        const phone = document.getElementById('chk-phone')?.value || '';
        const city = document.getElementById('chk-city')?.value || 'Karachi';
        const brandNote = document.getElementById('chk-brand-note')?.value || 'Standard Custom Logo';

        const lines = items.map(
          (it) =>
            `• ${it.name} (${it.size}) | ${it.bottlesPerBatch * it.batches} Bottles | Brand: ${it.customBrand}`
        );
        const message = `Hello POP (Pop Mean) Team!%0A%0ANew Custom Water Bottle Order:%0AName: ${encodeURIComponent(
          name
        )}%0APhone: ${encodeURIComponent(phone)}%0ACity: ${encodeURIComponent(
          city
        )}%0ABranding Note: ${encodeURIComponent(brandNote)}%0A%0AOrder Items:%0A${encodeURIComponent(
          lines.join('\n')
        )}`;

        showToast('Order summary prepared! Launching WhatsApp confirmation...');
        setTimeout(() => {
          window.open(`https://wa.me/923001234567?text=${message}`, '_blank');
        }, 700);
      });
    }

    renderCart();
  }

  /* ------------------------------------------------------------------------
     11. FAQ ACCORDION & GALLERY QUICK-VIEW MODAL
     ------------------------------------------------------------------------ */
  function initInteractiveWidgets() {
    // FAQ Accordion
    document.querySelectorAll('.faq-trigger').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const content = item.querySelector('.faq-content');
        const isOpen = item.classList.contains('open');

        document.querySelectorAll('.faq-item').forEach((other) => {
          other.classList.remove('open');
          const c = other.querySelector('.faq-content');
          if (c) c.style.maxHeight = null;
        });

        if (!isOpen) {
          item.classList.add('open');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });

    // Lookbook Gallery Filtering & Modal
    const galleryFilterBtns = document.querySelectorAll('.js-gallery-filter');
    const galleryItems = document.querySelectorAll('.js-gallery-item');
    if (galleryFilterBtns.length > 0) {
      galleryFilterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          galleryFilterBtns.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          const cat = btn.dataset.filter;
          galleryItems.forEach((card) => {
            const match = cat === 'all' || card.dataset.category === cat;
            card.style.display = match ? 'flex' : 'none';
          });
        });
      });
    }

    // Contact Form Handler
    const contactForm = document.getElementById('pop-contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Thank you! Your custom bottle inquiry has been received by the POP team.');
        contactForm.reset();
      });
    }
  }

  /* ------------------------------------------------------------------------
     12. INITIALIZE ON DOM READY
     ------------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    initScrollEffects();
    init3DTiltEngine();
    initTypewriterAndCounters();
    initProductCatalogGrids();
    initCustomBrandingStudio();
    initCartPage();
    initInteractiveWidgets();
  });
})();
