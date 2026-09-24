// lightbox.js
import I18n from './i18n.js';

const Lightbox = (() => {
    let lightboxElement;
    let lightboxImage;
    let lightboxContent;
    let closeButton;
    let prevButton;
    let nextButton;
    let isVisible = false;
    let pageContentWrapper;
    let previouslyFocusedElement = null;

    // Navigation state
    let items = []; // { src, lightboxSrc, alt, type }
    let currentIndex = -1;

    const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    function createLightboxDOM() {
        if (document.getElementById('portfolio-lightbox')) return;

        lightboxElement = document.createElement('div');
        lightboxElement.id = 'portfolio-lightbox';
        lightboxElement.className = 'lightbox';
        lightboxElement.setAttribute('role', 'dialog');
        lightboxElement.setAttribute('aria-modal', 'true');
        lightboxElement.setAttribute('aria-label', I18n.t('lightbox.dialogLabel'));
        lightboxElement.setAttribute('data-i18n-attr', 'aria-label:lightbox.dialogLabel');

        lightboxContent = document.createElement('div');
        lightboxContent.className = 'lightbox-content';

        // --- SVG close button ---
        closeButton = document.createElement('button');
        closeButton.className = 'lightbox-close';
        closeButton.setAttribute('aria-label', I18n.t('lightbox.close'));
        closeButton.setAttribute('data-i18n-attr', 'aria-label:lightbox.close');
        closeButton.innerHTML = `
            <svg viewBox="0 0 24 24" width="20" height="20"
                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <line x1="18" y1="6"  x2="6"  y2="18"
                      stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="6"  y1="6"  x2="18" y2="18"
                      stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            </svg>`;

        // --- Previous button ---
        prevButton = document.createElement('button');
        prevButton.className = 'lightbox-prev';
        prevButton.setAttribute('aria-label', I18n.t('lightbox.prev'));
        prevButton.setAttribute('data-i18n-attr', 'aria-label:lightbox.prev');
        prevButton.innerHTML = `
            <svg viewBox="0 0 24 24" width="24" height="24"
                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <polyline points="15 18 9 12 15 6"
                          stroke="currentColor" stroke-width="2.5"
                          stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>`;

        // --- Next button ---
        nextButton = document.createElement('button');
        nextButton.className = 'lightbox-next';
        nextButton.setAttribute('aria-label', I18n.t('lightbox.next'));
        nextButton.setAttribute('data-i18n-attr', 'aria-label:lightbox.next');
        nextButton.innerHTML = `
            <svg viewBox="0 0 24 24" width="24" height="24"
                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <polyline points="9 18 15 12 9 6"
                          stroke="currentColor" stroke-width="2.5"
                          stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>`;

        lightboxImage = document.createElement('img');
        lightboxImage.className = 'lightbox-image';
        lightboxImage.alt = '';

        // Inject base nav button styles (positioning handled by site CSS;
        // these are sensible defaults if no CSS rule exists yet)
        injectNavStyles();

        lightboxContent.appendChild(lightboxImage);
        lightboxElement.appendChild(closeButton);
        lightboxElement.appendChild(prevButton);
        lightboxElement.appendChild(nextButton);
        lightboxElement.appendChild(lightboxContent);

        document.body.appendChild(lightboxElement);

        pageContentWrapper = document.getElementById('page-content-wrapper');

        // --- Listeners ---
        closeButton.addEventListener('click', close);

        prevButton.addEventListener('click', (e) => {
            e.stopPropagation();
            navigate(-1);
        });

        nextButton.addEventListener('click', (e) => {
            e.stopPropagation();
            navigate(1);
        });

        lightboxElement.addEventListener('click', (e) => {
            if (e.target === lightboxElement) close();
        });

        document.addEventListener('keydown', handleKeyDown);
    }

    function injectNavStyles() {
        if (document.getElementById('lightbox-nav-styles')) return;
        const style = document.createElement('style');
        style.id = 'lightbox-nav-styles';
        style.textContent = `
            .lightbox-prev,
            .lightbox-next {
                position: fixed;
                top: 50%;
                transform: translateY(-50%);
                z-index: 10001;
                background: rgba(0,0,0,0.45);
                border: none;
                border-radius: 50%;
                width: 48px;
                height: 48px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                color: #fff;
                transition: background 0.2s, opacity 0.2s;
                opacity: 0.8;
            }
            .lightbox-prev { left: 16px; }
            .lightbox-next { right: 16px; }
            .lightbox-prev:hover,
            .lightbox-next:hover { background: rgba(0,0,0,0.75); opacity: 1; }
            .lightbox-prev:focus-visible,
            .lightbox-next:focus-visible,
            .lightbox-close:focus-visible {
                outline: 2px solid var(--color-accent, #fd231a);
                outline-offset: 2px;
            }
            .lightbox-image {
                transition: opacity 0.2s ease;
            }
        `;
        document.head.appendChild(style);
    }

    function handleKeyDown(e) {
        if (!isVisible) return;
        switch (e.key) {
            case 'Escape':     close();        break;
            case 'ArrowLeft':  navigate(-1);   break;
            case 'ArrowRight': navigate(1);    break;
            case 'Tab':        trapFocus(e);   break;
        }
    }

    function trapFocus(e) {
        if (!lightboxElement) return;
        const focusable = Array.from(lightboxElement.querySelectorAll(FOCUSABLE));
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last  = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }

    function navigate(direction) {
        if (items.length <= 1) return;
        currentIndex = (currentIndex + direction + items.length) % items.length;
        const item = items[currentIndex];
        loadImage(
            item.lightboxSrc || item.src,
            item.alt,
            item.type
        );
    }

    function loadImage(src, alt, type) {
        // Fade out
        lightboxImage.style.opacity = '0';

        // Reset scroll-mode classes
        lightboxContent.classList.remove('lightbox-content-scrollable');
        lightboxElement.classList.remove('lightbox-scrollable-wrapper');

        if (type === 'seemore') {
            lightboxContent.classList.add('lightbox-content-scrollable');
            lightboxElement.classList.add('lightbox-scrollable-wrapper');
        }

        lightboxImage.onload = () => { lightboxImage.style.opacity = '1'; };
        lightboxImage.onerror = () => { lightboxImage.style.opacity = '1'; };
        lightboxImage.src = src;
        lightboxImage.alt = alt || '';
    }

    function updateNavVisibility() {
        const show = items.length > 1;
        prevButton.style.display = show ? '' : 'none';
        nextButton.style.display = show ? '' : 'none';
    }

    // Register the full list of portfolio items so prev/next can cycle through them.
    // Call this from main.js after attachPortfolioClickListeners().
    function setItems(newItems) {
        items = newItems || [];
    }

    // imageSrc   – image to display
    // altText    – alt text
    // type       – 'expand' | 'seemore'
    // index      – position in the registered items array (for navigation)
    function open(imageSrc, altText, type = 'expand', index = -1) {
        if (!lightboxElement) createLightboxDOM();

        previouslyFocusedElement = document.activeElement;

        if (index >= 0) currentIndex = index;

        loadImage(imageSrc, altText, type);
        updateNavVisibility();

        document.body.classList.add('lightbox-open');
        if (pageContentWrapper) pageContentWrapper.classList.add('blurred');
        isVisible = true;

        // Move focus inside the dialog
        setTimeout(() => closeButton?.focus(), 50);

        if (type === 'seemore') {
            lightboxElement.scrollTop = 0;
            lightboxContent.scrollTop = 0;
        }
    }

    function close() {
        if (!lightboxElement || !isVisible) return;

        lightboxContent.classList.remove('lightbox-content-scrollable');
        lightboxElement.classList.remove('lightbox-scrollable-wrapper');
        document.body.classList.remove('lightbox-open');
        if (pageContentWrapper) pageContentWrapper.classList.remove('blurred');
        isVisible = false;

        // Restore focus to the element that opened the lightbox
        if (previouslyFocusedElement) {
            previouslyFocusedElement.focus();
            previouslyFocusedElement = null;
        }
    }

    function init() {
        if (!lightboxElement) createLightboxDOM();
        return true;
    }

    return { init, open, close, setItems };
})();

export default Lightbox;