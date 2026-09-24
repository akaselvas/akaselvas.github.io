// portfolio-loader.js - Loading portfolio items from JSON

import I18n from './i18n.js';

const PortfolioLoader = (function () {

    // --- Skeleton shimmer styles (injected once) ---
    function injectSkeletonStyles() {
        if (document.getElementById('skeleton-styles')) return;
        const style = document.createElement('style');
        style.id = 'skeleton-styles';
        style.textContent = `
            @keyframes skeleton-shimmer {
                0%   { background-position: -200% 0; }
                100% { background-position:  200% 0; }
            }
            .skeleton-item {
                pointer-events: none;
                cursor: default;
            }
            .skeleton-bg {
                background: linear-gradient(
                    90deg,
                    var(--color-background, #fdf8eb) 25%,
                    color-mix(in srgb, var(--color-background, #fdf8eb) 70%, #888) 50%,
                    var(--color-background, #fdf8eb) 75%
                );
                background-size: 200% 100%;
                animation: skeleton-shimmer 1.5s infinite linear;
                border-radius: 2px;
            }
            .skeleton-image-wrap {
                width: 100%;
                aspect-ratio: 4 / 3;
            }
            .skeleton-title {
                height: 14px;
                margin: 10px 0 6px;
                width: 70%;
            }
            .skeleton-category {
                height: 11px;
                width: 40%;
            }
        `;
        document.head.appendChild(style);
    }

    // Render N skeleton cards into the grid
    function renderSkeletons(grid, count = 9) {
        injectSkeletonStyles();
        for (let i = 0; i < count; i++) {
            const item = document.createElement('div');
            item.className = 'isotope-item portfolio-item skeleton-item';
            item.innerHTML = `
                <div class="portfolio-image-container">
                    <div class="portfolio-image skeleton-image-wrap skeleton-bg"></div>
                </div>
                <div class="portfolio-info" style="padding: 8px 0;">
                    <div class="skeleton-title skeleton-bg"></div>
                    <div class="skeleton-category skeleton-bg"></div>
                </div>`;
            grid.appendChild(item);
        }
    }

    // Remove all skeleton cards
    function removeSkeletons(grid) {
        grid.querySelectorAll('.skeleton-item').forEach(el => el.remove());
    }

    // --- Styled error state ---
    function renderError(grid, message) {
        removeSkeletons(grid);
        const wrapper = document.createElement('div');
        wrapper.className = 'portfolio-load-error';
        wrapper.style.cssText = `
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 60px 20px;
            text-align: center;
            color: var(--color-text, #333);
            gap: 12px;
        `;
        wrapper.innerHTML = `
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
                 stroke="var(--color-accent, #fd231a)" stroke-width="1.5"
                 stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p style="margin:0; font-size:1rem; font-weight:600;" data-i18n="portfolio.error.title">${message}</p>
            <p style="margin:0; font-size:0.85rem; opacity:0.6;" data-i18n="portfolio.error.subtitle">
                ${I18n.t('portfolio.error.subtitle')}
            </p>`;
        grid.appendChild(wrapper);
    }

    // Private variables
    let portfolioGrid;

    function init(isotopeManager) {
        portfolioGrid = document.querySelector('.portfolio-grid');

        if (!portfolioGrid) return false;

        // Remove the plain text loading indicator and replace with skeletons
        const loadingIndicator = portfolioGrid.querySelector('.loading-indicator');
        if (loadingIndicator) loadingIndicator.remove();

        renderSkeletons(portfolioGrid);
        loadPortfolioItems(isotopeManager);
        return true;
    }

    async function loadPortfolioItems(isotopeManager) {
        if (!portfolioGrid) return;

        const baseUrl = import.meta.env.BASE_URL;

        try {
            const response = await fetch(`${baseUrl}portfolio-data.json`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            let portfolioData = await response.json();

            portfolioData = portfolioData.map(item => {
                if (item.imgSrc && !item.imgSrc.startsWith('http') && !item.imgSrc.startsWith(baseUrl)) {
                    item.imgSrc = `${baseUrl}${item.imgSrc.startsWith('/') ? '' : '/'}${item.imgSrc}`;
                }
                if (item.lightboxImageSrc && !item.lightboxImageSrc.startsWith('http') && !item.lightboxImageSrc.startsWith(baseUrl)) {
                    item.lightboxImageSrc = `${baseUrl}${item.lightboxImageSrc.startsWith('/') ? '' : '/'}${item.lightboxImageSrc}`;
                }
                return item;
            });

            // Replace skeletons with real items
            removeSkeletons(portfolioGrid);

            portfolioData.forEach(item => {
                const portfolioItemDiv = document.createElement('div');
                portfolioItemDiv.className = `portfolio-item isotope-item ${item.categorySlug}`;
                portfolioItemDiv.dataset.lightboxType = item.lightboxType || 'expand';
                portfolioItemDiv.dataset.imgSrc = item.imgSrc;
                portfolioItemDiv.dataset.lightboxImageSrc = item.lightboxImageSrc || item.imgSrc;
                portfolioItemDiv.dataset.altText = item.altText || item.title;

                const portfolioImageContainer = document.createElement('div');
                portfolioImageContainer.className = 'portfolio-image-container';

                const portfolioImageDiv = document.createElement('div');
                portfolioImageDiv.className = 'portfolio-image';

                if (item.imgSrc && item.imgSrc.trim() !== '') {
                    const img = document.createElement('img');
                    img.src = item.imgSrc;
                    img.alt = item.altText || item.title;
                    img.loading = 'lazy';
                    portfolioImageDiv.appendChild(img);
                } else {
                    const placeholderDiv = document.createElement('div');
                    placeholderDiv.style.backgroundColor = item.bgColor || '#cccccc';
                    placeholderDiv.style.width = '100%';
                    placeholderDiv.style.aspectRatio = '16 / 9';
                    placeholderDiv.style.display = 'block';
                    portfolioImageDiv.appendChild(placeholderDiv);
                }

                const overlayContainer = document.createElement('div');
                overlayContainer.className = 'portfolio-item-overlays';

                const overlayExpand = document.createElement('div');
                overlayExpand.className = 'portfolio-item-overlay overlay-expand';
                overlayExpand.textContent = 'Zoom';

                const overlaySeeMore = document.createElement('div');
                overlaySeeMore.className = 'portfolio-item-overlay overlay-see-more';
                overlaySeeMore.textContent = 'See More';

                if (item.lightboxType === 'seemore') {
                    overlayExpand.style.display = 'none';
                } else {
                    overlaySeeMore.style.display = 'none';
                }

                overlayContainer.appendChild(overlayExpand);
                overlayContainer.appendChild(overlaySeeMore);
                portfolioImageContainer.appendChild(portfolioImageDiv);
                portfolioImageContainer.appendChild(overlayContainer);

                const h3 = document.createElement('h3');
                h3.textContent = item.title;

                const p = document.createElement('p');
                p.textContent = item.category;

                const portfolioInfoDiv = document.createElement('div');
                portfolioInfoDiv.className = 'portfolio-info';
                portfolioInfoDiv.appendChild(h3);
                portfolioInfoDiv.appendChild(p);

                portfolioItemDiv.appendChild(portfolioImageContainer);
                portfolioItemDiv.appendChild(portfolioInfoDiv);
                portfolioGrid.appendChild(portfolioItemDiv);
            });

            window.dispatchEvent(new Event('portfolioItemsLoadedAndLightboxDataReady'));

            if (isotopeManager) {
                window.dispatchEvent(new Event('portfolioItemsLoaded'));
            }

        } catch (error) {
            renderError(portfolioGrid, I18n.t('portfolio.error.title'));
        }
    }

    return { init };
})();

export default PortfolioLoader;