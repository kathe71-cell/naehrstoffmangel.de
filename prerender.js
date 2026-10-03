import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist-ssr/entry-server.js');

const routesToPrerender = [
  {
    url: '/',
    title: 'Nährstoffmangel erkennen: Symptome, Ursachen & Tests | nährstoffmangel.de',
    desc: 'Unabhängiges Informationsportal zu Nährstoffmangel: Eisen, Vitamin D, B12, Magnesium, Zink, Folsäure & Jod. Symptom-Navigator, Bluttest-Ratgeber & Ernährungstipps.',
    keywords: 'Nährstoffmangel, Vitaminmangel, Mineralstoffmangel, Eisenmangel, Vitamin D Mangel, Vitamin B12, Magnesiummangel, Zinkmangel, Folsäure, Jodmangel, Bluttest, Symptome'
  },
  {
    url: '/eisenmangel',
    title: 'Eisenmangel Symptome Frau: Müdigkeit, Haarausfall & Ferritin | nährstoffmangel.de',
    desc: 'Eisenmangel Symptome bei Frauen: Wie Ferritin unter 50 µg/l mit Erschöpfung und diffusem Haarausfall assoziiert sein kann – mit Laborwert-Erklärung und Ernährungstipps.',
    keywords: 'Eisenmangel Symptome Frau, Ferritin niedrig, Eisenmangel Haarausfall, Eisenmangel Müdigkeit, Eisenwerte Blutbild, Eisen Bioverfügbarkeit, Eisenmangel Test'
  },
  {
    url: '/vitamin-d-mangel',
    title: 'Vitamin D Mangel Symptome & Werte: Was 25(OH)D unter 50 nmol/l bedeutet | nährstoffmangel.de',
    desc: 'Vitamin D Mangel im Winter: Assoziierte Symptome wie Müdigkeit oder Infektanfälligkeit. Was Ihr 25(OH)D-Wert laut RKI bedeutet & wie eine bedarfsgerechte Zufuhr aussieht.',
    keywords: 'Vitamin D Mangel Symptome, Vitamin D Mangel Winter, 25-OH-Vitamin-D Wert, Vitamin D Dosierung, Vitamin D3 Supplement, Vitamin D Test, Vitamin D Immunsystem'
  },
  {
    url: '/magnesiummangel',
    title: 'Magnesiummangel Symptome: Wadenkrämpfe, Lidzucken & Schlaf | nährstoffmangel.de',
    desc: 'Magnesiummangel Symptome: Wadenkrämpfe nachts, Lidzucken, neuromuskuläre Erregbarkeit und Schlafprobleme. Welche Magnesiumformen (Bisglycinat vs. Citrat) sich unterscheiden.',
    keywords: 'Magnesiummangel Symptome, Wadenkrämpfe Magnesiummangel, Magnesium Lidzucken, Magnesiumbisglycinat, Magnesiumcitrat, Magnesium Schlaf, Magnesium Bluttest'
  },
  {
    url: '/vitamin-b12-mangel',
    title: 'Vitamin B12 Mangel Symptome vegan: Taubheit, Brain Fog & Holotranscobalamin | nährstoffmangel.de',
    desc: 'Vitamin B12 Mangel Symptome: Warum Veganer und ältere Menschen besonders gefährdet sind, was Holotranscobalamin (Holo-TC) vs. Gesamt-B12 aussagt & wie Supplemente resorbiert werden.',
    keywords: 'Vitamin B12 Mangel Symptome, B12 Mangel vegan, Holotranscobalamin Holo-TC, B12 Taubheit Kribbeln, Vitamin B12 Methylcobalamin, B12 Bluttest, B12 Brain Fog'
  },
  {
    url: '/zinkmangel',
    title: 'Zinkmangel Symptome: Haarausfall, Infektanfälligkeit & Wundheilung | nährstoffmangel.de',
    desc: 'Zinkmangel Symptome: Warum häufige Infekte, Haarausfall und verzögerte Wundheilung mit Zinkdefiziten zusammenhängen können. Phytinsäure-Einfluss & Zinkverbindungen im Vergleich.',
    keywords: 'Zinkmangel Symptome, Zinkmangel Haarausfall, Zink Immunsystem, Zinkbisglycinat, Zinkmangel Wundheilung, Zink Bluttest, Zinkmangel Test'
  },
  {
    url: '/folsaeuremangel',
    title: 'Folsäure Schwangerschaft: Empfehlungen, Dosierung & Folat erklärt | nährstoffmangel.de',
    desc: 'Folsäure in der Schwangerschaft: Empfohlener Einnahmezeitpunkt, Dosierung nach DGE-Leitlinien sowie der biochemische Unterschied zwischen Folat und synthetischer Folsäure.',
    keywords: 'Folsäure Schwangerschaft wann anfangen, Folsäuremangel Symptome, Folat vs Folsäure, Folsäure Dosierung, Folsäure Kinderwunsch, Neuralrohrdefekt'
  },
  {
    url: '/jodmangel',
    title: 'Jodmangel Schilddrüse Symptome: Struma, Kropf & Jodversorgung in Deutschland | nährstoffmangel.de',
    desc: 'Jodmangel Symptome: Müdigkeit, Frieren und Schilddrüsenvergrößerung (Struma). Status der Jodversorgung in Deutschland (BfR/RKI) und was bei Hashimoto-Thyreoiditis zu beachten ist.',
    keywords: 'Jodmangel Schilddrüse Symptome, Jodmangel Deutschland, Struma Kropf, Hashimoto Jod, Jod Dosierung, Jodmangel Test, Jod Lebensmittel'
  },
  {
    url: '/symptome',
    title: 'Symptom-Navigator: Fachliteratur-Zuordnung von Mangelerscheinungen | nährstoffmangel.de',
    desc: 'Interaktiver Symptom-Navigator: Symptome auswählen (Müdigkeit, Haarausfall, Krämpfe, Blässe) und thematisch assoziierte Nährstoffdefizite zur Orientierung einsehen (keine Diagnose).',
    keywords: 'Nährstoffmangel Symptome Check, Müdigkeit Nährstoffmangel, Haarausfall Mangel, Krämpfe Ursache, Symptom Finder Vitamine'
  },
  {
    url: '/bluttest',
    title: 'Nährstoff-Bluttest: Kosten, Ablauf & wichtige Laborwerte | nährstoffmangel.de',
    desc: 'Wann ein Bluttest sinnvoll ist: Großes Blutbild vs. spezifische Biomarker (Ferritin, Holo-TC, 25(OH)D) sowie die sachliche Einordnung von Labor- und Heimtests.',
    keywords: 'Nährstoff Bluttest Kosten, Blutbild Vitamine, Ferritin Test, 25-OH-Vitamin-D3 Bluttest, Holo-TC Test, Bluttest Hausarzt, Heimtest Labor'
  },
  {
    url: '/ernaehrung',
    title: 'Nährstoffreiche Lebensmittel: Die Mikronährstoff-Matrix | nährstoffmangel.de',
    desc: 'Lebensmittel-Tabelle für Eisen, Vitamin D, Magnesium, B12, Zink, Folsäure & Jod mit Gehalt pro 100g und Hinweisen zur Bioverfügbarkeit.',
    keywords: 'nährstoffreiche Lebensmittel Tabelle, Eisen Lebensmittel, Vitamin D Lebensmittel, Magnesium Lebensmittel, Bioverfügbarkeit Vitamine, Mikronährstoff Ernährung'
  },
  {
    url: '/vitaminmangel',
    title: 'Vitaminmangel: Symptome, Ursachen & Tests | nährstoffmangel.de',
    desc: 'Wann liegt ein Vitaminmangel vor? Ursachen, typische Symptome, relevante Blutwerte & Vitamine im Überblick. Wissenschaftlich fundierte Orientierung.',
    keywords: 'Vitaminmangel, Vitaminmangel Symptome, Vitaminmangel Test, Vitaminmangel erkennen, welche Vitamine fehlen mir, Vitamin D B12 Folsäure'
  },
  {
    url: '/ueber-uns',
    title: 'Über uns & Redaktionsleitlinien | nährstoffmangel.de',
    desc: 'Unsere wissenschaftlichen Standards: Unabhängigkeit, Evidenz nach DGE, RKI und EFSA sowie strenger medizinischer Haftungsausschluss.',
    keywords: 'nährstoffmangel.de Redaktion, Redaktionsleitlinien Gesundheitsportal, evidenzbasierte Gesundheitsinformation'
  },
  {
    url: '/impressum',
    title: 'Impressum | nährstoffmangel.de',
    desc: 'Impressum und Anbieterkennzeichnung nach § 5 DDG und § 18 Abs. 2 MStV für nährstoffmangel.de.',
    keywords: 'Impressum nährstoffmangel.de, Anbieterkennzeichnung'
  },
  {
    url: '/datenschutz',
    title: 'Datenschutzerklärung | nährstoffmangel.de',
    desc: 'Datenschutzhinweise und DSGVO-Informationen für nährstoffmangel.de – cookielose Analyse mit Vercel Analytics, keine externen Google Fonts.',
    keywords: 'Datenschutzerklärung nährstoffmangel.de, DSGVO, Vercel Analytics Datenschutz'
  },
  // --- CLUSTER: SYMPTOME (6 Routen) ---
  {
    url: '/symptome/muedigkeit',
    title: 'Müdigkeit durch Nährstoffmangel: Eisen, B12 oder Vitamin D? | nährstoffmangel.de',
    desc: 'Ständige Müdigkeit und Erschöpfung: Welche Mikronährstoffdefizite infrage kommen, warum das Symptom unspezifisch ist & welche Laborwerte Klarheit bringen.',
    keywords: 'Müdigkeit Nährstoffmangel, chronische Erschöpfung Mangel, Eisenmangel Müdigkeit, B12 Müdigkeit, Vitamin D Antriebslosigkeit, Laborwerte Müdigkeit'
  },
  {
    url: '/symptome/haarausfall',
    title: 'Haarausfall durch Nährstoffmangel: Eisen, Zink oder Vitamin D? | nährstoffmangel.de',
    desc: 'Diffuser Haarausfall: Zusammenhang mit Ferritin, Zink und Vitamin D. Warum Haarausfall oft zeitverzögert auftritt und welche Differentialdiagnosen wichtig sind.',
    keywords: 'Haarausfall Nährstoffmangel, diffuser Haarausfall Eisen, Ferritin Haarausfall, Zinkmangel Haarausfall, Vitamin D Haarwurzel, Haarverlust Mangel'
  },
  {
    url: '/symptome/wadenkraempfe',
    title: 'Wadenkrämpfe: Magnesiummangel oder andere Ursachen? | nährstoffmangel.de',
    desc: 'Nächtliche Wadenkrämpfe: Warum nicht immer Magnesium fehlt, wie Elektrolytverschiebungen wirken und welche neurologischen oder vaskulären Ursachen vorliegen können.',
    keywords: 'Wadenkrämpfe Ursache, nächtliche Wadenkrämpfe Magnesium, Muskelkrämpfe Mangel, Elektrolyte Krämpfe, Magnesiummangel Krämpfe'
  },
  {
    url: '/symptome/kribbeln-taubheit',
    title: 'Kribbeln & Taubheitsgefühl: Vitamin B12, Folsäure & Nerven | nährstoffmangel.de',
    desc: 'Kribbeln in Händen und Füßen: Neurologische Frühwarnzeichen bei Vitamin-B12-Mangel (Funikuläre Myelose) und wann sofortige ärztliche Abklärung nötig ist.',
    keywords: 'Kribbeln Hände Füße Mangel, Taubheitsgefühl Vitamin B12, Parästhesien Mangel, Polyneuropathie B12, funikuläre Myelose, Nervenschäden B12'
  },
  {
    url: '/symptome/konzentrationsprobleme',
    title: 'Konzentrationsprobleme & Brain Fog: Welche Nährstoffe fehlen? | nährstoffmangel.de',
    desc: 'Konzentrationsschwäche, Vergesslichkeit und Brain Fog: Welche Rolle Eisen, B12, Jod und Folsäure für Gehirnstoffwechsel und Neurotransmitter spielen.',
    keywords: 'Konzentrationsprobleme Nährstoffmangel, Brain Fog Ursachen, Eisenmangel Konzentration, B12 Vergesslichkeit, Jodmangel Konzentrationsschwäche'
  },
  {
    url: '/symptome/blasse-haut',
    title: 'Blasse Haut & Schleimhäute: Eisenmangelanämie oder B12? | nährstoffmangel.de',
    desc: 'Auffällige Blässe der Konjunktiven und Mundschleimhaut: Wie Anämien durch Eisen-, Folat- oder B12-Defizite entstehen und wann ein Blutbild erforderlich ist.',
    keywords: 'Blässe Nährstoffmangel, blasse Haut Ursachen, Eisenmangel Blässe, B12 Anämie blass, Konjunktiven Blässe Blutarmut'
  },
  // --- CLUSTER: LABORWERTE (6 Routen) ---
  {
    url: '/laborwerte/ferritin',
    title: 'Ferritin-Wert: Was Speichereisen im Blut aussagt | nährstoffmangel.de',
    desc: 'Ferritin im Blutbild: Referenzbereiche, klinische Einordnung von Speichereisenmangel vs. Akute-Phase-Reaktion & warum CRP mitgemessen werden sollte.',
    keywords: 'Ferritin Wert Blutbild, Speichereisen Ferritin, Ferritin Referenzbereich, Ferritin niedrig Symptome, Ferritin Entzündung CRP'
  },
  {
    url: '/laborwerte/transferrinsaettigung',
    title: 'Transferrinsättigung (TfS): Bedeutung bei Eisenmangel | nährstoffmangel.de',
    desc: 'Transferrinsättigung (TfS): Wie das Eisengerüst im Blut interpretiert wird, Formel (Eisen / Transferrin) und Bedeutung bei funktionellem Eisenmangel.',
    keywords: 'Transferrinsättigung Bedeutung, TfS Eisenmangel, Transferrinsättigung normal, funktioneller Eisenmangel, Ferritin TfS Kombination'
  },
  {
    url: '/laborwerte/eisen',
    title: 'Serumeisen (Fe): Warum der Einzelwert oft täuscht | nährstoffmangel.de',
    desc: 'Serumeisen im Labor: Warum der isolierte Eisenwert im Serum tageszeitlich stark schwankt und zur Mangeldiagnose allein ungeeignet ist.',
    keywords: 'Serumeisen Blutwert, Eisen im Serum Aussagekraft, Tagesrhythmus Eisen, Serumeisen schwankt, Eisenmangel Diagnostik'
  },
  {
    url: '/laborwerte/holo-tc',
    title: 'Holotranscobalamin (Holo-TC): Frühester Marker für B12 | nährstoffmangel.de',
    desc: 'Holotranscobalamin (Holo-TC / aktives B12): Warum Holo-TC ein beginnendes B12-Defizit frühzeitiger anzeigt als Gesamt-B12 im Serum.',
    keywords: 'Holotranscobalamin Holo-TC, aktives B12 Laborwert, Holo-TC Referenzbereich, B12 Mangel Frühstadium, Holo-TC vs Gesamt-B12'
  },
  {
    url: '/laborwerte/mma',
    title: 'Methylmalonsäure (MMA): Funktioneller B12-Gewebemarker | nährstoffmangel.de',
    desc: 'Methylmalonsäure (MMA) in Serum & Urin: Wie der funktionelle Marker einen intrazellulären B12-Mangel anzeigt und welche Rolle die Nierenfunktion spielt.',
    keywords: 'Methylmalonsäure MMA Wert, MMA Urin Test, MMA Serum B12 Mangel, funktioneller B12 Mangel, MMA eGFR Nierenfunktion'
  },
  {
    url: '/laborwerte/25-oh-vitamin-d',
    title: '25(OH)D-Wert: 25-Hydroxyvitamin-D richtig interpretieren | nährstoffmangel.de',
    desc: '25-Hydroxyvitamin-D [25(OH)D]: ng/ml in nmol/l umrechnen, offizielle RKI-Grenzwerte und sachliche Einordnung von Zielbereichen im Blut.',
    keywords: '25-OH-Vitamin-D Blutwert, 25(OH)D nmol/l ng/ml, Vitamin D Referenzbereich RKI, 25-Hydroxycholecalciferol Interpretation'
  },
  // --- CLUSTER: URSACHEN & RISIKOGRUPPEN (5 Routen) ---
  {
    url: '/ursachen/eisenmangel-starke-menstruation',
    title: 'Eisenmangel durch starke Menstruation (Hypermenorrhoe) | nährstoffmangel.de',
    desc: 'Starke Regelblutung als Hauptursache für Eisenmangel bei prämenopausalen Frauen: Chronischer Blutverlust, Diagnostik und Therapiemöglichkeiten.',
    keywords: 'Eisenmangel Periode, Hypermenorrhoe Eisenmangel, starke Menstruation Ferritin, Eisenverlust Monatsblutung, Menorrhagie Eisen'
  },
  {
    url: '/ursachen/b12-mangel-trotz-fleisch',
    title: 'Vitamin-B12-Mangel trotz Fleischkonsum: Ursachen | nährstoffmangel.de',
    desc: 'B12-Mangel trotz Mischkost: Warum Malabsorption, atrophische Gastritis oder Mangel an Intrinsic Factor die B12-Resorption verhindern können.',
    keywords: 'B12 Mangel trotz Fleisch, B12 Resorptionsstörung, atrophische Gastritis B12, Intrinsic Factor Mangel, Malabsorption Cobalamin'
  },
  {
    url: '/ursachen/b12-mangel-metformin-ppi',
    title: 'B12-Mangel durch Metformin & PPI (Magenschutz): Risiken | nährstoffmangel.de',
    desc: 'Arzneimittelbedingter B12-Mangel: Wie Magensäureblocker (Pantoprazol, Omeprazol) und Diabetesmedikamente (Metformin) die B12-Aufnahme senken.',
    keywords: 'B12 Mangel PPI Pantoprazol, Metformin B12 Mangel, Magenschutz Vitamin B12, Säureblocker Malabsorption, Arzneimittel Mikronährstoffe'
  },
  {
    url: '/ursachen/zinkmangel-vegan',
    title: 'Zinkmangel bei veganer Ernährung: Phytinsäure & Quellen | nährstoffmangel.de',
    desc: 'Zinkversorgung ohne tierische Produkte: Warum Phytinsäure Zink im Darm bindet und wie Zubereitungsmethoden die Bioverfügbarkeit verdreifachen.',
    keywords: 'Zink vegane Ernährung, Zinkmangel Veganer, Phytinsäure Zink hemmen, Zink Bioverfügbarkeit pflanzlich, Phytatabbau Einweichen'
  },
  {
    url: '/ursachen/magnesiummangel-medikamente',
    title: 'Magnesiummangel durch Medikamente: Diuretika & Säureblocker | nährstoffmangel.de',
    desc: 'Medikamenteninduzierte Hypomagnesiämie: Welche Entwässerungstabletten (Diuretika) und PPI zu erhöhtem Magnesiumverlust führen.',
    keywords: 'Magnesiummangel Medikamente, Diuretika Magnesiumverlust, PPI Hypomagnesiämie, Entwässerungstabletten Krämpfe, renale Magnesiumausscheidung'
  },
  // --- CLUSTER: ERNÄHRUNG & REZEPTE (3 Routen) ---
  {
    url: '/ernaehrung/eisenreiche-lebensmittel',
    title: 'Eisenreiche Lebensmittel: Top 10 Tabelle & Resorptionstipps | nährstoffmangel.de',
    desc: 'Eisenhaltige Lebensmittel nach BLS: Häm-Eisen vs. Nicht-Häm-Eisen, Resorptionsförderer wie Vitamin C und alltagstaugliche Mahlzeiten.',
    keywords: 'eisenreiche Lebensmittel Tabelle, Eisenhaltige Lebensmittel Liste, pflanzliches Eisen aufnehmen, Vitamin C Eisen Resorption, BLS Eisen'
  },
  {
    url: '/ernaehrung/vitamin-b12-lebensmittel',
    title: 'Vitamin-B12-Lebensmittel: Beste Quellen & vegane Grenzen | nährstoffmangel.de',
    desc: 'Wo ist Vitamin B12 enthalten? Die verlässlichsten tierischen Lieferanten, B12-Verluste bei Zubereitung & warum pflanzliche Alternativen nicht ausreichen.',
    keywords: 'Vitamin B12 Lebensmittel, B12 Quellen Tabelle, B12 in Nahrungsmitteln, B12 Gehalt Fleisch Fisch Ei, vegane B12 Quellen Irrtum'
  },
  {
    url: '/ernaehrung/magnesiumreiche-lebensmittel',
    title: 'Magnesiumreiche Lebensmittel: Saaten, Nüsse & Mineralwasser | nährstoffmangel.de',
    desc: 'Die besten Magnesiumquellen im Alltag: Kürbiskerne, Kakao, Vollkorn & magnesiumreiches Heilwasser. Bioverfügbarkeit und Phytat-Reduktion erklärt.',
    keywords: 'magnesiumreiche Lebensmittel, Magnesium Tabelle Nahrung, Kürbiskerne Magnesium, magnesiumreiches Mineralwasser, Magnesium Tagesbedarf decken'
  }
];

console.log(`Starting prerendering of ${routesToPrerender.length} routes...`);

for (const route of routesToPrerender) {
  try {
    const { html: appHtml } = render(route.url);
    let rendered = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    
    // Replace meta tags and title
    rendered = rendered.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
    rendered = rendered.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.desc}" />`);
    if (route.keywords) {
      rendered = rendered.replace(/<meta name="keywords" content=".*?" \/>/, `<meta name="keywords" content="${route.keywords}" />`);
    }
    
    const fullUrl = `https://www.nährstoffmangel.de${route.url === '/' ? '/' : route.url}`;
    rendered = rendered.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${fullUrl}" />`);
    rendered = rendered.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${fullUrl}" />`);
    rendered = rendered.replace(/<link rel="alternate" hreflang="de" href=".*?" \/>/, `<link rel="alternate" hreflang="de" href="${fullUrl}" />`);
    rendered = rendered.replace(/<link rel="alternate" hreflang="x-default" href=".*?" \/>/, `<link rel="alternate" hreflang="x-default" href="${fullUrl}" />`);
    rendered = rendered.replace(/<meta name="twitter:url" content=".*?" \/>/, `<meta name="twitter:url" content="${fullUrl}" />`);
    rendered = rendered.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`);
    rendered = rendered.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title}" />`);
    rendered = rendered.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.desc}" />`);
    rendered = rendered.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.desc}" />`);

    const filePath = route.url === '/' ? 'dist/index.html' : `dist${route.url}/index.html`;
    const absolutePath = toAbsolute(filePath);
    
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
    fs.writeFileSync(absolutePath, rendered, 'utf-8');
    
    console.log(`  ✓ ${route.url} -> ${filePath} (${(rendered.length / 1024).toFixed(1)} kB)`);
  } catch (err) {
    console.error(`  ✗ Error prerendering ${route.url}:`, err);
    process.exit(1);
  }
}

console.log('Static Site Prerendering completed successfully!');
