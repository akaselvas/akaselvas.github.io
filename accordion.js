// accordion.js

const Accordion = {
    init: function() {
        const accordionItems = document.querySelectorAll('.accordion-item');

        if (accordionItems.length === 0) return false;

        // Read the total close-animation duration from a CSS custom property so it
        // stays in sync with the stylesheet automatically.  Fall back to 1200 ms
        // (500 + 400 + 200 + 100) if the variable is not defined.
        const rawVar = getComputedStyle(document.documentElement)
            .getPropertyValue('--accordion-close-duration').trim();
        const CLOSE_ANIMATION_DURATION = rawVar ? parseInt(rawVar, 10) : 1200;

        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            if (!header) {
                console.warn('Accordion item missing header:', item);
                return;
            }

            let closeTimeoutId = null;

            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                if (closeTimeoutId) {
                    clearTimeout(closeTimeoutId);
                    closeTimeoutId = null;
                    item.classList.remove('is-closing');
                }

                if (isActive) {
                    // --- Clicking to CLOSE ---
                    item.classList.add('is-closing');
                    item.classList.remove('active');

                    closeTimeoutId = setTimeout(() => {
                        item.classList.remove('is-closing');
                        closeTimeoutId = null;
                    }, CLOSE_ANIMATION_DURATION);
                } else {
                    // --- Clicking to OPEN ---
                    item.classList.remove('is-closing');
                    item.classList.add('active');
                }
            });
        });

        return true;
    }
};

export default Accordion;