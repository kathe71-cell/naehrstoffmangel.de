import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Search, 
  Check, 
  ArrowRight, 
  RotateCcw, 
  AlertCircle, 
  ShieldCheck,
  ChevronRight,
  Filter
} from 'lucide-react';
import { symptomsList } from '../data/symptoms';
import { deficiencies } from '../data/deficiencies';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import BloodTestCta from '../components/BloodTestCta';

export default function SymptomNavigatorPage() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');

  const categories = ['Alle', 'Energie & Wohlbefinden', 'Kopf & Nerven', 'Muskeln & Knochen', 'Haut & Haare', 'Immunsystem & Verdauung'];

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const clearSelection = () => {
    setSelectedSymptoms([]);
  };

  const filteredSymptoms = useMemo(() => {
    if (selectedCategory === 'Alle') return symptomsList;
    return symptomsList.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  // Calculate matching scores for each deficiency
  const results = useMemo(() => {
    if (selectedSymptoms.length === 0) return [];

    const scores: Record<string, { count: number; highCount: number; matchedSymptoms: string[] }> = {};

    selectedSymptoms.forEach((symId) => {
      const symObj = symptomsList.find((s) => s.id === symId);
      if (!symObj) return;

      symObj.relatedDeficiencies.forEach((rel) => {
        if (!scores[rel.slug]) {
          scores[rel.slug] = { count: 0, highCount: 0, matchedSymptoms: [] };
        }
        const weight = rel.relevance === 'Sehr hoch' ? 3 : rel.relevance === 'Mittel' ? 2 : 1;
        scores[rel.slug].count += weight;
        if (rel.relevance === 'Sehr hoch') {
          scores[rel.slug].highCount += 1;
        }
        scores[rel.slug].matchedSymptoms.push(symObj.name);
      });
    });

    const sortedSlugs = Object.keys(scores).sort(
      (a, b) => scores[b].count - scores[a].count
    );

    return sortedSlugs.map((slug) => {
      const def = deficiencies.find((d) => d.slug === slug);
      const scoreData = scores[slug];
      return {
        def,
        score: scoreData.count,
        highCount: scoreData.highCount,
        matchedSymptoms: scoreData.matchedSymptoms
      };
    }).filter((r) => r.def !== undefined);
  }, [selectedSymptoms]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Symptom-Navigator', url: '/symptome' }]} />

      {/* Header */}
      <header className="space-y-4 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <Activity className="w-3.5 h-3.5" />
          <span>Interaktive Orientierungshilfe</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Symptom-Navigator: Fachliteratur-Zuordnung von Beschwerden
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
          Der Navigator zeigt, mit welchen Nährstoffmängeln ausgewählte Symptome in der Fachliteratur in Verbindung gebracht werden. Die Ergebnisse sind keine Diagnose und erlauben keine Aussage darüber, wie wahrscheinlich ein bestimmter Mangel vorliegt.
        </p>

        {/* Warning signs & Differential diagnosis note */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-xs sm:text-sm text-amber-950 space-y-2 mt-4">
          <div className="flex items-center gap-2 font-bold text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Wichtiger medizinischer Hinweis zu unspezifischen Symptomen</span>
          </div>
          <p className="leading-relaxed text-slate-700">
            Symptome wie Müdigkeit, Kopfschmerzen, Schlafstörungen oder diffuse Missempfindungen sind unspezifisch und können Begleiterscheinungen vielfältiger anderer Ursachen sein (z. B. Infektionen, chronischer Schlafmangel, Schilddrüsenfunktionsstörungen, Herz-Kreislauf-Erkrankungen oder seelische Belastungen).
          </p>
          <p className="leading-relaxed font-semibold text-amber-950">
            Warnsymptome wie akute Atemnot, neu aufgetretene Brustschmerzen, plötzliche Lähmungs- oder Sprachstörungen, anhaltendes Fieber, schwarzer Stuhl oder rapider Gewichtsverlust erfordern eine umgehende ärztliche Untersuchung.
          </p>
        </div>
      </header>

      {/* Step 1: Category Filter & Symptoms Selection */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              1. Wählen Sie Ihre Symptome aus
            </h2>
            <p className="text-xs text-slate-500">
              Mehrfachauswahl möglich ({selectedSymptoms.length} gewählt)
            </p>
          </div>

          {selectedSymptoms.length > 0 && (
            <button
              onClick={clearSelection}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors self-start sm:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Auswahl zurücksetzen</span>
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors min-h-[38px] ${
                selectedCategory === cat
                  ? 'bg-emerald-800 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Symptoms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredSymptoms.map((sym) => {
            const isSelected = selectedSymptoms.includes(sym.id);
            return (
              <button
                key={sym.id}
                onClick={() => toggleSymptom(sym.id)}
                className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all duration-150 min-h-[54px] ${
                  isSelected
                    ? 'bg-emerald-50 border-emerald-500 shadow-2xs'
                    : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 border ${
                    isSelected
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 leading-snug">
                    {sym.name}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                    {sym.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Step 2: Live Analysis Results */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            2. Thematische Zuordnung &amp; Fachliteratur-Relevanz
          </h2>
          <p className="text-sm text-slate-600">
            Basierend auf {selectedSymptoms.length} ausgewählten Symptomen (Reihenfolge nach redaktioneller Häufigkeit in der Fachliteratur – keine diagnostische Wahrscheinlichkeitsaussage):
          </p>
        </div>

        {selectedSymptoms.length === 0 ? (
          <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-8 text-center text-slate-500">
            <Search className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="font-medium text-slate-700">Noch keine Symptome ausgewählt.</p>
            <p className="text-xs mt-1">Klicken Sie oben auf mindestens ein Symptom, um die Auswertung zu starten.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {results.map(({ def, score, highCount, matchedSymptoms }, idx) => {
              if (!def) return null;
              const isTopMatch = idx === 0;

              return (
                <div
                  key={def.slug}
                  className={`p-6 rounded-2xl border transition-all ${
                    isTopMatch
                      ? 'bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500/20'
                      : 'bg-white border-slate-200 shadow-2xs'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        isTopMatch ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                      }`}>
                        #{idx + 1}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {def.name}
                        </h3>
                        <span className="text-xs text-slate-500 font-medium">
                          Kategorie: {def.category} · Biomarker: {def.testBiomarker}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                        Relevanz-Rang #{idx + 1}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mb-4">
                    {def.subTitle}
                  </p>

                  <div className="bg-slate-50 rounded-xl p-3.5 mb-4 text-xs text-slate-700">
                    <strong className="text-slate-900 block mb-1">
                      Passende Symptome ({matchedSymptoms.length}):
                    </strong>
                    <div className="flex flex-wrap gap-1.5">
                      {matchedSymptoms.map((m, mIdx) => (
                        <span
                          key={mIdx}
                          className="bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-800"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-slate-100">
                    <span className="text-xs text-slate-500">
                      Referenz-/Zielbereich: <strong className="text-slate-800">{def.optimalRange}</strong>
                    </span>

                    <Link
                      to={def.slug}
                      className="inline-flex items-center justify-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors min-h-[44px]"
                    >
                      <span>Leitfaden zu {def.name} lesen</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>


      {/* Blood Test CTA */}
      <BloodTestCta />

      {/* Disclaimer */}
      <MedicalDisclaimer />

    </div>
  );
}
