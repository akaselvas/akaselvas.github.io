// contact-form.js
import I18n from './i18n.js';

const ContactForm = (() => {

    // --- Validation rules per field name ---
    // `message` is now a function so it always reflects the current language,
    // even if the user switches languages mid-form.
    const validators = {
        name: {
            validate: (v) => v.trim().length >= 2,
            message: () => I18n.t('contact.validation.name'),
        },
        email: {
            validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
            message: () => I18n.t('contact.validation.email'),
        },
        subject: {
            validate: (v) => v.trim().length === 0 || v.trim().length >= 3,
            message: () => I18n.t('contact.validation.subject'),
        },
        message: {
            validate: (v) => v.trim().length >= 10,
            message: () => I18n.t('contact.validation.message'),
        },
    };

    // Inject an error-message <span> immediately after a field if not already present
    function getOrCreateErrorSpan(field) {
        const existingSpan = field.parentElement.querySelector('.field-error');
        if (existingSpan) return existingSpan;

        const span = document.createElement('span');
        span.className = 'field-error';
        span.setAttribute('aria-live', 'polite');
        span.style.cssText = `
            display: block;
            color: var(--color-accent, #fd231a);
            font-size: 0.75rem;
            margin-top: 4px;
            min-height: 1em;
        `;
        field.after(span);
        return span;
    }

    function validateField(field) {
        const rule = validators[field.name];
        if (!rule) return true; // No rule → always valid

        const isValid = rule.validate(field.value);
        const errorSpan = getOrCreateErrorSpan(field);

        if (!isValid) {
            errorSpan.textContent = rule.message();
            field.setAttribute('aria-invalid', 'true');
            field.setAttribute('aria-describedby', field.name + '-error');
            errorSpan.id = field.name + '-error';
        } else {
            errorSpan.textContent = '';
            field.setAttribute('aria-invalid', 'false');
        }

        return isValid;
    }

    function validateAll(form) {
        const fields = Array.from(form.querySelectorAll('input[name], textarea[name]'));
        return fields.map(validateField).every(Boolean);
    }

    const init = () => {
        const form = document.getElementById('contact-form');
        if (!form) return false;

        const formStatusMessage = document.getElementById('form-status-message');
        if (!formStatusMessage) return false;

        const submitButton = form.querySelector('button[type="submit"]');
        if (!submitButton) return false;

        // The plus-icon SVG markup is captured once (it never changes) so
        // both button states can be rebuilt with the current-language text,
        // even if the user switches languages mid-submit.
        const plusIconSVG = submitButton.querySelector('.plus-icon')
            ? submitButton.querySelector('.plus-icon').outerHTML
            : '';
        function renderIdleButton() {
            submitButton.innerHTML =
                `<span>${I18n.t('contact.submit')}</span>` +
                `<span class="plus" aria-hidden="true">${plusIconSVG}</span>`;
        }
        function renderSendingButton() {
            submitButton.innerHTML =
                `${I18n.t('contact.sending')}<span class="plus" aria-hidden="true">${plusIconSVG}</span>`;
        }

        // --- Per-field blur validation ---
        const fields = Array.from(form.querySelectorAll('input[name], textarea[name]'));
        fields.forEach(field => {
            // Validate when the user leaves a field
            field.addEventListener('blur', () => validateField(field));
            // Clear the error as soon as they start typing again
            field.addEventListener('input', () => {
                const rule = validators[field.name];
                if (!rule) return;
                const isValid = rule.validate(field.value);
                if (isValid) {
                    const span = getOrCreateErrorSpan(field);
                    span.textContent = '';
                    field.setAttribute('aria-invalid', 'false');
                }
            });
        });

        // --- Submission ---
        form.addEventListener('submit', async function (event) {
            event.preventDefault();

            // Run full validation before sending
            if (!validateAll(form)) {
                // Focus the first invalid field so the user knows what to fix
                const firstInvalid = form.querySelector('[aria-invalid="true"]');
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            const formData = new FormData(form);

            submitButton.disabled = true;
            renderSendingButton();
            submitButton.classList.add('is-loading');

            formStatusMessage.innerHTML = '';
            formStatusMessage.className = '';

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: { Accept: 'application/json' },
                });

                if (response.ok) {
                    formStatusMessage.innerHTML = I18n.t('contact.status.success');
                    formStatusMessage.className = 'success';
                    form.reset();
                    // Clear all inline errors after a successful reset
                    form.querySelectorAll('.field-error').forEach(s => (s.textContent = ''));
                    form.querySelectorAll('[aria-invalid]').forEach(f =>
                        f.setAttribute('aria-invalid', 'false')
                    );
                } else {
                    const data = await response.json();
                    // Errors returned by the form backend (Formspree) come back in
                    // English from their API and are shown as-is; only our own
                    // generic fallback message is translated.
                    let errorMessage = I18n.t('contact.status.errorGeneric');
                    if (data?.errors?.length > 0) {
                        errorMessage = data.errors
                            .map(e => e.message || e.field || 'Error')
                            .join('<br>');
                    } else if (data?.error) {
                        errorMessage = data.error;
                    }
                    formStatusMessage.innerHTML = errorMessage;
                    formStatusMessage.className = 'error';
                }
            } catch (error) {
                formStatusMessage.innerHTML = I18n.t('contact.status.errorNetwork');
                formStatusMessage.className = 'error';
            } finally {
                submitButton.disabled = false;
                renderIdleButton();
                submitButton.classList.remove('is-loading');
            }
        });

        // Refresh any currently-visible validation messages if the user
        // switches language mid-form.
        I18n.onChange(() => {
            form.querySelectorAll('[aria-invalid="true"]').forEach(field => validateField(field));
        });

        return true;
    };

    return { init };
})();

export default ContactForm;