import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  AlertCircle, 
  ArrowRight, 
  BookOpen, 
  Calendar, 
  HelpCircle, 
  Stethoscope, 
  TestTube2, 
  UserCheck, 
  ShieldCheck,
  ChevronRight,
  Info
} from 'lucide-react';
import { symptomArticles } from '../data/symptomArticles';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';

interface SymptomArticlePageProps {
  customSlug?: string;
}

export default function SymptomArticlePage({ customSlug }: SymptomArticlePageProps) {
  const params = useParams();
  const slug = customSlug || params.slug;

  const article = symptomArticles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/symptome" replace />;
  }

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `https://www.nährstoffmangel.de/symptome/${article.slug}#webpage`,
        url: `https://www.nährstoffmangel.de/symptome/${article.slug}`,
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
              name: 'Ärztliche Abklärung & evidenzbasierte Behandlung der Grunderkrankung'
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
              { name: 'Symptom-Navigator', url: '/symptome' },
              { name: article.title, url: `/symptome/${article.slug}` }
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

          {/* Quick Answer Box */}
          <div className="mt-6 p-5 sm:p-6 bg-emerald-50/70 border-l-4 border-emerald-600 rounded-r-xl border-y border-r border-emerald-200/60 shadow-xs">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-950">
                  Kurzantwort &amp; Medizinische Einordnung
                </h2>
                <p className="mt-2 text-slate-800 leading-relaxed font-normal text-base">
                  {article.shortAnswer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">

        {/* Section 1: Warum unspezifisch? */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <HelpCircle className="w-6 h-6 text-emerald-600" />
            Warum dieses Symptom unspezifisch ist
          </h2>
          <div className="mt-4 text-slate-700 leading-relaxed space-y-4">
            <p>{article.whyUnspecific}</p>
          </div>
        </section>

        {/* Section 2: Relevante Nährstoffdefizite */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <div className="flex items-baseline justify-between border-b border-slate-100 pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <TestTube2 className="w-6 h-6 text-emerald-600" />
              Mögliche Nährstoffdefizite
            </h2>
            <span className="text-xs text-slate-600 font-medium hidden sm:inline">
              Evidenzbasierte Assoziationen
            </span>
          </div>

          <p className="mt-4 text-sm text-slate-600">
            In der Fachliteratur werden bei den Beschwerden unter anderem folgende Mikronährstoffe und Stoffwechselpfade diskutiert:
          </p>

          <div className="mt-6 space-y-4">
            {article.associatedDeficiencies.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base text-slate-900">
                      {item.name}
                    </h3>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 font-medium">
                      {item.relevance}
                    </span>
                  </div>
                  <Link
                    to={item.slug}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    Zum Nährstoff-Profil
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  {item.pathomechanism}
                </p>
                <div className="mt-2 text-xs text-slate-500 font-medium">
                  Relevanter Marker: <span className="text-slate-800">{item.labMarker}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Wichtige Differentialdiagnosen */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <Stethoscope className="w-6 h-6 text-indigo-600" />
            Relevante andere Ursachen (Differentialdiagnostik)
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Nährstoffmängel sind nur eine von vielen möglichen Erklärungen. Folgende organische oder funktionelle Ursachen kommen differentialdiagnostisch ebenfalls in Betracht:
          </p>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {article.differentialDiagnoses.map((diff, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700"
              >
                <div className="font-semibold text-slate-900 text-xs sm:text-sm">{diff.condition}</div>
                <div className="text-xs text-slate-600 mt-1 leading-relaxed">{diff.explanation}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Wann zum Arzt & Red Flags */}
        <section className="bg-amber-50/60 rounded-2xl p-6 sm:p-8 border border-amber-200/90 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <AlertCircle className="w-6 h-6 text-amber-700" />
            Wann ist eine ärztliche Abklärung ratsam?
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 leading-relaxed">
            {article.whenToSeeDoctor.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {article.redFlags.length > 0 && (
            <div className="mt-5 pt-4 border-t border-amber-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
                Warnsignale („Red Flags“) für eine zeitnahe ärztliche Konsultation:
              </h3>
              <ul className="space-y-1.5">
                {article.redFlags.map((flag, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-amber-950 font-medium">
                    <span className="text-amber-700 font-bold">!</span>
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Section 5: Relevante Laborwerte */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <TestTube2 className="w-6 h-6 text-emerald-600" />
            Welche Laborparameter kommen infrage?
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Je nach klinischem Verdacht können folgende Laborwerte im Blut oder Urin diagnostische Hinweise liefern:
          </p>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {article.relevantLabTests.map((lab, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-emerald-50/40 transition-colors"
              >
                <div className="font-semibold text-sm text-slate-900">
                  {lab.name}
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  {lab.description}
                </div>
                {lab.url && (
                  <Link
                    to={lab.url}
                    className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-emerald-700 hover:text-emerald-800"
                  >
                    Labordetails lesen
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Weiterführende Fachartikel */}
        {article.relatedArticles.length > 0 && (
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 mb-4">
              Vertiefende Artikel &amp; Querverweise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
        )}

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
