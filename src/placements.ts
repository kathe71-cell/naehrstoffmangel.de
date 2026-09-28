/**
 * Wo welche Produkte erscheinen – jeweils direkt NACH dem Satz, der das Produkt anspricht.
 * Index = Position des Tipps in deficiencies.ts (treatmentInfo.supplementTips bzw. dietTips).
 */
type Placement = Record<string, Record<number, string[]>>;

/** „Leitfaden zur Nahrungsergänzung“ */
export const supplementTipProducts: Placement = {
  eisenmangel: { 0: ['floradix-eisen'], 1: ['eisen-bisglycinat'] },
  'vitamin-d-mangel': { 0: ['d3-1000', 'd3-1000-vegan'], 2: ['d3-k2-depot', 'd3-k2-tropfen'] },
  magnesiummangel: { 0: ['magnesium-bisglycinat'], 1: ['magnesiumcitrat'] }, // Tipp 2 (Magnesiumoxid): bewusst kein Produkt
  'vitamin-b12-mangel': { 0: ['b12-lutschtabletten', 'b12-tropfen'], 1: ['b12-1000'] },
  zinkmangel: { 0: ['zink-bisglycinat', 'zink-gluconat'] },
  folsaeuremangel: { 0: ['folio-1', 'femibion-1', 'folsaeure-400'], 1: ['folat-5mthf'] },
  jodmangel: { 1: ['jodid-100'] }, // nicht im Hashimoto-Hinweis, nicht bei Algen/Kelp
};

/** „Ernährungstipps“ */
export const dietTipProducts: Placement = {
  eisenmangel: { 0: ['buch-eisenmangel-kochbuch'] },
  magnesiummangel: { 1: ['kuerbiskerne-bio'] },
  'vitamin-b12-mangel': { 0: ['b12-zahncreme-sante', 'b12-zahnpasta-zahnheld'] },
  zinkmangel: { 0: ['sauerteig-bio'] },
  jodmangel: { 0: ['jodsalz-fluorid-folsaeure'] },
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

/** Übersicht der Heimtests auf /bluttest */
export const bloodTestPageProducts = ['test-ferritin', 'test-vitamin-d', 'test-b12', 'test-mineralstoffe', 'test-jod-urin'];
