/**
 * Wo welche Produkte erscheinen.
 * supplementTips: Seite → Index des Tipps in deficiencies.ts (treatmentInfo.supplementTips) → Produkt-IDs.
 * Links stehen immer NACH dem jeweiligen Tipp, nie mitten in einer Wirkungsbeschreibung.
 */
export const supplementTipProducts: Record<string, Record<number, string[]>> = {
  eisenmangel: { 1: ['eisen-bisglycinat'] },
  'vitamin-d-mangel': { 2: ['d3-k2-depot', 'd3-k2-tropfen'] },
  magnesiummangel: { 0: ['magnesium-bisglycinat'], 1: ['magnesiumcitrat'] }, // Tipp 2 (Magnesiumoxid): bewusst kein Produkt
  'vitamin-b12-mangel': { 0: ['b12-lutschtabletten', 'b12-tropfen'] },
  zinkmangel: { 0: ['zink-bisglycinat', 'zink-gluconat'] },
  folsaeuremangel: { 0: ['folsaeure-400'], 1: ['folat-5mthf'] },
  jodmangel: { 1: ['jodid-100'] }, // nicht im Hashimoto-Hinweis, nicht bei Algen/Kelp
};

/** Ziel des Buttons „Bluttest online bestellen“ je Seite. Nicht gelistet = interner Link auf /bluttest ohne Werbekennzeichnung. */
export const bloodTestProduct: Record<string, string> = {
  eisenmangel: 'test-ferritin',
  'vitamin-d-mangel': 'test-vitamin-d',
  'vitamin-b12-mangel': 'test-b12',
  jodmangel: 'test-jod-urin',
  magnesiummangel: 'test-mineralstoffe',
  zinkmangel: 'test-mineralstoffe',
  bluttest: 'test-mineralstoffe',
};
