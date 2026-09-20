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
import AdSenseBanner from '../components/AdSenseBanner';

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
      cashPay: 'Fast immer IGeL-Leistung',
      homeTest: 'ca. 39 – 49 €'
    },
    {
      biomarker: 'Magnesium im Vollblut',
      purpose: 'Zelluläre Speicher (Erythrozyten)',
      goeCost: 'ca. 8 – 15 €',
      cashPay: 'IGeL-Leistung (Kasse zahlt nur ungenaues Serum)',
      homeTest: 'Im Mineralstoff-Panel'
    },
    {
      biomarker: 'Zink im Vollblut / Serum',
      purpose: 'Abwehrkräfte, Wundheilung',
      goeCost: 'ca. 10 – 18 €',
      cashPay: 'Fast immer IGeL-Leistung',
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
      a: 'Das ist einer der häufigsten Irrtümer: Ein "großes Blutbild" (Differenzialblutbild) zählt lediglich die verschiedenen Blutzellen (Erythrozyten, Leukozyten, Thrombozyten, Hämoglobin und Hämatokrit). Es misst KEINE Vitamine, Mineralstoffe oder Spurenelemente! Selbst bei dramatisch leeren Eisenspeichern kann das große Blutbild über Monate hinweg noch völlig "normal" aussehen, bis die Erythrozytenbildung schließlich zusammenbricht.'
    },
    {
      q: 'Zahlt die gesetzliche Krankenkasse (GKV) die Blutwerte für Vitamine?',
      a: 'In der Regel nein. Gesetzliche Krankenkassen übernehmen die Laborkosten für Vitamintests nur bei konkretem, medizinisch begründetem Verdacht auf eine manifeste Erkrankung (z. B. schwere Anämie für Ferritin oder nachgewiesene Osteoporose für Vitamin D). Ohne konkrete Diagnose werden die Werte als "Individuelle Gesundheitsleistung" (IGeL) nach der Gebührenordnung für Ärzte (GOÄ) privat abgerechnet.'
    },
    {
      q: 'Wie genau und verlässlich sind Bluttests für Zuhause (Kapillarblut)?',
      a: 'Zertifizierte Anbieter (wie Cerascreen, Lykon oder Verisana) arbeiten mit akkreditierten medizinischen Fachlaboren in Deutschland zusammen, die denselben DIN- und ISO-Qualitätsstandards unterliegen wie Arztpraxen. Das Blut wird über einen winzigen Stich in die Fingerkuppe (Kapillarblut) entnommen, auf Trockenblutkarten oder Röhrchen aufgefangen und per Post eingesandt. Bei korrekter Durchführung ist die Messgenauigkeit mit einer venösen Blutentnahme vergleichbar.'
    },
    {
      q: 'Was ist der Unterschied zwischen Serum- und Vollblutanalyse?',
      a: 'Blutserum ist der flüssige, zellfreie Anteil des Blutes. Vollblut enthält hingegen auch alle Blutzellen (Erythrozyten). Für Nährstoffe, die sich zu über 95 % im Zellinneren befinden (wie Magnesium, Kalium oder Zink), ist eine Vollblutanalyse um ein Vielfaches aussagekräftiger als ein Serumtest, da der Körper den Serumspiegel auf Kosten der Zellen künstlich stabil hält.'
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

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Nahrungsergänzungsmittel blind auf Verdacht zu schlucken, ist ineffizient und birgt Überdosierungsrisiken. Erfahren Sie hier, warum das normale Hausarzt-Blutbild Vitamine verschweigt, welche Spezialbiomarker Sie wirklich fordern müssen und wo die Unterschiede zwischen Praxis und Selbsttest liegen.
        </p>
      </header>

      {/* Danger Box: The "Großes Blutbild" Myth */}
      <section className="bg-amber-50 border border-amber-300 rounded-2xl p-6 sm:p-7 space-y-3">
        <div className="flex items-center gap-2.5 text-amber-900 font-bold text-base sm:text-lg">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>Häufigster Patienten-Irrtum: „Mein Blutbild war doch unauffällig!“</span>
        </div>
        <p className="text-sm text-amber-950 leading-relaxed">
          Wenn Ihr Hausarzt sagt: <em>„Wir haben ein großes Blutbild gemacht, alles in bester Ordnung“</em>, bedeutet das lediglich, dass die Zellanzahl Ihrer weißen und roten Blutkörperchen im Normbereich liegt. <strong>Weder Ferritin, noch Vitamin D, noch B12 oder Mineralstoffe sind im großen Blutbild enthalten!</strong> Ein schwerer Mangel kann also jahrelang unerkannt bleiben, obwohl regelmäßig Blut abgenommen wurde.
        </p>
      </section>

      {/* Key Biomarkers: The Right Parameters */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Die entscheidenden Biomarker: Was muss gemessen werden?
        </h2>
        <p className="text-sm text-slate-600">
          Verlangen Sie beim Arzt oder im Selbsttest immer den korrekten Speicherwert statt des oberflächlichen Serumwerts:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-900">Eisen: Ferritin statt Serum-Eisen</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Goldstandard</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Freies Eisen im Serum schwankt nach jeder Mahlzeit massiv und ist diagnostisch wertlos. Nur <strong>Ferritin</strong> (Speichereisen) zeigt den wahren Füllstand der Knochenmark- und Leberspeicher.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-900">B12: Holo-TC statt Gesamt-B12</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Zellaktiv</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gesamt-B12 misst zu 80 % inaktive Formen. <strong>Holotranscobalamin (Holo-TC)</strong> erfasst ausschließlich das biologisch verfügbare Vitamin B12, das den Körperzellen tatsächlich zur Verfügung steht.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-900">Vitamin D: 25(OH)D3 (Calcidiol)</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Depot-Form</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gemessen wird die Speicherform 25-Hydroxy-Vitamin-D3. Nicht das kurzlebige Hormon Calcitriol (1,25(OH)2D), welches selbst bei schwerem Mangel noch hochnormal sein kann.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-900">Magnesium &amp; Zink: Vollblut</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Intrazellulär</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mineralstoffe befinden sich zu 99 % in den Zellen. Ein Vollbluttest erfasst die zellulären Erythrozyten und deckt Defizite auf, lange bevor das Serum absinkt.
            </p>
          </div>
        </div>
      </section>

      {/* AdSense Unit */}
      <AdSenseBanner slotId="bloodtest-mid" />

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
            </ul>
          </div>
        </div>
      </section>

      {/* Blood Test CTA Component */}
      <BloodTestCta />

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
