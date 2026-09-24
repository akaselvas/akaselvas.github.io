// hero-background-manager.js
const HeroBackgroundManager = (() => {
    const MOBILE_BREAKPOINT = 576; // px — matches the CSS media query breakpoint
    const CAROUSEL_INTERVAL_MS = 4000; // 4 seconds per slide

    let threeJsScriptsLoaded = false;
    let carouselInterval;

    const baseUrl = import.meta.env.BASE_URL;

    // ⚠️  bas.js is loaded from an unofficial S3 CDN
    // (s3-us-west-2.amazonaws.com/s.cdpn.io) that can disappear without notice.
    // TODO: vendor this file locally under /public/vendor/ and update the path.
    // OrbitControls-2.js was removed: script.js creates the scene with
    // createCameraControls:false, so the orbit controls were never used —
    // that request was dead weight.
    const threeJsScriptSources = [
        'https://cdnjs.cloudflare.com/ajax/libs/three.js/r77/three.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.4/TweenMax.min.js',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/bas.js',
        `${baseUrl}script.js`,
    ];

    function loadScript(src, container) {
        return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
                resolve();
                return;
            }
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
            container.appendChild(script);
        });
    }

    async function initThreeJs() {
        if (threeJsScriptsLoaded) return;

        const threeJsContainer = document.getElementById('threejs-container');
        if (!threeJsContainer) return;

        try {
            for (const src of threeJsScriptSources) {
                await loadScript(src, threeJsContainer);
            }
            threeJsScriptsLoaded = true;
        } catch (error) {
            console.error('Failed to load one or more Three.js scripts:', error);
        }
    }

    function initCarousel() {
        const carouselContainer = document.getElementById('mobile-carousel-container');
        if (!carouselContainer) return;

        const slides = carouselContainer.querySelectorAll('.carousel-slide');
        if (slides.length === 0) return;

        let currentSlide = 0;
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentSlide].classList.add('active');

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        if (carouselInterval) clearInterval(carouselInterval);
        carouselInterval = setInterval(nextSlide, CAROUSEL_INTERVAL_MS);
    }

    function updateHeroBackground() {
        const threeJsContainer = document.getElementById('threejs-container');
        const mobileCarouselContainer = document.getElementById('mobile-carousel-container');
        const scrollPrompt = document.querySelector('.hero .scroll-prompt');

        if (!threeJsContainer || !mobileCarouselContainer) return;

        if (window.innerWidth <= MOBILE_BREAKPOINT) {
            threeJsContainer.style.display = 'none';
            mobileCarouselContainer.style.display = 'block';
            if (scrollPrompt) scrollPrompt.style.display = 'none';
            initCarousel();
        } else {
            mobileCarouselContainer.style.display = 'none';
            if (carouselInterval) clearInterval(carouselInterval);
            threeJsContainer.style.display = 'block';
            if (scrollPrompt) scrollPrompt.style.display = 'block';
            if (!threeJsScriptsLoaded) initThreeJs();
        }
    }

    function init() {
        updateHeroBackground();

        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(updateHeroBackground, 250);
        });

        return true;
    }

    return { init };
})();

export default HeroBackgroundManager;