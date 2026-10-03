import { Activity, ArrowRight, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AffiliateLink, AffiliateDisclosure, useActiveProduct } from '@plattform/core';

interface BloodTestCtaProps {
  nutrientName?: string;
  /** Produkt-ID aus products.ts; ohne ID → interner Link auf /bluttest, ohne Werbekennzeichnung */
  productId?: string;
  className?: string;
  testLink?: {
    url: string;
    label: string;
  };
}

const primaryBtn = 'inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl min-h-[48px] shadow-sm hover:shadow-md transition-all duration-200 active:scale-98 text-sm';

export default function BloodTestCta({ nutrientName, productId, className = '', testLink }: BloodTestCtaProps) {
  const product = useActiveProduct(productId);
  const hasDirectTestLink = Boolean(testLink && testLink.url);

  return (
    <section aria-labelledby="blood-test-cta-title" className={`bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden ${className}`}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-400/30">
          <Activity className="w-3.5 h-3.5" />
          <span>Sicherheit durch Diagnostik</span>
        </div>

        <h3 id="blood-test-cta-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
          {nutrientName ? `${nutrientName}-Status im Blut überprüfen` : 'Nährstoffstatus verlässlich im Blut testen'}
        </h3>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
          Nahrungsergänzungsmittel sollten nicht auf bloßen Verdacht eingenommen werden. Eine gezielte Laboruntersuchung (in der Hausarztpraxis oder über einen zertifizierten Kapillarblut-Heimtest) kann Ihnen verlässliche laborchemische Hinweise auf Ihren tatsächlichen Nährstoffstatus liefern.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-emerald-200 mb-6">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Laborbasierte Analyse</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Akkreditiertes Fachlabor</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Detaillierter Laborbericht</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {product ? (
            <>
              <AffiliateLink id={product.id} className={primaryBtn}>
                <span>Bluttest online bestellen *</span>
                <ArrowRight className="w-4 h-4" />
              </AffiliateLink>
              <Link
                to="/bluttest"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl min-h-[48px] border border-white/20 hover:bg-white/10 text-white font-medium text-sm transition-colors"
              >
                Kosten &amp; Ablauf im Ratgeber lesen
              </Link>
            </>
          ) : hasDirectTestLink ? (
            <>
              <a
                href={testLink!.url}
                target="_blank"
                rel="sponsored nofollow noopener"
                className={primaryBtn}
              >
                <span>{testLink!.label} *</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/bluttest"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl min-h-[48px] border border-white/20 hover:bg-white/10 text-white font-medium text-sm transition-colors"
              >
                Kosten &amp; Ablauf im Ratgeber lesen
              </Link>
            </>
          ) : (
            <Link
              to="/bluttest"
              className={primaryBtn}
            >
              <FileText className="w-4 h-4" />
              <span>Zum Bluttest-Ratgeber</span>
            </Link>
          )}
        </div>

        {product && <AffiliateDisclosure className="text-slate-400 mt-4" />}
        {!product && hasDirectTestLink && (
          <p className="text-[11px] text-slate-400 mt-4 leading-normal">
            * Werbelink / Partnerlink: Als Amazon-Partner verdienen wir an qualifizierten Verkäufen. Für Sie ändert sich der Preis nicht.
          </p>
        )}
      </div>
    </section>
  );
}
