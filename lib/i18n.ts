export type Locale = "en" //| "de" | "es"

export const translations = {
  // de: {
  //   nav: {
  //     about: "Über mich",
  //     experience: "Erfahrung",
  //     companies: "Unternehmen",
  //     contact: "Kontakt",
  //   },
  //   hero: {
  //     greeting: "Willkommen",
  //     title: "Ulrich Ziemes",
  //     subtitle: "VR  LL.M.",
  //     description:
  //       "Erfahrener Geschäftsführer und Investor mit umfassender Expertise in Kapitalanlagen, Immobilienmanagement und strategischer Unternehmensführung.",
  //     cta: "Kontakt aufnehmen",
  //     learnMore: "Mehr erfahren",
  //     statYears: "Jahre Erfahrung",
  //     statCompanies: "Unternehmen",
  //     statDegrees: "Abschlüsse",
  //   },
  //   about: {
  //     sectionLabel: "Über mich",
  //     title: "Strategischer Denker & Unternehmer",
  //     p1: "Mit Sitz in Berlin und  verbinde ich langjährige Erfahrung in der Finanz- und Investmentbranche mit einem starken Netzwerk zu UHNWIs, institutionellen Investoren, Fund Managern und Family Offices.",
  //     p2: "Mein akademischer Hintergrund umfasst ein VWL-Studium an der Universität Münster (1988-1994) sowie ein juristisches Studium ebenfalls an der Uni Münster (2007-2009), das mir fundierte Kenntnisse im Wirtschaftsrecht verschafft hat.",
  //     p3: "Als Geschäftsführer mehrerer Unternehmen bringe ich strategisches Denken mit operativer Exzellenz zusammen, um nachhaltiges Wachstum und Wertschöpfung zu erzielen.",
  //     location: "Berlin, Deutschland",
  //     education: "VWL & Jura, Uni Münster",
  //     focus: "Investments & Immobilien",
  //     locationLabel: "Standort",
  //     educationLabel: "Ausbildung",
  //     focusLabel: "Fokus",
  //   },
  //   experience: {
  //     sectionLabel: "Erfahrung",
  //     title: "Beruflicher Werdegang",
  //     roles: [
  //       {
  //         title: "Family Office",
  //         company: "VR  LL.M.",
  //         period: "Aktuell",
  //         description:
  //           "Verwaltung und strategische Beratung für vermögende Privatpersonen und Familien. Kontakte zu UHNWIs, institutionellen Investoren und Fund Managern.",
  //       },
  //       {
  //         title: "Geschäftsstellenleiter",
  //         company: "MLP",
  //         period: "Vorherige Position",
  //         description:
  //           "Leitung einer Geschäftsstelle des führenden Finanzberatungsunternehmens mit Fokus auf anspruchsvolle Privatkunden.",
  //       },
  //       {
  //         title: "Regionaldirektor",
  //         company: "Credit Suisse (Deutschland) AG",
  //         period: "Vorherige Position",
  //         description:
  //           "Regionale Verantwortung für Kundenbetreuung und Geschäftsentwicklung bei einer der weltweit führenden Banken.",
  //       },
  //       {
  //         title: "Partner",
  //         company: "Argo Capital",
  //         period: "Vorherige Position",
  //         description:
  //           "Partnerschaftliche Tätigkeit im Bereich Kapitalanlagen und Investmentstrategien.",
  //       },
  //     ],
  //   },
  //   companies: {
  //     sectionLabel: "Unternehmen",
  //     title: "Beteiligungen & Geschäftsführung",
  //     items: [
  //       {
  //         name: "DSi - Deutsche Sachinvest GmbH",
  //         role: "Geschäftsführer",
  //         location: " / Frankfurt am Main",
  //         description:
  //           "Beteiligung an Unternehmen, Investition in Kapitalanlagen sowie Handel, Halten und Vermieten von Immobilien auf dem gesamten deutschen Markt.",
  //         registered: "HRB 224576 B - AG Charlottenburg",
  //         address: "Kurfürstendamm 194, 10707 Berlin",
  //       },
  //       {
  //         name: "Kaveca GmbH",
  //         role: "Geschäftsführer",
  //         location: "Everswinkel",
  //         description:
  //           "Unternehmensführung mit Einzelvertretungsberechtigung und Befugnis zu Insichgeschäften.",
  //         registered: "HRB 17235 - AG Münster",
  //         address: "Warendorfer Str. 9, 48351 Everswinkel",
  //       },
  //       {
  //         name: "CRB Immobilien UG",
  //         role: "Geschäftsführer",
  //         location: "Everswinkel",
  //         description:
  //           "Geschäftsführung einer Immobiliengesellschaft mit Fokus auf den deutschen Markt.",
  //         registered: "HRB 16115 - AG Münster",
  //         address: "Warendorfer Straße 9, 48351 Everswinkel",
  //       },
  //     ],
  //   },
  //   contact: {
  //     sectionLabel: "Kontakt",
  //     title: "Lassen Sie uns sprechen",
  //     description:
  //       "Haben Sie Fragen oder möchten Sie eine Zusammenarbeit besprechen? Ich freue mich auf Ihre Nachricht.",
  //     name: "Name",
  //     email: "E-Mail",
  //     subject: "Betreff",
  //     message: "Nachricht",
  //     send: "Nachricht senden",
  //     sending: "Wird gesendet...",
  //     success: "Nachricht erfolgreich gesendet!",
  //     namePlaceholder: "Ihr Name",
  //     emailPlaceholder: "ihre@email.de",
  //     subjectPlaceholder: "Betreff Ihrer Nachricht",
  //     messagePlaceholder: "Ihre Nachricht...",
  //     toastSuccessTitle: "Nachricht gesendet!",
  //     toastSuccessDescription: "Danke, ich melde mich bald bei Ihnen.",
  //     toastErrorTitle: "Etwas ist schiefgelaufen",
  //     toastErrorDescription: "Bitte versuchen Sie es erneut oder schreiben Sie direkt eine E-Mail.",
  //   },
  //   footer: {
  //     rights: "Alle Rechte vorbehalten.",
  //     privacy: "Datenschutz",
  //     imprint: "Impressum",
  //   },
  // },
  en: {
    nav: {
      about: "About",
      myStory: "My Story",
      experience: "Experience",
      companies: "Companies",
      contact: "Contact",
    },
    hero: {
      greeting: "Welcome",
      title: "Ulrich Ziemes",
      subtitle: "VR  LL.M.",
      description:
        "Experienced Managing Director and investor with comprehensive expertise in capital investments, real estate management, and strategic corporate leadership.",
      cta: "Get in Touch",
      learnMore: "Learn More",
      statYears: "Years Experience",
      statCompanies: "Companies",
      statDegrees: "Degrees",
    },
    about: {
      sectionLabel: "About Me",
      title: "Strategic Thinker & Entrepreneur",
      p1: "Based in Berlin, I combine years of experience in the finance and investment industry with a strong network of UHNWIs, institutional investors, fund managers, and family offices.",
      p2: "My academic background includes a degree in Economics from the University of Münster (1988-1994) as well as a law degree from the same university (2007-2009), providing me with deep expertise in business law.",
      p3: "As Managing Director of several companies, I combine strategic thinking with operational excellence to achieve sustainable growth and value creation.",
      location: "Berlin, Deutschland",
      education: "Economics & Law, Uni Münster",
      focus: "Investments & Real Estate",
      locationLabel: "Location",
      educationLabel: "Education",
      focusLabel: "Focus",
    },
    experience: {
      sectionLabel: "Experience",
      title: "Professional Career",
      roles: [
        {
          title: "Family Office",
          company: "VR  LL.M.",
          period: "Current",
          description:
            "Management and strategic advisory for high-net-worth individuals and families. Connections to UHNWIs, institutional investors, and fund managers.",
        },
        {
          title: "Branch Manager",
          company: "MLP",
          period: "Previous Position",
          description:
            "Leading a branch of the premier financial advisory firm, focusing on sophisticated private clients.",
        },
        {
          title: "Regional Director",
          company: "Credit Suisse (Deutschland) AG",
          period: "Previous Position",
          description:
            "Regional responsibility for client management and business development at one of the world's leading banks.",
        },
        {
          title: "Partner",
          company: "Argo Capital",
          period: "Previous Position",
          description:
            "Partnership role in capital investments and investment strategies.",
        },
      ],
    },
    companies: {
      sectionLabel: "Companies",
      title: "Holdings & Management",
      items: [
        {
          name: "DSi - Deutsche Sachinvest GmbH",
          role: "Managing Director",
          location: "Berlin / Frankfurt am Main",
          description:
            "Participation in enterprises, investment in capital assets, as well as trading, holding, and renting of real estate across the entire German market.",
          registered: "HRB 224576 B - AG Charlottenburg",
          address: "Kurfürstendamm 194, 10707 Berlin",
        },
        {
          name: "Kaveca GmbH",
          role: "Managing Director",
          location: "Everswinkel",
          description:
            "Corporate management with sole representation authority and authorization for self-dealing transactions.",
          registered: "HRB 17235 - AG Münster",
          address: "Warendorfer Str. 9, 48351 Everswinkel",
        },
        {
          name: "CRB Immobilien UG",
          role: "Managing Director",
          location: "Everswinkel",
          description:
            "Management of a real estate company focusing on the German market.",
          registered: "HRB 16115 - AG Münster",
          address: "Warendorfer Straße 9, 48351 Everswinkel",
        },
      ],
    },
    contact: {
      sectionLabel: "Contact",
      title: "Let's Talk",
      description:
        "Have questions or want to discuss a collaboration? I look forward to your message.",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      subjectPlaceholder: "Subject of your message",
      messagePlaceholder: "Your message...",
      toastSuccessTitle: "Message sent!",
      toastSuccessDescription: "Thank you, I'll get back to you soon.",
      toastErrorTitle: "Something went wrong",
      toastErrorDescription: "Please try again or email directly.",
    },
    footer: {
      rights: "All rights reserved.",
      privacy: "Privacy",
      imprint: "Imprint",
    },
  },
  // es: {
  //   nav: {
  //     about: "Sobre mí",
  //     experience: "Experiencia",
  //     companies: "Empresas",
  //     contact: "Contacto",
  //   },
  //   hero: {
  //     greeting: "Bienvenido",
  //     title: "Ulrich Ziemes",
  //     subtitle: "VR  LL.M.",
  //     description:
  //       "Director general e inversor experimentado con amplia experiencia en inversiones de capital, gestión inmobiliaria y liderazgo corporativo estratégico.",
  //     cta: "Contactar",
  //     learnMore: "Saber más",
  //     statYears: "Años de experiencia",
  //     statCompanies: "Empresas",
  //     statDegrees: "Títulos",
  //   },
  //   about: {
  //     sectionLabel: "Sobre mí",
  //     title: "Pensador estratégico y empresario",
  //     p1: "Con sede en Zúrich y , combino años de experiencia en la industria financiera y de inversiones con una sólida red de contactos con UHNWIs, inversores institucionales, gestores de fondos y family offices.",
  //     p2: "Mi formación académica incluye un título en Economía de la Universidad de Münster (1988-1994) así como un título en Derecho de la misma universidad (2007-2009), proporcionándome un profundo conocimiento en derecho mercantil.",
  //     p3: "Como director general de varias empresas, combino el pensamiento estratégico con la excelencia operativa para lograr un crecimiento sostenible y la creación de valor.",
  //     location: "Zúrich / ",
  //     education: "Economía y Derecho, Uni Münster",
  //     focus: "Inversiones e Inmobiliaria",
  //     locationLabel: "Ubicación",
  //     educationLabel: "Formación",
  //     focusLabel: "Enfoque",
  //   },
  //   experience: {
  //     sectionLabel: "Experiencia",
  //     title: "Trayectoria profesional",
  //     roles: [
  //       {
  //         title: "Family Office",
  //         company: "VR  LL.M.",
  //         period: "Actual",
  //         description:
  //           "Gestión y asesoramiento estratégico para personas y familias de alto patrimonio. Contactos con UHNWIs, inversores institucionales y gestores de fondos.",
  //       },
  //       {
  //         title: "Director de sucursal",
  //         company: "MLP",
  //         period: "Posición anterior",
  //         description:
  //           "Dirección de una sucursal de la principal empresa de asesoría financiera, enfocada en clientes privados sofisticados.",
  //       },
  //       {
  //         title: "Director Regional",
  //         company: "Credit Suisse (Deutschland) AG",
  //         period: "Posición anterior",
  //         description:
  //           "Responsabilidad regional de gestión de clientes y desarrollo de negocio en uno de los bancos líderes mundiales.",
  //       },
  //       {
  //         title: "Socio",
  //         company: "Argo Capital",
  //         period: "Posición anterior",
  //         description:
  //           "Rol de socio en inversiones de capital y estrategias de inversión.",
  //       },
  //     ],
  //   },
  //   companies: {
  //     sectionLabel: "Empresas",
  //     title: "Participaciones y dirección",
  //     items: [
  //       {
  //         name: "DSi - Deutsche Sachinvest GmbH",
  //         role: "Director General",
  //         location: "Berlín / Fráncfort del Meno",
  //         description:
  //           "Participación en empresas, inversión en activos de capital, así como comercio, tenencia y alquiler de bienes inmuebles en todo el mercado alemán.",
  //         registered: "HRB 224576 B - AG Charlottenburg",
  //         address: "Kurfürstendamm 194, 10707 Berlín",
  //       },
  //       {
  //         name: "Kaveca GmbH",
  //         role: "Director General",
  //         location: "Everswinkel",
  //         description:
  //           "Gestión corporativa con representación individual y autorización para operaciones consigo mismo.",
  //         registered: "HRB 17235 - AG Münster",
  //         address: "Warendorfer Str. 9, 48351 Everswinkel",
  //       },
  //       {
  //         name: "CRB Immobilien UG",
  //         role: "Director General",
  //         location: "Everswinkel",
  //         description:
  //           "Gestión de una empresa inmobiliaria enfocada en el mercado alemán.",
  //         registered: "HRB 16115 - AG Münster",
  //         address: "Warendorfer Straße 9, 48351 Everswinkel",
  //       },
  //     ],
  //   },
  //   contact: {
  //     sectionLabel: "Contacto",
  //     title: "Hablemos",
  //     description:
  //       "¿Tiene preguntas o desea discutir una colaboración? Espero su mensaje con interés.",
  //     name: "Nombre",
  //     email: "Correo electrónico",
  //     subject: "Asunto",
  //     message: "Mensaje",
  //     send: "Enviar mensaje",
  //     sending: "Enviando...",
  //     success: "Mensaje enviado con éxito!",
  //     namePlaceholder: "Su nombre",
  //     emailPlaceholder: "su@email.com",
  //     subjectPlaceholder: "Asunto de su mensaje",
  //     messagePlaceholder: "Su mensaje...",
  //     toastSuccessTitle: "¡Mensaje enviado!",
  //   toastSuccessDescription: "Gracias, me pondré en contacto con usted pronto.",
  //   toastErrorTitle: "Algo salió mal",
  //   toastErrorDescription: "Por favor, inténtelo de nuevo o escriba directamente a su correo.",
  //   },
  //   footer: {
  //     rights: "Todos los derechos reservados.",
  //     privacy: "Privacidad",
  //     imprint: "Aviso legal",
  //   },
  // },
} as const

export type Translations = (typeof translations)[Locale]

export function getTranslations(locale: Locale): Translations {
  return translations[locale]
}
