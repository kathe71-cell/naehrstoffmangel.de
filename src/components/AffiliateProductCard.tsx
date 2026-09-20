import { Check, ExternalLink, Sparkles } from 'lucide-react';

interface ProductItem {
  name: string;
  brand: 'Sunday Natural' | 'nu3' | 'iHerb' | 'Apotheken-Qualität';
  dosage: string;
  form: string;
  vegan: boolean;
  highlight: string;
}

interface AffiliateProductCardProps {
  nutrient: string;
  products?: ProductItem[];
  className?: string;
}

const defaultProductsByNutrient: Record<string, ProductItem[]> = {
  Eisen: [
    { name: 'Eisenbisglycinat Chelat 20mg', brand: 'Sunday Natural', dosage: '20 mg elementares Fe', form: 'Kapseln (magenschonend)', vegan: true, highlight: 'Mit bioaktivem Vitamin C für maximale Absorption' },
    { name: 'Eisen Komplex Forte', brand: 'nu3', dosage: '14 mg Fe + Folsäure & B12', form: 'Reinsubstanz-Kapseln', vegan: true, highlight: 'Ohne künstliche Trennmittel, zertifizierte Reinstoffe' },
    { name: 'Iron Bisglycinate Gentle Iron', brand: 'iHerb', dosage: '25 mg', form: 'Vegetarische Kapseln', vegan: true, highlight: 'International bewährte Formulierung ohne Obstipation' }
  ],
  'Vitamin D': [
    { name: 'Vitamin D3 & K2 MK7 Tropfen 1.000 I.E.', brand: 'Sunday Natural', dosage: '1.000 I.E. D3 + 20µg K2', form: 'Tropfen in MCT-Öl', vegan: true, highlight: '100% all-trans K2 (K2VITAL®), laborgeprüft' },
    { name: 'Premium Vitamin D3 2000 I.E.', brand: 'nu3', dosage: '2.000 I.E. pro Tropfen', form: 'Öl-Tropfen', vegan: true, highlight: 'Aus Flechten gewonnen, optimal fettlöslich' }
  ],
  Magnesium: [
    { name: 'Magnesiumbisglycinat Pur', brand: 'Sunday Natural', dosage: '100 mg elementares Mg', form: 'Chelat-Kapseln', vegan: true, highlight: 'Hoch bioverfügbar, keine Magen-Darm-Reizung' },
    { name: 'Magnesium Citrat Pulver', brand: 'nu3', dosage: '300 mg pro Portion', form: 'Reines Pulver', vegan: true, highlight: 'Ideal für Sportler und schnelle Regeneration' }
  ],
  'Vitamin B12': [
    { name: 'Vitamin B12 MHA-Formel Tropfen', brand: 'Sunday Natural', dosage: '500 µg (Methyl-, Hydroxo-, Adenosyl-)', form: 'Sublinguale Tropfen', vegan: true, highlight: 'Alle 3 natürlichen bioaktiven B12-Formen vereint' },
    { name: 'Vitamin B12 Methylcobalamin', brand: 'nu3', dosage: '1.000 µg', form: 'Lutschtabletten', vegan: true, highlight: 'Aufnahme direkt über die Mundschleimhaut' }
  ],
  Zink: [
    { name: 'Zinkbisglycinat 25mg Forte', brand: 'Sunday Natural', dosage: '25 mg Zink', form: 'Kapseln', vegan: true, highlight: 'Höchste chelierte Bioverfügbarkeit' },
    { name: 'Zink Histidin Komplex', brand: 'Apotheken-Qualität', dosage: '15 mg Zink + L-Histidin', form: 'Filmtabletten', vegan: true, highlight: 'Bewährter Histidin-Träger für verbesserte Aufnahme' }
  ],
  Folsäure: [
    { name: 'Folat 5-MTHF Metafolin® 400µg', brand: 'Sunday Natural', dosage: '400 µg aktives Folat', form: 'Kapseln', vegan: true, highlight: 'Sofort biologisch aktiv ohne MTHFR-Enzymbarriere' },
    { name: 'Folsäure Komplex 800µg', brand: 'nu3', dosage: '800 µg Folat-Äquivalent', form: 'Kapseln', vegan: true, highlight: 'Speziell für Kinderwunsch und Frühschwangerschaft' }
  ],
  Jod: [
    { name: 'Kaliumjodid 150µg Tabletten', brand: 'Apotheken-Qualität', dosage: '150 µg Jodid', form: 'Präzise Mini-Tabletten', vegan: true, highlight: 'Standardisierte Dosis ohne Risiko von Algenschwankungen' },
    { name: 'Bio Kelp Jod Extrakt', brand: 'Sunday Natural', dosage: '150 µg natürliches Jod', form: 'Braunalgen-Kapseln', vegan: true, highlight: 'Laborgeprüft auf Schwermetalle und konstanten Jodgehalt' }
  ]
};

export default function AffiliateProductCard({
  nutrient,
  products,
  className = ''
}: AffiliateProductCardProps) {
  const productList = products || defaultProductsByNutrient[nutrient] || defaultProductsByNutrient['Eisen'];

  return (
    <section aria-labelledby="product-recommendations-title" className={`bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs my-8 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Transparente Empfehlungen</span>
          </div>
          <h3 id="product-recommendations-title" className="text-xl font-bold text-slate-900">
            Geprüfte Reinsubstanzen: {nutrient}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Ausgewählte Qualitätspräparate ohne unnötige Zusatzstoffe (wie Magnesiumstearat oder Titandioxid).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productList.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-200 bg-slate-50/50"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                <span className="px-2 py-0.5 bg-white rounded border border-slate-200">{item.brand}</span>
                {item.vegan && <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Vegan</span>}
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">
                {item.name}
              </h4>
              <p className="text-xs text-slate-600 mb-2">
                <strong className="text-slate-700">Dosis:</strong> {item.dosage} · {item.form}
              </p>
              <div className="flex items-start gap-1.5 text-xs text-emerald-800 bg-emerald-50/80 p-2 rounded-lg mb-4">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item.highlight}</span>
              </div>
            </div>

            {/* Affiliate Button Placeholder */}
            <a
              href={`#partner-${item.brand.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={(e) => {
                e.preventDefault();
                alert(`Partnerlink zu ${item.brand}: Vorbereitet für das jeweilige Partnerprogramm.`);
              }}
              className="mt-auto inline-flex items-center justify-center gap-1.5 w-full bg-white hover:bg-emerald-50 border border-slate-300 hover:border-emerald-400 text-slate-800 hover:text-emerald-900 text-xs font-bold py-2.5 px-3 rounded-lg min-h-[44px] transition-colors shadow-2xs"
            >
              <span>Produkt beim Anbieter prüfen *</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-500">
        <p>
          * Werbelink / Partnerlink: Bei einem Kauf über diese Links erhalten wir ggf. eine Vergütung. Unabhängige Kriterien bestimmen unsere Auswahl.
        </p>
        <span className="shrink-0 font-medium text-slate-600">Reinsubstanz-Standard</span>
      </div>
    </section>
  );
}
