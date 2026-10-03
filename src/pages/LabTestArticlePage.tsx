import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  AlertCircle, 
  ArrowRight, 
  BookOpen, 
  Calendar, 
  TestTube2, 
  UserCheck, 
  ShieldCheck,
  ChevronRight,
  Info,
  Scale,
  Activity,
  Layers
} from 'lucide-react';
import { labTestArticles } from '../data/labTestArticles';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';

interface LabTestArticlePageProps {
  customSlug?: string;
}

export default function LabTestArticlePage({ customSlug }: LabTestArticlePageProps) {
  const params = useParams();
  const slug = customSlug || params.slug;

  const article = labTestArticles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/bluttest" replace />;
  }

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `https://www.nährstoffmangel.de/laborwerte/${article.slug}#webpage`,
        url: `https://www.nährstoffmangel.de/laborwerte/${article.slug}`,
        name: article.title,
        description: article.metaDescription,
        inLanguage: 'de-DE',
        lastReviewed: '2026-10-03',
        mainEntity: {
          '@type': 'MedicalTest',
          name: article.title,
          usedToDiagnose: [
            {
              '@type': 'MedicalCondition',
              name: `Mikronährstoffstatus / ${article.pillarNutrient.name}`
            }
          ]
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
              { name: 'Bluttest-Ratgeber', url: '/bluttest' },
              { name: article.title, url: `/laborwerte/${article.slug}` }
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
              Medizinische Redaktion
            </span>
          </div>

          <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {article.h1}
          </h1>

          {/* Quick Info Box */}
          <div className="mt-6 p-5 sm:p-6 bg-emerald-50/70 border-l-4 border-emerald-600 rounded-r-xl border-y border-r border-emerald-200/60 shadow-xs">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-950">
                  Was wird gemessen?
                </h2>
                <p className="mt-2 text-slate-800 leading-relaxed font-normal text-base">
                  {article.whatIsMeasured}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">

        {/* Section 1: Wofür eingesetzt */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <Activity className="w-6 h-6 text-emerald-600" />
            Klinischer Zweck &amp; Aussagekraft
          </h2>
          <div className="mt-4 text-slate-700 leading-relaxed space-y-4">
            <p>{article.purpose}</p>
          </div>
        </section>

        {/* Section 2: Referenz- und Entscheidungsbereiche (Tabelle) */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <Scale className="w-6 h-6 text-emerald-600" />
            Referenz- &amp; Entscheidungsbereiche
          </h2>
          <p className="mt-2 text-xs text-slate-600">
            * Hinweis: Referenzbereiche können laborspezifisch je nach Testmethode leicht abweichen. Die Interpretation gehört immer in den klinischen Kontext.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200 bg-slate-50/70 text-slate-800">
                  <th className="py-3 px-4 font-semibold">Gruppe / Kategorie</th>
                  <th className="py-3 px-4 font-semibold">Messbereich</th>
                  <th className="py-3 px-4 font-semibold">Anmerkung</th>
                  <th className="py-3 px-4 font-semibold text-xs">Quelle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {article.referenceRanges.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-medium text-slate-900">{row.group}</td>
                    <td className="py-3 px-4 font-mono font-semibold text-emerald-700">{row.range}</td>
                    <td className="py-3 px-4 text-slate-700 text-xs">{row.note || '–'}</td>
                    <td className="py-3 px-4 text-xs text-slate-600">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Grenzen des Markers */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <AlertCircle className="w-6 h-6 text-amber-600" />
            Grenzen des Parameters
          </h2>
          <ul className="mt-4 space-y-2 text-slate-700 leading-relaxed text-sm">
            {article.limitations.map((lim, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>{lim}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 4: Einflussfaktoren & Störgrößen */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <Layers className="w-6 h-6 text-indigo-600" />
            Wichtige Einflussfaktoren &amp; Störgrößen
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Folgende physiologische und pathologische Faktoren können den Messwert beeinflussen:
          </p>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {article.influencingFactors.map((inf, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm"
              >
                <div className="font-semibold text-slate-900">{inf.factor}</div>
                <div className="text-xs text-slate-700 mt-1"><strong className="text-slate-800">Effekt:</strong> {inf.effect}</div>
                <div className="text-xs text-slate-600 mt-1"><strong className="text-slate-800">Klinische Relevanz:</strong> {inf.clinicalRelevance}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Sinnvolle Kombinationen */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <TestTube2 className="w-6 h-6 text-emerald-600" />
            Sinnvolle Kombination mit weiteren Markern
          </h2>
          <div className="mt-5 space-y-3">
            {article.markerCombinations.map((comb, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm">
                <div className="font-bold text-slate-900 text-sm">{comb.marker}</div>
                <div className="text-xs text-slate-700 mt-1 leading-relaxed">{comb.rationale}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Wann ärztlich abklären */}
        <section className="bg-amber-50/60 rounded-2xl p-6 sm:p-8 border border-amber-200/90 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <AlertCircle className="w-6 h-6 text-amber-700" />
            Wann ist eine ärztliche Rücksprache ratsam?
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 leading-relaxed">
            {article.whenToSeeDoctor.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 7: Verlinkung zum Pillar & Vertiefung */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Zugehöriges Nährstoffprofil &amp; Verwandte Artikel
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              to={article.pillarNutrient.slug}
              className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50 transition-colors flex items-center justify-between"
            >
              <div>
                <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">Haupt-Pillar</span>
                <div className="text-sm font-semibold text-slate-900">{article.pillarNutrient.name} Leitfaden</div>
              </div>
              <ChevronRight className="w-5 h-5 text-emerald-600" />
            </Link>

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

        {/* Section 8: Quellen / Literatur */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            Wissenschaftliche Quellen &amp; Leitlinien
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
