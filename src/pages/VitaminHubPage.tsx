import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sun, 
  Dna, 
  Baby, 
  Apple, 
  Activity, 
  FileText, 
  AlertCircle, 
  CheckCircle2, 
  ChevronDown, 
  ShieldAlert, 
  Info, 
  BookOpen, 
  HeartPulse, 
  ArrowRight, 
  Search, 
  Sparkles, 
  Pill, 
  UtensilsCrossed,
  ShieldCheck,
  Zap,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';

export default function VitaminHubPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'Wie erkenne ich, ob ich einen Vitaminmangel habe?',
      answer: 'Ein Vitaminmangel äußert sich häufig durch unspezifische Beschwerden wie chronische Müdigkeit, erhöhte Infektanfälligkeit, Konzentrationsstörungen, Einrisse an den Mundwinkeln oder Missempfindungen in den Extremitäten. Da diese Symptome jedoch auch bei zahlreichen anderen Erkrankungen auftreten können, sind sie nicht diagnosestellend. Eine verlässliche Diagnose ist nur über eine gezielte Blutuntersuchung beim Arzt oder in einem Fachlabor möglich.'
    },
    {
      question: 'Kann man einen Vitaminmangel durch ein normales Blutbild erkennen?',
      answer: 'In der Regel nein. Das sogenannte kleine oder große Blutbild misst vorrangig die Anzahl und Morphologie der Blutkörperchen (z. B. Hämoglobin, Leukozyten, Thrombozyten). Vitamine wie Vitamin D (25-OH-D), Vitamin B12 (Holo-TC) oder Folsäure werden dabei nicht routinemäßig erfasst und müssen als spezielle Serum- oder Vollblutparameter explizit angefordert werden.'
    },
    {
      question: 'Welche Vitamine fehlen Menschen in Deutschland am häufigsten?',
      answer: 'Nach Daten des Robert Koch-Instituts (RKI) und der Nationalen Verzehrsstudie II betrifft das häufigste Defizit in Deutschland Vitamin D, da die Sonnenstrahlung von Oktober bis März nördlich des 51. Breitengrades für eine ausreichende Hautsynthese zu schwach ist. Bei Folsäure erreichen weite Teile der Bevölkerung die DGE-Referenzwerte nicht. Zudem ist Vitamin B12 bei streng pflanzlicher Ernährungsweise ohne Supplementierung ein typisches Mangelfeld.'
    },
    {
      question: 'Ist die vorsorgliche Einnahme von Multivitaminpräparaten sinnvoll?',
      answer: 'Medizinische Fachgesellschaften wie die DGE und das BfR raten von einer unkritischen, hochdosierten Einnahme von Multivitaminpräparaten („Gießkannenprinzip“) ab. Viele Nahrungsergänzungsmittel sind überdosiert oder enthalten Kombinationen, die sich bei der Aufnahme im Darm gegenseitig hemmen. Eine Einnahme sollte stets zielgerichtet nach nachgewiesenem Bedarf oder in definierten Risikophasen (z. B. Folsäure bei Kinderwunsch) erfolgen.'
    },
    {
      question: 'Wie lange dauert es, bis sich ein Vitaminmangel nach Ausgleich bessert?',
      answer: 'Die Dauer hängt vom betroffenen Vitamin, der Schwere des Defizits und der gewählten Ausgleichsform ab. Erste Verbesserungen beim allgemeinen Wohlbefinden stellen sich bei wasserlöslichen Vitaminen oft innerhalb von 2 bis 4 Wochen ein. Das Auffüllen entleerter körpereigener Speicher (z. B. Vitamin B12 in der Leber oder Vitamin D im Gewebe) nimmt in der Regel 2 bis 6 Monate konsequenter Zufuhr in Anspruch.'
    },
    {
      question: 'Können Vitamine überdosiert werden?',
      answer: 'Ja, insbesondere bei fettlöslichen Vitaminen (A, D, E, K), da der Körper Überschüsse nicht einfach über den Urin ausscheiden kann, sondern im Fettgewebe und in der Leber speichert. Eine chronische Überdosierung von Vitamin A oder Vitamin D kann zu gesundheitlichen Schäden wie Hyperkalzämie, Nierenbelastung oder Leberschäden führen. Wasserlösliche B-Vitamine und Vitamin C werden zwar weitgehend ausgeschieden, extrem hohe Dosen können jedoch ebenfalls Magen-Darm-Beschwerden verursachen.'
    }
  ];

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.nährstoffmangel.de/vitaminmangel#webpage',
        url: 'https://www.nährstoffmangel.de/vitaminmangel',
        name: 'Vitaminmangel: Symptome, Ursachen, Tests und wichtige Vitamine',
        description: 'Wann liegt ein Vitaminmangel vor? Ursachen, typische Symptome, relevante Blutwerte & Vitamine im Überblick. Wissenschaftlich fundierte Orientierung.',
        inLanguage: 'de-DE'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.nährstoffmangel.de/vitaminmangel#faq',
        mainEntity: faqs.map((f) => ({
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

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12">
      
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs items={[{ name: 'Vitaminmangel', url: '/vitaminmangel' }]} />

      {/* Hero Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Evidenzbasierter Themenhub</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Vitaminmangel: Symptome, Ursachen, Tests und wichtige Vitamine
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
          Vitamine sind essenzielle Mikronährstoffe, die der menschliche Organismus für Stoffwechsel, Immunabwehr, Zellschutz und Nervenfunktionen benötigt. Erfahren Sie wissenschaftlich fundiert, wie ein Mangel entsteht, welche Vitamine besonders kritisch sind und wann eine blutanalytische Abklärung sinnvoll ist.
        </p>
      </header>

      {/* Section 1: Was ist Vitaminmangel & Abgrenzung */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
          <BookOpen className="w-6 h-6 text-emerald-600" />
          <span>Was ist ein Vitaminmangel?</span>
        </h2>

        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
          <p>
            Ein <strong>Vitaminmangel</strong> (medizinisch <em>Hypovitaminose</em>, im extremen Fall <em>Avitaminose</em>) liegt vor, wenn dem Körper ein oder mehrere Vitamine in unzureichender Menge zur Verfügung stehen, um die physiologischen Normalfunktionen aufrechtzuerhalten. Da Vitamine organische Verbindungen sind, die der menschliche Stoffwechsel – mit wenigen Ausnahmen wie Vitamin D bei ausreichender Sonneneinstrahlung – nicht selbst synthetisieren kann, müssen sie regelmäßig über die Nahrung aufgenommen werden.
          </p>
          <p>
            Man unterscheidet grundlegend zwischen zwei biochemischen Kategorien:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
              <Zap className="w-5 h-5 text-emerald-600" />
              <span>Wasserlösliche Vitamine (C & B-Komplex)</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Dazu gehören Vitamin C sowie die B-Vitamine (B1, B2, B3, B5, B6, Biotin, Folsäure, B12). Sie werden im Magen-Darm-Trakt resorbiert und überschüssige Mengen in der Regel rasch über die Nieren ausgeschieden. Da der Körper – mit Ausnahme von Vitamin B12, das über Jahre in der Leber gespeichert werden kann – kaum Depots anlegt, ist eine kontinuierliche Zufuhr erforderlich.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-base">
              <Sun className="w-5 h-5 text-amber-600" />
              <span>Fettlösliche Vitamine (A, D, E, K)</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Fettlösliche Vitamine benötigen Nahrungsfett für eine optimale Aufnahme im Darm. Überschüsse können im Fettgewebe und in der Leber über längere Zeiträume gespeichert werden. Dies schützt zwar kurzfristig vor Mangelsituationen, birgt bei unkontrollierter hochdosierter Zufuhr jedoch das Risiko einer Anreicherung (Hypervitaminose).
            </p>
          </div>
        </div>

        {/* Abgrenzungs-Matrix */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-bold text-slate-900">
            Abgrenzung: Vitaminmangel vs. Mineralstoff- & Spurenelementmangel
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Der Oberbegriff <strong>Nährstoffmangel</strong> fasst verschiedene Mikronährstoff-Defizite zusammen. Eine biochemische Unterscheidung hilft beim Verständnis:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-slate-700">
              <thead className="bg-slate-200/70 text-slate-900 font-bold uppercase tracking-wider">
                <tr>
                  <th className="p-3 rounded-l-lg">Kategorie</th>
                  <th className="p-3">Biochemische Natur</th>
                  <th className="p-3">Typische Vertreter</th>
                  <th className="p-3 rounded-r-lg">Hauptfunktion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium">
                <tr>
                  <td className="p-3 font-bold text-emerald-800">Vitaminmangel</td>
                  <td className="p-3">Organische Moleküle (komplex)</td>
                  <td className="p-3">Vitamin D, B12, Folsäure, C, A, K</td>
                  <td className="p-3">Co-Enzyme, Immunsystem, Zellschutz</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-blue-800">Mineralstoffmangel</td>
                  <td className="p-3">Anorganische Mengenelemente (&gt; 50 mg/kg Körpersubstanz)</td>
                  <td className="p-3">Magnesium, Calcium, Kalium, Natrium</td>
                  <td className="p-3">Elektrolythaushalt, Muskelkontraktion, Knochenbau</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-purple-800">Spurenelementmangel</td>
                  <td className="p-3">Anorganische Mikronährstoffe (&lt; 50 mg/kg Körpersubstanz)</td>
                  <td className="p-3">Eisen, Zink, Jod, Selen, Kupfer</td>
                  <td className="p-3">Sauerstofftransport (Eisen), Enzymaktivierung, Schilddrüse</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 2: Relevante Vitamine & Detail-Cluster-Verlinkung */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
          <Activity className="w-6 h-6 text-emerald-600" />
          <span>Welche Vitamine können von einem Mangel betroffen sein?</span>
        </h2>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Prinzipiell kann jedes essenzielle Vitamin bei unzureichender Zufuhr oder Resorptionsstörungen unter den Sollwert fallen. In Deutschland und Europa stehen klinisch und epidemiologisch besonders folgende Vitamine im Fokus:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Vitamin D Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-amber-100 text-amber-900 font-extrabold text-xs px-2.5 py-1 rounded-md">
                  Fettlöslich / Sonnenhormon
                </span>
                <Sun className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Vitamin D (Calciferol)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Nimmt unter den Vitaminen eine Sonderstellung ein, da es bei UV-B-Einstrahlung auf die Haut selbst gebildet werden kann. Im Winter leidet laut RKI über die Hälfte der Bevölkerung an suboptimalen Werten. Wichtig für Knochen, Muskeln und Immunsystem.
              </p>
            </div>
            <Link
              to="/vitamin-d-mangel"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline pt-2"
            >
              <span>Ausführlicher Ratgeber: Vitamin-D-Mangel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Vitamin B12 Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-blue-900 font-extrabold text-xs px-2.5 py-1 rounded-md">
                  Wasserlöslich / B-Komplex
                </span>
                <Dna className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Vitamin B12 (Cobalamin)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Unerlässlich für die Bildung roter Blutkörperchen, die DNA-Synthese und die Myelinscheiden der Nervenbahnen. Kommt in nennenswerten Mengen nur in tierischen Nahrungsmitteln vor – bei rein veganer Ernährung ist eine Supplementierung essenziell.
              </p>
            </div>
            <Link
              to="/vitamin-b12-mangel"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline pt-2"
            >
              <span>Ausführlicher Ratgeber: Vitamin-B12-Mangel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Folsäure Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-teal-100 text-teal-900 font-extrabold text-xs px-2.5 py-1 rounded-md">
                  Wasserlöslich / Vitamin B9
                </span>
                <Baby className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Folsäure (Folat)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Beteiligt an allen Wachstums- und Zellteilungsprozessen. Laut Nationaler Verzehrsstudie II erreichen über 80 % der Bevölkerung die empfohlene Zufuhr nicht. Höchste Relevanz vor und in der Schwangerschaft zur Vorbeugung von Neuralrohrdefekten.
              </p>
            </div>
            <Link
              to="/folsaeuremangel"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline pt-2"
            >
              <span>Ausführlicher Ratgeber: Folsäuremangel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* Weitere relevante Vitamine im kompakten Grid */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-bold text-slate-900">
            Weitere bedeutsame Vitamine und ihre physiologische Funktion
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700">
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 font-bold block">Vitamin A (Retinol / Beta-Carotin)</strong>
              <p className="text-slate-600 text-xs">Fettlöslich. Wichtig für Sehvorgang (Nachtsehen), Haut- und Schleimhautbarrieren sowie Immunabwehr.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 font-bold block">Vitamin C (Ascorbinsäure)</strong>
              <p className="text-slate-600 text-xs">Wasserlöslich. Wirkt als Antioxidans, fördert die Kollagenbildung (Bindegewebe/Zähne) und verbessert die pflanzliche Eisenresorption.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 font-bold block">Vitamin K (K1 / K2)</strong>
              <p className="text-slate-600 text-xs">Fettlöslich. Essenzieller Kofaktor für die Synthese von Blutgerinnungsfaktoren sowie die Protein-Aktivierung im Knochenstoffwechsel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Ursachen & Risikogruppen */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
          <ShieldAlert className="w-6 h-6 text-emerald-600" />
          <span>Mögliche Ursachen & Risikogruppen</span>
        </h2>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Ein Defizit entwickelt sich meist schleichend. Ursächlich ist selten ein einzelner Faktor, sondern häufig das Zusammenspiel aus Ernährungsgewohnheiten, physiologischem Bedarf und individueller Resorptionsfähigkeit des Magendarmtrakts.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">1</div>
            <h3 className="font-bold text-slate-900 text-sm">Unzureichende Zufuhr</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Einseitige Ernährungsformen, stark verarbeitete Fertignahrung mit geringer Mikronährstoffdichte oder streng allergiebedingte Eliminationsdiäten ohne fachgerechten Ausgleich.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">2</div>
            <h3 className="font-bold text-slate-900 text-sm">Gestörte Resorption</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Chronisch-entzündliche Darmerkrankungen (Morbus Crohn, Colitis ulcerosa), Zöliakie, chronische Gastritis oder Medikamente wie Protonenpumpenhemmer (PPI) hemmen die Nährstoffaufnahme.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">3</div>
            <h3 className="font-bold text-slate-900 text-sm">Erhöhter Bedarf</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Lebensphasen mit gesteigerter Zellneubildung wie Schwangerschaft, Stillzeit, kindliche Wachstumsphasen oder intensiver Leistungssport erhöhen den Bedarf spürbar.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">4</div>
            <h3 className="font-bold text-slate-900 text-sm">Erhöhter Verbrauch</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Chronischer emotionaler oder physischer Stress, regelmäßiger Alkoholkonsum oder Rauchen steigern den oxidativen Verbrauch und die Ausscheidungsrate bestimmter Vitamine.
            </p>
          </div>
        </div>

        {/* Risikogruppen Aufzählung */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Info className="w-5 h-5 text-emerald-400" />
            <span>Besonders betroffene Risikogruppen im Überblick</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Ältere Menschen / Senioren:</strong> Abnehmende Eigenproduktion von Vitamin D in der Haut, verringerte Magensäurebildung (Einschränkung der B12-Freisetzung) und reduzierter Appetit.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Schwangere & Stillende:</strong> Gesteigerter Zellteilungsbedarf erfordert insbesondere eine erhöhte Zufuhr von Folsäure (Folat) und Vitamin D.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Streng vegan lebende Personen:</strong> Ohne Nahrungsergänzung entsteht zwangsläufig ein Vitamin-B12-Mangel, da pflanzliche Nahrungsmittel kein bioverfügbares B12 enthalten.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Personen mit geringer Sonnenexposition:</strong> Menschen im Homeoffice, Pflegeheimbewohner oder verschleierte Personen bilden in unseren Breiten zu wenig Vitamin D.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Typische Beschwerden & WICHTIGER HINWEIS */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
          <AlertCircle className="w-6 h-6 text-emerald-600" />
          <span>Typische Beschwerden & Warnzeichen</span>
        </h2>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Vitaminmängel betreffen grundlegende Stoffwechselprozesse. Daher äußern sich Defizite häufig an Geweben mit hoher Zellteilungsrate oder hohem Energiebedarf:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <strong className="text-slate-900 font-bold block text-base">Nervensystem & Kognition</strong>
            <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
              <li>Anhaltendes Energietief & Fatigue</li>
              <li>Konzentrationsstörungen (Brain Fog)</li>
              <li>Kribbeln oder Taubheit in Händen/Füßen (Parästhesien)</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <strong className="text-slate-900 font-bold block text-base">Haut, Haare & Schleimhäute</strong>
            <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
              <li>Einrisse an den Mundwinkeln (Rhagaden)</li>
              <li>Diffuser Haarausfall & brüchige Nägel</li>
              <li>Schleimhautveränderungen (z. B. brennende Zunge)</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <strong className="text-slate-900 font-bold block text-base">Immunsystem & Bewegungsapparat</strong>
            <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
              <li>Erhöhte Infektanfälligkeit</li>
              <li>Muskelschwäche & Gliederschmerzen</li>
              <li>Verzögerte Wundheilung</li>
            </ul>
          </div>
        </div>

        {/* Wichtiger Hinweis Box (Strict Medical Safety Rule) */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2 text-amber-950 font-black text-base">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0" />
            <span>Wichtiger medizinischer Abklärungshinweis</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            <strong>Symptome sind häufig unspezifisch und erlauben keine Eigendiagnose!</strong> Das Vorhandensein von Müdigkeit, Konzentrationsschwäche oder Haarausfall stellt keinen Beweis für einen bestimmten Vitaminmangel dar. Dieselben Beschwerden können durch Schlafmagel, Schilddrüsenerkrankungen, hormonelle Veränderungen oder organische Leiden verursacht werden. Ein eigenmächtiger Ausgleich auf Verdacht ohne vorherige Diagnostik ist nicht empfehlenswert.
          </p>
        </div>
      </section>

      {/* Section 5: Feststellung & Blutwerte */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
          <FileText className="w-6 h-6 text-emerald-600" />
          <span>Wie wird ein Vitaminmangel festgestellt? (Blutdiagnostik)</span>
        </h2>

        <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
          <p>
            Der einzig verlässliche Weg, einen Vitaminmangel festzustellen oder auszuschließen, ist eine zielgerichtete blutanalytische Untersuchung im medizinischen Labor. Ein einfaches Standard-Blutbild (kleines/großes Blutbild) reicht hierfür in der Regel nicht aus, da es lediglich die Blutzellen zählt.
          </p>
          <p>
            Je nach vermutetem Vitamin kommen unterschiedliche Biomarker zum Einsatz:
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-bold text-slate-900">Relevante Laborparameter im Überblick</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Vitamin D: 25-OH-Vitamin D3 (Serum)</span>
              <p className="text-slate-600 text-xs">Spiegelt die körpereigenen Vorräte am stabilsten wider. Werte unter 50 nmol/l (20 ng/ml) weisen auf ein Defizit hin.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Vitamin B12: Holo-TC & MMA</span>
              <p className="text-slate-600 text-xs">Holotranscobalamin (Holo-TC) misst das biologisch aktive B12. Ergänzend zeigt die Methylmalonsäure (MMA) im Urin/Serum einen funktionellen Gewebemangel.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Folsäure: Serum-Folat / Erythrozyten-Folat</span>
              <p className="text-slate-600 text-xs">Serum-Folat zeigt die aktuelle Zufuhr. Erythrozyten-Folat spiegelt die Versorgung der letzten Wochen wider.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Wann zum Arzt?</span>
              <p className="text-slate-600 text-xs">Bei lang anhaltender Erschöpfung, neurologischen Symptomen (Kribbeln), in der Schwangerschaftsplanung oder bei chronischen Darmerkrankungen.</p>
            </div>
          </div>

          <div className="pt-2 text-center sm:text-left">
            <Link
              to="/bluttest"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-3 rounded-xl transition-colors"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Ausführlicher Bluttest-Ratgeber mit Laborwerten</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Rolle der Ernährung & Sachliche Supplement-Einordnung */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
          <UtensilsCrossed className="w-6 h-6 text-emerald-600" />
          <span>Ernährung & Nahrungsergänzung sachlich eingeordnet</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Apple className="w-5 h-5 text-emerald-600" />
              <span>Ernährungsbasierte Grundlage</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Eine vielseitige, pflanzenbetonte Mischkost nach den Empfehlungen der Deutschen Gesellschaft für Ernährung (DGE) mit reichlich frischem Gemüse, Beerenobst, Vollkornprodukten, Hülsenfrüchten, Nüssen und hochwertigen Pflanzenölen deckt bei gesunden Erwachsenen den Bedarf der meisten Vitamine problemlos ab.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Pill className="w-5 h-5 text-emerald-600" />
              <span>Nahrungsergänzungsmittel (NEM)</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Nahrungsergänzungsmittel dienen nicht als Ersatz für eine ausgewogene Ernährung. Eine gezielte Einnahme ist jedoch medizinisch indiziert bei nachgewiesenem Mangel, in definierten Lebensphasen (z. B. Folsäure bei Kinderwunsch) oder bei dauerhafter Ausschlussernährung (z. B. Vitamin B12 bei Veganern). Hochdosierte Präparate sollten stets mit dem Arzt abgestimmt werden.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: FAQ Bereich (Visible FAQs + FAQPage Schema) */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
          <HelpCircle className="w-6 h-6 text-emerald-600" />
          <span>Häufig gestellte Fragen (FAQ)</span>
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section 8: Primärquellen & Evidenz */}
      <section className="bg-slate-100 rounded-2xl p-6 space-y-4 text-xs text-slate-600">
        <h3 className="font-bold text-slate-900 uppercase tracking-wider text-xs flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>Wissenschaftliche Primärquellen & Referenzen</span>
        </h3>
        <ul className="space-y-2 list-disc list-inside leading-relaxed">
          <li>
            <strong>Deutsche Gesellschaft für Ernährung (DGE):</strong> Referenzwerte für die Nährstoffzufuhr (Vitamine & Mineralstoffe). Online unter <a href="https://www.dge.de/wissenschaft/referenzwerte/" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">dge.de</a>
          </li>
          <li>
            <strong>Robert Koch-Institut (RKI):</strong> Antworten des Robert Koch-Instituts auf häufig gestellte Fragen zu Vitamin D. Studie zur Gesundheit Erwachsener in Deutschland (DEGS1). Online unter <a href="https://www.rki.de/SharedDocs/FAQ/Vitamin_D/Vitamin_D_FAQ-Liste.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">rki.de</a>
          </li>
          <li>
            <strong>Bundesinstitut für Risikobewertung (BfR):</strong> Höchstmengen für Vitamine und Mineralstoffe in Nahrungsergänzungsmitteln und angereicherten Lebensmitteln. Online unter <a href="https://www.bfr.bund.de/" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">bfr.bund.de</a>
          </li>
          <li>
            <strong>gesund.bund.de (Bundesministerium für Gesundheit):</strong> Informationen zu Vitamindefiziten und Blutuntersuchungen. Online unter <a href="https://gesund.bund.de/" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800">gesund.bund.de</a>
          </li>
        </ul>
      </section>

      {/* Medical Disclaimer Component */}
      <MedicalDisclaimer />

    </div>
  );
}
