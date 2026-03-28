const DEFAULT_LANGUAGE = 'pt';
const LANGUAGE_STORAGE_KEY = 'mugo-language';
const COOKIE_CONSENT_STORAGE_KEY = 'mugo-cookie-consent-v1';
const COOKIE_CONSENT_VERSION = 1;

const OPTIONAL_CONSENT_CATEGORIES = ['analytics', 'marketing'];

const TRANSLATIONS = {
  pt: {
    meta: {
      title: 'Mugô - Website Web',
    },
    lang: {
      pt: 'PT',
      en: 'EN',
      es: 'ES',
    },
    nav: {
      about: 'Sobre nós',
      services: 'Serviços',
      clients: 'Clientes',
    },
    hero: {
      cta: 'Faça um diagnóstico',
    },
    services: {
      title: 'O <span class="text-[#222]">TEMPO</span> É O ATIVO MAIS CARO DA SUA OPERAÇÃO',
      lead: 'Empresas ainda desperdiçam horas preciosas com processos manuais, decisões dispersas e presença digital sem direção.',
      card1: 'A Mugô existe para reorganizar essa lógica e devolver tempo.',
      card2: 'Desbloqueando novas possibilidades de crescimento',
      cta: 'Agende sua reunião',
    },
    platform: {
      questionLine1: 'E você,',
      questionLine2: 'onde está?',
      aiLine1: 'Inteligência',
      aiLine2: 'Artificial',
      social: 'Rede social',
      automation: 'Automação',
      here: 'Estamos aqui :)',
    },
    brand: {
      name: 'Mugô',
    },
    about: {
      watermark: 'QUEM SOMOS',
    },
    team: {
      julia: {
        role: 'Diretora Criativa',
        bio: 'Com 10 anos de experiência no mercado, Julia trabalhou com multinacionais como Accenture, onde atendeu Electrolux, Whirlpool, Itaú e Petrobrás. Atuou como líder de Marketing Digital na marca Ricardo Almeida e em agências atendendo marcas brasileiras nos Estados Unidos e América Latina.',
      },
      danilo: {
        role: 'Especialista em I.A.',
        bio: 'Danilo começou em publicidade nos anos 2000, como redator. Foi sócio de uma agência em Pernambuco, que atua principalmente no Norte e Nordeste, atendendo clientes como Sonho de Valsa, M Dias Branco e Carnaval do Estado de Pernambuco. Nos últimos 11 anos se especializou em inteligência artificial.',
      },
      kleber: {
        role: 'Desenvolvedor de Sistemas',
        bio: 'Formado em Desenvolvimento de Sistemas pela FIAP, Kleber atua na criação de soluções digitais que unem tecnologia, automação e performance. Trabalha com automação de redes sociais, desenvolvimento de chatbots e criação de sites, e-commerce e landing pages.',
      },
    },
    footer: {
      title: 'FALE COM A GENTE',
      instagram: '@mugo.ag',
      linkedin: 'Mugô Ag',
      phonePrimary: '(11) 9 7351-0549',
      phoneSecondary: '(11) 9 8653-1008',
    },
    newsletter: {
      title: 'Receba insights da Mugô',
      description: 'Estratégia, tecnologia e direção para marcas que querem crescer com mais clareza.',
      button: 'Assinar newsletter',
      close: 'Fechar modal de newsletter',
      form: {
        namePlaceholder: 'Seu nome',
        emailPlaceholder: 'Seu melhor e-mail',
        instagramPlaceholder: '@instagram da marca (opcional)',
        submit: 'Quero receber',
        sending: 'Enviando...',
        success: 'Cadastro realizado com sucesso.',
      },
    },
    cookies: {
      banner: {
        title: 'Sua privacidade importa',
        description: 'Usamos cookies necessários para o funcionamento do site e opcionais para analytics e marketing.',
      },
      manageButton: 'Gerenciar cookies',
      actions: {
        acceptAll: 'Aceitar tudo',
        rejectOptional: 'Recusar opcionais',
        customize: 'Personalizar',
        savePreferences: 'Salvar preferências',
      },
      modal: {
        title: 'Preferências de cookies',
        description: 'Você pode ajustar como usamos cookies opcionais para medir resultados e personalizar campanhas.',
        close: 'Fechar preferências de cookies',
      },
      categories: {
        necessary: {
          title: 'Necessários',
          description: 'Essenciais para segurança, navegação e funcionamento do site.',
          alwaysOn: 'Sempre ativo',
        },
        analytics: {
          title: 'Analytics',
          description: 'Ajuda a entender o uso do site para melhorar a experiência.',
        },
        marketing: {
          title: 'Marketing',
          description: 'Permite mensurar campanhas e personalizar anúncios.',
        },
      },
    },
    sidebar: {
      ai: 'I.A. Generativa',
      landing: 'Landing page',
      ecommerce: 'E-commerce',
      institutional: 'Site institucional',
      automation: 'Automação',
      avatar: 'Criação de<br>avatar',
      consulting: 'Consultorias',
    },
    accessibility: {
      openMenu: 'Abrir menu lateral',
      closeMenu: 'Fechar menu lateral',
      linkedinJulia: 'LinkedIn Julia Portela',
      linkedinDanilo: 'LinkedIn Danilo Portela',
      linkedinKleber: 'LinkedIn Kleber Williams',
      emailMugo: 'E-mail Mugô',
    },
  },
  en: {
    meta: {
      title: 'Mugô - Website',
    },
    lang: {
      pt: 'PT',
      en: 'EN',
      es: 'ES',
    },
    nav: {
      about: 'About us',
      services: 'Services',
      clients: 'Clients',
    },
    hero: {
      cta: 'Get a diagnosis',
    },
    services: {
      title: 'The Most Expensive Asset in Your Operation Is <span class="text-[#222]">TIME</span>',
      lead: 'Companies still waste precious hours with manual processes, scattered decisions, and a digital presence without direction.',
      card1: 'Mugô exists to reorganize this logic and give time back.',
      card2: 'Unlocking new growth possibilities',
      cta: 'Book your meeting',
    },
    platform: {
      questionLine1: 'And you,',
      questionLine2: 'where are you?',
      aiLine1: 'Artificial',
      aiLine2: 'Intelligence',
      social: 'Social media',
      automation: 'Automation',
      here: 'We are here :)',
    },
    brand: {
      name: 'Mugô',
    },
    about: {
      watermark: 'WHO WE ARE',
    },
    team: {
      julia: {
        role: 'Creative Director',
        bio: 'With 10 years of market experience, Julia has worked with multinational companies such as Accenture, serving Electrolux, Whirlpool, Itaú, and Petrobrás. She also served as Digital Marketing lead at Ricardo Almeida and at agencies supporting Brazilian brands in the United States and Latin America.',
      },
      danilo: {
        role: 'A.I. Specialist',
        bio: 'Danilo started in advertising in the 2000s as a copywriter. He became a partner at an agency in Pernambuco that mainly operates in the North and Northeast of Brazil, serving clients such as Sonho de Valsa, M Dias Branco, and Pernambuco State Carnival. In the last 11 years, he specialized in artificial intelligence.',
      },
      kleber: {
        role: 'Systems Developer',
        bio: 'Graduated in Systems Development from FIAP, Kleber builds digital solutions that combine technology, automation, and performance. He works with social media automation, chatbot development, and website, e-commerce, and landing page creation.',
      },
    },
    footer: {
      title: "LET'S TALK",
      instagram: '@mugo.ag',
      linkedin: 'Mugô Ag',
      phonePrimary: '(11) 9 7351-0549',
      phoneSecondary: '(11) 9 8653-1008',
    },
    newsletter: {
      title: 'Get insights from Mugô',
      description: 'Strategy, technology, and direction for brands that want to grow with more clarity.',
      button: 'Subscribe to newsletter',
      close: 'Close newsletter modal',
      form: {
        namePlaceholder: 'Your name',
        emailPlaceholder: 'Your best email',
        instagramPlaceholder: 'Brand Instagram @ (optional)',
        submit: 'I want to receive',
        sending: 'Sending...',
        success: 'Subscription completed successfully.',
      },
    },
    cookies: {
      banner: {
        title: 'Your privacy matters',
        description: 'We use necessary cookies for core site functionality and optional cookies for analytics and marketing.',
      },
      manageButton: 'Manage cookies',
      actions: {
        acceptAll: 'Accept all',
        rejectOptional: 'Reject optional',
        customize: 'Customize',
        savePreferences: 'Save preferences',
      },
      modal: {
        title: 'Cookie preferences',
        description: 'You can adjust how we use optional cookies to measure results and personalize campaigns.',
        close: 'Close cookie preferences',
      },
      categories: {
        necessary: {
          title: 'Necessary',
          description: 'Essential for security, navigation, and proper site operation.',
          alwaysOn: 'Always active',
        },
        analytics: {
          title: 'Analytics',
          description: 'Helps us understand site usage to improve your experience.',
        },
        marketing: {
          title: 'Marketing',
          description: 'Allows campaign measurement and personalized advertising.',
        },
      },
    },
    sidebar: {
      ai: 'Generative A.I.',
      landing: 'Landing page',
      ecommerce: 'E-commerce',
      institutional: 'Corporate website',
      automation: 'Automation',
      avatar: 'Avatar<br>creation',
      consulting: 'Consulting',
    },
    accessibility: {
      openMenu: 'Open side menu',
      closeMenu: 'Close side menu',
      linkedinJulia: 'LinkedIn Julia Portela',
      linkedinDanilo: 'LinkedIn Danilo Portela',
      linkedinKleber: 'LinkedIn Kleber Williams',
      emailMugo: 'Mugô email',
    },
  },
  es: {
    meta: {
      title: 'Mugô - Sitio web',
    },
    lang: {
      pt: 'PT',
      en: 'EN',
      es: 'ES',
    },
    nav: {
      about: 'Sobre nosotros',
      services: 'Servicios',
      clients: 'Clientes',
    },
    hero: {
      cta: 'Haz un diagnóstico',
    },
    services: {
      title: 'El activo más caro de tu operación es el <span class="text-[#222]">TIEMPO</span>',
      lead: 'Las empresas todavía desperdician horas valiosas con procesos manuales, decisiones dispersas y una presencia digital sin dirección.',
      card1: 'Mugô existe para reorganizar esta lógica y devolver tiempo.',
      card2: 'Desbloqueando nuevas posibilidades de crecimiento',
      cta: 'Agenda tu reunión',
    },
    platform: {
      questionLine1: 'Y tú,',
      questionLine2: '¿dónde estás?',
      aiLine1: 'Inteligencia',
      aiLine2: 'Artificial',
      social: 'Red social',
      automation: 'Automatización',
      here: 'Estamos aquí :)',
    },
    brand: {
      name: 'Mugô',
    },
    about: {
      watermark: 'QUIÉNES SOMOS',
    },
    team: {
      julia: {
        role: 'Directora Creativa',
        bio: 'Con 10 años de experiencia en el mercado, Julia trabajó con multinacionales como Accenture, atendiendo a Electrolux, Whirlpool, Itaú y Petrobrás. También actuó como líder de Marketing Digital en la marca Ricardo Almeida y en agencias que atendían marcas brasileñas en Estados Unidos y América Latina.',
      },
      danilo: {
        role: 'Especialista en I.A.',
        bio: 'Danilo empezó en publicidad en los años 2000 como redactor. Fue socio de una agencia en Pernambuco, que actúa principalmente en el Norte y Nordeste, atendiendo clientes como Sonho de Valsa, M Dias Branco y el Carnaval del Estado de Pernambuco. En los últimos 11 años se especializó en inteligencia artificial.',
      },
      kleber: {
        role: 'Desarrollador de Sistemas',
        bio: 'Graduado en Desarrollo de Sistemas por FIAP, Kleber crea soluciones digitales que unen tecnología, automatización y rendimiento. Trabaja con automatización de redes sociales, desarrollo de chatbots y creación de sitios web, e-commerce y landing pages.',
      },
    },
    footer: {
      title: 'HABLEMOS',
      instagram: '@mugo.ag',
      linkedin: 'Mugô Ag',
      phonePrimary: '(11) 9 7351-0549',
      phoneSecondary: '(11) 9 8653-1008',
    },
    newsletter: {
      title: 'Recibe insights de Mugô',
      description: 'Estrategia, tecnología y dirección para marcas que quieren crecer con más claridad.',
      button: 'Suscribirme al newsletter',
      close: 'Cerrar modal del newsletter',
      form: {
        namePlaceholder: 'Tu nombre',
        emailPlaceholder: 'Tu mejor correo',
        instagramPlaceholder: '@instagram de la marca (opcional)',
        submit: 'Quiero recibir',
        sending: 'Enviando...',
        success: 'Registro realizado con éxito.',
      },
    },
    cookies: {
      banner: {
        title: 'Tu privacidad importa',
        description: 'Usamos cookies necesarias para el funcionamiento del sitio y opcionales para analytics y marketing.',
      },
      manageButton: 'Gestionar cookies',
      actions: {
        acceptAll: 'Aceptar todo',
        rejectOptional: 'Rechazar opcionales',
        customize: 'Personalizar',
        savePreferences: 'Guardar preferencias',
      },
      modal: {
        title: 'Preferencias de cookies',
        description: 'Puedes ajustar cómo usamos cookies opcionales para medir resultados y personalizar campañas.',
        close: 'Cerrar preferencias de cookies',
      },
      categories: {
        necessary: {
          title: 'Necesarias',
          description: 'Esenciales para seguridad, navegación y funcionamiento del sitio.',
          alwaysOn: 'Siempre activo',
        },
        analytics: {
          title: 'Analytics',
          description: 'Ayuda a entender el uso del sitio para mejorar la experiencia.',
        },
        marketing: {
          title: 'Marketing',
          description: 'Permite medir campañas y personalizar anuncios.',
        },
      },
    },
    sidebar: {
      ai: 'I.A. Generativa',
      landing: 'Landing page',
      ecommerce: 'E-commerce',
      institutional: 'Sitio institucional',
      automation: 'Automatización',
      avatar: 'Creación de<br>avatar',
      consulting: 'Consultorías',
    },
    accessibility: {
      openMenu: 'Abrir menú lateral',
      closeMenu: 'Cerrar menú lateral',
      linkedinJulia: 'LinkedIn Julia Portela',
      linkedinDanilo: 'LinkedIn Danilo Portela',
      linkedinKleber: 'LinkedIn Kleber Williams',
      emailMugo: 'Correo de Mugô',
    },
  },
};

const LANG_HTML_MAP = {
  pt: 'pt-BR',
  en: 'en',
  es: 'es',
};

let currentConsentRecord = createConsentRecord({
  consentGiven: false,
  categories: {
    necessary: true,
    analytics: false,
    marketing: false,
  },
  source: 'default',
});

const consentListeners = new Set();
const deferredCallbacks = {
  analytics: [],
  marketing: [],
};

function getNestedValue(object, path) {
  return path.split('.').reduce((accumulator, key) => {
    if (accumulator && Object.prototype.hasOwnProperty.call(accumulator, key)) {
      return accumulator[key];
    }
    return undefined;
  }, object);
}

function getTranslation(language, key) {
  const value = getNestedValue(TRANSLATIONS[language], key);
  if (value !== undefined) {
    return value;
  }
  return getNestedValue(TRANSLATIONS[DEFAULT_LANGUAGE], key);
}

function updateLanguageButtons(activeLanguage) {
  const languageButtons = document.querySelectorAll('.language-switch[data-lang]');
  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === activeLanguage;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

function applyTranslations(language) {
  const safeLanguage = TRANSLATIONS[language] ? language : DEFAULT_LANGUAGE;
  document.documentElement.lang = LANG_HTML_MAP[safeLanguage] || LANG_HTML_MAP[DEFAULT_LANGUAGE];

  const title = getTranslation(safeLanguage, 'meta.title');
  if (title) {
    document.title = title;
  }

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const translatedText = getTranslation(safeLanguage, key);
    if (translatedText !== undefined) {
      element.textContent = translatedText;
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const key = element.dataset.i18nHtml;
    const translatedText = getTranslation(safeLanguage, key);
    if (translatedText !== undefined) {
      element.innerHTML = translatedText;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const translatedText = getTranslation(safeLanguage, key);
    if (translatedText !== undefined) {
      element.setAttribute('placeholder', translatedText);
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    const translatedText = getTranslation(safeLanguage, key);
    if (translatedText !== undefined) {
      element.setAttribute('aria-label', translatedText);
    }
  });

  updateLanguageButtons(safeLanguage);
}

function getInitialLanguage() {
  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (storedLanguage && TRANSLATIONS[storedLanguage]) {
      return storedLanguage;
    }
  } catch (error) {
    // Ignore storage access issues and fallback to default language.
  }
  return DEFAULT_LANGUAGE;
}

function persistLanguage(language) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (error) {
    // Ignore storage access issues.
  }
}

function syncModalOpenState() {
  const modalIds = ['modal-newsletter', 'cookie-preferences-modal'];
  const hasOpenModal = modalIds.some((modalId) => {
    const element = document.getElementById(modalId);
    return element && !element.classList.contains('hidden');
  });

  document.body.classList.toggle('modal-open', hasOpenModal);
}

function setupSidebar() {
  const sidebarContainer = document.getElementById('sidebar-container');
  const sidebarBackdrop = document.getElementById('sidebar-backdrop');
  const sidebarContent = document.getElementById('sidebar-content');
  const menuOpenButton = document.getElementById('menu-open-btn');
  const menuCloseButton = document.getElementById('menu-close-btn');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  if (!sidebarContainer || !sidebarBackdrop || !sidebarContent) {
    return null;
  }

  const setSidebarState = (isOpen) => {
    sidebarContainer.setAttribute('data-open', isOpen ? 'true' : 'false');
    sidebarBackdrop.classList.toggle('opacity-0', !isOpen);
    sidebarBackdrop.classList.toggle('pointer-events-none', !isOpen);
    sidebarBackdrop.classList.toggle('opacity-100', isOpen);
    sidebarBackdrop.classList.toggle('pointer-events-auto', isOpen);
    sidebarContent.classList.toggle('translate-x-[110%]', !isOpen);
    sidebarContent.classList.toggle('translate-x-0', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  };

  const openSidebar = () => setSidebarState(true);
  const closeSidebar = () => setSidebarState(false);

  setSidebarState(false);

  if (menuOpenButton) {
    menuOpenButton.addEventListener('click', openSidebar);
  }

  if (menuCloseButton) {
    menuCloseButton.addEventListener('click', closeSidebar);
  }

  sidebarBackdrop.addEventListener('click', closeSidebar);

  sidebarLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');

      if (targetId && targetId.startsWith('#')) {
        event.preventDefault();
        closeSidebar();

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 300);
        }
      }
    });
  });

  return closeSidebar;
}

function setupNewsletter(getCurrentLanguage) {
  const openNewsletterButton = document.getElementById('open-newsletter');
  const closeNewsletterButton = document.getElementById('close-newsletter');
  const modalNewsletter = document.getElementById('modal-newsletter');
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterStatus = document.getElementById('newsletter-status');

  if (!modalNewsletter) {
    return null;
  }

  const openModal = () => {
    modalNewsletter.classList.remove('hidden');
    if (newsletterStatus) {
      newsletterStatus.textContent = '';
    }
    syncModalOpenState();
  };

  const closeModal = () => {
    modalNewsletter.classList.add('hidden');
    syncModalOpenState();
  };

  if (openNewsletterButton) {
    openNewsletterButton.addEventListener('click', openModal);
  }

  if (closeNewsletterButton) {
    closeNewsletterButton.addEventListener('click', closeModal);
  }

  modalNewsletter.addEventListener('click', (event) => {
    if (event.target === modalNewsletter) {
      closeModal();
    }
  });

  if (newsletterForm && newsletterStatus) {
    newsletterForm.addEventListener('submit', () => {
      const language = getCurrentLanguage();
      newsletterStatus.textContent = getTranslation(language, 'newsletter.form.sending');

      window.setTimeout(() => {
        newsletterStatus.textContent = getTranslation(language, 'newsletter.form.success');
        newsletterForm.reset();
      }, 1200);
    });
  }

  return closeModal;
}

function setupServicosAnimation() {
  const servicosSection = document.getElementById('servicos');

  if (!servicosSection) {
    return;
  }

  const servicosTitle = servicosSection.querySelector('.servicos-title');
  const servicosText = servicosSection.querySelector('.servicos-fade');
  const servicosCards = servicosSection.querySelectorAll('.servicos-card');
  const servicosButton = servicosSection.querySelector('.servicos-cta');

  if (servicosTitle) {
    servicosTitle.classList.add('servicos-anim');
  }

  if (servicosText) {
    servicosText.classList.add('servicos-anim', 'servicos-delay-1');
  }

  if (servicosCards[0]) {
    servicosCards[0].classList.add('servicos-anim', 'servicos-delay-2', 'servicos-card');
  }

  if (servicosCards[1]) {
    servicosCards[1].classList.add('servicos-anim', 'servicos-delay-3', 'servicos-card');
  }

  if (servicosButton) {
    servicosButton.classList.add('servicos-anim', 'servicos-delay-4');
  }

  const servicosAnimItems = servicosSection.querySelectorAll('.servicos-anim');

  const servicosObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.35,
  });

  servicosAnimItems.forEach((item) => {
    servicosObserver.observe(item);
  });
}

function setupSobreAnimation() {
  const sobreSection = document.getElementById('sobre-nos');

  if (!sobreSection) {
    return;
  }

  const sobreCards = sobreSection.querySelectorAll('.team-card');
  const sobreWatermark = sobreSection.querySelector('.sobre-watermark');

  if (sobreWatermark) {
    sobreWatermark.classList.add('sobre-anim');
  }

  if (sobreCards[0]) {
    sobreCards[0].classList.add('sobre-anim', 'sobre-delay-1', 'sobre-card');
  }

  if (sobreCards[1]) {
    sobreCards[1].classList.add('sobre-anim', 'sobre-delay-2', 'sobre-card');
  }

  if (sobreCards[2]) {
    sobreCards[2].classList.add('sobre-anim', 'sobre-delay-3', 'sobre-card');
  }

  const sobreAnimItems = sobreSection.querySelectorAll('.sobre-anim');

  const sobreObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        window.requestAnimationFrame(() => {
          entry.target.classList.add('is-visible');
        });
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
  });

  sobreAnimItems.forEach((item) => {
    sobreObserver.observe(item);
  });
}

function createConsentRecord({ consentGiven, categories, source }) {
  return {
    version: COOKIE_CONSENT_VERSION,
    consentGiven: Boolean(consentGiven),
    source: source || 'custom',
    updatedAt: new Date().toISOString(),
    categories: {
      necessary: true,
      analytics: Boolean(categories && categories.analytics),
      marketing: Boolean(categories && categories.marketing),
    },
  };
}

function cloneConsentRecord(record) {
  return {
    version: record.version,
    consentGiven: record.consentGiven,
    source: record.source,
    updatedAt: record.updatedAt,
    categories: {
      necessary: true,
      analytics: Boolean(record.categories.analytics),
      marketing: Boolean(record.categories.marketing),
    },
  };
}

function loadStoredConsentRecord() {
  try {
    const rawRecord = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!rawRecord) {
      return null;
    }

    const parsedRecord = JSON.parse(rawRecord);
    if (!parsedRecord || typeof parsedRecord !== 'object') {
      return null;
    }

    return createConsentRecord({
      consentGiven: parsedRecord.consentGiven,
      categories: parsedRecord.categories,
      source: parsedRecord.source || 'stored',
    });
  } catch (error) {
    return null;
  }
}

function persistConsentRecord(record) {
  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(record));
  } catch (error) {
    // Ignore storage access issues.
  }
}

function getConsentModePayload(record) {
  const analyticsGranted = Boolean(record.categories.analytics);
  const marketingGranted = Boolean(record.categories.marketing);

  return {
    ad_storage: marketingGranted ? 'granted' : 'denied',
    ad_user_data: marketingGranted ? 'granted' : 'denied',
    ad_personalization: marketingGranted ? 'granted' : 'denied',
    analytics_storage: analyticsGranted ? 'granted' : 'denied',
    personalization_storage: analyticsGranted ? 'granted' : 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
  };
}

function applyConsentToThirdParties(record, { useDefaultEvent } = { useDefaultEvent: false }) {
  window.dataLayer = window.dataLayer || [];
  const payload = getConsentModePayload(record);

  if (typeof window.gtag === 'function') {
    window.gtag('consent', useDefaultEvent ? 'default' : 'update', payload);
  }

  window.dataLayer.push({
    event: useDefaultEvent ? 'mugo_consent_default' : 'mugo_consent_update',
    consent_source: record.source,
    consent_necessary: 'granted',
    consent_analytics: record.categories.analytics ? 'granted' : 'denied',
    consent_marketing: record.categories.marketing ? 'granted' : 'denied',
    ...payload,
  });

  if (typeof window.fbq === 'function') {
    window.fbq('consent', record.categories.marketing ? 'grant' : 'revoke');
  }
}

function activateBlockedConsentScriptsForCategory(category) {
  const selector = `script[type="text/plain"][data-consent-category="${category}"]:not([data-consent-loaded="true"])`;
  const blockedScripts = document.querySelectorAll(selector);

  blockedScripts.forEach((blockedScript) => {
    const script = document.createElement('script');

    Array.from(blockedScript.attributes).forEach((attribute) => {
      const { name, value } = attribute;
      if (name === 'type' || name.startsWith('data-consent-')) {
        return;
      }
      script.setAttribute(name, value);
    });

    if (blockedScript.dataset.consentSrc) {
      script.src = blockedScript.dataset.consentSrc;
    }

    if (blockedScript.textContent && blockedScript.textContent.trim().length > 0) {
      script.text = blockedScript.textContent;
    }

    blockedScript.dataset.consentLoaded = 'true';
    blockedScript.parentNode?.insertBefore(script, blockedScript.nextSibling);
  });
}

function flushDeferredCallbacks(record) {
  OPTIONAL_CONSENT_CATEGORIES.forEach((category) => {
    if (!record.categories[category]) {
      return;
    }

    activateBlockedConsentScriptsForCategory(category);

    const queue = deferredCallbacks[category];
    if (!Array.isArray(queue) || queue.length === 0) {
      return;
    }

    deferredCallbacks[category] = [];
    queue.forEach((callback) => {
      try {
        callback();
      } catch (error) {
        console.error(`[MugoConsent] erro ao executar script adiado para ${category}.`, error);
      }
    });
  });
}

function emitConsentChange(record) {
  consentListeners.forEach((listener) => {
    try {
      listener(cloneConsentRecord(record));
    } catch (error) {
      console.error('[MugoConsent] erro no listener de consentimento.', error);
    }
  });
}

function setConsentRecord(nextRecord, {
  persist = true,
  useDefaultEvent = false,
  emit = true,
} = {}) {
  currentConsentRecord = createConsentRecord({
    consentGiven: nextRecord.consentGiven,
    categories: nextRecord.categories,
    source: nextRecord.source,
  });

  if (persist && currentConsentRecord.consentGiven) {
    persistConsentRecord(currentConsentRecord);
  }

  applyConsentToThirdParties(currentConsentRecord, { useDefaultEvent });
  flushDeferredCallbacks(currentConsentRecord);

  if (emit) {
    emitConsentChange(currentConsentRecord);
  }

  return cloneConsentRecord(currentConsentRecord);
}

function initConsentApi() {
  window.dataLayer = window.dataLayer || [];

  window.MugoConsent = {
    getState() {
      return cloneConsentRecord(currentConsentRecord);
    },
    canRun(category) {
      if (category === 'necessary') {
        return true;
      }
      if (!OPTIONAL_CONSENT_CATEGORIES.includes(category)) {
        return false;
      }
      return Boolean(currentConsentRecord.categories[category]);
    },
    onChange(listener) {
      if (typeof listener !== 'function') {
        return () => {};
      }

      consentListeners.add(listener);
      return () => {
        consentListeners.delete(listener);
      };
    },
    runWhenConsented(category, callback) {
      if (typeof callback !== 'function') {
        return;
      }

      if (category === 'necessary') {
        callback();
        return;
      }

      if (!OPTIONAL_CONSENT_CATEGORIES.includes(category)) {
        callback();
        return;
      }

      if (currentConsentRecord.categories[category]) {
        callback();
        return;
      }

      deferredCallbacks[category].push(callback);
    },
  };
}

function setupCookieConsent() {
  const banner = document.getElementById('cookie-consent-banner');
  const manageButton = document.getElementById('cookie-manage-btn');
  const preferencesModal = document.getElementById('cookie-preferences-modal');
  const preferencesBackdrop = preferencesModal?.querySelector('.cookie-modal__backdrop');

  const bannerCustomizeButton = document.getElementById('cookie-customize-btn');
  const bannerRejectButton = document.getElementById('cookie-reject-btn');
  const bannerAcceptButton = document.getElementById('cookie-accept-btn');

  const modalCloseButton = document.getElementById('cookie-close-modal');
  const modalRejectButton = document.getElementById('cookie-modal-reject');
  const modalSaveButton = document.getElementById('cookie-modal-save');
  const modalAcceptButton = document.getElementById('cookie-modal-accept');

  const analyticsToggle = document.getElementById('cookie-analytics-toggle');
  const marketingToggle = document.getElementById('cookie-marketing-toggle');

  if (!banner || !manageButton || !preferencesModal || !analyticsToggle || !marketingToggle) {
    return null;
  }

  const updateUiByConsent = (record) => {
    if (record.consentGiven) {
      banner.classList.add('hidden');
      manageButton.classList.remove('hidden');
    } else {
      banner.classList.remove('hidden');
      manageButton.classList.add('hidden');
    }

    analyticsToggle.checked = Boolean(record.categories.analytics);
    marketingToggle.checked = Boolean(record.categories.marketing);
  };

  const openPreferencesModal = () => {
    preferencesModal.classList.remove('hidden');
    syncModalOpenState();
  };

  const closePreferencesModal = () => {
    preferencesModal.classList.add('hidden');
    syncModalOpenState();
  };

  const saveConsentChoice = ({ analytics, marketing, source }) => {
    const savedRecord = setConsentRecord({
      consentGiven: true,
      categories: {
        necessary: true,
        analytics,
        marketing,
      },
      source,
    });

    updateUiByConsent(savedRecord);
    closePreferencesModal();
  };

  const applyAcceptAll = () => {
    saveConsentChoice({
      analytics: true,
      marketing: true,
      source: 'accept_all',
    });
  };

  const applyRejectOptionals = () => {
    saveConsentChoice({
      analytics: false,
      marketing: false,
      source: 'reject_optional',
    });
  };

  const applyCustomChoice = () => {
    saveConsentChoice({
      analytics: analyticsToggle.checked,
      marketing: marketingToggle.checked,
      source: 'customize',
    });
  };

  bannerCustomizeButton?.addEventListener('click', openPreferencesModal);
  bannerRejectButton?.addEventListener('click', applyRejectOptionals);
  bannerAcceptButton?.addEventListener('click', applyAcceptAll);

  manageButton.addEventListener('click', openPreferencesModal);

  modalCloseButton?.addEventListener('click', closePreferencesModal);
  modalRejectButton?.addEventListener('click', applyRejectOptionals);
  modalSaveButton?.addEventListener('click', applyCustomChoice);
  modalAcceptButton?.addEventListener('click', applyAcceptAll);

  preferencesBackdrop?.addEventListener('click', closePreferencesModal);

  const storedRecord = loadStoredConsentRecord();

  if (storedRecord) {
    const appliedRecord = setConsentRecord(storedRecord, {
      persist: false,
      useDefaultEvent: false,
      emit: false,
    });
    updateUiByConsent(appliedRecord);
  } else {
    const defaultRecord = setConsentRecord({
      consentGiven: false,
      categories: {
        necessary: true,
        analytics: false,
        marketing: false,
      },
      source: 'default',
    }, {
      persist: false,
      useDefaultEvent: true,
      emit: false,
    });
    updateUiByConsent(defaultRecord);
  }

  return closePreferencesModal;
}

document.addEventListener('DOMContentLoaded', () => {
  let currentLanguage = getInitialLanguage();

  initConsentApi();

  const changeLanguage = (nextLanguage) => {
    if (!TRANSLATIONS[nextLanguage]) {
      return;
    }

    currentLanguage = nextLanguage;
    persistLanguage(nextLanguage);
    applyTranslations(nextLanguage);
  };

  const languageButtons = document.querySelectorAll('.language-switch[data-lang]');
  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedLanguage = button.dataset.lang;
      if (selectedLanguage && selectedLanguage !== currentLanguage) {
        changeLanguage(selectedLanguage);
      }
    });
  });

  applyTranslations(currentLanguage);

  const closeSidebar = setupSidebar();
  const closeNewsletterModal = setupNewsletter(() => currentLanguage);
  const closeCookiePreferencesModal = setupCookieConsent();

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') {
      return;
    }

    if (typeof closeCookiePreferencesModal === 'function') {
      closeCookiePreferencesModal();
    }

    if (typeof closeNewsletterModal === 'function') {
      closeNewsletterModal();
    }

    if (typeof closeSidebar === 'function') {
      closeSidebar();
    }
  });

  setupServicosAnimation();
  setupSobreAnimation();
});


const servicePopup = document.getElementById("service-popup");
const servicePopupCard = document.getElementById("service-popup-card");
const servicePopupTitle = document.getElementById("service-popup-title");
const servicePopupText = document.getElementById("service-popup-text");
const servicePopupClose = document.getElementById("service-popup-close");
const servicePopupCta = document.getElementById("service-popup-cta");

const popupContent = {
  ia: {
    colorClass: "popup-gold",
    pt: {
      title: "Inteligência artificial aplicada ao seu negócio",
      cta: "Quero aplicar IA",
      text: [
        "Inteligência artificial vai além da criação de imagens e vídeos. É o uso de tecnologia para automatizar tarefas, analisar dados e tomar decisões com mais rapidez e precisão, aprendendo com o comportamento do seu negócio e dos seus clientes.",
        "Hoje, mais de 70% das empresas já utilizam IA, principalmente em marketing, atendimento e operação, áreas que impactam diretamente vendas e crescimento.",
        "Ela é para quem quer vender mais sem depender de mais equipe, organizar processos, melhorar o atendimento e tomar decisões com base em dados, não em tentativas e erros.",
        "Na Mugô, aplicamos IA para transformar operação em escala e marca em performance."
      ]
    },
    en: {
      title: "Artificial intelligence applied to your business",
      cta: "I want to apply AI",
      text: [
        "Artificial intelligence goes far beyond creating images and videos. It is the use of technology to automate tasks, analyze data, and make faster, more accurate decisions, learning from your business and your customers’ behavior.",
        "Today, more than 70% of companies already use AI, especially in marketing, customer service, and operations, areas that directly impact sales and growth.",
        "It is for businesses that want to sell more without depending on a larger team, organize processes, improve service, and make decisions based on data rather than trial and error.",
        "At Mugô, we apply AI to turn operations into scale and brand into performance."
      ]
    },
    es: {
      title: "Inteligencia artificial aplicada a tu negocio",
      cta: "Quiero aplicar IA",
      text: [
        "La inteligencia artificial va mucho más allá de crear imágenes y videos. Es el uso de tecnología para automatizar tareas, analizar datos y tomar decisiones con mayor rapidez y precisión, aprendiendo del comportamiento de tu negocio y de tus clientes.",
        "Hoy, más del 70% de las empresas ya utilizan IA, principalmente en marketing, atención y operación, áreas que impactan directamente las ventas y el crecimiento.",
        "Es para negocios que quieren vender más sin depender de un equipo mayor, organizar procesos, mejorar la atención y tomar decisiones basadas en datos, no en intentos y errores.",
        "En Mugô, aplicamos IA para transformar la operación en escala y la marca en performance."
      ]
    }
  },

  redes: {
    colorClass: "popup-red",
    pt: {
      title: "Presença que gera decisão",
      cta: "Quero fortalecer minha marca",
      text: [
        "Construir presença com estratégia, conteúdo e intenção.",
        "Hoje, mais de 70% dos consumidores pesquisam uma marca nas redes antes de comprar, e 76% já compraram algo que viram por lá. Seu perfil deixou de ser vitrine. Virou ponto de decisão.",
        "É para empresas que querem crescer com consistência, fortalecer posicionamento e transformar atenção em venda.",
        "Na Mugô, unimos estratégia, criação e gestão para atrair o público certo e conduzir cada interação até o resultado."
      ]
    },
    en: {
      title: "Presence that drives decisions",
      cta: "I want to strengthen my brand",
      text: [
        "Building presence with strategy, content, and intention.",
        "Today, more than 70% of consumers research a brand on social media before buying, and 76% have already purchased something they saw there. Your profile is no longer just a showcase. It has become a decision point.",
        "It is for companies that want to grow consistently, strengthen positioning, and turn attention into sales.",
        "At Mugô, we combine strategy, creation, and management to attract the right audience and guide each interaction toward results."
      ]
    },
    es: {
      title: "Presencia que genera decisión",
      cta: "Quiero fortalecer mi marca",
      text: [
        "Construir presencia con estrategia, contenido e intención.",
        "Hoy, más del 70% de los consumidores investigan una marca en redes antes de comprar, y el 76% ya compró algo que vio allí. Tu perfil dejó de ser una vitrina. Se convirtió en un punto de decisión.",
        "Es para empresas que quieren crecer con consistencia, fortalecer su posicionamiento y transformar atención en venta.",
        "En Mugô, unimos estrategia, creación y gestión para atraer al público correcto y conducir cada interacción hasta el resultado."
      ]
    }
  },

  automacao: {
    colorClass: "popup-red",
    pt: {
      title: "Processos que trabalham por você",
      cta: "Quero automatizar",
      text: [
        "Automação é transformar processos manuais em fluxos inteligentes que trabalham por você, do primeiro contato à conversão.",
        "Hoje, até 80% dos atendimentos podem ser automatizados, e empresas que utilizam automação respondem mais rápido, reduzem custos e não deixam oportunidades passarem.",
        "É para negócios que querem escalar operação, organizar o atendimento e vender mais sem aumentar equipe.",
        "Na Mugô, conectamos ferramentas, dados e comunicação para criar jornadas automáticas que acompanham o cliente no tempo certo."
      ]
    },
    en: {
      title: "Processes that work for you",
      cta: "I want to automate",
      text: [
        "Automation means turning manual processes into smart flows that work for you, from first contact to conversion.",
        "Today, up to 80% of customer interactions can be automated, and companies that use automation respond faster, reduce costs, and avoid losing opportunities.",
        "It is for businesses that want to scale operations, organize customer service, and sell more without increasing headcount.",
        "At Mugô, we connect tools, data, and communication to create automated journeys that follow the customer at the right time."
      ]
    },
    es: {
      title: "Procesos que trabajan por ti",
      cta: "Quiero automatizar",
      text: [
        "La automatización es transformar procesos manuales en flujos inteligentes que trabajan por ti, desde el primer contacto hasta la conversión.",
        "Hoy, hasta el 80% de las atenciones pueden automatizarse, y las empresas que usan automatización responden más rápido, reducen costos y no dejan pasar oportunidades.",
        "Es para negocios que quieren escalar la operación, organizar la atención y vender más sin aumentar el equipo.",
        "En Mugô, conectamos herramientas, datos y comunicación para crear recorridos automáticos que acompañan al cliente en el momento correcto."
      ]
    }
  },

  sites: {
    colorClass: "popup-gold",
    pt: {
      title: "Seu site é onde a decisão acontece",
      cta: "Quero melhorar meu site",
      text: [
        "Criamos sites, landing pages e e-commerces que ajudam sua marca a se apresentar melhor, seja para vender, se posicionar ou simplesmente ser compreendida.",
        "Porque, na prática, o site é onde as pessoas vão quando querem entender se você é sério, se faz sentido e se podem confiar.",
        "Além da estética, pensamos em clareza, estrutura e na forma como sua mensagem chega.",
        "Para que quem entra entenda rápido, e siga em frente com você.",
        "É para empresas que querem ter um espaço próprio, bem construído, que represente o que são hoje e sustente o crescimento que vem depois."
      ]
    },
    en: {
      title: "Your website is where decisions happen",
      cta: "I want to improve my website",
      text: [
        "We create websites, landing pages, and e-commerce experiences that help your brand present itself better, whether to sell, position itself, or simply be understood.",
        "Because in practice, the website is where people go when they want to understand whether you are serious, whether it makes sense, and whether they can trust you.",
        "Beyond aesthetics, we think about clarity, structure, and how your message is delivered.",
        "So that whoever arrives understands quickly and keeps moving forward with you.",
        "It is for companies that want a well-built digital space of their own, one that reflects who they are today and supports the growth that comes next."
      ]
    },
    es: {
      title: "Tu sitio es donde ocurre la decisión",
      cta: "Quiero mejorar mi sitio",
      text: [
        "Creamos sitios, landing pages y e-commerces que ayudan a tu marca a presentarse mejor, ya sea para vender, posicionarse o simplemente ser comprendida.",
        "Porque, en la práctica, el sitio es donde las personas van cuando quieren entender si eres serio, si tiene sentido y si pueden confiar.",
        "Más allá de la estética, pensamos en claridad, estructura y en cómo llega tu mensaje.",
        "Para que quien entra entienda rápido y siga adelante contigo.",
        "Es para empresas que quieren tener un espacio propio, bien construido, que represente lo que son hoy y sostenga el crecimiento que viene después."
      ]
    }
  },

  consultoria: {
    colorClass: "popup-blue",
    pt: {
      title: "Clareza para crescer",
      cta: "Quero direcionamento",
      text: [
        "Na correria do dia a dia, é normal sentir que tem muita coisa pra fazer e pouca certeza do que realmente vai trazer resultado.",
        "A consultoria é para quem quer organizar as ideias, entender melhor o próprio negócio e tomar decisões com mais segurança, sem carregar tudo sozinho.",
        "Na Mugô, a gente chega para somar, trazendo um olhar de fora, mais leve, mais estratégico, e ajudando você a encontrar um caminho que faça sentido."
      ]
    },
    en: {
      title: "Clarity to grow",
      cta: "I want direction",
      text: [
        "In the rush of everyday life, it is normal to feel like there is too much to do and too little certainty about what will actually bring results.",
        "Consulting is for those who want to organize ideas, better understand their own business, and make decisions with more confidence, without carrying everything alone.",
        "At Mugô, we come in to add value, bringing an outside perspective that is lighter and more strategic, helping you find a path that truly makes sense."
      ]
    },
    es: {
      title: "Claridad para crecer",
      cta: "Quiero dirección",
      text: [
        "En el ritmo del día a día, es normal sentir que hay demasiado por hacer y poca certeza sobre lo que realmente traerá resultados.",
        "La consultoría es para quienes quieren organizar ideas, entender mejor su propio negocio y tomar decisiones con más seguridad, sin cargar con todo solos.",
        "En Mugô, llegamos para sumar, aportando una mirada externa, más ligera y más estratégica, y ayudándote a encontrar un camino que tenga sentido."
      ]
    }
  }
};

function getCurrentLanguage() {
  const activeLanguageButton = document.querySelector(".language-switch.is-active");
  return activeLanguageButton?.dataset?.lang || "pt";
}

function openServicePopup(key) {
  const content = popupContent[key];
  if (!content || !servicePopup) return;

  const lang = getCurrentLanguage();
  const localized = content[lang] || content.pt;

  if (servicePopupCard) {
    servicePopupCard.classList.remove("popup-gold", "popup-red", "popup-blue");
    servicePopupCard.classList.add(content.colorClass);
  }

  if (servicePopupTitle) {
    servicePopupTitle.textContent = localized.title;
  }

  if (servicePopupCta) {
    servicePopupCta.textContent = localized.cta;
  }

  if (servicePopupText) {
    servicePopupText.innerHTML = localized.text
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join("");
  }

  servicePopup.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeServicePopup() {
  if (!servicePopup) return;
  servicePopup.classList.add("hidden");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-popup]").forEach((button) => {
  button.addEventListener("click", () => {
    openServicePopup(button.dataset.popup);
  });
});

if (servicePopupClose) {
  servicePopupClose.addEventListener("click", closeServicePopup);
}

if (servicePopup) {
  servicePopup.addEventListener("click", (e) => {
    if (e.target === servicePopup) {
      closeServicePopup();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && servicePopup && !servicePopup.classList.contains("hidden")) {
    closeServicePopup();
  }
});

function setupMobileVideoAutoplay() {
  const heroVideo = document.getElementById("heroVideo");
  if (!heroVideo) return;

  const isMobile = window.matchMedia("(max-width: 1024px)").matches;
  if (!isMobile) return;

  heroVideo.muted = true;
  heroVideo.defaultMuted = true;
  heroVideo.setAttribute("muted", "");
  heroVideo.setAttribute("autoplay", "");
  heroVideo.setAttribute("playsinline", "");
  heroVideo.setAttribute("webkit-playsinline", "");

  const tryPlay = () => {
    const playPromise = heroVideo.play();
    if (playPromise && typeof playPromise.then === "function") {
      playPromise.catch(() => {
        // tenta de novo quando houver interação do usuário
      });
    }
  };

  if (heroVideo.readyState >= 2) {
    tryPlay();
  } else {
    heroVideo.addEventListener("loadeddata", tryPlay, { once: true });
  }

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      tryPlay();
    }
  });

  ["touchstart", "click", "scroll"].forEach((eventName) => {
    document.addEventListener(
      eventName,
      () => {
        tryPlay();
      },
      { once: true, passive: true }
    );
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let currentLanguage = getInitialLanguage();

  initConsentApi();

  const changeLanguage = (nextLanguage) => {
    if (!TRANSLATIONS[nextLanguage]) {
      return;
    }

    currentLanguage = nextLanguage;
    persistLanguage(nextLanguage);
    applyTranslations(nextLanguage);
  };

  const languageButtons = document.querySelectorAll('.language-switch[data-lang]');
  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedLanguage = button.dataset.lang;
      if (selectedLanguage && selectedLanguage !== currentLanguage) {
        changeLanguage(selectedLanguage);
      }
    });
  });

  applyTranslations(currentLanguage);

  const closeSidebar = setupSidebar();
  const closeNewsletterModal = setupNewsletter(() => currentLanguage);
  const closeCookiePreferencesModal = setupCookieConsent();

  setupMobileVideoAutoplay();

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') {
      return;
    }

    if (typeof closeCookiePreferencesModal === 'function') {
      closeCookiePreferencesModal();
    }

    if (typeof closeNewsletterModal === 'function') {
      closeNewsletterModal();
    }

    if (typeof closeSidebar === 'function') {
      closeSidebar();
    }
  });

  setupServicosAnimation();
  setupSobreAnimation();
});