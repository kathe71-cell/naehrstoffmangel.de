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
import AdSenseBanner from '../components/AdSenseBanner';

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
                    <div className="flex items-center gap-2">
                      <span>{food.name}</span>
                      {food.vegan && (
                        <span className="text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded border border-emerald-200 font-normal">
                          Vegan
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-slate-500 text-xs">{food.category}</td>
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
                  </td>
                  <td className="p-4 text-slate-600 text-xs max-w-xs hidden md:table-cell">
                    {food.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* AdSense Unit */}
      <AdSenseBanner slotId="nutrition-table-bottom" />

      {/* Bioavailability Guide Box */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-emerald-700" />
          <span>Bioverfügbarkeit: Warum der reine Tabellenwert täuschen kann</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block mb-1">1. Häm- vs. Nicht-Häm-Eisen</strong>
            <p>Tierisches Eisen (Fe2+) wird zu 15–35 % resorbiert. Pflanzliches Eisen (Fe3+) nur zu 2–15 %. Ein Glas Orangensaft verdreifacht die pflanzliche Quote.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block mb-1">2. Phytinsäure abbauen</strong>
            <p>Vollkorn, Hülsenfrüchte und Nüsse enthalten Phytate, die Zink, Eisen und Magnesium binden. Einweichen, Keimen oder Sauerteigfermentation spaltet Phytate auf.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block mb-1">3. Fettlösliche Vitamine</strong>
            <p>Vitamin D3 benötigt zwingend etwas Speisefett (z. B. Olivenöl, Nüsse, Avocado) im Verdauungsbrei, um über Mizellen aufgenommen zu werden.</p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <MedicalDisclaimer />

    </div>
  );
}
