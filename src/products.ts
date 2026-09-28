import type { Product } from '@plattform/core';

/**
 * Alle Affiliate-Produkte dieser Seite.
 * Produkt ersetzen: asin/label ändern und checked aktualisieren.
 * Produkt entfernen: status auf 'inaktiv' setzen.
 */
export const products: Product[] = [
  { id: 'eisen-bisglycinat', asin: 'B08S7CZ26J', label: 'Eisenbisglycinat 20 mg mit Vitamin C', status: 'aktiv', checked: '2026-09-27', type: 'produkt' },
  { id: 'test-ferritin', asin: 'B0CTR4JR6F', label: 'Ferritin-Selbsttest, 2 Tests', status: 'aktiv', checked: '2026-09-27', type: 'produkt' },
  { id: 'd3-k2-depot', asin: 'B01M36DP4F', label: 'Vitamin D3 + K2 Depot-Tabletten', status: 'aktiv', checked: '2026-09-27', type: 'produkt' },
  { id: 'd3-k2-tropfen', asin: 'B07BGHDRZH', label: 'Vitamin D3 + K2 Tropfen', status: 'aktiv', checked: '2026-09-27', type: 'produkt' },
  { id: 'test-vitamin-d', asin: 'B0DC6VDCST', label: 'Vitamin-D-Test mit Laboranalyse', status: 'aktiv', checked: '2026-09-27', type: 'produkt' },
  { id: 'magnesium-bisglycinat', asin: 'B07NS14648', label: 'Magnesium Bisglycinat Kapseln', status: 'aktiv', checked: '2026-09-27', type: 'produkt' },
  { id: 'magnesiumcitrat', asin: 'B074CKFS4Q', label: 'Magnesiumcitrat Kapseln', status: 'aktiv', checked: '2026-09-27', type: 'produkt' },
  { id: 'b12-lutschtabletten', asin: 'B08BLVW5Y8', label: 'B12 Lutschtabletten (Methyl- + Adenosylcobalamin)', status: 'aktiv', checked: '2026-09-27', type: 'produkt' },
  { id: 'b12-tropfen', asin: 'B07JVP37J5', label: 'B12 Tropfen', status: 'aktiv', checked: '2026-09-27', type: 'produkt' },
  { id: 'test-b12', asin: 'B07TS8DKYC', label: 'Vitamin-B12-Test mit Laboranalyse', status: 'aktiv', checked: '2026-09-27', type: 'produkt' },
  { id: 'zink-bisglycinat', asin: 'B07BR4X8L6', label: 'Zinkbisglycinat 25 mg', status: 'aktiv', checked: '2026-09-27', type: 'produkt' },
  { id: 'zink-gluconat', asin: 'B01LZYOZT1', label: 'Zinkgluconat 25 mg', status: 'aktiv', checked: '2026-09-27', type: 'produkt' },
  { id: 'folat-5mthf', asin: 'B0B6WCHGMK', label: 'Folat 400 µg (Quatrefolic 5-MTHF)', status: 'aktiv', checked: '2026-09-27', type: 'produkt' },
  { id: 'folsaeure-400', asin: 'B0BKFPRLLM', label: 'Folsäure 400 µg', status: 'aktiv', checked: '2026-09-27', type: 'produkt' },
  { id: 'jodid-100', asin: 'B00DIVTSYC', label: 'Jodid 100 µg Tabletten', status: 'aktiv', checked: '2026-09-27', type: 'arzneimittel' },
  { id: 'test-jod-urin', asin: 'B07KJ9SKCN', label: 'Jod-Urintest mit Laboranalyse', status: 'aktiv', checked: '2026-09-27', type: 'produkt' },
  { id: 'test-mineralstoffe', asin: 'B07TWHDVCB', label: 'Mineralstoff-Test (Magnesium, Zink, Selen)', status: 'aktiv', checked: '2026-09-27', type: 'produkt' },
];
