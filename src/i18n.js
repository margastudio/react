import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      location: "Argentina / China",
      nav: { home: "Home", work: "Work", about: "About", contact: "Contact" },
      hero: {
        headline: "Designing digital products, websites & experiences that move ideas forward.",
        sub: "I’m Marga, an independent digital designer working across UX/UI, product design, web design and creative technology.",
        desc: "I combine strategy, visual design and technology to turn ideas into clear, engaging digital experiences.",
        cta: "↓ Selected work"
      },
      about: {
        title: "About Marga Studio",
        p1: "Studio Marga is an independent design practice focused on digital experiences, product design, web design and creative technology.",
        p2: "I work with brands, businesses and ideas to create digital experiences that are useful, expressive and built with intention.",
        p3: "My practice sits between strategy, design and technology — from digital products and interfaces to websites, visual systems and interactive experiences.",
        p4: "Based between Argentina and China, I bring a cross-cultural perspective to digital design."
      },
      services: {
        title: "Services",
        s1_title: "Digital Products",
        s1_desc: "UX/UI and product design for digital products, platforms and applications.",
        s2_title: "Websites",
        s2_desc: "Strategic, visual and interactive websites designed around the goals of a brand or business.",
        s3_title: "UX/UI Design",
        s3_desc: "User-centered interfaces, flows and systems that make digital products easier and more engaging to use.",
        s4_title: "Creative Technology",
        s4_desc: "Exploring technology as a creative medium to build interactive and expressive digital experiences."
      },
      contact: {
        heading: "Have an idea, a product or a website in mind?",
        subheading: "Let’s make it happen.",
        status: "Available for freelance projects, collaborations and selected creative opportunities.",
        btn: "Contact Marga Studio"
      },
      footer: {
        tagline: "Digital design, product design & creative technology.",
        rights: "© 2026 Marga Studio"
      }
    }
  },
  es: {
    translation: {
      location: "Argentina / China",
      nav: { home: "Inicio", work: "Proyectos", about: "Sobre mí", contact: "Contacto" },
      hero: {
        headline: "Diseño productos digitales, sitios web y experiencias que hacen avanzar las ideas.",
        sub: "Soy Marga, diseñadora digital independiente especializada en UX/UI, diseño de producto, diseño web y tecnología creativa.",
        desc: "Combino estrategia, diseño visual y tecnología para transformar ideas en experiencias digitales claras y atractivas.",
        cta: "↓ Proyectos seleccionados"
      },
      about: {
        title: "Sobre Marga Studio",
        p1: "Studio Marga es un estudio independiente de diseño enfocado en experiencias digitales, diseño de producto, diseño web y tecnología creativa.",
        p2: "Trabajo con marcas, negocios e ideas para crear experiencias digitales útiles, expresivas y pensadas estratégicamente.",
        p3: "Mi práctica se encuentra entre la estrategia, el diseño y la tecnología: desde productos digitales e interfaces hasta sitios web, sistemas visuales y experiencias interactivas.",
        p4: "Entre Argentina y China, desarrollo una mirada intercultural sobre el diseño digital."
      },
      services: {
        title: "Servicios",
        s1_title: "Productos digitales",
        s1_desc: "Diseño UX/UI y de producto para productos, plataformas y aplicaciones digitales.",
        s2_title: "Sitios web",
        s2_desc: "Sitios web estratégicos, visuales e interactivos diseñados alrededor de los objetivos de cada marca o negocio.",
        s3_title: "Diseño UX/UI",
        s3_desc: "Interfaces, flujos y sistemas centrados en las personas para crear productos digitales más claros y fáciles de usar.",
        s4_title: "Tecnología creativa",
        s4_desc: "Exploración de la tecnología como medio creativo para construir experiencias digitales interactivas y expresivas."
      },
      contact: {
        heading: "¿Tenés una idea, un producto o un sitio web en mente?",
        subheading: "Hagámoslo realidad.",
        status: "Disponible para proyectos freelance, colaboraciones y oportunidades creativas seleccionadas.",
        btn: "Contactar a Marga Studio"
      },
      footer: {
        tagline: "Diseño digital, diseño de producto y tecnología creativa.",
        rights: "© 2026 Marga Studio"
      }
    }
  },
  zh: {
    translation: {
      location: "阿根廷 / 中国",
      nav: { home: "首页", work: "作品", about: "关于", contact: "联系" },
      hero: {
        headline: "设计推动想法向前发展的数字产品、网站与体验。",
        sub: "我是 Marga，一名独立数字设计师，专注于 UX/UI、产品设计、网页设计与创意科技。",
        desc: "我将策略、视觉设计与技术结合，将想法转化为清晰、有吸引力的数字体验。",
        cta: "↓ 精选项目"
      },
      about: {
        title: "关于 Marga Studio",
        p1: "Marga Studio 是一个独立设计工作室，专注于数字体验、产品设计、网页设计与创意科技。",
        p2: "我与品牌、企业和创意项目合作，打造兼具实用性、表现力与策略性的数字体验。",
        p3: "我的设计实践位于策略、设计与技术的交汇处，涵盖数字产品、界面、网站、视觉系统与互动体验。",
        p4: "我往返于阿根廷与中国之间，以跨文化视角探索数字设计。"
      },
      services: {
        title: "服务",
        s1_title: "数字产品",
        s1_desc: "为数字产品、平台和应用提供 UX/UI 与产品设计。",
        s2_title: "网站",
        s2_desc: "围绕品牌或企业目标打造具有策略性、视觉表现力与互动性的网站。",
        s3_title: "UX/UI 设计",
        s3_desc: "以用户为中心设计界面、流程与系统，让数字产品更清晰、更易用。",
        s4_title: "创意科技",
        s4_desc: "探索技术作为创意媒介的可能性，打造互动且具有表现力的数字体验。"
      },
      contact: {
        heading: "有一个想法、产品或网站项目？",
        subheading: "让我们一起把它实现。",
        status: "接受自由职业项目、合作以及精选创意机会。",
        btn: "联系 Marga Studio"
      },
      footer: {
        tagline: "数字设计、产品设计与创意科技。",
        rights: "© 2026 Marga Studio"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
