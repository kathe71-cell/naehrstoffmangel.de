import { 
  Award, 
  BookOpen, 
  HeartHandshake, 
  ShieldAlert, 
  CheckCircle2, 
  Users, 
  FileCheck2, 
  RefreshCw, 
  HelpCircle, 
  Scale, 
  Calendar 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import { TransparencySection } from '@plattform/core';

export default function AboutPage() {
  const lastReviewDate = 'Oktober 2026';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Über uns & Redaktionsleitlinien', url: '/ueber-uns' }]} />

      {/* Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5" />
          <span>E-E-A-T, Transparenz &amp; Evidenz</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Über nährstoffmangel.de: Unser Leitbild, Redaktionsprozess &amp; Evidenzstandards
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          nährstoffmangel.de ist ein unabhängiges deutsches Informationsportal für Mikronährstoffe, Vitamine und labormedizinische Grundlagen. Unser Anspruch ist es, wissenschaftlich fundierte Orientierung zu bieten – verständlich, evidenzbasiert, frei von Heilversprechen und mit vollständiger Transparenz.
        </p>

        <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
          <Calendar className="w-4 h-4 text-emerald-700" />
          <span>Stand des letzten redaktionellen Reviews: <strong>{lastReviewDate}</strong></span>
        </div>
      </header>

      {/* 1. Who creates the content */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5 text-slate-900 font-bold text-xl">
          <Users className="w-5 h-5 text-emerald-700" />
          <h2>Wer erstellt die Inhalte auf nährstoffmangel.de?</h2>
        </div>
        <div className="text-sm text-slate-700 leading-relaxed space-y-3">
          <p>
            Hinter nährstoffmangel.de steht ein redaktionelles Team mit naturwissenschaftlichem und medizinjournalistischem Hintergrund. Wir werten Fachliteratur, behördliche Empfehlungen und medizinische Leitlinien systematisch aus, um komplexe physiologische Zusammenhänge für Ratsuchende klar und sachlich aufzubereiten.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 space-y-1.5">
            <strong className="text-slate-900 block font-semibold">Transparente Abgrenzung (Kein Arzt-Ersatz):</strong>
            <p>
              Unsere Fachredaktion vermittelt fundiertes Wissen zur Gesundheitsorientierung. Wir bieten jedoch <strong>keine persönliche medizinische Beratung, Ferndiagnose oder Therapieempfehlung</strong> an. Die hier bereitgestellten Informationen können und dürfen das persönliche Gespräch, die differenzierte Diagnostik und die Therapieplanung durch eine approbierte Ärztin oder einen approbierten Arzt niemals ersetzen.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Source Hierarchy */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5 text-slate-900 font-bold text-2xl tracking-tight">
          <BookOpen className="w-6 h-6 text-emerald-700" />
          <h2>Unsere wissenschaftliche Quellenhierarchie</h2>
        </div>
        <p className="text-sm text-slate-600">
          Wir wenden die Grundsätze der evidenzbasierten Medizin an. Für unsere Artikel gilt eine verbindliche Rangordnung der Quellen:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="bg-white border border-emerald-200 rounded-2xl p-5 shadow-2xs space-y-2">
            <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
              Priorität 1: Leitlinien &amp; Fachgesellschaften
            </span>
            <p className="text-slate-700 leading-relaxed">
              Evidenzbasierte Leitlinien der <strong>AWMF</strong>, Referenzwerte der <strong>DGE</strong>, Publikationen des <strong>RKI</strong>, Risikobewertungen des <strong>BfR</strong> sowie Scientific Opinions der <strong>EFSA</strong> und <strong>WHO</strong>.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-2">
            <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
              Priorität 2: Systematische Reviews
            </span>
            <p className="text-slate-700 leading-relaxed">
              Systematische Reviews und Meta-Analysen anerkannter Fachjournale (z. B. via PubMed/MEDLINE, Cochrane Library), die die Gesamtlage der klinischen Studien zusammenfassen.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-2">
            <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
              Strikt ausgeschlossen
            </span>
            <p className="text-slate-600 leading-relaxed">
              Unbelegte Gesundheitsblogs, Hersteller-Marketingmaterialien, reißerische Social-Media-Trends oder nicht wissenschaftlich verifizierte Heilsversprechen.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Editorial & Update Process */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <FileCheck2 className="w-5 h-5 text-emerald-700" />
          <span>Redaktioneller Prüf- &amp; Aktualisierungsprozess</span>
        </h2>
        
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block font-semibold">Mehr-Augen-Prinzip &amp; Primärquellenabgleich:</strong>
              Jeder neu verfasste oder überarbeitete Artikel wird vor Veröffentlichung gegen die zugrundeliegenden Primärquellen geprüft. Zahlen, Mengenangaben und Einheiten werden mit amtlichen Datenbanken (wie dem Bundeslebensmittelschlüssel BLS 3.02) abgeglichen.
            </div>
          </div>

          <div className="flex items-start gap-3">
            <RefreshCw className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block font-semibold">Regelmäßige Aktualisierung:</strong>
              Ändern Fachgesellschaften wie die DGE oder das BfR ihre Zufuhr- oder Höchstmengenempfehlungen, werden die betroffenen Leitfäden unverzüglich überarbeitet. Am Seitenende jedes Leitfadens ist das vollständige Literaturverzeichnis mit Direktlinks zu den Quellen hinterlegt.
            </div>
          </div>

          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block font-semibold">Fehlerkultur &amp; Korrekturverfahren:</strong>
              Transparenz bedeutet für uns auch, offen mit Hinweisen umzugehen. Wenn Ihnen in unseren Texten veraltete Daten, Unstimmigkeiten oder fehlerhafte Verlinkungen auffallen, kontaktieren Sie uns bitte unter den im Impressum angegebenen Kontaktdaten. Berechtigte Korrekturen setzen wir umgehend um.
            </div>
          </div>
        </div>
      </section>

      {/* 4. Conflict of Interest & Independence */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5 text-slate-900 font-bold text-xl">
          <Scale className="w-5 h-5 text-emerald-700" />
          <h2>Umgang mit Interessenkonflikten &amp; Werbetransparenz</h2>
        </div>
        
        <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
          <p>
            Das gesamte Informationsangebot auf nährstoffmangel.de ist für Leserinnen und Leser <strong>kostenlos und ohne Bezahlschranke zugänglich</strong>. Um den laufenden Redaktions- und Serverbetrieb zu finanzieren, binden wir an ausgewählten Stellen sogenannte Partner- bzw. Affiliate-Links (*) ein.
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li><strong>Strikte Kennzeichnung:</strong> Jeder Partnerlink ist durch ein Sternchen (*) und einen deutlichen Hinweistext als Werbelink gekennzeichnet.</li>
            <li><strong>Vollständige redaktionelle Unabhängigkeit:</strong> Weder Diagnostik-Labore noch Präparatehersteller haben Einfluss auf unsere redaktionellen Inhalte, Bewertungen oder Leitfadentexte.</li>
            <li><strong>Keine bezahlten Gefälligkeitsurteile:</strong> Wir empfehlen Produkte ausschließlich nach sachlichen, redaktionell definierten Kriterien (z. B. nachgewiesene Bioverfügbarkeit von Wirkformen, Verzicht auf unnötige Zusatzstoffe, moderate Dosierung gemäß BfR-Empfehlungen).</li>
          </ul>
          <p className="pt-2 border-t border-slate-100">
            Ausführliche Details zu den Partnerprogrammen finden Sie in unserem gesonderten <Link to="/affiliate-hinweis" className="text-emerald-700 font-bold hover:underline">Werbe- &amp; Affiliate-Hinweis</Link>.
          </p>
        </div>
      </section>

      {/* 5. Primary Official Sources List */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-700" />
          <span>Wichtigste behördliche Referenzinstitutionen</span>
        </h2>
        <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>DGE (Deutsche Gesellschaft für Ernährung e. V.):</strong> DACH-Referenzwerte für die Nährstoffzufuhr (Deutschland, Österreich, Schweiz).</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>RKI (Robert Koch-Institut):</strong> Gesundheitssurveys (DEGS1, KiGGS) zur Nährstoffversorgung in der deutschen Bevölkerung.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>BfR (Bundesinstitut für Risikobewertung):</strong> Toxikologische Höchstmengenvorschläge für Vitamine und Mineralstoffe in Nahrungsergänzungsmitteln.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>AWMF:</strong> Wissenschaftlich begründete medizinische Leitlinien der Fachgesellschaften (z. B. DGHO, DGIM, DGG).</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>EFSA (European Food Safety Authority):</strong> Wissenschaftliche Gutachten zu Dietary Reference Values (DRVs) und Tolerable Upper Intake Levels (UL).</span>
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
