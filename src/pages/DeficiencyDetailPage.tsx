import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  AlertCircle, 
  Activity, 
  ChevronDown, 
  UtensilsCrossed, 
  Pill, 
  ShieldAlert, 
  Share2, 
  Copy, 
  Check, 
  ArrowRight,
  BookOpen,
  Calendar,
  UserCheck
} from 'lucide-react';
import { deficiencies } from '../data/deficiencies';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import BloodTestCta from '../components/BloodTestCta';


interface DeficiencyDetailPageProps {
  customSlug?: string;
}

export default function DeficiencyDetailPage({ customSlug }: DeficiencyDetailPageProps) {
  const params = useParams();
  const slug = customSlug || params.slug;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copiedCitation, setCopiedCitation] = useState(false);

  const data = deficiencies.find((d) => d.slug === slug);

  if (!data) {
    return <Navigate to="/" replace />;
  }

  // Schema.org MedicalCondition + FAQPage
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalCondition',
        '@id': `https://www.nährstoffmangel.de/${data.slug}#condition`,
        name: data.name,
        description: data.metaDescription,
        possibleTreatment: [
          {
            '@type': 'MedicalTherapy',
            name: 'Gezielte Ernährungsumstellung und ärztlich begleitete Nahrungsergänzung'
          }
        ],
        signOrSymptom: data.symptoms.primary.map((s) => ({
          '@type': 'MedicalSymptom',
          name: s
        })),
        riskFactor: data.riskGroups.map((r) => ({
          '@type': 'MedicalRiskFactor',
          name: `${r.group}: ${r.reason}`
        }))
      },
      {
        '@type': 'FAQPage',
        '@id': `https://www.nährstoffmangel.de/${data.slug}#faq`,
        mainEntity: data.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer
          }
        }))
      }
    ]
  };

  const citationText = `nährstoffmangel.de Fachredaktion (2026). ${data.name} – Symptome, Ursachen und evidenzbasierte Hilfe. Online unter: https://www.nährstoffmangel.de/${data.slug} (Stand: September 2026).`;

  const handleCopyCitation = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(citationText);
      setCopiedCitation(true);
      setTimeout(() => setCopiedCitation(false), 2500);
    }
  };

  const isVitamin = ['vitamin-d-mangel', 'vitamin-b12-mangel', 'folsaeuremangel'].includes(data.slug);
  const breadcrumbItems = isVitamin
    ? [{ name: 'Vitaminmangel', url: '/vitaminmangel' }, { name: data.name, url: `/${data.slug}` }]
    : [{ name: data.name, url: `/${data.slug}` }];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10">
      
      {/* Dynamic Schema.org script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs items={breadcrumbItems} />

      {isVitamin && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm text-emerald-950">
          <div>
            <strong>Themen-Hub:</strong> Dieser Leitfaden ist Teil unseres Schwerpunkts <strong>Vitaminmangel</strong>.
          </div>
          <Link to="/vitaminmangel" className="font-bold text-emerald-800 hover:text-emerald-950 hover:underline shrink-0">
            Zum Vitaminmangel-Hub →
          </Link>
        </div>
      )}

      {/* Header Section */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
            {data.category}
          </span>
          <span className="text-xs text-slate-500 font-mono">
            DGE-Referenzwert: {data.dailyRequirement}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          {data.seoH1 || `${data.name} – Symptome, Ursachen und was du tun kannst`}
        </h1>

        <p className="text-lg text-emerald-800 font-medium">
          {data.subTitle}
        </p>

        {/* Editorial Metadata Strip */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
          <span className="flex items-center gap-1">
            <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
            Wissenschaftliche Fachredaktion
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
            Aktualisiert: September 2026
          </span>
          <span className="flex items-center gap-1 font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded">
            Biomarker: {data.testBiomarker}
          </span>
        </div>
      </header>

      {/* Intro Box & Reference Values */}
      <section className="space-y-6">
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
          {data.intro}
        </p>

        {/* Lab Benchmark Panel */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <span className="text-xs text-slate-500 uppercase font-bold tracking-wider block mb-1">
              Entscheidender Labormarker
            </span>
            <span className="text-base sm:text-lg font-bold text-slate-900">
              {data.testBiomarker}
            </span>
          </div>
          <div>
            <span className="text-xs text-slate-500 uppercase font-bold tracking-wider block mb-1">
              Angestrebter Zielbereich
            </span>
            <span className="text-base sm:text-lg font-bold text-emerald-800">
              {data.optimalRange}
            </span>
          </div>
        </div>
      </section>

      {/* Was ist [Name]? */}
      <section aria-labelledby="what-is-heading" className="space-y-4">
        <h2 id="what-is-heading" className="text-2xl font-bold text-slate-900 tracking-tight">
          Was ist {data.name}?
        </h2>
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
          {data.whatIsIt.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </section>


      {/* Häufige Symptome (Strukturierte Liste für Rich Snippets) */}
      <section aria-labelledby="symptoms-heading" className="space-y-4">
        <h2 id="symptoms-heading" className="text-2xl font-bold text-slate-900 tracking-tight">
          Häufige Symptome bei {data.name}
        </h2>
        <p className="text-sm text-slate-600">
          Ein Mangel äußert sich selten schlagartig, sondern schleicht sich über Wochen oder Monate ein. Die Symptome reichen von unspezifischer Erschöpfung bis zu funktionellen Gewebeschäden.
        </p>

        {/* Primary Symptoms */}
        <div className="bg-white border border-emerald-200 rounded-2xl p-5 sm:p-6 shadow-xs">
          <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-600" />
            <span>Klassische Leitsymptome (Frühphase &amp; Manifestation)</span>
          </h3>
          <ul className="space-y-2.5">
            {data.symptoms.primary.map((sym, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{sym}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Secondary Symptoms */}
        {data.symptoms.secondary.length > 0 && (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-slate-500" />
              <span>Weitere &amp; fortgeschrittene Symptome</span>
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {data.symptoms.secondary.map((sym, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2" />
                  <span>{sym}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Ursachen */}
      <section aria-labelledby="causes-heading" className="space-y-4">
        <h2 id="causes-heading" className="text-2xl font-bold text-slate-900 tracking-tight">
          Ursachen: Wie entsteht {data.name}?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(data as any).causesList?.map((cause: any, idx: number) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {cause.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {cause.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Risikogruppen */}
      <section aria-labelledby="riskgroups-heading" className="space-y-4">
        <h2 id="riskgroups-heading" className="text-2xl font-bold text-slate-900 tracking-tight">
          Wer ist besonders gefährdet? (Risikogruppen)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse bg-white rounded-xl overflow-hidden border border-slate-200">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <th className="p-3.5">Risikogruppe</th>
                <th className="p-3.5">Physiologischer Grund</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data.riskGroups.map((rg, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900">{rg.group}</td>
                  <td className="p-3.5 text-slate-600">{rg.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Blood Test CTA Box */}
      <BloodTestCta nutrientName={data.name} />

      {/* Was hilft? (Ernährung + Nahrungsergänzung) */}
      <section aria-labelledby="treatment-heading" className="space-y-6">
        <h2 id="treatment-heading" className="text-2xl font-bold text-slate-900 tracking-tight">
          Was hilft gegen {data.name}?
        </h2>

        {/* Dietary Sources Table */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <UtensilsCrossed className="w-5 h-5 text-emerald-700" />
            <h3 className="text-lg font-bold text-slate-900">
              Top-Lebensmittel mit hohem Gehalt
            </h3>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            Integrieren Sie diese Quellen bevorzugt in Ihre tägliche Ernährung, um den DGE-Tagesbedarf von {data.dailyRequirement} zu erreichen:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {data.dietarySources.map((food, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-slate-100 bg-slate-50 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-500">
                    {food.vegan ? '🌱 Pflanzlich' : '🐟 Tierisch'}
                  </div>
                  <div className="font-bold text-slate-900 text-sm mt-0.5">
                    {food.food}
                  </div>
                </div>
                <div className="text-xs font-bold text-emerald-800 font-mono mt-2 pt-2 border-t border-slate-200">
                  {food.amount}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-right">
            <Link to="/ernaehrung" className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1">
              <span>Zur vollständigen Nährstoff-Tabelle</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Nutritional & Bioavailability Tips */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <UtensilsCrossed className="w-4 h-4 text-emerald-700" />
            <span>Ernährungstipps zur optimalen Bioverfügbarkeit</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            {data.treatmentInfo.dietTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Supplement Tips */}
        <div className="bg-white border border-emerald-200 rounded-2xl p-6 space-y-4 shadow-xs">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Pill className="w-4 h-4 text-emerald-700" />
            <span>Leitfaden zur Nahrungsergänzung</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            {data.treatmentInfo.supplementTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>

          {data.treatmentInfo.interactions.length > 0 && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 mt-2">
              <strong>Wechselwirkungen &amp; Einnahmeabstand:</strong> {data.treatmentInfo.interactions.join(' ')}
            </div>
          )}
        </div>
      </section>




      {/* FAQ-Block (3-5 Fragen, Schema.org FAQPage) */}
      <section aria-labelledby="faq-detail-heading" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <h2 id="faq-detail-heading" className="text-2xl font-bold text-slate-900 tracking-tight mb-6">
          Häufig gestellte Fragen zu {data.name}
        </h2>

        <div className="divide-y divide-slate-200">
          {data.faqs.map((f, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className="py-4">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left gap-4 py-2 font-bold text-slate-900 hover:text-emerald-700 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{f.question}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-700' : ''}`} />
                </button>

                {isOpen && (
                  <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pr-6">
                    {f.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Long-Tail FAQ: Search-Intent-optimierte Zusatzfragen */}
      {data.faqLongTail && data.faqLongTail.length > 0 && (
        <section aria-labelledby="faq-longtail-heading" className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8">
          <h2 id="faq-longtail-heading" className="text-xl font-bold text-slate-900 tracking-tight mb-2 flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-700" />
            Detailfragen – häufig gesucht
          </h2>
          <p className="text-xs text-slate-500 mb-6">Antworten auf konkrete Suchanfragen, die Betroffene am häufigsten stellen</p>
          <div className="space-y-5">
            {data.faqLongTail.map((f, i) => (
              <div key={i} className="bg-white rounded-xl border border-emerald-100 p-5 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base mb-2 leading-snug">{f.question}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Keyword-Cluster: Semantische Signale für Googlebot */}
      {data.longTailKeywords && data.longTailKeywords.length > 0 && (
        <section aria-label="Verwandte Suchbegriffe" className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Häufig gesuchte Begriffe zu {data.name}</h3>
          <div className="flex flex-wrap gap-2">
            {data.longTailKeywords.map((kw, i) => (
              <span
                key={i}
                className={`text-xs px-3 py-1.5 rounded-full font-medium border ${
                  kw.searchIntent === 'commercial'
                    ? 'bg-amber-50 text-amber-900 border-amber-200'
                    : 'bg-white text-slate-700 border-slate-200'
                }`}
                title={`Suchvolumen: ${kw.monthlySearches}`}
              >
                {kw.keyword}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-slate-400 mt-3">
            Goldene Labels = Kaufabsicht-Suchen · Weiße Labels = Informationssuchen
          </p>
        </section>
      )}

      {/* Zitations-Box (APA-Format) */}
      <section className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs text-slate-600">
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            Artikel zitieren (APA)
          </span>
          <button
            onClick={handleCopyCitation}
            className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-bold bg-white px-2.5 py-1 rounded border border-slate-200 shadow-2xs transition-colors"
          >
            {copiedCitation ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Kopiert!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Zitiertext kopieren</span>
              </>
            )}
          </button>
        </div>
        <p className="font-mono bg-white p-2.5 rounded border border-slate-200 select-all text-[11px]">
          {citationText}
        </p>
      </section>

      {/* Mandatory Medical Disclaimer */}
      <MedicalDisclaimer />

      {/* Internal Navigation to Other Deficiencies */}
      <nav aria-label="Weitere Nährstoffmängel" className="pt-6 border-t border-slate-200">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
          Weitere Nährstoff-Leitfäden
        </div>
        <div className="flex flex-wrap gap-2">
          {deficiencies.filter(d => d.slug !== data.slug).map((d) => (
            <Link
              key={d.slug}
              to={`/${d.slug}`}
              className="text-xs font-semibold px-3 py-2 rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200 transition-colors"
            >
              {d.name} &rarr;
            </Link>
          ))}
        </div>
      </nav>

    </article>
  );
}
