const translations = {
  en: {
    'eyebrow':           'Development Software Studio',
    'heading':           'Systems that run<br><em>your business.</em>',
    'lead':              'We are a software development studio that builds custom digital infrastructure and growth engines for your projects. We understand your business model and design your competitive advantage.',
    'label-build':       'What we build',

    'p1-title':          'Custom Operational<br>Ecosystems',
    'p1-kicker':         'Your business. Your tools. Your data.',
    'p1-body':           'We design and build the custom digital infrastructure you need to capture data, manage clients, and visualize growth.',
    'tag-dashboards':    'Dashboards',
    'tag-apps':          'Web and mobile Apps',
    'tag-data':          'Data Collection',
    'tag-automation':    'Automation',

    'p2-title':          'Integrated Growth<br>Engineering',
    'p2-kicker':         'For them to choose you, you need to be found.',
    'p2-body':           'We create webs with code designed for positioning and digital marketing from the first line of code.',
    'tag-webdesign':     'Web Design',
    'tag-seo':           'SEO',
    'tag-ads':           'Digital Advertising',
    'tag-content':       'Content Strategy',

    'label-process-1':   'How we work /',
    'proc1-step1-title': 'Discovery &amp; Strategy',
    'proc1-step1-desc':  'We map your business model. We identify the bottlenecks where software can improve your work.',
    'proc1-step2-title': '2-Week Sprints',
    'proc1-step2-desc':  'Every 14 days, you see progress, test features, and provide feedback.',
    'proc1-step3-title': 'Deployment &amp; Optimization',
    'proc1-step3-desc':  'We iterate and refine the system to ensure you commit to your objective.',

    'label-process-2':   'How we work //',
    'proc2-step1-title': 'Discovery &amp; Strategy',
    'proc2-step1-desc':  'We map your business model. We identify the bottlenecks where software can save you time or SEO can win you market share.',
    'proc2-step2-title': '1-Week Sprint',
    'proc2-step2-desc':  'Every 7 days, you see progress, test features, and provide feedback.',
    'proc2-step3-title': 'Deployment &amp; Optimization',
    'proc2-step3-desc':  'We launch. Then we use data to refine the system and ensure the competitive advantage is working.',

    'label-contact':     'Get in touch',
    'contact-headline':  'Ready to engineer<br>your <span>advantage?</span>',
    'cta-btn':           'Book a Discovery Session',
    'contact-email':     'design@eccolo.com',
    'footer-copy':       '© 2026 ECCOLO — All rights reserved',
    'footer-github':     'GitHub',
    'footer-linkedin':   'LinkedIn',
  },

  es: {
    'eyebrow':           'Estudio de Desarrollo de Software',
    'heading':           'Sistemas que impulsan<br><em>tu negocio.</em>',
    'lead':              'Somos un estudio de desarrollo de software que construye infraestructura digital personalizada y motores de crecimiento para tus proyectos. Entendemos tu modelo de negocio y diseñamos tu ventaja competitiva.',
    'label-build':       'Qué construimos',

    'p1-title':          'Ecosistemas Operativos<br>Personalizados',
    'p1-kicker':         'Tu negocio. Tus herramientas. Tus datos.',
    'p1-body':           'Diseñamos y construimos la infraestructura digital que necesitas para capturar datos, gestionar clientes y visualizar el crecimiento.',
    'tag-dashboards':    'Paneles',
    'tag-apps':          'Apps web y móvil',
    'tag-data':          'Recolección de Datos',
    'tag-automation':    'Automatización',

    'p2-title':          'Ingeniería de Crecimiento<br>Integrada',
    'p2-kicker':         'Para que te elijan, primero tienen que encontrarte.',
    'p2-body':           'Creamos sitios web con código diseñado para el posicionamiento y el marketing digital desde la primera línea de código.',
    'tag-webdesign':     'Diseño Web',
    'tag-seo':           'SEO',
    'tag-ads':           'Publicidad Digital',
    'tag-content':       'Estrategia de Contenidos',

    'label-process-1':   'Cómo trabajamos /',
    'proc1-step1-title': 'Descubrimiento y Estrategia',
    'proc1-step1-desc':  'Mapeamos tu modelo de negocio. Identificamos los cuellos de botella donde el software puede mejorar tu trabajo.',
    'proc1-step2-title': 'Sprints de 2 Semanas',
    'proc1-step2-desc':  'Cada 14 días, ves el progreso, pruebas funcionalidades y das tu opinión.',
    'proc1-step3-title': 'Despliegue y Optimización',
    'proc1-step3-desc':  'Iteramos y refinamos el sistema para asegurarnos de que alcances tu objetivo.',

    'label-process-2':   'Cómo trabajamos //',
    'proc2-step1-title': 'Descubrimiento y Estrategia',
    'proc2-step1-desc':  'Mapeamos tu modelo de negocio. Identificamos dónde el software puede ahorrarte tiempo o el SEO puede ganarte cuota de mercado.',
    'proc2-step2-title': 'Sprint de 1 Semana',
    'proc2-step2-desc':  'Cada 7 días, ves el progreso, pruebas funcionalidades y das tu opinión.',
    'proc2-step3-title': 'Despliegue y Optimización',
    'proc2-step3-desc':  'Lanzamos. Luego usamos datos para refinar el sistema y asegurarnos de que la ventaja competitiva funcione.',

    'label-contact':     'Contáctanos',
    'contact-headline':  '¿Listo para diseñar<br>tu <span>ventaja?</span>',
    'cta-btn':           'Reservar una Sesión de Descubrimiento',
    'contact-email':     'design@eccolo.com',
    'footer-copy':       '© 2026 ECCOLO — Todos los derechos reservados',
    'footer-github':     'GitHub',
    'footer-linkedin':   'LinkedIn',
  }
};

const SUPPORTED = ['en', 'es'];
const DEFAULT   = 'en';

function getLang() {
  const param = new URLSearchParams(location.search).get('lang');
  if (param && SUPPORTED.includes(param)) return param;
  const browser = navigator.language.slice(0, 2);
  return SUPPORTED.includes(browser) ? browser : DEFAULT;
}

function applyLang(lang) {
  const t = translations[lang] || translations[DEFAULT];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });
}

function setLang(lang) {
  const url = new URL(location.href);
  url.searchParams.set('lang', lang);
  history.pushState({}, '', url);
  applyLang(lang);
}

// Expose for nav buttons
window.setLang = setLang;

// Init on load
applyLang(getLang());
