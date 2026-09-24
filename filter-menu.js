// filter-menu.js - Filter menu functionality and category selection

import I18n from './i18n.js';

const FilterMenu = (function () {
    // Only the CSS selector lives here — the display name and hero copy for
    // each category are translated text and live in i18n.js instead, keyed
    // by the same slug (filter.category.<slug> / filter.hero.<slug>).
    const categoryFilters = {
        'everything': '*',
        'web-design': '.web-design',
        'poster': '.poster',
        'album-cover': '.album-cover',
        'brand-identity': '.brand-identity',
        'projection-mapping': '.projection-mapping',
        'products': '.products',
        'book': '.book',
        'illustration': '.illustration',
    };
    const categorySlugs = Object.keys(categoryFilters);

    // Builds a full { name, filter, light, bold } object for a slug using
    // whatever the current language is, at call-time.
    function getCategoryData(slug) {
        return {
            name: I18n.t(`filter.category.${slug}`),
            filter: categoryFilters[slug],
            light: I18n.t(`filter.hero.${slug}.light`),
            bold: I18n.t(`filter.hero.${slug}.bold`),
        };
    }

    let activeSlug = 'everything';
    let filterBar, typeOfWorkBtn, plus, filterTrigger;
    let heroText, heroLightText, heroBoldText, heroSection;
    let expandedMenu;
    let isotopeManager, textAnimator;
    let liveRegion; // Accessible announcement element

    function init(isoManager, txtAnimator) {
        isotopeManager = isoManager;
        textAnimator = txtAnimator;

        filterBar = document.querySelector('.filter-bar');
        typeOfWorkBtn = document.querySelector('.filter-dropdown .filter-btn');
        plus = typeOfWorkBtn ? typeOfWorkBtn.querySelector('.plus') : null;
        filterTrigger = document.querySelector(
            '.filter-options > .filter-btn:not(.filter-dropdown .filter-btn)'
        );
        heroText = document.querySelector('.hero-text');
        heroLightText = heroText ? heroText.querySelector('.light-text') : null;
        heroBoldText = heroText ? heroText.querySelector('.bold-text') : null;
        heroSection = document.querySelector('.hero');

        if (!filterBar) {
            console.error('Filter bar element not found.');
            return false;
        }

        createLiveRegion();
        createExpandedMenu();

        if (!expandedMenu) {
            console.error('Expanded menu could not be created.');
            return false;
        }

        attachTypeOfWorkButtonListeners();
        attachCategoryLinkListeners();

        // Re-render translated labels (category names + active hero copy)
        // whenever the language is switched.
        I18n.onChange(() => refreshTranslations());

        return true;
    }

    // Updates every bit of text this module owns, without touching state
    // (active category, isotope filter, scroll position, etc.)
    function refreshTranslations() {
        if (!expandedMenu) return;

        expandedMenu.querySelectorAll('.category-link').forEach(link => {
            link.textContent = I18n.t(`filter.category.${link.dataset.slug}`);
        });

        const categoryData = getCategoryData(activeSlug);

        if (filterTrigger) {
            filterTrigger.textContent = categoryData.name.toUpperCase();
        }

        if (heroLightText && heroBoldText && textAnimator) {
            heroLightText.textContent = categoryData.light;
            heroBoldText.textContent = categoryData.bold;
            textAnimator.splitText(heroLightText);
            textAnimator.splitText(heroBoldText);
        }
    }

    // Visually hidden live region for screen reader announcements
    function createLiveRegion() {
        liveRegion = document.getElementById('filter-live-region');
        if (liveRegion) return;

        liveRegion = document.createElement('div');
        liveRegion.id = 'filter-live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        // Visually hidden but readable by screen readers
        liveRegion.style.cssText = `
            position: absolute;
            width: 1px; height: 1px;
            padding: 0; margin: -1px;
            overflow: hidden;
            clip: rect(0,0,0,0);
            white-space: nowrap;
            border: 0;
        `;
        document.body.appendChild(liveRegion);
    }

    function announceFilterResult(categoryName, count) {
        if (!liveRegion) return;
        const msg =
            count === 0
                ? I18n.t('portfolio.filterAnnounce.none', { category: categoryName })
                : I18n.t('portfolio.filterAnnounce.some', {
                      category: categoryName,
                      count,
                      plural: count === 1 ? '' : 's',
                  });
        // Brief delay ensures the DOM update has been read first
        setTimeout(() => {
            liveRegion.textContent = msg;
        }, 600);
    }

    function createExpandedMenu() {
        if (expandedMenu) return;
        expandedMenu = document.querySelector('.expanded-menu');
        if (expandedMenu) return;

        if (filterBar) {
            expandedMenu = document.createElement('div');
            expandedMenu.className = 'expanded-menu';
            const categoryGrid = document.createElement('div');
            categoryGrid.className = 'category-grid';

            categorySlugs.forEach(slug => {
                const categoryLink = document.createElement('a');
                categoryLink.href = `#/${slug}`;
                categoryLink.textContent = I18n.t(`filter.category.${slug}`);
                categoryLink.className = 'category-link';
                categoryLink.dataset.slug = slug;
                if (slug === 'everything') categoryLink.classList.add('active');
                categoryGrid.appendChild(categoryLink);
            });

            expandedMenu.appendChild(categoryGrid);
            const filterBarContainer = filterBar.querySelector('.container');
            (filterBarContainer || filterBar).appendChild(expandedMenu);
        }
    }

    function attachCategoryLinkListeners() {
        if (!expandedMenu) return;
        expandedMenu.querySelectorAll('.category-link').forEach(link => {
            if (link.hasAttribute('data-listener-attached')) return;
            link.addEventListener('click', function () {
                if (expandedMenu.classList.contains('active')) {
                    expandedMenu.classList.remove('active');
                }
                if (typeOfWorkBtn?.classList.contains('active-state')) {
                    typeOfWorkBtn.classList.remove('active-state');
                }
                if (plus?.classList.contains('rotated') && !typeOfWorkBtn.matches(':hover')) {
                    plus.classList.remove('rotated');
                }
            });
            link.setAttribute('data-listener-attached', 'true');
        });
    }

    function applyFilterFromSlug(slug) {
        if (!isotopeManager || !isotopeManager.isInitialized()) {
            console.warn('Isotope not ready, filter application delayed.');
            return;
        }

        const resolvedSlug = categoryFilters[slug] !== undefined ? slug : 'everything';
        const categoryData = getCategoryData(resolvedSlug);
        activeSlug = resolvedSlug;

        // Update active style on category links
        expandedMenu.querySelectorAll('.category-link').forEach(l => {
            l.classList.toggle('active', l.dataset.slug === resolvedSlug);
        });

        // Update trigger button text
        if (filterTrigger) {
            filterTrigger.textContent = categoryData.name.toUpperCase();
            filterTrigger.classList.toggle('active', resolvedSlug === 'everything');
        }

        // Apply filter to Isotope
        isotopeManager.applyFilter(categoryData.filter);

        // Count visible items and announce to screen readers
        const portfolioGrid = document.querySelector('.portfolio-grid');
        if (portfolioGrid) {
            // Count after a small delay so Isotope has settled
            setTimeout(() => {
                const visibleCount = portfolioGrid.querySelectorAll(
                    '.isotope-item:not(.hidden):not(.skeleton-item)'
                ).length;
                announceFilterResult(categoryData.name, visibleCount);
            }, 300);
        }

        performConditionalScroll();
        updateHeroText(categoryData);
    }

    function updateHeroText(categoryData) {
        if (!heroText || !heroLightText || !heroBoldText || !textAnimator) return;
        heroText.classList.add('animate-out');
        setTimeout(() => {
            heroLightText.textContent = categoryData.light;
            heroBoldText.textContent = categoryData.bold;
            textAnimator.splitText(heroLightText);
            textAnimator.splitText(heroBoldText);
            heroText.classList.remove('animate-out');
            heroText.classList.add('animate-in');
            setTimeout(() => heroText.classList.remove('animate-in'), 1500);
        }, 750);
    }

    function performConditionalScroll() {
        const portfolioSection = document.querySelector('.portfolio');
        const header = document.querySelector('.header');
        if (portfolioSection && filterBar && header && heroSection) {
            const headerHeight =
                parseFloat(
                    getComputedStyle(document.documentElement).getPropertyValue('--header-height-final')
                ) || 60;
            const stickyThresholdY =
                heroSection.offsetTop + heroSection.offsetHeight - headerHeight;
            if (window.scrollY >= stickyThresholdY) {
                const filterBarHeight = filterBar.offsetHeight;
                const desiredViewportTop = headerHeight + filterBarHeight;
                const portfolioAbsoluteTop =
                    portfolioSection.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: Math.max(0, portfolioAbsoluteTop - desiredViewportTop),
                    behavior: 'smooth',
                });
            }
        }
    }

    function attachTypeOfWorkButtonListeners() {
        if (!typeOfWorkBtn || !expandedMenu || !plus) return;
        typeOfWorkBtn.addEventListener('click', function (e) {
            e.preventDefault();
            expandedMenu.classList.toggle('active');
            typeOfWorkBtn.classList.toggle('active-state');
            plus.classList.toggle('rotated', expandedMenu.classList.contains('active'));
        });
        typeOfWorkBtn.addEventListener('mouseenter', () => {
            if (!expandedMenu.classList.contains('active')) plus.classList.add('rotated');
        });
        typeOfWorkBtn.addEventListener('mouseleave', () => {
            if (!expandedMenu.classList.contains('active')) plus.classList.remove('rotated');
        });
    }

    return {
        init,
        applyFilterFromSlug,
        getActiveFilter: function () {
            if (!expandedMenu) return '*';
            const activeLink = expandedMenu.querySelector('.category-link.active');
            const slug = activeLink ? activeLink.dataset.slug : 'everything';
            return categoryFilters[slug] !== undefined ? categoryFilters[slug] : '*';
        },
    };
})();

export default FilterMenu;