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
    desc: 'Unabhängiges Fachportal zu Nährstoffmangel: Eisen, Vitamin D, B12, Magnesium, Zink, Folsäure & Jod. Symptom-Navigator, Bluttest-Ratgeber & Ernährungstipps.'
  },
  {
    url: '/eisenmangel',
    title: 'Eisenmangel Symptome Frau: Müdigkeit, Haarausfall & Ferritin | nährstoffmangel.de',
    desc: 'Eisenmangel Symptome bei Frauen: Warum Ferritin unter 50 µg/l trotz "normalem Blutbild" Erschöpfung und Haarausfall verursacht – mit Laborwert-Erklärung und Ernährungstipps.'
  },
  {
    url: '/vitamin-d-mangel',
    title: 'Vitamin D Mangel Symptome & Werte: Was 25(OH)D unter 50 nmol/l bedeutet | nährstoffmangel.de',
    desc: 'Vitamin D Mangel Symptome im Winter: Müdigkeit, Immunschwäche, Knochenschmerzen. Was Ihr 25(OH)D-Wert bedeutet, ab wann Sie supplementieren sollten & welche Dosierung sinnvoll ist.'
  },
  {
    url: '/magnesiummangel',
    title: 'Magnesiummangel Symptome: Wadenkrämpfe, Lidzucken & Schlaf | nährstoffmangel.de',
    desc: 'Magnesiummangel Symptome: Wadenkrämpfe nachts, Lidzucken, innere Unruhe und Einschlafprobleme erkennen. Welche Magnesiumform (Bisglycinat vs. Citrat) am besten aufgenommen wird.'
  },
  {
    url: '/vitamin-b12-mangel',
    title: 'Vitamin B12 Mangel Symptome vegan: Taubheit, Brain Fog & Holotranscobalamin | nährstoffmangel.de',
    desc: 'Vitamin B12 Mangel Symptome: Warum Veganer und ältere Menschen besonders gefährdet sind, was Holotranscobalamin (Holo-TC) vs. Gesamt-B12 bedeutet & welche Supplementform wirklich ins Blut geht.'
  },
  {
    url: '/zinkmangel',
    title: 'Zinkmangel Symptome: Haarausfall, Infektanfälligkeit & Testosteron | nährstoffmangel.de',
    desc: 'Zinkmangel Symptome: Warum häufige Erkältungen, Haarausfall und schlechte Wundheilung auf Zinkmangel hindeuten. Phytinsäure-Problem bei Veganern & beste Zinkform im Vergleich.'
  },
  {
    url: '/folsaeuremangel',
    title: 'Folsäure Schwangerschaft: Wann anfangen & Folat vs. Folsäure erklärt | nährstoffmangel.de',
    desc: 'Folsäure in der Schwangerschaft: Wann anfangen, welche Dosierung und warum Methylfolat (Folat) für MTHFR-Mutationsträger besser ist als synthetische Folsäure. Laborwerte & Symptome.'
  },
  {
    url: '/jodmangel',
    title: 'Jodmangel Schilddrüse Symptome: Struma, Hashimoto & warum Deutschland Jodmangel-Gebiet ist | nährstoffmangel.de',
    desc: 'Jodmangel Symptome: Müdigkeit, Frieren, Gewichtszunahme und Schilddrüsenvergrößerung (Struma). Warum Deutschland Jodmangelgebiet ist und was bei Hashimoto-Thyreoiditis gilt.'
  },
  {
    url: '/symptome',
    title: 'Symptom-Navigator: Welcher Nährstoffmangel steckt dahinter? | nährstoffmangel.de',
    desc: 'Interaktiver Symptom-Navigator: Symptome auswählen (Müdigkeit, Haarausfall, Krämpfe, Blässe) und passende Nährstoffdefizite live ermitteln.'
  },
  {
    url: '/bluttest',
    title: 'Nährstoff-Bluttest: Kosten, Ablauf & wichtige Laborwerte | nährstoffmangel.de',
    desc: 'Warum ein Bluttest sinnvoll ist, was er kostet: Großes Blutbild vs. Spezialbiomarker (Ferritin, Holo-TC, 25(OH)D3) und Heimtest-Vergleich.'
  },
  {
    url: '/ernaehrung',
    title: 'Nährstoffreiche Lebensmittel: Die Mikronährstoff-Matrix | nährstoffmangel.de',
    desc: 'Lebensmittel-Tabelle für Eisen, Vitamin D, Magnesium, B12, Zink, Folsäure & Jod mit Gehalt pro 100g und Tipps zur optimalen Bioverfügbarkeit.'
  },
  {
    url: '/ueber-uns',
    title: 'Über uns & Redaktionsleitlinien | nährstoffmangel.de',
    desc: 'Unsere wissenschaftlichen Standards: Unabhängigkeit, Evidenz nach DGE, RKI und EFSA sowie strenger medizinischer Haftungsausschluss.'
  },
  {
    url: '/impressum',
    title: 'Impressum | nährstoffmangel.de',
    desc: 'Impressum und Anbieterkennzeichnung nach § 5 DDG und § 18 Abs. 2 MStV für nährstoffmangel.de.'
  },
  {
    url: '/datenschutz',
    title: 'Datenschutzerklärung | nährstoffmangel.de',
    desc: 'Datenschutzhinweise und DSGVO-Informationen für nährstoffmangel.de (cookielose Vercel Analytics, Google AdSense).'
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
