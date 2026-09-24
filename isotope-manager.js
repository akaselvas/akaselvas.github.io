// isotope-manager.js - Isotope initialization and portfolio grid management
//
// IMPORTANT: now imports Isotope and imagesLoaded from npm (isotope-layout, imagesloaded).
// Remove the two CDN <script> tags for these libraries from index.html after
// running `npm install`.

import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import I18n from './i18n.js';

const IsotopeManager = (function () {
    // Private variables
    let portfolioGrid;
    let iso;
    let allItems = [];
    let loadMoreBtn;
    const ITEMS_PER_PAGE = 9; // Change this one number to adjust pagination everywhere
    let currentlyShownItems = 0;
    let isInitialized = false;
    let filterMenuRef = null; // Set via setFilterMenu() — avoids window.filterMenu antipattern
    let emptyStateEl = null;

    // --- Public setter so main.js can wire up FilterMenu without a global ---
    function setFilterMenu(fm) {
        filterMenuRef = fm;
    }

    function init() {
        portfolioGrid = document.querySelector('.portfolio-grid');

        if (!portfolioGrid) {
            console.error('Portfolio grid container not found.');
            return false;
        }

        window.addEventListener('portfolioItemsLoaded', setupIsotope);
        return true;
    }

    function setupIsotope() {
        if (isInitialized) return;

        if (!portfolioGrid) {
            console.error('Isotope cannot initialize. Grid missing.');
            return;
        }

        allItems = Array.from(portfolioGrid.querySelectorAll('.isotope-item'));
        const totalItems = allItems.length;

        if (totalItems === 0) {
            console.warn('No portfolio items found.');
            return;
        }

        allItems.forEach((item, index) => {
            if (index >= ITEMS_PER_PAGE) item.classList.add('hidden');
            else item.classList.remove('hidden');
        });
        currentlyShownItems = Math.min(ITEMS_PER_PAGE, totalItems);

        iso = new Isotope(portfolioGrid, {
            itemSelector: '.isotope-item',
            layoutMode: 'masonry',
            percentPosition: true,
            masonry: { columnWidth: '.grid-sizer', gutter: 0 },
            transitionDuration: '0.6s',
            visibleStyle: { opacity: 1, transform: 'scale(1)' },
            hiddenStyle: { opacity: 0, transform: 'scale(0.001)' },
            filter: (itemElem) => !itemElem.classList.contains('hidden'),
        });

        imagesLoaded(portfolioGrid).on('always', function () {
            if (!isInitialized) {
                iso.layout();
                isInitialized = true;

                window.dispatchEvent(new CustomEvent('isotopeFirstLayoutDone'));

                createLoadMoreButton();
                updateLoadMoreButtonVisibility();
            } else {
                iso.layout();
            }
        });

        createLoadMoreButton();
        updateLoadMoreButtonVisibility();
    }

    // --- Empty state ---
    function getEmptyState() {
        if (!emptyStateEl) {
            emptyStateEl = document.createElement('div');
            emptyStateEl.className = 'portfolio-empty-state';
            emptyStateEl.style.cssText = `
                display: none;
                width: 100%;
                padding: 60px 20px;
                text-align: center;
                color: var(--color-text, #333);
            `;
            emptyStateEl.innerHTML = `
                <p style="font-size:1.1rem; font-weight:600; margin:0 0 8px;" data-i18n="portfolio.empty.title">
                    ${I18n.t('portfolio.empty.title')}
                </p>
                <p style="font-size:0.875rem; opacity:0.6; margin:0;" data-i18n="portfolio.empty.subtitle">
                    ${I18n.t('portfolio.empty.subtitle')}
                </p>`;
            portfolioGrid.parentNode.insertBefore(emptyStateEl, portfolioGrid.nextSibling);
        }
        return emptyStateEl;
    }

    function showEmptyState(visible) {
        const el = getEmptyState();
        el.style.display = visible ? 'block' : 'none';
        portfolioGrid.style.display = visible ? 'none' : '';
    }

    // --- Load More ---
    function createLoadMoreButton() {
        const existingContainer = document.querySelector('.load-more-container');
        if (!existingContainer && portfolioGrid.parentNode) {
            const loadMoreContainer = document.createElement('div');
            loadMoreContainer.className = 'load-more-container';

            loadMoreBtn = document.createElement('button');
            loadMoreBtn.className = 'load-more-btn filter-btn btn-icon-underline';
            loadMoreBtn.innerHTML = `
                <span data-i18n="portfolio.loadMore">${I18n.t('portfolio.loadMore')}</span>
                <span class="plus" aria-hidden="true">
                    <svg viewBox="0 0 24 24" class="plus-icon" xmlns="http://www.w3.org/2000/svg">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </span>`;
            loadMoreBtn.addEventListener('click', handleLoadMore);
            loadMoreBtn.setAttribute('data-listener-attached', 'true');

            loadMoreContainer.appendChild(loadMoreBtn);

            const portfolioSection = portfolioGrid.closest('.portfolio');
            if (portfolioSection?.parentNode) {
                portfolioSection.parentNode.insertBefore(loadMoreContainer, portfolioSection.nextSibling);
            } else {
                portfolioGrid.parentNode.insertBefore(loadMoreContainer, portfolioGrid.nextSibling);
            }
        } else if (existingContainer) {
            loadMoreBtn = existingContainer.querySelector('.load-more-btn');
            if (loadMoreBtn && !loadMoreBtn.hasAttribute('data-listener-attached')) {
                loadMoreBtn.addEventListener('click', handleLoadMore);
                loadMoreBtn.setAttribute('data-listener-attached', 'true');
            }
        }
    }

    function handleLoadMore() {
        if (!iso) return;

        const currentFilter = filterMenuRef ? filterMenuRef.getActiveFilter() : '*';
        let newlyShownCount = 0;

        const potentialItems = allItems.filter(
            item =>
                (currentFilter === '*' || item.matches(currentFilter)) &&
                item.classList.contains('hidden')
        );

        potentialItems.slice(0, ITEMS_PER_PAGE).forEach(item => {
            item.classList.remove('hidden');
            newlyShownCount++;
        });

        if (newlyShownCount > 0) {
            iso.arrange({ filter: (itemElem) => !itemElem.classList.contains('hidden') });
            imagesLoaded(portfolioGrid).on('progress', () => iso.layout());
        }

        currentlyShownItems = allItems.filter(
            item =>
                (currentFilter === '*' || item.matches(currentFilter)) &&
                !item.classList.contains('hidden')
        ).length;

        updateLoadMoreButtonVisibility();
    }

    function updateLoadMoreButtonVisibility() {
        if (!loadMoreBtn || !iso) return;

        const currentFilter = filterMenuRef ? filterMenuRef.getActiveFilter() : '*';

        const totalPotential = allItems.filter(
            item => currentFilter === '*' || item.matches(currentFilter)
        ).length;

        const currentlyVisible = allItems.filter(
            item =>
                (currentFilter === '*' || item.matches(currentFilter)) &&
                !item.classList.contains('hidden')
        ).length;

        loadMoreBtn.style.display = currentlyVisible >= totalPotential ? 'none' : 'inline-block';
    }

    function applyFilter(filterValue) {
        if (!iso) {
            console.warn('Isotope not ready, cannot apply filter.');
            return;
        }

        allItems.forEach(item => item.classList.add('hidden'));

        const filteredItems = allItems.filter(
            item => filterValue === '*' || item.matches(filterValue)
        );

        filteredItems.slice(0, ITEMS_PER_PAGE).forEach(item => item.classList.remove('hidden'));
        currentlyShownItems = filteredItems.slice(0, ITEMS_PER_PAGE).length;

        // Show or hide the empty state
        showEmptyState(filteredItems.length === 0);

        iso.arrange({ filter: (itemElem) => !itemElem.classList.contains('hidden') });
        updateLoadMoreButtonVisibility();
    }

    return {
        init,
        setFilterMenu,
        applyFilter,
        isInitialized: () => isInitialized && iso !== undefined,
        getIsotope: () => iso,
        refreshLayout: () => { if (iso) iso.layout(); },
    };
})();

export default IsotopeManager;