import type { Product } from '@plattform/core';

/**
 * Alle Affiliate-Produkte dieser Seite.
 * Produkt ersetzen: asin/label/hint ändern und checked aktualisieren.
 * Produkt entfernen: status auf 'inaktiv' setzen.
 * hint: nur sachliche Angaben (Form, Dosis, Menge, vegan) – keine Wirkversprechen.
 */
const c = '2026-09-28';
export const products: Product[] = [
  // Eisen
  { id: 'eisen-bisglycinat', asin: 'B08S7CZ26J', label: 'Eisenbisglycinat 20 mg mit Vitamin C', status: 'aktiv', checked: c, type: 'produkt', hint: 'Eisen als Bisglycinat, mit natürlichem Vitamin C, vegan' },
  { id: 'floradix-eisen', asin: 'B00E66ZDHY', label: 'Floradix mit Eisen, 700 ml', status: 'aktiv', checked: c, type: 'produkt', hint: 'Flüssiges Tonikum mit Eisen(II)-gluconat und Kräuterextrakten' },
  { id: 'buch-eisenmangel-kochbuch', asin: '3757602129', label: 'Eisenmangel Kochbuch', status: 'aktiv', checked: c, type: 'buch', hint: 'Rezepte für eine eisenhaltige Ernährung' },
  { id: 'test-ferritin', asin: 'B0CTR4JR6F', label: 'Ferritin-Selbsttest, 2 Tests', status: 'aktiv', checked: c, type: 'produkt', hint: 'Schnelltest aus Fingerblut für zu Hause' },
  // Vitamin D
  { id: 'd3-1000', asin: 'B084G4MJPB', label: 'Vitamin D3 1000 I.E., 365 Minitabletten', status: 'aktiv', checked: c, type: 'produkt', hint: 'Eine Minitablette pro Tag, Jahresvorrat (Sanhelios)' },
  { id: 'd3-1000-vegan', asin: 'B0CKTXGNF1', label: 'Vitamin D3 1000 I.E. vegan, 365 Tabletten', status: 'aktiv', checked: c, type: 'produkt', hint: 'Pflanzliches Vitamin D3, Jahresvorrat' },
  { id: 'd3-k2-depot', asin: 'B01M36DP4F', label: 'Vitamin D3 + K2 Depot-Tabletten', status: 'aktiv', checked: c, type: 'produkt', hint: 'D3 kombiniert mit K2 (MK-7), 180 Tabletten' },
  { id: 'd3-k2-tropfen', asin: 'B07BGHDRZH', label: 'Vitamin D3 + K2 Tropfen', status: 'aktiv', checked: c, type: 'produkt', hint: 'D3 und K2 (MK-7) in Tropfenform, 50 ml' },
  { id: 'test-vitamin-d', asin: 'B0DC6VDCST', label: 'Vitamin-D-Test mit Laboranalyse', status: 'aktiv', checked: c, type: 'produkt', hint: 'Probenset für zu Hause, Auswertung im Labor, 2 Tests' },
  // Magnesium
  { id: 'magnesium-bisglycinat', asin: 'B07NS14648', label: 'Magnesium Bisglycinat Kapseln', status: 'aktiv', checked: c, type: 'produkt', hint: 'Chelatiertes Magnesium, 300 mg pro Tagesdosis, 180 Kapseln' },
  { id: 'magnesiumcitrat', asin: 'B074CKFS4Q', label: 'Magnesiumcitrat Kapseln', status: 'aktiv', checked: c, type: 'produkt', hint: '360 mg Magnesium pro Tagesdosis, 180 vegane Kapseln' },
  { id: 'kuerbiskerne-bio', asin: 'B01MUK73UR', label: 'Bio-Kürbiskerne, 1 kg', status: 'aktiv', checked: c, type: 'produkt', hint: 'Geschält, roh und ungesalzen' },
  // Vitamin B12
  { id: 'b12-lutschtabletten', asin: 'B08BLVW5Y8', label: 'B12 Lutschtabletten (Methyl- + Adenosylcobalamin)', status: 'aktiv', checked: c, type: 'produkt', hint: '500 µg pro Tablette, 240 Stück' },
  { id: 'b12-tropfen', asin: 'B07JVP37J5', label: 'B12 Tropfen', status: 'aktiv', checked: c, type: 'produkt', hint: '500 µg pro Tropfen, zwei Aktivformen, 50 ml' },
  { id: 'b12-1000', asin: 'B09MR6XF4V', label: 'Vitamin B12 1000 µg (Methylcobalamin)', status: 'aktiv', checked: c, type: 'produkt', hint: 'Hochdosiert, 90 vegane Kapseln' },
  { id: 'b12-zahncreme-sante', asin: 'B0F99QN3DG', label: 'Zahncreme mit Vitamin B12 (SANTE)', status: 'aktiv', checked: c, type: 'produkt', hint: 'Mit Fluorid, 75 ml' },
  { id: 'b12-zahnpasta-zahnheld', asin: 'B07V1HK632', label: 'Zahnpasta mit Vitamin B12 (Zahnheld)', status: 'aktiv', checked: c, type: 'produkt', hint: 'Ohne Fluorid, vegan' },
  { id: 'test-b12', asin: 'B07TS8DKYC', label: 'Vitamin-B12-Test mit Laboranalyse', status: 'aktiv', checked: c, type: 'produkt', hint: 'Probenset für zu Hause, Auswertung im Labor' },
  // Zink
  { id: 'zink-bisglycinat', asin: 'B07BR4X8L6', label: 'Zinkbisglycinat 25 mg', status: 'aktiv', checked: c, type: 'produkt', hint: '365 Tabletten, vegan' },
  { id: 'zink-gluconat', asin: 'B01LZYOZT1', label: 'Zinkgluconat 25 mg', status: 'aktiv', checked: c, type: 'produkt', hint: '365 Tabletten, eine pro Tag' },
  { id: 'sauerteig-bio', asin: 'B00SYW4F5M', label: 'Bio-Roggensauerteig, 300 g', status: 'aktiv', checked: c, type: 'produkt', hint: 'Frischer Natursauerteig zum Brotbacken' },
  // Folsäure
  { id: 'folio-1', asin: 'B01MUHWMI5', label: 'Folio 1 basic, 90 Mini-Tabletten', status: 'aktiv', checked: c, type: 'produkt', hint: 'Für Kinderwunsch und Frühschwangerschaft (bis 12. SSW)' },
  { id: 'femibion-1', asin: 'B07YD47LB8', label: 'Femibion 1 Frühschwangerschaft', status: 'aktiv', checked: c, type: 'produkt', hint: 'Für die Frühschwangerschaft (SSW 1–12)' },
  { id: 'folsaeure-400', asin: 'B0BKFPRLLM', label: 'Folsäure 400 µg', status: 'aktiv', checked: c, type: 'produkt', hint: '400 Tabletten, vegan' },
  { id: 'folat-5mthf', asin: 'B0B6WCHGMK', label: 'Folat 400 µg (Quatrefolic 5-MTHF)', status: 'aktiv', checked: c, type: 'produkt', hint: 'Bioaktives Folat, Kapseln' },
  // Jod
  { id: 'jodid-100', asin: 'B00DIVTSYC', label: 'Jodid 100 µg Tabletten', status: 'aktiv', checked: c, type: 'arzneimittel', hint: '100 Tabletten (Hexal)' },
  { id: 'jodsalz-fluorid-folsaeure', asin: 'B000P61QXE', label: 'Bad Reichenhaller Jodsalz mit Fluorid + Folsäure', status: 'aktiv', checked: c, type: 'produkt', hint: '12 × 500 g' },
  { id: 'test-jod-urin', asin: 'B07KJ9SKCN', label: 'Jod-Urintest mit Laboranalyse', status: 'aktiv', checked: c, type: 'produkt', hint: 'Urinprobe für zu Hause, Auswertung im Labor' },
  // Tests allgemein
  { id: 'test-mineralstoffe', asin: 'B07TWHDVCB', label: 'Mineralstoff-Test (Magnesium, Zink, Selen)', status: 'aktiv', checked: c, type: 'produkt', hint: 'Probenset für zu Hause, Auswertung im Labor' },
];
