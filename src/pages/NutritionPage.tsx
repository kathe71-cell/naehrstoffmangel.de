import { useState, useMemo } from 'react';
import { 
  UtensilsCrossed, 
  Search, 
  Check, 
  Leaf, 
  Filter, 
  ArrowUpDown, 
  Info,
  Sparkles,
  Heart
} from 'lucide-react';
import { foodsDatabase } from '../data/foods';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';

export default function NutritionPage() {
  const [selectedNutrient, setSelectedNutrient] = useState<string>('Alle');
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [onlyVegan, setOnlyVegan] = useState<boolean>(false);

  const nutrients = ['Alle', 'Eisen', 'Vitamin D', 'Magnesium', 'Vitamin B12', 'Zink', 'Folsäure', 'Jod'];
  const categories = ['Alle', 'Getreide & Saaten', 'Hülsenfrüchte & Nüsse', 'Gemüse & Obst', 'Tierische Produkte', 'Algen & Spezialitäten'];

  const filteredFoods = useMemo(() => {
    return foodsDatabase.filter((food) => {
      if (selectedNutrient !== 'Alle' && food.nutrient !== selectedNutrient) return false;
      if (selectedCategory !== 'Alle' && food.category !== selectedCategory) return false;
      if (onlyVegan && !food.vegan) return false;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        return food.name.toLowerCase().includes(q) || food.note.toLowerCase().includes(q) || food.nutrient.toLowerCase().includes(q);
      }
      return true;
    });
  }, [selectedNutrient, selectedCategory, onlyVegan, searchQuery]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Nährstoffreiche Lebensmittel', url: '/ernaehrung' }]} />

      {/* Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <UtensilsCrossed className="w-3.5 h-3.5" />
          <span>Ernährungsmedizinische Datenbank</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Nährstoffreiche Lebensmittel: Die große Mikronährstoff-Matrix
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
          Welche Nahrungsmittel liefern die höchsten Konzentrationen an Eisen, Vitamin D, Magnesium, B12, Zink, Folat oder Jod? Nutzen Sie unsere interaktive Tabelle mit standardisierten Werten pro 100 Gramm und DGE-Tagesbedarfsdeckung.
        </p>
      </header>

      {/* Filter Controls Bar */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Lebensmittel suchen (z. B. Kürbiskerne, Lachs, Spinat)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
            />
          </div>

          {/* Vegan Toggle */}
          <button
            onClick={() => setOnlyVegan(!onlyVegan)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-colors min-h-[44px] shrink-0 ${
              onlyVegan
                ? 'bg-emerald-700 text-white border-emerald-700 shadow-2xs'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Leaf className="w-4 h-4 text-emerald-300" />
            <span>Nur vegane Quellen</span>
          </button>
        </div>

        {/* Nutrient Pills */}
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Nach Nährstoff filtern:
          </div>
          <div className="flex flex-wrap gap-2">
            {nutrients.map((n) => (
              <button
                key={n}
                onClick={() => setSelectedNutrient(n)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors min-h-[38px] ${
                  selectedNutrient === n
                    ? 'bg-emerald-800 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills */}
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Lebensmittel-Gruppe:
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors min-h-[38px] ${
                  selectedCategory === c
                    ? 'bg-slate-800 text-white shadow-2xs font-bold'
                    : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Count & Table */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 px-1">
          <span>{filteredFoods.length} Lebensmittel gefunden</span>
          <span>Werte pro 100g essbarem Anteil</span>
        </div>

        <div className="overflow-x-auto bg-white border border-slate-200 rounded-2xl shadow-xs">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 text-xs uppercase tracking-wider">
                <th className="p-4">Lebensmittel</th>
                <th className="p-4">Kategorie</th>
                <th className="p-4">Nährstoff</th>
                <th className="p-4">Gehalt / 100g</th>
                <th className="p-4">Tagesbedarf (DGE)</th>
                <th className="p-4 hidden md:table-cell">Praxistipp / Resorption</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {filteredFoods.map((food) => (
                <tr key={food.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span>{food.name}</span>
                        {food.vegan && (
                          <span className="text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded border border-emerald-200 font-normal">
                            Vegan
                          </span>
                        )}
                      </div>
                      {food.status && (
                        <div className="text-[11px] text-slate-400 font-normal">
                          Zustand: {food.status}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-slate-500 text-xs">
                    <div>{food.category}</div>
                    {food.sourceReference && (
                      <span className="text-[10px] text-slate-400 font-mono block mt-0.5">
                        Quelle: {food.sourceReference}
                      </span>
                    )}
                  </td>
                  <td className="p-4 font-semibold text-emerald-800">{food.nutrient}</td>
                  <td className="p-4 font-mono font-bold text-slate-900">{food.amountPer100g}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-emerald-600 h-2 rounded-full"
                          style={{ width: `${Math.min(food.dailyValuePercentage, 100)}%` }}
                        />
                      </div>
                      <span className="font-mono text-xs text-slate-700 font-bold">
                        {food.dailyValuePercentage}%
                      </span>
                    </div>
                    {food.nutrient === 'Jod' && food.id === 'j3' && (
                      <span className="text-[10px] text-slate-500 block mt-0.5">
                        (ca. 10 % pro 1g-Prise)
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-slate-600 text-xs max-w-xs hidden md:table-cell">
                    {food.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Database & Methodology Disclosure Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs text-slate-600 space-y-2">
          <div className="font-bold text-slate-800 text-xs uppercase tracking-wider flex items-center gap-1.5">
            <Info className="w-4 h-4 text-emerald-700" />
            <span>Methodik &amp; Referenzwerte der Nährstoffmatrix</span>
          </div>
          <p className="leading-relaxed">
            <strong>Datenbasis:</strong> Alle Nährstoffgehalte basieren auf standardisierten Durchschnittswerten des <em>Bundeslebensmittelschlüssels (BLS Version 3.02)</em> sowie ergänzenden Angaben des <em>Bundesinstituts für Risikobewertung (BfR)</em>. Bei Naturprodukten unterliegen Nährstoffgehalte natürlichen Schwankungsbreiten (je nach Sorte, Reifegrad, Fütterung und Bodenbeschaffenheit).
          </p>
          <p className="leading-relaxed">
            <strong>Berechnungsgrundlage Tagesbedarf:</strong> Die Prozentangaben beziehen sich auf die offiziellen Referenzwerte der <em>Deutschen Gesellschaft für Ernährung (DGE)</em> für gesunde Erwachsene (Eisen: Orientierungswert 14 mg [Männer 11 mg, menstruierende Frauen 16 mg, postmenopausale Frauen 14 mg], Vitamin D: 20 µg bei fehlender Eigensynthese, Magnesium: 350 mg, Vitamin B12: 4,0 µg, Zink: 11 mg, Folat: 300 µg Folat-Äquivalente, Jod: 200 µg).
          </p>
        </div>
      </section>

      {/* Bioavailability Guide Box */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-emerald-700" />
          <span>Bioverfügbarkeit: Warum der reine Tabellenwert täuschen kann</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block mb-1">1. Häm- vs. Nicht-Häm-Eisen</strong>
            <p>Zweiwertiges tierisches Häm-Eisen (Fe2+) wird zu ca. 15–35 % resorbiert. Pflanzliches Nicht-Häm-Eisen (Fe3+) zu ca. 2–15 %. Vitamin C reduziert Fe3+ zu Fe2+ und steigert die Resorption signifikant.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block mb-1">2. Phytinsäure abbauen</strong>
            <p>Vollkorn, Hülsenfrüchte und Nüsse enthalten Phytate, die Zink, Eisen und Magnesium im Darm binden. Einweichen, Keimen oder Sauerteigfermentation baut Phytate enzymatisch ab.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block mb-1">3. Fettlösliche Vitamine</strong>
            <p>Vitamin D3 ist fettlöslich und benötigt Speisefett (z. B. pflanzliches Öl, Nüsse, Milchfett) im Speisebrei, um über Gallensäuren und Mizellen resorbiert zu werden.</p>
          </div>
        </div>
      </section>

      {/* Detail-Leitfäden für spezifische Nährstoffe */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <UtensilsCrossed className="w-5 h-5 text-emerald-700" />
          <span>Spezifische Lebensmittel-Leitfäden &amp; Rezepte</span>
        </h2>
        <p className="text-xs text-slate-600">
          Detaillierte Nährwerttabellen mit Portionsgrößen, Resorptionsförderern und alltagstauglichen Rezeptkombinationen:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <a
            href="/ernaehrung/eisenreiche-lebensmittel"
            className="p-5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-colors flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">Ernährungs-Ratgeber</span>
              <h3 className="font-bold text-slate-900 text-sm mt-1">Eisenreiche Lebensmittel</h3>
              <p className="text-xs text-slate-600 mt-2">Top 10 Nahrungsmittel, tierisches vs. pflanzliches Eisen, Vitamin-C-Kombinationen.</p>
            </div>
            <span className="text-xs font-semibold text-emerald-700 mt-4 flex items-center gap-1">
              Zum Eisen-Leitfaden &rarr;
            </span>
          </a>

          <a
            href="/ernaehrung/vitamin-b12-lebensmittel"
            className="p-5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-colors flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">Ernährungs-Ratgeber</span>
              <h3 className="font-bold text-slate-900 text-sm mt-1">Vitamin-B12-Lebensmittel</h3>
              <p className="text-xs text-slate-600 mt-2">Cobalaminquellen in Fleisch, Fisch, Eiern und Milch. Warum pflanzliche Lebensmittel kein bioaktives B12 liefern.</p>
            </div>
            <span className="text-xs font-semibold text-emerald-700 mt-4 flex items-center gap-1">
              Zum B12-Leitfaden &rarr;
            </span>
          </a>

          <a
            href="/ernaehrung/magnesiumreiche-lebensmittel"
            className="p-5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-colors flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">Ernährungs-Ratgeber</span>
              <h3 className="font-bold text-slate-900 text-sm mt-1">Magnesiumreiche Lebensmittel</h3>
              <p className="text-xs text-slate-600 mt-2">Saaten, Nüsse, Vollkorn und Mineralwasser. Zubereitungstipps und Phytat-Reduktion.</p>
            </div>
            <span className="text-xs font-semibold text-emerald-700 mt-4 flex items-center gap-1">
              Zum Magnesium-Leitfaden &rarr;
            </span>
          </a>
        </div>
      </section>

      {/* Disclaimer */}
      <MedicalDisclaimer />

    </div>
  );
}
