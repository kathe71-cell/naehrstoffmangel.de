# nährstoffmangel.de

Deutschsprachiges Informationsportal zu Nährstoffmangel – Symptome, Ursachen und Ernährungstipps

## Stack
- React 19 + TypeScript + Vite 8
- Tailwind CSS v4
- Static Site Generation (SSG) mit Prerendering aller 14 Routen
- Vercel Deployment

## Routen
- `/` Startseite mit Mangel-Übersicht, Statistiken und Symptom-Teaser
- `/eisenmangel`, `/vitamin-d-mangel`, `/magnesiummangel`, `/vitamin-b12-mangel`, `/zinkmangel`, `/folsaeuremangel`, `/jodmangel` – Vollständige Detailseiten mit MedicalCondition + FAQPage Schema.org
- `/symptome` – Interaktiver Symptom-Navigator
- `/bluttest` – Diagnostik-Ratgeber mit Kostenübersicht
- `/ernaehrung` – Filterbare Nährstoff-Lebensmittel-Tabelle
- `/ueber-uns`, `/impressum`, `/datenschutz`

## Build
```bash
npm install
npm run build   # tsc + vite client + vite ssr + prerender.js
```

## Deploy
```bash
npx vercel --prod --yes
```

## Topics
naehrstoffmangel, gesundheit, ernaehrung, vitaminmangel, ssg, vercel
