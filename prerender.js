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
    title: 'Eisenmangel – Symptome, Ursachen & Hilfe | nährstoffmangel.de',
    desc: 'Eisenmangel erkennen: Symptome wie chronische Erschöpfung, Blässe und Haarausfall. Ferritin-Laborwerte, DGE-Bedarf und beste Eisenquellen.'
  },
  {
    url: '/vitamin-d-mangel',
    title: 'Vitamin-D-Mangel – Symptome, Ursachen & Hilfe | nährstoffmangel.de',
    desc: 'Vitamin-D-Mangel: Über 50% der Deutschen weisen im Winter suboptimale 25(OH)D-Werte auf. Symptome, Knochen- und Immunfunktion sowie richtige Dosierung.'
  },
  {
    url: '/magnesiummangel',
    title: 'Magnesiummangel – Symptome, Ursachen & Hilfe | nährstoffmangel.de',
    desc: 'Magnesiummangel erkennen: Wadenkrämpfe, Lidzucken, innere Unruhe und Schlafprobleme. Bioverfügbarkeit von Magnesiumcitrat vs. Bisglycinat.'
  },
  {
    url: '/vitamin-b12-mangel',
    title: 'Vitamin-B12-Mangel – Symptome, Ursachen & Hilfe | nährstoffmangel.de',
    desc: 'Vitamin-B12-Mangel: Symptome wie Taubheitsgefühle, Brain Fog und Blutarmut. Diagnostik mit Holo-TC, Ursachen bei Veganern und Resorption via Intrinsic Factor.'
  },
  {
    url: '/zinkmangel',
    title: 'Zinkmangel – Symptome, Ursachen & Hilfe | nährstoffmangel.de',
    desc: 'Zinkmangel erkennen: Anfälligkeit für Infekte, Wundheilungsstörungen, brüchige Nägel und Haarausfall. Phytinsäure-Hemmung und beste organische Zinkformen.'
  },
  {
    url: '/folsaeuremangel',
    title: 'Folsäuremangel – Symptome, Ursachen & Hilfe | nährstoffmangel.de',
    desc: 'Folsäuremangel: Ursachen, Symptome und warum Folat bei Kinderwunsch und Frühschwangerschaft entscheidend ist. DGE-Bedarf, Laborwerte und Lebensmittel.'
  },
  {
    url: '/jodmangel',
    title: 'Jodmangel – Symptome, Ursachen & Hilfe | nährstoffmangel.de',
    desc: 'Jodmangel in Deutschland: Symptome wie Kropf (Struma), Schilddrüsenunterfunktion, Müdigkeit und Frieren. DGE-Referenzwerte, Jodsalz und Algen.'
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
