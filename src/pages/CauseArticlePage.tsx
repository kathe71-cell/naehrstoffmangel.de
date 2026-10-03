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
  Stethoscope,
  CheckCircle2,
  GitBranch,
  FileText
} from 'lucide-react';
import { causeArticles } from '../data/causeArticles';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';

interface CauseArticlePageProps {
  customSlug?: string;
}

export default function CauseArticlePage({ customSlug }: CauseArticlePageProps) {
  const params = useParams();
  const slug = customSlug || params.slug;

  const article = causeArticles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/" replace />;
  }

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `https://www.nährstoffmangel.de/ursachen/${article.slug}#webpage`,
        url: `https://www.nährstoffmangel.de/ursachen/${article.slug}`,
        name: article.title,
        description: article.metaDescription,
        inLanguage: 'de-DE',
        lastReviewed: '2026-10-03',
        mainEntity: {
          '@type': 'MedicalCondition',
          name: article.title,
          possibleTreatment: [
            {
              '@type': 'MedicalTherapy',
              name: 'Individuelle ärztliche Bedarfsermittlung & zielgerichtete Prävention'
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
              { name: 'Ursachen & Risikogruppen', url: '/' },
              { name: article.title, url: `/ursachen/${article.slug}` }
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

          {/* Quick Summary Box */}
          <div className="mt-6 p-5 sm:p-6 bg-emerald-50/70 border-l-4 border-emerald-600 rounded-r-xl border-y border-r border-emerald-200/60 shadow-xs">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-950">
                  Zusammenfassung des Risikoprofils
                </h2>
                <p className="mt-2 text-slate-800 leading-relaxed font-normal text-base">
                  {article.shortSummary}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="text-slate-600 font-medium self-center">Betroffene Nährstoffe:</span>
                  {article.affectedNutrients.map((n, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-white border border-emerald-200 text-emerald-900 font-semibold" title={n.why}>
                      {n.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">

        {/* Section 1: Biologischer Mechanismus */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <GitBranch className="w-6 h-6 text-emerald-600" />
            Biologischer &amp; Physiologischer Mechanismus
          </h2>
          <ul className="mt-4 space-y-3 text-slate-700 leading-relaxed text-sm">
            {article.biologicalMechanism.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 2: Evidenz & Datenlage */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <FileText className="w-6 h-6 text-indigo-600" />
            Wissenschaftliche Evidenz &amp; Zahlen
          </h2>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {article.evidenceAndStats.map((ev, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm">
                <div className="font-bold text-emerald-800 text-base">{ev.stat}</div>
                <div className="text-xs text-slate-700 mt-1 leading-relaxed">{ev.context}</div>
                <div className="text-[11px] text-slate-400 mt-2 pt-2 border-t border-slate-200 font-mono">Quelle: {ev.source}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Diagnostische Schritte */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <Stethoscope className="w-6 h-6 text-emerald-600" />
            Empfohlene diagnostische Schritte
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Bei diesem Risikoprofil empfiehlt die Fachliteratur eine zielgerichtete Stufendiagnostik:
          </p>
          <ul className="mt-5 space-y-3">
            {article.diagnosticSteps.map((step, idx) => (
              <li 
                key={idx}
                className="flex items-start justify-between gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-sm"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">{step.test}</div>
                    <div className="text-xs text-slate-600 mt-0.5">{step.why}</div>
                  </div>
                </div>
                {step.url && (
                  <Link
                    to={step.url}
                    className="shrink-0 text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 self-center"
                  >
                    Details &rarr;
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Section 4: Handlungsoptionen / Prävention */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            Praktische Handlungsoptionen &amp; Prävention
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Evidenzbasierte Empfehlungen für Betroffene:
          </p>
          <ul className="mt-5 space-y-2.5">
            {article.actionSteps.map((act, idx) => (
              <li 
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-sm text-slate-800"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span>{act}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 5: Wann zum Arzt */}
        <section className="bg-amber-50/60 rounded-2xl p-6 sm:p-8 border border-amber-200/90 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <AlertCircle className="w-6 h-6 text-amber-700" />
            Wann ist ein Arztbesuch ratsam?
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 leading-relaxed">
            {article.whenToConsultDoctor.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 6: Verknüpfte Artikel */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Zugehöriges Nährstoffprofil &amp; Relevante Verweise
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

        {/* Section 7: Quellen / Literatur */}
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
