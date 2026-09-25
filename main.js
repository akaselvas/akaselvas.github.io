// main.js - Main entry point that initializes all modules
import './styles.css';

import I18n from './i18n.js';
import HeaderScroll from './header-scroll.js';
import SmoothScroll from './smooth-scroll.js';
import FilterMenu from './filter-menu.js';
import IsotopeManager from './isotope-manager.js';
import TextAnimator from './text-animation.js';
import PortfolioLoader from './portfolio-loader.js';
import Accordion from './accordion.js';

import HeroBackgroundManager from './hero-background-manager.js';
import Lightbox from './lightbox.js';
import ContactForm from './contact-form.js';

document.addEventListener('DOMContentLoaded', function () {

    // I18n must init first: it sets the correct-language text on every
    // data-i18n element and builds the language switcher before any other
    // module reads text off the page or reads I18n.t() for dynamic markup.
    I18n.init();

    // Adia a inicialização pesada do Three.js pra depois que o loader
    // terminar, pra não competir por main thread com a animação CSS dele.
    document.body.addEventListener('transitionend', function onLoaderGone(e) {
        if (e.target.id === 'loader-wrapper' || e.propertyName === 'opacity') {
            HeroBackgroundManager.init();
            document.body.removeEventListener('transitionend', onLoaderGone);
        }
    }, { once: false });

    // Fallback de segurança, caso o loader já tenha sido removido antes
    // deste listener ser registrado (ex: conteúdo já em cache)
    if (document.body.classList.contains('loading-done')) {
        HeroBackgroundManager.init();
    }

    HeaderScroll.init();
    TextAnimator.init();
    IsotopeManager.init();

    // Re-apply whatever anchor scroll the browser tried to do natively on load,
    // now that the header's real fixed-position dimensions are known. header-scroll.js
    // calculates these via a setTimeout(0), so a short delay here is enough to run after it.
    if (window.__pendingHash) {
        const targetEl = document.getElementById(window.__pendingHash.slice(1));
        const header = document.querySelector('.header');
        if (targetEl && header) {
            setTimeout(() => SmoothScroll.scrollToTarget(targetEl, header), 50);
        }
        window.__pendingHash = null;
    }

    // FilterMenu needs IsotopeManager and TextAnimator
    FilterMenu.init(IsotopeManager, TextAnimator);

    // Wire FilterMenu into IsotopeManager WITHOUT using a global.
    // IsotopeManager uses this ref in handleLoadMore / updateLoadMoreButtonVisibility.
    IsotopeManager.setFilterMenu(FilterMenu);

    // Keep the global for any legacy code that may still reference window.filterMenu,
    // but new code should go through IsotopeManager.setFilterMenu().
    window.filterMenu = FilterMenu;

    Accordion.init();
    PortfolioLoader.init(IsotopeManager);
    SmoothScroll.init();
    Lightbox.init();
    ContactForm.init();

    // --- Portfolio click listeners (lightbox + prev/next) ---
    window.addEventListener('portfolioItemsLoadedAndLightboxDataReady', function () {
        attachPortfolioClickListeners();
    });

    // --- Routing ---
    let initialFilterApplied = false;

    function applyInitialFilter() {
        if (initialFilterApplied) return;
        const slug = window.location.hash.replace(/^#\/?/, '') || 'everything';
        FilterMenu.applyFilterFromSlug(slug);
        initialFilterApplied = true;
    }

    window.addEventListener('isotopeFirstLayoutDone', applyInitialFilter);

    window.addEventListener('load', () => {
        setTimeout(() => {
            if (!initialFilterApplied) applyInitialFilter();
        }, 100);
    });

    window.addEventListener('hashchange', () => {
        const slug = window.location.hash.replace(/^#\/?/, '') || 'everything';
        FilterMenu.applyFilterFromSlug(slug);
    });
});


function attachPortfolioClickListeners() {
    const portfolioItems = Array.from(document.querySelectorAll('.portfolio-item'));

    // Build the items registry for the lightbox so prev/next navigation works.
    // Only include items that have a real image (skip skeletons).
    const lightboxItems = portfolioItems
        .filter(item => item.dataset.imgSrc)
        .map(item => ({
            src: item.dataset.imgSrc,
            lightboxSrc: item.dataset.lightboxImageSrc || item.dataset.imgSrc,
            alt: item.dataset.altText || '',
            type: item.dataset.lightboxType || 'expand',
        }));

    Lightbox.setItems(lightboxItems);

    portfolioItems.forEach((item, i) => {
        if (item.dataset.listenerAttached === 'true') return;

        item.addEventListener('click', function (e) {
            if (e.target.closest('.portfolio-info')) return;

            const type = this.dataset.lightboxType || 'expand';
            const mainSrc = this.dataset.imgSrc;
            const lightboxSrc = this.dataset.lightboxImageSrc;
            const alt = this.dataset.altText;

            const imageToOpen = type === 'seemore' ? lightboxSrc : mainSrc;

            if (imageToOpen) {
                Lightbox.open(imageToOpen, alt, type, i);
            }
        });

        item.dataset.listenerAttached = 'true';
    });
}

window.addEventListener('load', function () {
    // Final hook for anything that needs to run after all resources are loaded
});