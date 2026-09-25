import { Link } from 'react-router-dom';
import { Activity, ShieldCheck, HeartPulse } from 'lucide-react';

export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-10 border-t border-slate-800 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand & Purpose Column (2 cols wide on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                <Activity className="w-5 h-5 text-emerald-100" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                nährstoff<span className="text-emerald-400">mangel</span>.de
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Unabhängiges deutsches Informationsportal für Mikronährstoffe, Vitamine und Spurenelemente. Wir vermitteln wissenschaftlich fundierte Orientierung anhand der aktuellen Referenzwerte der Deutschen Gesellschaft für Ernährung (DGE) und des Robert Koch-Instituts (RKI).
            </p>

            <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 text-xs text-slate-300 flex items-start gap-2.5">
              <HeartPulse className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Hinweis:</strong> Kein medizinisches Heilversprechen. Die Inhalte ersetzen keine ärztliche Diagnose oder Therapie.
              </span>
            </div>
          </div>

          {/* Column: Wichtige Mängel */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Nährstoffmängel
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/eisenmangel" className="hover:text-emerald-400 transition-colors">
                  Eisenmangel
                </Link>
              </li>
              <li>
                <Link to="/vitamin-d-mangel" className="hover:text-emerald-400 transition-colors">
                  Vitamin-D-Mangel
                </Link>
              </li>
              <li>
                <Link to="/magnesiummangel" className="hover:text-emerald-400 transition-colors">
                  Magnesiummangel
                </Link>
              </li>
              <li>
                <Link to="/vitamin-b12-mangel" className="hover:text-emerald-400 transition-colors">
                  Vitamin-B12-Mangel
                </Link>
              </li>
              <li>
                <Link to="/zinkmangel" className="hover:text-emerald-400 transition-colors">
                  Zinkmangel
                </Link>
              </li>
              <li>
                <Link to="/folsaeuremangel" className="hover:text-emerald-400 transition-colors">
                  Folsäuremangel
                </Link>
              </li>
              <li>
                <Link to="/jodmangel" className="hover:text-emerald-400 transition-colors">
                  Jodmangel
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Ratgeber & Tools */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Tools &amp; Ratgeber
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/symptome" className="hover:text-emerald-400 transition-colors">
                  Symptom-Navigator
                </Link>
              </li>
              <li>
                <Link to="/bluttest" className="hover:text-emerald-400 transition-colors">
                  Bluttest-Kosten &amp; Ablauf
                </Link>
              </li>
              <li>
                <Link to="/ernaehrung" className="hover:text-emerald-400 transition-colors">
                  Nährstoff-Lebensmittel
                </Link>
              </li>
              <li>
                <Link to="/ueber-uns" className="hover:text-emerald-400 transition-colors">
                  Redaktion &amp; Leitbild
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Recht & Transparenz */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Rechtliches
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/impressum" className="hover:text-emerald-400 transition-colors font-medium text-slate-200">
                  → Impressum (§ 5 DDG)
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-emerald-400 transition-colors">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link to="/ueber-uns" className="hover:text-emerald-400 transition-colors">
                  Quellen &amp; Methodik
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-emerald-400 transition-colors">
                  XML-Sitemap
                </a>
              </li>
              <li>
                <a href="/feed.xml" className="hover:text-emerald-400 transition-colors">
                  RSS-Feed
                </a>
              </li>
              <li>
                <a href="/llms.txt" className="hover:text-emerald-400 transition-colors">
                  llms.txt (KI-Suchindex)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Fact Strip & Copyright Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {year} nährstoffmangel.de · Alle Rechte vorbehalten.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-400 font-mono text-[11px]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              DSGVO-konform
            </span>
            <span>·</span>
            <span>Zero-Google-Fonts</span>
            <span>·</span>
            <span>100% Werbetransparenz</span>
            <span>·</span>
            <span>Stand: Sept. 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
