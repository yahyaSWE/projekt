export type Category = "AI & automation" | "E-handel" | "Plattformar" | "Mobil";

export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  category: Category;
  tags: string[];
  repo?: string;
  website?: string;
  screenshot?: { src: string; alt: string };
  appStores?: { label: string; url: string; platform: "ios" | "android" }[];
  contributionHeading?: string;
  visibility: "public" | "private" | "unknown";
  theme: string;
  visual:
    | "quote"
    | "garage"
    | "secure"
    | "crm"
    | "portal"
    | "ledger"
    | "offline"
    | "commerce"
    | "health"
    | "trading"
    | "scooter";
  challenge: string;
  solution: string;
  features: string[];
  note?: string;
  result?: { value: string; label: string; context: string };
};

export const profile = {
  name: "Johan Blomdahl",
  role: "Utvecklare & produktbyggare",
  github: "https://github.com/yahyaSWE",
  // Lägg till din e-postadress här för att visa en mejllänk under Kontakt.
  email: "",
};

// Redigera texter, teknikval och projektordning här. Inga GitHub-nycklar behövs.
// Beskrivningarna utgår från Johans underlag. Tekniker är verifierade där repot gick att läsa.
// Resultatuppgifter är lämnade av Johan och är inte oberoende granskade.
export const projects: Project[] = [
  {
    slug: "offertdirekt",
    name: "Offertdirekt",
    eyebrow: "Från förfrågan till signerat uppdrag",
    summary: "Smartare offerter. Mer tid för hantverket.",
    description:
      "En publicerad app för iOS och Android med webbversion för hantverkare och serviceyrken. Skapa offerter med rösten och AI, signera med BankID och hantera verksamheten i en separat adminpanel.",
    category: "AI & automation",
    tags: ["AI", "BankID", "Webb & mobil"],
    repo: "https://github.com/yahyaSWE/offertdirekt",
    screenshot: {
      src: "/projects/offertdirekt.png",
      alt: "Offertdirekts webbplats med röststyrd offertgenerering och BankID-signering",
    },
    appStores: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/offertdirekt/id6762245944",
        platform: "ios",
      },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.offertdirekt.app&hl=sv",
        platform: "android",
      },
    ],
    visibility: "private",
    theme: "sage",
    visual: "quote",
    challenge:
      "Att ta fram en offert ska inte ta tid från själva uppdraget. Hantverkare och serviceföretag behöver ett enkelt flöde från kundens förfrågan till ett godkänt erbjudande.",
    solution:
      "Jag byggde en lösning där AI stödjer offertarbetet och BankID används för signering. App, webbversion och en separat adminpanel möter olika behov i samma produkt.",
    features: [
      "AI som stöd i offertgenereringen",
      "Röststyrd offertgenerering",
      "Signering med BankID",
      "App för iOS och Android samt webbversion",
      "Separat adminpanel",
    ],
  },
  {
    slug: "garageexperten",
    name: "Garageexperten",
    eyebrow: "E-handel med mätbart resultat",
    summary: "Från noll till tre miljoner på fyra månader.",
    description:
      "Helhetsansvar för att utveckla och driva e-handeln, med integrationer mot ERP-system och Klarna. En teknisk plattform kopplad till affären hela vägen.",
    category: "E-handel",
    tags: ["React", "ERP", "Klarna"],
    repo: "https://github.com/yahyaSWE/garageexperten",
    visibility: "public",
    theme: "sand",
    visual: "garage",
    challenge:
      "Att bygga en e-handel från grunden och få teknik, betalningar och verksamhetens system att fungera tillsammans.",
    solution:
      "Jag utvecklade och ansvarade för hela e-handeln. Arbetet omfattade kundupplevelsen och integrationer mot ERP-system och Klarna.",
    features: [
      "Helhetsansvar för e-handeln",
      "Integration med ERP-system",
      "Klarna-integration",
      "Utveckling kopplad till affärens tillväxt",
    ],
    result: {
      value: "3 miljoner kr",
      label: "i omsättning på fyra månader",
      context:
        "Från lansering till tre miljoner i omsättning. Helhetsansvar för utveckling och e-handel.",
    },
  },
  {
    slug: "elscooter-sweden",
    name: "Elscooter Sweden",
    eyebrow: "E-commerce management & vidareutveckling",
    summary: "Teknik och marknadsföring som driver e-handeln framåt.",
    description:
      "E-commerce manager med ansvar för att vidareutveckla den befintliga plattformen och arbeta med marknadsföringen för en e-handel inom elfordon.",
    category: "E-handel",
    tags: ["E-commerce management", "Plattformsutveckling", "Marknadsföring"],
    website: "https://elscootersweden.com/",
    screenshot: {
      src: "/projects/elscooter-sweden.png",
      alt: "Elscooter Swedens e-handel med elfordon och produktkategorier",
    },
    visibility: "public",
    theme: "mint",
    visual: "scooter",
    contributionHeading: "Min roll och mitt arbete",
    challenge:
      "Att utveckla en befintlig e-handelsverksamhet kräver att plattformen och marknadsföringen arbetar mot samma mål. Här handlade uppdraget om att bygga vidare på det som redan fanns.",
    solution:
      "Som e-commerce manager arbetade jag med vidareutveckling av den befintliga plattformen och marknadsföring. Rollen förenade teknisk utveckling med det löpande arbetet kring e-handeln.",
    features: [
      "Rollen som e-commerce manager",
      "Vidareutveckling av befintlig e-handelsplattform",
      "Arbete med marknadsföring",
      "Teknik och e-handel i samma uppdrag",
    ],
  },
  {
    slug: "safehelp",
    name: "Safehelp",
    eyebrow: "Lokal AI för känslig information",
    summary: "AI som arbetar nära. Och håller informationen kvar.",
    description:
      "OCR och transkribering för socialtjänstens arbete. Med lokalt körda AI-modeller och fokus på sekretess och kontroll över känsliga uppgifter.",
    category: "AI & automation",
    tags: ["Next.js", "Python", "Lokal AI"],
    repo: "https://github.com/yahyaSWE/safehelp",
    visibility: "private",
    theme: "lavender",
    visual: "secure",
    challenge:
      "Socialtjänsten hanterar känslig information. Att använda AI för dokument och transkribering kräver genomtänkta val kring var information behandlas och hur åtkomst styrs.",
    solution:
      "Jag byggde ett OCR- och transkriberingsverktyg med lokalt körda AI-modeller. Arkitekturen kombinerar Next.js, en Python-backend och lokal modellkörning med Ollama.",
    features: [
      "OCR och transkribering",
      "Lokalt körda AI-modeller",
      "Byggt för socialtjänstens arbetsflöden",
      "Fokus på sekretess och datakontroll",
    ],
  },
  {
    slug: "devanor",
    name: "Devanor",
    eyebrow: "En samlad plats för kunden",
    summary: "Kundportalen som samlar hela samarbetet.",
    description:
      "Webbplats med kundinloggning, certifikat, dokumentation och support. Direkt integrerad med open source-plattformen Chatwoot.",
    category: "Plattformar",
    tags: ["Next.js", "Prisma", "Chatwoot"],
    repo: "https://github.com/yahyaSWE/devanor",
    website: "https://devanor.com/",
    screenshot: {
      src: "/projects/devanor.png",
      alt: "Devanors webbplats med presentation av tjänster inom elektrisk design",
    },
    visibility: "private",
    theme: "blue",
    visual: "portal",
    challenge:
      "Certifikat, dokument och supportärenden blir lätt utspridda. Kunden behöver en plats där det är enkelt att hitta rätt information och få hjälp.",
    solution:
      "Jag byggde webbplatsen och en inloggad kundportal som samlar material och support. Chatwoot integreras direkt för att knyta kommunikationen till kundupplevelsen.",
    features: [
      "Inloggning för kunder",
      "Certifikat och dokumentation",
      "Samlad support",
      "Direkt integration med Chatwoot",
    ],
  },
  {
    slug: "leadflow-crm",
    name: "LeadFlow CRM",
    eyebrow: "Från första kontakt till nästa affär",
    summary: "Ett CRM som gör mer av jobbet självt.",
    description:
      "Ett eget CRM med automatisk prospektering, leads från Facebook, Instagram och webbformulär, e-post och en MCP-koppling för AI-styrda arbetsflöden.",
    category: "AI & automation",
    tags: ["React", "Express", "MCP"],
    repo: "https://github.com/yahyaSWE/CRM-sportative",
    screenshot: {
      src: "/projects/leadflow-crm.png",
      alt: "LeadFlows CRM-översikt med dagens möten, uppgifter och nya leads",
    },
    visibility: "public",
    theme: "peach",
    visual: "crm",
    challenge:
      "Kundförfrågningar kommer från flera håll och uppföljning kräver många manuella steg. Ett användbart CRM behöver samla både informationen och nästa åtgärd.",
    solution:
      "Jag byggde ett CRM där prospektering, inkommande leads, e-post och säljpipeline hänger ihop. MCP-kopplingen låter en AI-assistent arbeta med systemets verktyg.",
    features: [
      "Automatisk prospektering",
      "Leads från Instagram, Facebook och webhooks",
      "E-post och säljpipeline",
      "MCP-koppling till AI-assistenter",
    ],
  },
  {
    slug: "joart-commerce",
    name: "Joart Commerce",
    eyebrow: "En grund att bygga fler butiker på",
    summary: "Headless commerce, redo att anpassas.",
    description:
      "En återanvändbar e-handelsgrund med Medusa.js som kärna, en Next.js-storefront och Payload som valbart CMS. Byggd för att anpassas till nya kunder.",
    category: "E-handel",
    tags: ["Medusa.js", "Next.js", "Payload"],
    repo: "https://github.com/yahyaSWE/joart-commerce",
    visibility: "private",
    theme: "rose",
    visual: "commerce",
    challenge:
      "Avancerad e-handel kräver mycket grundarbete som ofta behöver göras om för varje kund. Målet var en gemensam teknisk grund med utrymme för olika butiker.",
    solution:
      "Jag byggde en headless commerce-mall med Medusa som commerce-backend, en separat Next.js-storefront och Payload som valbart CMS. Arkitekturen är utformad för återanvändning och kundanpassning.",
    features: [
      "Medusa.js som commerce-kärna",
      "Next.js-storefront",
      "Payload som valbart CMS",
      "Checkout och förberedda betalningsintegrationer",
    ],
    note: "Repots dokumentation beskriver checkout med simulerad betalning. Skarpa betalningsflöden behöver verifieras inför respektive kundinstallation.",
  },
  {
    slug: "natura",
    name: "Natura",
    eyebrow: "När uppkopplingen inte är ett alternativ",
    summary: "Digitala överenskommelser. Även utan internet.",
    description:
      "En mobilapp för att registrera och kvittera skulder offline. Kryptografiska signaturer, QR-utbyte och en lokal händelselogg gör att två enheter kan komma överens utan uppkoppling.",
    category: "Mobil",
    tags: ["Expo", "Kryptografi", "Offline-first"],
    repo: "https://github.com/yahyaSWE/natura",
    visibility: "private",
    theme: "lime",
    visual: "offline",
    challenge:
      "Vad händer när internet eller bankernas tjänster inte är tillgängliga? Två personer behöver fortfarande kunna dokumentera en överenskommelse och kontrollera att båda har godkänt den.",
    solution:
      "Jag byggde en offline-app där båda parter signerar samma avtal kryptografiskt och utbyter information via QR-koder. En lokal logg sparar signerade händelser; synkronisering kan ske när uppkopplingen återkommer.",
    features: [
      "Fungerar utan internet",
      "QR-baserat utbyte mellan telefoner",
      "Kryptografiska signaturer med Ed25519",
      "Lokal händelselogg och senare synkronisering",
    ],
    note: "Natura är ett register för överenskommelser och skulder. Appen genomför inga bank- eller Swishbetalningar.",
  },
  {
    slug: "bokforing",
    name: "Bokföring & MCP",
    eyebrow: "Ekonomi med ett eget gränssnitt",
    summary: "Egen bokföring, med Claude som medarbetare.",
    description:
      "Ett eget bokföringsprogram utvecklat genom analys och reverse engineering av befintliga arbetsflöden. En MCP-server gör funktionerna tillgängliga från Claude.",
    category: "Plattformar",
    tags: ["Bokföring", "MCP", "Claude"],
    repo: "https://github.com/yahyaSWE/bokio-rea",
    screenshot: {
      src: "/projects/bokforing.png",
      alt: "Bokföringsprogrammets översikt med resultat, fakturor, rapporter och huvudbok",
    },
    visibility: "public",
    theme: "stone",
    visual: "ledger",
    challenge:
      "Jag ville förstå hur ett bokföringssystem fungerar på djupet och skapa en egen lösning med ett arbetssätt som också kan styras via en AI-assistent.",
    solution:
      "Genom analys och reverse engineering byggde jag ett eget bokföringsprogram. Med en tillagd MCP-server kan Claude använda programmets funktioner via en verktygskoppling.",
    features: [
      "Eget bokföringsprogram",
      "Analys av befintliga ekonomiflöden",
      "Egen MCP-server",
      "Styrning via Claude",
    ],
  },
  {
    slug: "tibb",
    name: "Tibb.nu",
    eyebrow: "Kunskap, vård och digitala tjänster",
    summary: "En plattform med flera delar som hänger ihop.",
    description:
      "Ett projekt som kombinerar ett AI-baserat diagnosverktyg med RAG och finjustering med kurser, e-handel och bokningar.",
    category: "AI & automation",
    tags: ["Next.js", "RAG", "E-handel"],
    repo: "https://github.com/yahyaSWE/tibb.nu",
    screenshot: {
      src: "/projects/tibb.png",
      alt: "Tibb.nu med presentation av behandlingar, bokningar och kurser",
    },
    visibility: "public",
    theme: "cream",
    visual: "health",
    challenge:
      "Att samla kunskap, digitala tjänster och bokning i en sammanhängande upplevelse, med AI som en del av ett större produktflöde.",
    solution:
      "Jag utvecklade en plattform med kurser, e-handel och bokningar. Projektunderlaget omfattar även ett diagnosverktyg byggt med RAG och finjustering av en AI-modell.",
    features: [
      "AI-verktyg med RAG och finjustering enligt projektunderlaget",
      "Kurser och elevportal",
      "E-handel",
      "Bokningsflöden",
    ],
  },
  {
    slug: "slowlax",
    name: "Slowlax",
    eyebrow: "Kunskap och medlemskap inom aktiehandel",
    summary: "En digital plats för att lära och utvecklas.",
    description:
      "En webbplats inom aktiehandel med kurser, medlemskap och relaterade tjänster. Utformad för att samla erbjudandet i en gemensam digital upplevelse.",
    category: "Plattformar",
    tags: ["Kurser", "Medlemskap", "Webbutveckling"],
    repo: "https://github.com/slowlax-it/slowlax-web",
    website: "https://slowlax.se/",
    screenshot: {
      src: "/projects/slowlax.png",
      alt: "Slowlax webbplats med kurser och medlemskap inom aktiehandel",
    },
    visibility: "unknown",
    theme: "sky",
    visual: "trading",
    challenge:
      "Att presentera kurser, medlemskap och andra tjänster inom aktiehandel på en och samma webbplats, med en tydlig väg genom erbjudandet.",
    solution:
      "Jag byggde en webbplats som samlar utbildning och medlemskap för målgruppen. Här ligger fokus på hur innehåll och tjänster presenteras tillsammans.",
    features: [
      "Webbplats inom aktiehandel",
      "Kurser",
      "Medlemskap",
      "Presentation av relaterade tjänster",
    ],
  },
];

export const categories = [
  "Alla projekt",
  "AI & automation",
  "E-handel",
  "Plattformar",
  "Mobil",
] as const;
