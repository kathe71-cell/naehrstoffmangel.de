import { useState } from 'react';
import { 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  HelpCircle, 
  ChevronDown, 
  ArrowRight,
  Clock,
  Euro,
  FlaskConical,
  Microscope
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import BloodTestCta from '../components/BloodTestCta';
import { AdPageNotice, ProductLinks } from '@plattform/core';
import { bloodTestProduct, bloodTestPageProducts } from '../placements';

export default function BloodTestPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const costComparison = [
    {
      biomarker: 'Ferritin (Speichereisen)',
      purpose: 'Eisenmangel, Eisenüberladung',
      goeCost: 'ca. 14 – 20 €',
      cashPay: 'Oft Kassenleistung bei begründetem Verdacht',
      homeTest: 'Im Kombi-Test (ca. 29 – 39 €)'
    },
    {
      biomarker: '25(OH)D3 (Vitamin D)',
      purpose: 'Wintermangel, Knochenstoffwechsel',
      goeCost: 'ca. 20 – 30 €',
      cashPay: 'Reine IGeL-Selbstzahlerleistung (außer bei Osteoporose)',
      homeTest: 'ca. 25 – 35 €'
    },
    {
      biomarker: 'Holotranscobalamin (Holo-TC)',
      purpose: 'Aktives Vitamin B12 (Zellebene)',
      goeCost: 'ca. 25 – 35 €',
      cashPay: 'Meist IGeL-Leistung (Selbstzahler)',
      homeTest: 'ca. 39 – 49 €'
    },
    {
      biomarker: 'Magnesium (Serum / ggf. Vollblut)',
      purpose: 'Muskelfunktion, Nervensystem',
      goeCost: 'ca. 5 – 15 €',
      cashPay: 'Serum bei Indikation Kassenleistung; Vollblut meist IGeL',
      homeTest: 'Im Mineralstoff-Panel'
    },
    {
      biomarker: 'Zink (Serum / ggf. Vollblut)',
      purpose: 'Immunfunktion, Wundheilung',
      goeCost: 'ca. 10 – 18 €',
      cashPay: 'Meist Selbstzahlerleistung (IGeL), außer bei klinischer Indikation',
      homeTest: 'Im Mineralstoff-Panel'
    },
    {
      biomarker: 'Folsäure (Erythrozyten-Folat)',
      purpose: 'Langzeit-Folatversorgung',
      goeCost: 'ca. 15 – 25 €',
      cashPay: 'IGeL (Kasse nur bei schwerer Anämie)',
      homeTest: 'ca. 35 – 45 €'
    }
  ];

  const faqs = [
    {
      q: 'Warum erkennt das normale "große Blutbild" beim Hausarzt keinen Nährstoffmangel?',
      a: 'Das ist einer der häufigsten Irrtümer: Ein "großes Blutbild" (Differenzialblutbild) zählt lediglich die verschiedenen Blutzellen (Erythrozyten, Leukozyten, Thrombozyten, Hämoglobin und Hämatokrit). Es misst KEINE Vitamine, Mineralstoffe oder Spurenelemente! Selbst bei leeren Eisenspeichern kann das große Blutbild über längere Zeit noch unauffällig aussehen, bis die Erythrozytenbildung schließlich messbar absinkt.'
    },
    {
      q: 'Zahlt die gesetzliche Krankenkasse (GKV) die Blutwerte für Vitamine?',
      a: 'In der Regel nein. Gesetzliche Krankenkassen übernehmen die Laborkosten für Vitamintests nur bei konkretem, medizinisch begründetem Verdacht auf eine manifeste Erkrankung (z. B. schwere Anämie für Ferritin oder nachgewiesene Osteoporose für Vitamin D). Ohne konkrete Diagnose werden die Werte als "Individuelle Gesundheitsleistung" (IGeL) nach der Gebührenordnung für Ärzte (GOÄ) privat abgerechnet.'
    },
    {
      q: 'Wie genau und verlässlich sind Bluttests für Zuhause (Kapillarblut)?',
      a: 'Zertifizierte Anbieter arbeiten mit akkreditierten medizinischen Fachlaboren zusammen, die etablierte Analyseverfahren nutzen. Die Blutentnahme aus der Fingerkuppe (Kapillarblut) kann bei richtiger Durchführung Hinweise auf den Versorgungsstatus liefern. Ein Heimtest ist jedoch kein vollständiger Ersatz für eine umfassende ärztliche Diagnostik, bei der auch Begleiterkrankungen, Medikation und klinische Symptome einbezogen werden.'
    },
    {
      q: 'Was ist der Unterschied zwischen Serum- und Vollblutanalyse?',
      a: 'Blutserum ist der flüssige, zellfreie Überstand des geronnenen Blutes. Vollblut enthält zusätzlich alle Blutzellen (vor allem Erythrozyten). In der ärztlichen Routine und den medizinischen Leitlinien ist die Bestimmung im Serum der anerkannte Standard. Da manche Mineralstoffe wie Magnesium überwiegend intrazellulär vorliegen, wird in einigen Fachbereichen (z. B. Umwelt- oder Ernährungsmedizin) eine Vollblut- oder Erythrozytenanalyse diskutiert. Diese Methoden unterliegen jedoch laborspezifischen Referenzwerten und sind kein allgemeiner Leitlinienstandard.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Bluttest-Ratgeber', url: '/bluttest' }]} />

      {/* Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <FlaskConical className="w-3.5 h-3.5" />
          <span>Diagnostik &amp; Labormedizin</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Nährstoff-Bluttest: Warum er sinnvoll ist, welche Werte zählen und was er kostet
        </h1>
        <AdPageNotice />

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Nahrungsergänzungsmittel blind auf Verdacht einzunehmen, ist ineffizient und birgt Risiken für Wechselwirkungen oder Überdosierungen. Erfahren Sie hier, warum ein Standard-Blutbild zelluläre Blutwerte statt Vitamine untersucht, welche spezifischen Biomarker in der Mangeldiagnostik eingesetzt werden und wo die Grenzen von Selbsttests liegen.
        </p>
      </header>

      {/* Danger Box: The "Großes Blutbild" Myth */}
      <section className="bg-amber-50 border border-amber-300 rounded-2xl p-6 sm:p-7 space-y-3">
        <div className="flex items-center gap-2.5 text-amber-900 font-bold text-base sm:text-lg">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>Häufiger Patienten-Irrtum: „Mein Blutbild war doch unauffällig!“</span>
        </div>
        <p className="text-sm text-amber-950 leading-relaxed">
          Wenn in der Arztpraxis gesagt wird: <em>„Wir haben ein großes Blutbild gemacht, alles in bester Ordnung“</em>, bedeutet das lediglich, dass die Zellanzahl und Differenzierung Ihrer weißen und roten Blutkörperchen sowie Thrombozyten im Normbereich liegt. <strong>Weder Ferritin, noch Vitamin D, B12 oder Mineralstoffe sind im kleinen oder großen Blutbild enthalten!</strong> Diese Mikronährstoffparameter müssen bei Verdacht gezielt als eigenständige Laborwerte angefordert werden.
        </p>
      </section>

      {/* Key Biomarkers: The Right Parameters */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Relevante Biomarker: Welche Laborwerte werden untersucht?
        </h2>
        <p className="text-sm text-slate-600">
          Für eine aussagekräftige Beurteilung werden je nach Fragestellung spezifische Speicher- oder Funktionsmarker herangezogen:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-900">Eisen: Ferritin &amp; CRP</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Speichereisen</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Freies Eisen im Serum unterliegt starken tageszeitlichen Schwankungen und spiegelt vor allem die kurzfristige Zufuhr wider; zur Beurteilung der Körperspeicher ist es allein nicht geeignet. Primärer Marker ist <strong>Serum-Ferritin</strong> als zentraler Speicherwert. Da Ferritin als Akute-Phase-Protein bei Entzündungen reaktiv ansteigen kann, kann bei Verdacht auf Entzündungen die gleichzeitige Bestimmung von Entzündungsmarkern wie <strong>CRP</strong> für die Interpretation sinnvoll sein. Bei unklarem Befund wird ergänzend die Transferrinsättigung herangezogen.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-900">Vitamin B12: Gesamt-B12, Holo-TC &amp; MMA</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Stufendiagnostik</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gesamt-B12 im Serum dient als gängiger Screening-Marker. Im Graubereich (ca. 150–300 pmol/l) kann die Bestimmung des aktiven <strong>Holotranscobalamins (Holo-TC)</strong> oder des funktionellen Stoffwechselmarkers <strong>Methylmalonsäure (MMA)</strong> zusätzliche differenzierende Hinweise liefern. Da MMA auch bei eingeschränkter Nierenfunktion ansteigt, sollte die Nierenfunktion (eGFR) bei der Interpretation berücksichtigt werden.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-900">Vitamin D: 25(OH)D (Calcidiol)</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Speicherform</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Standardmarker ist 25-Hydroxy-Vitamin-D (25(OH)D im Serum). Das aktive Hormon 1,25(OH)2D (Calcitriol) hat eine sehr kurze Halbwertszeit und kann bei Mangel durch kompensatorisches Parathormon normal bleiben; es ist zur Mangeldiagnose nicht geeignet.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-900">Magnesium &amp; Zink: Serum vs. Vollblut</span>
              <span className="text-xs bg-slate-200 text-slate-800 font-bold px-2 py-0.5 rounded">Methodenvergleich</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              In der ärztlichen Routine und den Leitlinien ist die Messung im Serum etabliert. Da Mineralstoffe überwiegend intrazellulär vorkommen, werden in Teilen der komplementären oder Ernährungsmedizin Vollblut- oder Erythrozytenanalysen genutzt. Diese unterliegen jedoch methoden- und laborspezifischen Referenzbereichen und sind kein allgemeiner Leitlinienstandard. Zink sollte morgens nüchtern bestimmt werden.
            </p>
          </div>
        </div>
      </section>


      {/* Cost Table: IGeL vs. Home Tests */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Was kostet ein Nährstoff-Bluttest?
          </h2>
          <span className="text-xs text-slate-500 font-mono">
            Abrechnung nach GOÄ (Gebührenordnung für Ärzte)
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 text-xs uppercase tracking-wider">
                <th className="p-3.5">Biomarker</th>
                <th className="p-3.5">Relevanz</th>
                <th className="p-3.5">Praxiskosten (GOÄ)</th>
                <th className="p-3.5">Kostenübernahme GKV</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {costComparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900">{row.biomarker}</td>
                  <td className="p-3.5 text-slate-600">{row.purpose}</td>
                  <td className="p-3.5 font-mono text-emerald-800 font-bold">{row.goeCost}</td>
                  <td className="p-3.5 text-slate-600">{row.cashPay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Links zu detaillierten Laborwert-Artikeln */}
        <div className="pt-4 border-t border-slate-200">
          <h3 className="text-sm font-bold text-slate-900 mb-3">
            Ausführliche Leitfäden zu einzelnen Laborwerten &amp; Biomarkern:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            <a
              href="/laborwerte/ferritin"
              className="p-3 rounded-lg border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 text-xs font-semibold text-slate-800 transition-colors flex items-center justify-between"
            >
              <span>Ferritin (Speichereisen)</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
            </a>
            <a
              href="/laborwerte/transferrinsaettigung"
              className="p-3 rounded-lg border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 text-xs font-semibold text-slate-800 transition-colors flex items-center justify-between"
            >
              <span>Transferrinsättigung (TfS)</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
            </a>
            <a
              href="/laborwerte/eisen"
              className="p-3 rounded-lg border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 text-xs font-semibold text-slate-800 transition-colors flex items-center justify-between"
            >
              <span>Serumeisen (Fe)</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
            </a>
            <a
              href="/laborwerte/holo-tc"
              className="p-3 rounded-lg border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 text-xs font-semibold text-slate-800 transition-colors flex items-center justify-between"
            >
              <span>Holo-TC (Aktives B12)</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
            </a>
            <a
              href="/laborwerte/mma"
              className="p-3 rounded-lg border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 text-xs font-semibold text-slate-800 transition-colors flex items-center justify-between"
            >
              <span>Methylmalonsäure (MMA)</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
            </a>
            <a
              href="/laborwerte/25-oh-vitamin-d"
              className="p-3 rounded-lg border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 text-xs font-semibold text-slate-800 transition-colors flex items-center justify-between"
            >
              <span>25(OH)D (Vitamin D)</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
            </a>
          </div>
        </div>
      </section>

      {/* Home Test vs. Doctor Visit: Comparison */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          Labor beim Hausarzt vs. Heimtest für Zuhause: Der Vergleich
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Option A: Doctor */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <Microscope className="w-5 h-5 text-emerald-700" />
              <span>Blutentnahme in der Arztpraxis</span>
            </h3>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Venöse Blutentnahme (größere Blutmenge, breitere Diagnostik)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Ärztliche Besprechung und körperliche Untersuchung vor Ort</span>
              </li>
              <li className="flex items-start gap-2 text-slate-500">
                <span className="text-amber-600 font-bold">Nachteil:</span>
                <span>Terminwartezeiten, Praxisgebühren für Blutabnahme und Diskussion über IGeL-Leistungen nötig.</span>
              </li>
            </ul>
          </div>

          {/* Option B: Home Test */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-emerald-700" />
              <span>Zertifizierter Heimtest (Kapillarblut)</span>
            </h3>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Bequem zu Hause zu jeder Zeit durchführbar (wenige Blutstropfen)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Auswertung in deutschen akkreditierten Fachlaboren</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Detaillierter digitaler Laborbericht mit Ampelsystem in wenigen Tagen</span>
              </li>
              <li className="flex items-start gap-2 text-slate-500 pt-1">
                <span className="text-amber-600 font-bold">Wichtige Grenze:</span>
                <span>Ein Heimtest ersetzt keine ärztliche Untersuchung. Auffällige Werte sollten mit der Hausarztpraxis besprochen werden.</span>
              </li>
            </ul>
          </div>
        </div>

        <ProductLinks ids={bloodTestPageProducts} title="Heimtests mit Laboranalyse – Beispiele" />

        <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed mt-4">
          <strong className="text-slate-900 block mb-0.5">Diagnostischer Grundsatz:</strong>
          Weder ein Heimtest noch eine isolierte IGeL-Laboranalyse ersetzen eine vollständige ärztliche Anamnese und klinische Untersuchung. Bei schweren oder unklaren Symptomen (z. B. Herzrasen, akute Atemnot, neurologische Ausfälle) ist stets die primärärztliche Versorgung aufzusuchen.
        </div>
      </section>

      {/* Blood Test CTA Component */}
      <BloodTestCta productId={bloodTestProduct.bluttest} />

      {/* FAQ Accordion */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">
          Häufige Fragen zu Nährstoff-Bluttests
        </h2>

        <div className="divide-y divide-slate-200">
          {faqs.map((f, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className="py-4">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left gap-4 py-2 font-bold text-slate-900 hover:text-emerald-700 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-700' : ''}`} />
                </button>

                {isOpen && (
                  <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pr-6">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Disclaimer */}
      <MedicalDisclaimer />

    </div>
  );
}
