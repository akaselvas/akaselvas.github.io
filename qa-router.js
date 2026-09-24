// qa-router.js — tab-style project switcher for the QA portfolio page.
// Mirrors the hash-routing pattern used by filter-menu.js on the design
// page: the URL hash is the source of truth, switching is instant (no
// page reload), and links are shareable/bookmarkable.

import I18n from './i18n.js';

const QARouter = (function () {
    // Project slugs — hero copy itself lives in qa-i18n.js (qa.hero.<slug>)
    // so it stays translated; this module only knows which slugs exist.
    const SLUGS = ['arcana', 'brasil2040', 'playwright'];
    const DEFAULT_SLUG = 'arcana';

    function getHeroData(slug) {
        return {
            heroLight: I18n.t(`qa.hero.${slug}.light`),
            heroBold: I18n.t(`qa.hero.${slug}.bold`),
        };
    }

    let heroText, heroLightText, heroBoldText;
    let filterLinks = [];
    let panels = [];
    let textAnimator;
    let stickyFilterContext;
    let hasAppliedOnce = false;
    let activeSlug = DEFAULT_SLUG;

    function init(txtAnimator) {
        textAnimator = txtAnimator;

        heroText = document.querySelector('.hero-text');
        heroLightText = heroText ? heroText.querySelector('.light-text') : null;
        heroBoldText = heroText ? heroText.querySelector('.bold-text') : null;
        filterLinks = Array.from(document.querySelectorAll('#qa-filter-options .filter-btn'));
        panels = Array.from(document.querySelectorAll('.qa-project-panel'));
        stickyFilterContext = document.querySelector('.sticky-filter-context');

        if (panels.length === 0) {
            console.warn('QARouter: no .qa-project-panel elements found.');
            return false;
        }

        window.addEventListener('hashchange', () => applyFromHash());
        attachFilterLinkListeners();
        applyFromHash();

        // Re-render the active project's hero copy whenever the language
        // is switched (mirrors filter-menu.js's I18n.onChange hookup).
        I18n.onChange(() => {
            if (!heroText || !heroLightText || !heroBoldText || !textAnimator) return;
            const data = getHeroData(activeSlug);
            heroLightText.textContent = data.heroLight;
            heroBoldText.textContent = data.heroBold;
            textAnimator.splitText(heroLightText);
            textAnimator.splitText(heroBoldText);
        });

        return true;
    }

    function applyFromHash() {
        const slug = window.location.hash.replace(/^#\/?/, '');
        // Ignore hashes that aren't project slugs (e.g. #qa-about, #contact) —
        // those are plain in-page anchors, not project switches, so leave
        // whichever project/scroll position is already active untouched.
        if (slug && !SLUGS.includes(slug)) return;
        applyProject(slug || DEFAULT_SLUG);
    }

    // Mirrors typeOfWorkBtn's hover handling in filter-menu.js: the plus rotates
    // on mouseenter and is only un-rotated on mouseleave if the tab is NOT active.
    // This is what keeps the active tab's plus "stuck" in the rotated end-state
    // instead of animating back once the mouse leaves.
    function attachFilterLinkListeners() {
        filterLinks.forEach(link => {
            const plus = link.querySelector('.plus');
            if (!plus) return;

            link.addEventListener('mouseenter', () => {
                if (!link.classList.contains('active')) plus.classList.add('rotated');
            });
            link.addEventListener('mouseleave', () => {
                if (!link.classList.contains('active')) plus.classList.remove('rotated');
            });
        });
    }

    function applyProject(slug) {
        activeSlug = SLUGS.includes(slug) ? slug : DEFAULT_SLUG;

        panels.forEach(p => p.classList.toggle('active', p.dataset.project === activeSlug));
        filterLinks.forEach(l => {
            const isActive = l.dataset.project === activeSlug;
            l.classList.toggle('active', isActive);
            const plus = l.querySelector('.plus');
            if (plus) plus.classList.toggle('rotated', isActive);
        });

        const data = getHeroData(activeSlug);
        if (heroText && heroLightText && heroBoldText && textAnimator) {
            if (!hasAppliedOnce) {
                heroLightText.textContent = data.heroLight;
                heroBoldText.textContent = data.heroBold;
                textAnimator.splitText(heroLightText);
                textAnimator.splitText(heroBoldText);
            } else {
                textAnimator.animateTextChange(
                    heroText, heroLightText, heroBoldText, data.heroLight, data.heroBold
                );
            }
        }

        if (hasAppliedOnce) performConditionalScroll();
        hasAppliedOnce = true;
    }

    // Only scroll if the user has already scrolled past the hero — avoids
    // an unwanted jump when someone switches tabs from the very top of the page.
    function performConditionalScroll() {
        const heroSection = document.querySelector('.hero');
        const header = document.querySelector('.header');
        if (!heroSection || !header || !stickyFilterContext) return;

        const headerHeight =
            parseFloat(
                getComputedStyle(document.documentElement).getPropertyValue('--header-height-final')
            ) || 60;
        const stickyThresholdY = heroSection.offsetTop + heroSection.offsetHeight - headerHeight;

        if (window.scrollY >= stickyThresholdY) {
            const targetTop =
                stickyFilterContext.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
        }
    }

    return { init };
})();

export default QARouter;