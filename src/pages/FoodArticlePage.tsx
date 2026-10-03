import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  AlertCircle, 
  ArrowRight, 
  BookOpen, 
  Calendar, 
  UserCheck, 
  ShieldCheck,
  ChevronRight,
  Info,
  Utensils,
  Sparkles,
  Ban,
  Scale
} from 'lucide-react';
import { foodArticles } from '../data/foodArticles';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';

interface FoodArticlePageProps {
  customSlug?: string;
}

export default function FoodArticlePage({ customSlug }: FoodArticlePageProps) {
  const params = useParams();
  const slug = customSlug || params.slug;

  const article = foodArticles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/ernaehrung" replace />;
  }

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `https://www.nährstoffmangel.de/ernaehrung/${article.slug}#webpage`,
        url: `https://www.nährstoffmangel.de/ernaehrung/${article.slug}`,
        name: article.metaTitle,
        description: article.metaDescription,
        inLanguage: 'de-DE',
        lastReviewed: '2026-10-03',
        mainEntity: {
          '@type': 'Diet',
          name: article.nutrient,
          description: article.intro
        }
      }
    ]
  };

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Header & Meta */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumbs
            items={[
              { name: 'Ernährungs-Ratgeber', url: '/ernaehrung' },
              { name: `${article.nutrient}-Lebensmittel`, url: `/ernaehrung/${article.slug}` }
            ]}
          />

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Evidenzgeprüft
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Stand: {article.lastUpdated}
            </span>
            <span className="flex items-center gap-1">
              <UserCheck className="w-3.5 h-3.5" />
              Ernährungswissenschaftliche Redaktion
            </span>
          </div>

          <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {article.h1}
          </h1>

          {/* Quick Intro Box */}
          <div className="mt-6 p-5 sm:p-6 bg-emerald-50/70 border-l-4 border-emerald-600 rounded-r-xl border-y border-r border-emerald-200/60 shadow-xs">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-950">
                  Ernährungsphysiologische Grundlagen
                </h2>
                <p className="mt-2 text-slate-800 leading-relaxed font-normal text-base">
                  {article.intro}
                </p>
                <div className="mt-4 p-3 rounded-lg bg-white border border-emerald-200 text-xs text-slate-700">
                  <strong className="text-slate-900">DGE-Referenzwerte für die tägliche Zufuhr:</strong>{' '}
                  {article.dgeRequirementSummary}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">

        {/* Section 1: Lebensmittel-Tabelle */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <div className="flex items-baseline justify-between border-b border-slate-100 pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <Utensils className="w-6 h-6 text-emerald-600" />
              Die besten {article.nutrient}-Quellen im Vergleich
            </h2>
            <span className="text-xs text-slate-600 font-medium hidden sm:inline">
              Basis: Bundeslebensmittelschlüssel (BLS 3.02)
            </span>
          </div>

          <p className="mt-4 text-xs text-slate-600">
            Angaben bezogen auf 100 g verzehrbaren Anteil sowie typische Verzehrmengen im Alltag.
          </p>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200 bg-slate-50/70 text-slate-800">
                  <th className="py-3 px-4 font-semibold">Lebensmittel</th>
                  <th className="py-3 px-4 font-semibold">Kategorie</th>
                  <th className="py-3 px-4 font-semibold">Gehalt pro 100 g</th>
                  <th className="py-3 px-4 font-semibold">Typische Portion</th>
                  <th className="py-3 px-4 font-semibold">Ernährungshinweis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {article.topFoods.map((food, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-semibold text-slate-900">{food.name}</td>
                    <td className="py-3 px-4 text-slate-600 text-xs">{food.category}</td>
                    <td className="py-3 px-4 font-mono font-bold text-emerald-700">{food.amount}</td>
                    <td className="py-3 px-4 text-slate-700 text-xs">{food.portionNote}</td>
                    <td className="py-3 px-4 text-slate-600 text-xs">{food.tip || '–'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Bioverfügbarkeit: Förderer & Hemmer */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <Scale className="w-6 h-6 text-indigo-600" />
            Bioverfügbarkeit: Aufnahme gezielt optimieren
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Nicht die reine Nährstoffmenge im Lebensmittel entscheidet, sondern wie viel der Körper tatsächlich absorbieren kann. Bestimmte Begleitstoffe fördern oder hemmen die Resorption maßgeblich.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Enhancers */}
            <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/40">
              <div className="flex items-center gap-2 text-emerald-900 font-bold mb-3">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                Resorptionsförderer (Synergisten)
              </div>
              <ul className="space-y-2.5">
                {article.bioavailabilityFactors.enhancers.map((enh, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-800 leading-relaxed">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span>{enh}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inhibitors */}
            <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/40">
              <div className="flex items-center gap-2 text-amber-900 font-bold mb-3">
                <Ban className="w-5 h-5 text-amber-600" />
                Resorptionshemmer (Antagonisten)
              </div>
              <ul className="space-y-2.5">
                {article.bioavailabilityFactors.inhibitors.map((inh, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-800 leading-relaxed">
                    <span className="text-amber-700 font-bold">✗</span>
                    <span>{inh}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Praktische Rezeptideen */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <Utensils className="w-6 h-6 text-emerald-600" />
            Praxisnahe Rezeptideen für den Alltag
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Einfache Kombinationen, die eine hohe Nährstoffdichte und gute Bioverfügbarkeit verbinden:
          </p>
          <ul className="mt-5 space-y-3">
            {article.practicalMealIdeas.map((meal, idx) => (
              <li 
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-emerald-50/30 transition-colors text-sm text-slate-800 flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span>{meal}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 4: Grenzen der Ernährung */}
        <section className="bg-amber-50/60 rounded-2xl p-6 sm:p-8 border border-amber-200/90 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <AlertCircle className="w-6 h-6 text-amber-700" />
            Grenzen der rein ernährungsbasierten Versorgung
          </h2>
          <p className="mt-3 text-sm text-slate-700 leading-relaxed">
            {article.whenFoodIsNotEnough}
          </p>
        </section>

        {/* Section 5: Verknüpfte Artikel & Pillars */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Zugehöriges Nährstoffprofil &amp; Verwandte Artikel
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              to={article.nutrientSlug}
              className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50 transition-colors flex items-center justify-between"
            >
              <div>
                <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">Haupt-Pillar</span>
                <div className="text-sm font-semibold text-slate-900">{article.nutrient} Leitfaden</div>
              </div>
              <ChevronRight className="w-5 h-5 text-emerald-600" />
            </Link>

            {article.relatedLabTest && (
              <Link
                to={article.relatedLabTest.url}
                className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/30 transition-all flex items-center justify-between"
              >
                <div>
                  <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">Passender Bluttest</span>
                  <div className="text-sm font-semibold text-slate-900">{article.relatedLabTest.name}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            )}

            {article.relatedArticles.map((link, idx) => (
              <Link
                key={idx}
                to={link.url}
                className="group p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/30 transition-all flex items-center justify-between"
              >
                <div>
                  <span className="text-sm font-medium text-slate-800 group-hover:text-emerald-800 block">
                    {link.title}
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5 block">
                    {link.description}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-transform group-hover:translate-x-0.5 shrink-0 ml-3" />
              </Link>
            ))}
          </div>
        </section>

        {/* Section 6: Quellen / Literatur */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            Wissenschaftliche Quellen &amp; Tabellenwerke
          </h2>
          <ol className="space-y-3 text-xs text-slate-600 list-decimal list-inside leading-relaxed">
            {article.sources.map((src, idx) => (
              <li key={idx} className="pl-1">
                <span className="text-slate-800">{src.citation}</span>
                {src.url && (
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-emerald-700 hover:underline"
                  >
                    [Quelle]
                  </a>
                )}
              </li>
            ))}
          </ol>
        </section>

        {/* Disclaimer */}
        <MedicalDisclaimer />

      </div>
    </article>
  );
}
