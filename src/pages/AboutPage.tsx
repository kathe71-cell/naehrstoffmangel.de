import { Award, BookOpen, HeartHandshake, ShieldAlert, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import { TransparencySection } from '@plattform/core';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Über uns & Redaktionsleitlinien', url: '/ueber-uns' }]} />

      {/* Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5" />
          <span>E-E-A-T &amp; Transparenz</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Über nährstoffmangel.de: Unser Leitbild &amp; wissenschaftliche Standards
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          nährstoffmangel.de ist ein unabhängiges deutsches Informationsportal. Unsere Mission ist es, verlässliche, wissenschaftlich fundierte Orientierung im Dschungel der Mikronährstoffe, Vitamine und Laborwerte zu bieten – verständlich, evidenzbasiert und frei von pseudowissenschaftlichen Versprechungen.
        </p>
      </header>

      {/* Principles Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Unsere redaktionellen Grundsätze
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Evidenz vor Marketing
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Wir orientieren uns strikt an den Referenzwerten der <strong>Deutschen Gesellschaft für Ernährung (DGE)</strong>, den Veröffentlichungen des <strong>Robert Koch-Instituts (RKI)</strong>, des <strong>Bundesinstituts für Risikobewertung (BfR)</strong> sowie der <strong>Europäischen Behörde für Lebensmittelsicherheit (EFSA)</strong>. Wir verbreiten keine Wunderheilungsversprechen oder reißerische Überdosierungs-Trends.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Klare Trennung: Kein Ersatz für den Arztbesuch
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Wir betonen auf jeder Unterseite: Nährstoffmängel müssen durch eine differenzierte Labordiagnostik verifiziert werden. Eine eigenmächtige Einnahme hochdosierter Präparate (z. B. Eisen oder Vitamin D) ohne Kenntnis der Blutwerte kann gesundheitsschädlich sein.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              100 % Werbetransparenz
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Unsere redaktionellen Inhalte sind unabhängig und werden nicht von Werbepartnern beeinflusst. Partner- und Affiliate-Links (z. B. zu zertifizierten Diagnostik-Laboren oder Reinsubstanzen) werden stets mit einem Sternchen (*) und Erläuterung ausgewiesen.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Ganzheitlicher Ernährungsfokus
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Nahrungsergänzungsmittel können eine ungesunde Ernährung niemals ausgleichen. Unsere Priorität liegt immer auf einer abwechslungsreichen, vollwertigen Ernährung und der Optimierung der natürlichen Bioverfügbarkeit.
            </p>
          </div>
        </div>
      </section>

      {/* Official Primary Sources */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-700" />
          <span>Amtliche Quellen &amp; Fachgesellschaften</span>
        </h2>
        <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>DGE (Deutsche Gesellschaft für Ernährung e. V.):</strong> Referenzwerte für die Nährstoffzufuhr (DACH-Referenzwerte).</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>RKI (Robert Koch-Institut):</strong> Studie zur Gesundheit Erwachsener in Deutschland (DEGS) und Kinder- und Jugendgesundheitsstudie (KiGGS).</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>BfR (Bundesinstitut für Risikobewertung):</strong> Höchstmengenvorschläge für Vitamine und Mineralstoffe in Nahrungsergänzungsmitteln.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>EFSA (European Food Safety Authority):</strong> Scientific Opinions on Dietary Reference Values and Tolerable Upper Intake Levels.</span>
          </li>
        </ul>
      </section>

      <TransparencySection
        siteName="nährstoffmangel.de"
        className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-2 text-sm text-slate-700 leading-relaxed"
        headingClassName="text-xl font-bold text-slate-900"
      />

      {/* Medical Disclaimer */}
      <MedicalDisclaimer />

    </div>
  );
}
