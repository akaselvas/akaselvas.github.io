// i18n.js
//
// Central translation module for the whole site.
// -------------------------------------------------------------
// EVERYTHING text-related lives in the `translations` object below.
// If you ever need to change wording (in English OR Portuguese),
// or add a new language, this is the ONLY file you need to touch.
//
// How it works:
//   1. Any element in index.html tagged with:
//        data-i18n="some.key"          -> sets el.textContent
//        data-i18n-html="some.key"     -> sets el.innerHTML (use when the
//                                          translated string needs inline
//                                          tags, e.g. "what <strong>we do</strong>")
//        data-i18n-placeholder="key"   -> sets el.placeholder
//        data-i18n-attr="attr:key"     -> sets an arbitrary attribute
//                                          (e.g. data-i18n-attr="alt:loader.alt")
//        data-i18n-list="some.key"     -> maps an array of strings from the
//                                          dictionary onto the element's
//                                          existing <li> children, in order
//      gets auto-translated whenever the language changes.
//   2. Other modules (filter-menu.js, contact-form.js, isotope-manager.js,
//      portfolio-loader.js) that build markup dynamically simply call
//      `I18n.t('some.key')` instead of hardcoding English strings.
//   3. Modules that need to react to a language switch (e.g. re-render
//      dynamically-built menus) can subscribe with `I18n.onChange(fn)`
//      or listen for the `languageChanged` window event.
// -------------------------------------------------------------

// --- Language switcher visual style -----------------------------------
// Change this ONE constant to pick which look the EN/PT switcher uses.
// All three are intentionally quieter than the main nav links (smaller,
// lighter weight, muted color) so they read as a secondary control
// instead of competing with DESIGN / ABOUT / CONTACT.
//
//   'text'    -> tiny lowercase "en / pt" text, active one underlined
//   'pill'    -> small rounded segmented toggle, muted fill on the active side
//   'globe'   -> a small globe icon that expands into en/pt text on hover/focus
//
const SWITCHER_STYLE = 'pill';
// -------------------------------------------------------------------

const STORAGE_KEY = 'site-lang';
const SUPPORTED_LANGS = ['en', 'pt'];
const DEFAULT_LANG = 'en';

const translations = {
    en: {
        nav: {
            design: 'DESIGN',
            qa: 'QA',
            about: 'ABOUT',
            contact: 'CONTACT',
        },
        filter: {
            typeOfWork: 'Type of Work',
            category: {
                everything: 'Everything',
                'web-design': 'Web Design',
                poster: 'Poster',
                'album-cover': 'Album Cover',
                'brand-identity': 'Brand Identity',
                'projection-mapping': 'Projection Mapping',
                products: 'Products',
                book: 'Book',
                illustration: 'Illustration',
            },
            hero: {
                everything: { light: 'We find the artfulness', bold: 'in your brand' },
                'web-design': { light: 'We craft the journey', bold: 'of your online presence' },
                poster: { light: 'We highlight the impact', bold: 'of your visual' },
                'album-cover': { light: 'We visualize the sound', bold: 'of your music' },
                'brand-identity': { light: 'We define the essence', bold: 'of your business' },
                'projection-mapping': { light: 'We transform the space', bold: 'with your vision' },
                products: { light: 'We enhance the appeal', bold: 'of your offerings' },
                book: { light: 'We design the experience', bold: 'of your story' },
                illustration: { light: 'We visualize the concept', bold: 'through your lines' },
            },
        },
        portfolio: {
            loading: 'Loading Portfolio...',
            loadMore: 'LOAD MORE',
            empty: {
                title: 'No projects here yet.',
                subtitle: 'Check back soon or explore another category.',
            },
            error: {
                title: 'Could not load portfolio items.',
                subtitle: 'Please refresh the page or try again later.',
            },
            filterAnnounce: {
                none: 'No projects found in {category}.',
                some: 'Showing {count} project{plural} in {category}.',
            },
        },
        about: {
            title: 'about us',
            intro:
                "SELVAS is a design studio where culture, art, and brands collide. We build vibrant visual " +
                "universes for artists on stage and for brands in the wild. Rooted in the dynamic energy " +
                "of Brazil's creative scene, we blend bold aesthetics with strategic thinking to craft " +
                "identities that don't just communicate—they perform.",
            founder:
                'Founded in 2010 by designer <span class="founder-name">Fabio Alves</span>, SELVAS was born from the intersection of music, ' +
                'technology, and visual art. Our foundation isn\'t in traditional ad agencies, but in concert ' +
                'halls, festival grounds, and collaborative art spaces. This unique perspective allows us ' +
                'to bring a raw authenticity and a performer\'s mindset to every project, whether it\'s ' +
                'shaping the visual identity for an international brand or creating an immersive stage ' +
                'experience for an orchestra.<br><br>' +
                'We bring a perfectionist\'s eye and an artist\'s soul to every collaboration.',
            accordion: {
                whatWeDo: {
                    title: 'what <strong>we do</strong>',
                    content:
                        'We are hands-on designers that collaborate with the sharpest developers, ' +
                        'strategists, copywriters and craftspeople who share our passion for ' +
                        'designing better brands.',
                    skills: [
                        'Brand Identity', 'Brand Guidelines', 'Visual Systems', '3d Animation',
                        'Illustration', 'Print Design', 'Social Media Design', 'Print Production',
                        'Promotional Items', 'Web Design', 'Cenography', 'Projection Mapping',
                    ],
                },
                whoWeWorkWith: {
                    title: 'who we <strong>work with</strong>',
                    content1:
                        'We create distinct brand design solutions for companies of all shapes and ' +
                        'sizes, from startups to start-overs; local, national, global and galactic',
                    content2:
                        'We team up with artists to shape their visual universe—on stage, on screen, ' +
                        'and on record—with scenography, VJing, projection mapping, and album art.',
                },
                howWeAwarded: {
                    title: "how <strong>we're awarded</strong>",
                    content:
                        'Sometimes we get recognized for getting you recognized. ' +
                        'We\u2019re proud to have received a few well-known design awards and noteworthy press.',
                    awards: [
                        'GAMEWHAT? - Documentary - commissioned by Itaú Cultural',
                        'A arte do Jogo ou o Jogo da Arte? - Research and Book - commissioned by MINC',
                        'Ciclo - Exhibition - commissioned by Galeria Patio Batel',
                        'Crescografia - Exhibition - commissioned by FCC',
                        'Sinfonia Comum - Exhibition - commissioned by FCC',
                        'In.flexão - Exhibition - commissioned by FCC',
                        're-In.flexão - Exhibition - commissioned by OAB',
                        'Sometro - Exhibition - commissioned by SESCPR',
                        'Mostra Caixola - 3x First Place',
                        'Computer Arts Magazine Contest - Third Place',
                    ],
                },
            },
        },
        contact: {
            title: 'get in touch',
            intro: 'Have a project in mind, a question, or just want to say hello? <br> Drop us a line using the form below',
            label: { name: 'Name', email: 'Email', subject: 'Subject', message: 'Message' },
            placeholder: {
                name: 'Your Name',
                email: 'your.email@example.com',
                subject: "What's this about?",
                message: 'Tell us more...',
            },
            submit: 'Send Message',
            sending: 'Sending...',
            validation: {
                name: 'Please enter your name (at least 2 characters).',
                email: 'Please enter a valid email address.',
                subject: 'Subject must be at least 3 characters.',
                message: 'Please enter a message (at least 10 characters).',
            },
            status: {
                success: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
                errorGeneric: 'Oops! There was a problem submitting your form. Please try again.',
                errorNetwork: 'Oops! There was a network error. Please check your connection and try again.',
            },
        },
        footer: {
            line1: 'Proudly <span class="highlighted">made by a human</span>',
            line2: 'Everything here is the responsibility of <span class="highlighted">the artist</span>',
            line3: 'Built from scratch <span class="highlighted">using their own mind</span>',
        },
        loader: {
            alt: 'Loading...',
        },
        lightbox: {
            dialogLabel: 'Portfolio image viewer',
            close: 'Close',
            prev: 'Previous image',
            next: 'Next image',
        },
    },

    pt: {
        nav: {
            design: 'DESIGN',
            qa: 'QA',
            about: 'SOBRE',
            contact: 'CONTATO',
        },
        filter: {
            typeOfWork: 'Tipo de Trabalho',
            category: {
                everything: 'Tudo',
                'web-design': 'Web Design',
                poster: 'Pôster',
                'album-cover': 'Capa de Álbum',
                'brand-identity': 'Identidade de Marca',
                'projection-mapping': 'Mapeamento de Projeção',
                products: 'Produtos',
                book: 'Livro',
                illustration: 'Ilustração',
            },
            hero: {
                everything: { light: 'Nós encontramos a arte', bold: 'da sua marca' },
                'web-design': { light: 'Nós criamos a jornada', bold: 'da sua presença online' },
                poster: { light: 'Nós destacamos o impacto', bold: 'do seu visual' },
                'album-cover': { light: 'Nós visualizamos o som', bold: 'da sua música' },
                'brand-identity': { light: 'Nós definimos a essência', bold: 'do seu negócio' },
                'projection-mapping': { light: 'Nós transformamos o espaço', bold: 'com a sua visão' },
                products: { light: 'Nós valorizamos o apelo', bold: 'das suas ofertas' },
                book: { light: 'Nós desenhamos a experiência', bold: 'da sua história' },
                illustration: { light: 'Nós visualizamos o conceito', bold: 'através das suas linhas' },
            },
        },
        portfolio: {
            loading: 'Carregando Portfólio...',
            loadMore: 'CARREGAR MAIS',
            empty: {
                title: 'Ainda não há projetos aqui.',
                subtitle: 'Volte em breve ou explore outra categoria.',
            },
            error: {
                title: 'Não foi possível carregar os projetos.',
                subtitle: 'Atualize a página ou tente novamente mais tarde.',
            },
            filterAnnounce: {
                none: 'Nenhum projeto encontrado em {category}.',
                some: 'Mostrando {count} projeto{plural} em {category}.',
            },
        },
        about: {
            title: 'sobre nós',
            intro:
                'A SELVAS é um estúdio de design onde cultura, arte e marcas se encontram. Criamos universos ' +
                'visuais vibrantes para artistas em cena e para marcas no mundo real. Enraizados na energia ' +
                'dinâmica da cena criativa brasileira, misturamos estética arrojada com pensamento estratégico ' +
                'para construir identidades que não só comunicam — elas performam.',
            founder:
                'Fundada em 2010 pelo designer <span class="founder-name">Fabio Alves</span>, a SELVAS nasceu do encontro entre música, ' +
                'tecnologia e arte visual. Nossa base não está em agências de publicidade tradicionais, mas em casas ' +
                'de show, palcos de festivais e espaços de arte colaborativos. Essa perspectiva única nos permite ' +
                'trazer uma autenticidade crua e uma mentalidade de performer para cada projeto, seja construindo ' +
                'a identidade visual de uma marca internacional ou criando uma experiência de palco imersiva ' +
                'para uma orquestra.<br><br>' +
                'Trazemos um olhar perfeccionista e uma alma de artista para cada colaboração.',
            accordion: {
                whatWeDo: {
                    title: 'o que <strong>fazemos</strong>',
                    content:
                        'Somos designers atuantes que colaboram com os desenvolvedores, estrategistas, ' +
                        'redatores e artesãos mais afiados, que compartilham nossa paixão por ' +
                        'construir marcas melhores.',
                    skills: [
                        'Identidade de Marca', 'Manual de Marca', 'Sistemas Visuais', 'Animação 3D',
                        'Ilustração', 'Design Gráfico', 'Design para Redes Sociais', 'Produção Gráfica',
                        'Itens Promocionais', 'Web Design', 'Cenografia', 'Mapeamento de Projeção',
                    ],
                },
                whoWeWorkWith: {
                    title: 'com quem <strong>trabalhamos</strong>',
                    content1:
                        'Criamos soluções de design de marca distintas para empresas de todos os formatos e ' +
                        'tamanhos, de startups a reformulações completas; locais, nacionais, globais e galácticas',
                    content2:
                        'Nos unimos a artistas para moldar seu universo visual — no palco, na tela ' +
                        'e no disco — com cenografia, VJing, mapeamento de projeção e capas de álbum.',
                },
                howWeAwarded: {
                    title: 'como <strong>somos premiados</strong>',
                    content:
                        'Às vezes somos reconhecidos por fazer você ser reconhecido. ' +
                        'Temos orgulho de ter recebido alguns prêmios de design conhecidos e boa repercussão na imprensa.',
                    awards: [
                        'GAMEWHAT? - Documentário - a pedido do Itaú Cultural',
                        'A arte do Jogo ou o Jogo da Arte? - Pesquisa e Livro - a pedido do MINC',
                        'Ciclo - Exposição - a pedido da Galeria Pátio Batel',
                        'Crescografia - Exposição - a pedido da FCC',
                        'Sinfonia Comum - Exposição - a pedido da FCC',
                        'In.flexão - Exposição - a pedido da FCC',
                        're-In.flexão - Exposição - a pedido da OAB',
                        'Sometro - Exposição - a pedido do SESCPR',
                        'Mostra Caixola - 3x Primeiro Lugar',
                        'Computer Arts Magazine Contest - Terceiro Lugar',
                    ],
                },
            },
        },
        contact: {
            title: 'entre em contato',
            intro: 'Tem um projeto em mente, uma dúvida ou só quer dizer oi? <br> Mande uma mensagem usando o formulário abaixo',
            label: { name: 'Nome', email: 'E-mail', subject: 'Assunto', message: 'Mensagem' },
            placeholder: {
                name: 'Seu Nome',
                email: 'seu.email@exemplo.com',
                subject: 'Sobre o que é?',
                message: 'Conte mais...',
            },
            submit: 'Enviar Mensagem',
            sending: 'Enviando...',
            validation: {
                name: 'Digite seu nome (pelo menos 2 caracteres).',
                email: 'Digite um endereço de e-mail válido.',
                subject: 'O assunto deve ter pelo menos 3 caracteres.',
                message: 'Digite uma mensagem (pelo menos 10 caracteres).',
            },
            status: {
                success: 'Obrigado! Sua mensagem foi enviada com sucesso. Em breve entraremos em contato.',
                errorGeneric: 'Ops! Houve um problema ao enviar seu formulário. Tente novamente.',
                errorNetwork: 'Ops! Houve um erro de conexão. Verifique sua internet e tente novamente.',
            },
        },
        footer: {
            line1: 'Feito com orgulho <span class="highlighted">por um humano</span>',
            line2: 'Tudo aqui é de responsabilidade <span class="highlighted">do artista</span>',
            line3: 'Construído do zero <span class="highlighted">usando a própria cabeça</span>',
        },
        loader: {
            alt: 'Carregando...',
        },
        lightbox: {
            dialogLabel: 'Visualizador de imagens do portfólio',
            close: 'Fechar',
            prev: 'Imagem anterior',
            next: 'Próxima imagem',
        },
    },
};

const I18n = (() => {
    let currentLang = DEFAULT_LANG;
    const changeListeners = [];

    function detectInitialLang() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && SUPPORTED_LANGS.includes(saved)) return saved;

        const browserLang = (navigator.language || '').toLowerCase();
        if (browserLang.startsWith('pt')) return 'pt';
        return DEFAULT_LANG;
    }

    // Resolve a dotted key path (e.g. "contact.label.name") against a dict
    function resolve(dict, key) {
        return key.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), dict);
    }

    function t(key, vars) {
        let value = resolve(translations[currentLang], key);
        if (value === undefined) {
            // Fall back to English, then to the raw key so missing
            // translations are visible/obvious instead of crashing.
            value = resolve(translations[DEFAULT_LANG], key);
        }
        if (value === undefined) {
            console.warn(`[i18n] Missing translation for key: "${key}"`);
            return key;
        }
        if (typeof value === 'string' && vars) {
            Object.keys(vars).forEach(v => {
                value = value.replace(new RegExp(`\\{${v}\\}`, 'g'), vars[v]);
            });
        }
        return value;
    }

    // --- DOM application ---
    function applyToDOM(root = document) {
        root.querySelectorAll('[data-i18n]').forEach(el => {
            el.textContent = t(el.getAttribute('data-i18n'));
        });

        root.querySelectorAll('[data-i18n-html]').forEach(el => {
            el.innerHTML = t(el.getAttribute('data-i18n-html'));
        });

        root.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
        });

        root.querySelectorAll('[data-i18n-list]').forEach(el => {
            const list = t(el.getAttribute('data-i18n-list'));
            if (!Array.isArray(list)) return;
            const items = el.children; // assumes existing <li> children, one per array entry
            list.forEach((text, i) => {
                if (items[i]) items[i].textContent = text;
            });
        });

        root.querySelectorAll('[data-i18n-attr]').forEach(el => {
            // format: data-i18n-attr="attr1:key1|attr2:key2"
            el.getAttribute('data-i18n-attr').split('|').forEach(pair => {
                const [attr, key] = pair.split(':');
                if (attr && key) el.setAttribute(attr.trim(), t(key.trim()));
            });
        });

        document.documentElement.setAttribute('lang', currentLang);
    }

    // --- Language switcher UI, injected next to the last nav item ---
    function injectSwitcherStyles() {
        if (document.getElementById('lang-switcher-styles')) return;
        const style = document.createElement('style');
        style.id = 'lang-switcher-styles';
        style.textContent = `
            .lang-switcher { display: inline-flex; align-items: center; }
            
            /* The site's own .main-nav li+li::before rule adds a " : " separator
               before every <li> that follows another <li>. Since this switcher is
               appended as an extra <li>, it inherits that separator too — this
               cancels it out just for this item. */

            .main-nav li.lang-switcher::before { content: none; }

            /* Belt-and-suspenders: hide any trailing separator (span or
               CSS ::after) on the nav item right before the switcher,
               in case the site's own stylesheet re-shows it now that it
               is no longer the last <li>. */

            .main-nav ul li.no-auto-separator .separator,
            .main-nav ul li.no-auto-separator::after {
                display: none !important;
                content: none !important;
            }

            /* --- 'text' style: tiny lowercase text, underline on active --- */
            .lang-switcher.style-text .lang-switcher-options {
                display: inline-flex;
                align-items: center;
                gap: 5px;
                margin-left: 14px;
                padding-left: 14px;
                border-left: 1px solid rgba(0,0,0,0.12);
            }
            .lang-switcher.style-text .lang-btn {
                background: none;
                border: none;
                cursor: pointer;
                font-family: inherit;
                font-size: 0.68em;
                font-weight: 400;
                text-transform: lowercase;
                letter-spacing: 0.02em;
                color: currentColor;
                opacity: 0.4;
                padding: 0 0 2px;
                border-bottom: 1px solid transparent;
                transition: opacity 0.2s ease, border-color 0.2s ease;
            }
            .lang-switcher.style-text .lang-btn:hover { opacity: 0.7; }
            .lang-switcher.style-text .lang-btn[aria-current="true"] {
                opacity: 0.85;
                border-bottom-color: currentColor;
            }
            .lang-switcher.style-text .lang-sep {
                opacity: 0.25;
                font-size: 0.65em;
            }

            /* --- 'pill' style: tiny segmented toggle, muted fill --- */
            .lang-switcher.style-pill .lang-switcher-options {
                display: inline-flex;
                align-items: center;
                margin-left: 14px;
                padding: 3px;
                border-radius: 999px;
                background: rgba(0,0,0,0.08);
            }
            .lang-switcher.style-pill .lang-btn {
                background: none;
                border: none;
                cursor: pointer;
                font-family: inherit;
                font-size: 0.62em;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 0.02em;
                color: currentColor;
                opacity: 0.5;
                padding: 3px 8px;
                border-radius: 999px;
                transition: opacity 0.2s ease, background 0.2s ease;
            }
            .lang-switcher.style-pill .lang-btn:hover { opacity: 0.8; }
            .lang-switcher.style-pill .lang-btn[aria-current="true"] {
                opacity: 0.8;
                background: rgba(253, 253, 235, 0.99)
            }

            /* --- 'globe' style: icon only, expands to show en/pt on hover/focus --- */
            .lang-switcher.style-globe {
                margin-left: 14px;
                position: relative;
            }
            .lang-switcher.style-globe .lang-switcher-options {
                display: inline-flex;
                align-items: center;
                gap: 0;
                cursor: default;
            }
            .lang-switcher.style-globe .lang-globe-icon {
                width: 14px;
                height: 14px;
                opacity: 0.4;
                flex-shrink: 0;
                transition: opacity 0.2s ease;
            }
            .lang-switcher.style-globe:hover .lang-globe-icon,
            .lang-switcher.style-globe:focus-within .lang-globe-icon { opacity: 0.7; }
            .lang-switcher.style-globe .lang-btn-group {
                display: inline-flex;
                align-items: center;
                gap: 4px;
                max-width: 0;
                overflow: hidden;
                opacity: 0;
                margin-left: 0;
                transition: max-width 0.25s ease, opacity 0.2s ease, margin-left 0.25s ease;
            }
            .lang-switcher.style-globe:hover .lang-btn-group,
            .lang-switcher.style-globe:focus-within .lang-btn-group {
                max-width: 60px;
                opacity: 1;
                margin-left: 6px;
            }
            .lang-switcher.style-globe .lang-btn {
                background: none;
                border: none;
                cursor: pointer;
                font-family: inherit;
                font-size: 0.65em;
                font-weight: 400;
                text-transform: lowercase;
                color: currentColor;
                opacity: 0.45;
                padding: 0;
                white-space: nowrap;
                transition: opacity 0.2s ease;
            }
            .lang-switcher.style-globe .lang-btn:hover { opacity: 0.8; }
            .lang-switcher.style-globe .lang-btn[aria-current="true"] {
                opacity: 1;
                text-decoration: underline;
                text-underline-offset: 2px;
            }
            .lang-switcher.style-globe .lang-sep {
                opacity: 0.25;
                font-size: 0.6em;
            }
        `;
        document.head.appendChild(style);
    }

    function buildSwitcher() {
        if (document.querySelector('.lang-switcher')) return;

        const navList = document.querySelector('.main-nav ul');
        if (!navList) return;

        injectSwitcherStyles();

        // Whatever was the last <li> (CONTACT) may rely on being :last-child
        // to hide its trailing separator via the site's own CSS. Since our
        // switcher is now appended after it, that separator can reappear —
        // so we explicitly strip it here.
        const previousLastItem = navList.querySelector('li:last-child');
        if (previousLastItem) {
            const trailingSeparator = previousLastItem.querySelector('.separator');
            if (trailingSeparator) trailingSeparator.remove();
            previousLastItem.classList.add('no-auto-separator');
        }

        const li = document.createElement('li');
        li.className = `lang-switcher style-${SWITCHER_STYLE}`;
        li.setAttribute('aria-label', 'Language selector');

        if (SWITCHER_STYLE === 'globe') {
            buildGlobeSwitcher(li);
        } else {
            buildInlineSwitcher(li);
        }

        navList.appendChild(li);
        updateSwitcherUI();
    }

    // Shared markup for the 'text' and 'pill' styles: just the language
    // buttons with a separator between them.
    function buildInlineSwitcher(li) {
        const wrap = document.createElement('span');
        wrap.className = 'lang-switcher-options';

        SUPPORTED_LANGS.forEach((lang, idx) => {
            wrap.appendChild(createLangButton(lang));
            if (idx < SUPPORTED_LANGS.length - 1) {
                wrap.appendChild(createSeparator());
            }
        });

        li.appendChild(wrap);
    }

    // 'globe' style: a small globe icon; the language buttons live inside
    // a group that only expands on hover/focus, so at rest it's just a
    // quiet icon rather than visible text.
    function buildGlobeSwitcher(li) {
        const wrap = document.createElement('span');
        wrap.className = 'lang-switcher-options';
        wrap.tabIndex = 0;
        wrap.setAttribute('role', 'group');

        const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        icon.setAttribute('viewBox', '0 0 24 24');
        icon.setAttribute('class', 'lang-globe-icon');
        icon.setAttribute('aria-hidden', 'true');
        icon.innerHTML = `
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/>
            <ellipse cx="12" cy="12" rx="4" ry="9" fill="none" stroke="currentColor" stroke-width="1.5"/>
            <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="1.5"/>
        `;
        wrap.appendChild(icon);

        const group = document.createElement('span');
        group.className = 'lang-btn-group';
        SUPPORTED_LANGS.forEach((lang, idx) => {
            group.appendChild(createLangButton(lang));
            if (idx < SUPPORTED_LANGS.length - 1) {
                group.appendChild(createSeparator());
            }
        });
        wrap.appendChild(group);

        li.appendChild(wrap);
    }

    function createLangButton(lang) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'lang-btn';
        btn.dataset.lang = lang;
        btn.textContent = lang.toUpperCase();
        btn.addEventListener('click', () => setLanguage(lang));
        return btn;
    }

    function createSeparator() {
        const sep = document.createElement('span');
        sep.className = 'lang-sep';
        sep.textContent = ' ';
        sep.setAttribute('aria-hidden', 'true');
        return sep;
    }

    function updateSwitcherUI() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const active = btn.dataset.lang === currentLang;
            btn.setAttribute('aria-current', active ? 'true' : 'false');
        });
    }

    function setLanguage(lang) {
        if (!SUPPORTED_LANGS.includes(lang) || lang === currentLang) {
            if (lang === currentLang) return;
            console.warn(`[i18n] Unsupported language: "${lang}"`);
            return;
        }
        currentLang = lang;
        localStorage.setItem(STORAGE_KEY, lang);
        applyToDOM();
        updateSwitcherUI();
        changeListeners.forEach(fn => fn(currentLang));
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
    }

    function getLanguage() {
        return currentLang;
    }

    function onChange(fn) {
        if (typeof fn === 'function') changeListeners.push(fn);
    }

    function deepMerge(target, source) {
        Object.keys(source).forEach(key => {
            if (
                source[key] && typeof source[key] === 'object' && !Array.isArray(source[key]) &&
                target[key] && typeof target[key] === 'object' && !Array.isArray(target[key])
            ) {
                deepMerge(target[key], source[key]);
            } else {
                target[key] = source[key];
            }
        });
        return target;
    }

    // Lets a page-specific file (e.g. qa-i18n.js) add its own translation
    // keys without touching this file. Expects { en: {...}, pt: {...} } and
    // merges it into the shared dictionary under the same top-level shape
    // (so a qa-i18n.js file can just export { en: { qa: {...} }, pt: { qa: {...} } }).
    // Safe to call before or after init() — re-applies translations either way.
    function extend(langDict) {
        if (!langDict) return;
        Object.keys(langDict).forEach(lang => {
            if (!translations[lang]) translations[lang] = {};
            deepMerge(translations[lang], langDict[lang]);
        });
        applyToDOM();
    }

    function init() {
        currentLang = detectInitialLang();
        buildSwitcher();
        applyToDOM();
        updateSwitcherUI();
        return true;
    }

    return { init, t, setLanguage, getLanguage, onChange, extend };
})();

export default I18n;
