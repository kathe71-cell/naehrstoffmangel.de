import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  Droplet, 
  Sun, 
  Zap, 
  Dna, 
  Sparkles, 
  Baby, 
  ShieldAlert, 
  Search, 
  ChevronDown, 
  FileText, 
  UtensilsCrossed, 
  Award,
  AlertTriangle,
  Info
} from 'lucide-react';
import AdSenseBanner from '../components/AdSenseBanner';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import BloodTestCta from '../components/BloodTestCta';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: '> 50 %', label: 'der Deutschen haben im Winter suboptimale Vitamin-D-Werte (RKI)' },
    { value: '15–30 %', label: 'aller Frauen im gebärfähigen Alter leiden an entleerten Eisenspeichern' },
    { value: '> 30 %', label: 'der Erwachsenen weisen eine zu geringe Jodausscheidung auf' },
    { value: '4–6 Jahre', label: 'reichen körpereigene Vitamin-B12-Speicher in der Leber' },
  ];

  const deficiencies = [
    {
      slug: '/eisenmangel',
      name: 'Eisenmangel',
      subtitle: 'Häufigster Mangel weltweit',
      desc: 'Besonders Frauen, Schwangere und Vegetarier betroffen. Chronische Müdigkeit, Blässe und Haarausfall.',
      icon: Droplet,
      accent: 'border-red-200 hover:border-red-400 bg-red-50/20 text-red-700',
      badge: 'Spurenelement'
    },
    {
      slug: '/vitamin-d-mangel',
      name: 'Vitamin-D-Mangel',
      subtitle: 'Winter-Defizit in Deutschland',
      desc: 'Sonneneinstrahlung von Oktober bis März unzureichend. Schwächt Immunsystem, Knochen und Gemüt.',
      icon: Sun,
      accent: 'border-amber-200 hover:border-amber-400 bg-amber-50/20 text-amber-700',
      badge: 'Sonnenhormon'
    },
    {
      slug: '/magnesiummangel',
      name: 'Magnesiummangel',
      subtitle: 'Muskeln, Nerven & Stress',
      desc: 'Typisch sind nächtliche Wadenkrämpfe, Lidzucken und innere Unruhe. Erhöhter Bedarf bei Sport & Stress.',
      icon: Zap,
      accent: 'border-emerald-200 hover:border-emerald-400 bg-emerald-50/20 text-emerald-700',
      badge: 'Mineralstoff'
    },
    {
      slug: '/vitamin-b12-mangel',
      name: 'Vitamin-B12-Mangel',
      subtitle: 'Pflichtstoff für Veganer',
      desc: 'Schützt Myelinscheiden der Nerven. Kribbeln in Händen/Füßen, Brain Fog und Blutarmut.',
      icon: Dna,
      accent: 'border-blue-200 hover:border-blue-400 bg-blue-50/20 text-blue-700',
      badge: 'Vitamin B12'
    },
    {
      slug: '/zinkmangel',
      name: 'Zinkmangel',
      subtitle: 'Abwehrkräfte & Hautgesundheit',
      desc: 'Erhöhte Infektanfälligkeit, verzögerte Wundheilung und brüchige Nägel. Phytinsäure hemmt Aufnahme.',
      icon: Sparkles,
      accent: 'border-purple-200 hover:border-purple-400 bg-purple-50/20 text-purple-700',
      badge: 'Spurenelement'
    },
    {
      slug: '/folsaeuremangel',
      name: 'Folsäuremangel',
      subtitle: 'Schlüsselvitamin bei Kinderwunsch',
      desc: 'Unverzichtbar für Zellteilung und Neuralrohrverschluss in der Frühschwangerschaft. DGE rät zur Vorbeugung.',
      icon: Baby,
      accent: 'border-teal-200 hover:border-teal-400 bg-teal-50/20 text-teal-700',
      badge: 'Vitamin B9'
    },
    {
      slug: '/jodmangel',
      name: 'Jodmangel',
      subtitle: 'Schilddrüse in Gefahr',
      desc: 'Deutschland gilt als Jodmangel-Risikoland. Verursacht Kropfbildung, Schilddrüsenunterfunktion und Frieren.',
      icon: ShieldAlert,
      accent: 'border-sky-200 hover:border-sky-400 bg-sky-50/20 text-sky-700',
      badge: 'Spurenelement'
    }
  ];

  const faqs = [
    {
      q: 'Was genau versteht man unter einem Nährstoffmangel?',
      a: 'Ein Nährstoffmangel entsteht, wenn der Körper nicht ausreichend mit essenziellen Mikronährstoffen (Vitaminen, Mineralstoffen oder Spurenelementen) versorgt wird. Da der Organismus diese Stoffe nicht oder nur unzureichend selbst bilden kann, müssen sie über eine ausgewogene Ernährung oder gezielte Supplementierung zugeführt werden. Ein Defizit kann funktionell (noch ohne sichtbare Krankheit) oder manifest (mit messbaren Symptomen und Organfunktionsstörungen) vorliegen.'
    },
    {
      q: 'Welche Nährstoffmängel treten in Deutschland am häufigsten auf?',
      a: 'Laut der Nationalen Verzehrsstudie II des Max Rubner-Instituts und Erhebungen des Robert Koch-Instituts (RKI) erreichen weite Teile der Bevölkerung die empfohlenen Zufuhrmengen bestimmter Nährstoffe nicht. Am häufigsten sind Vitamin-D-Mangel (insbesondere von Oktober bis März), Folsäuremangel (über 85 % erreichen die Referenzwerte nicht), Jodmangel (Rückgang von Jodsalz in verarbeiteten Lebensmitteln), Eisenmangel bei menstruierenden Frauen sowie Vitamin B12 bei veganer und vegetarischer Ernährung.'
    },
    {
      q: 'Warum kann ein Mangel trotz scheinbar gesunder Ernährung entstehen?',
      a: 'Ernährungsfaktoren sind nur ein Teil der Gleichung. Resorptionsblocker in Nahrungsmitteln (wie Phytinsäure in Getreide oder Tannine im Tee), chronischer Stress (steigert Magnesiumausscheidung), Einnahme von Dauermedikamenten (z. B. Magensäureblocker oder Antidiabetika wie Metformin) sowie unbemerkte Darmerkrankungen (wie Zöliakie oder chronische Gastritis) können verhindern, dass aufgenommene Nährstoffe die Blutbahn erreichen.'
    },
    {
      q: 'Wie sinnvoll sind Multivitaminpräparate aus dem Supermarkt?',
      a: 'Medizinische Fachgesellschaften raten von unkritisch dosierten "Gießkannen-Präparaten" ab. Viele günstige Multivitamine enthalten anorganische Verbindungen mit geringer Bioverfügbarkeit (z. B. Zinkoxid oder Magnesiumoxid) oder ungünstige Kombinationen, die sich im Darm gegenseitig blockieren (wie Calcium und Eisen). Eine zielgerichtete Zufuhr nach vorheriger labormedizinischer Messung ist stets überlegen und sicherer.'
    },
    {
      q: 'Wann sollte man wegen eines vermuteten Mangels zum Arzt?',
      a: 'Symptome wie wochenlange Erschöpfung, anhaltender Haarausfall, Schwindel, Taubheitsgefühle oder Herzstolpern sollten immer ärztlich abgeklärt werden. Nur eine differenzierte Blutuntersuchung kann klären, ob ein Nährstoffmangel oder eine organische Grunderkrankung vorliegt.'
    }
  ];

  return (
    <div className="space-y-14 sm:space-y-20 pb-16">
      
      {/* Hero Section */}
      <section className="relative bg-white pt-8 sm:pt-14 pb-12 sm:pb-18 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-6">
            <Activity className="w-4 h-4 text-emerald-600" />
            <span>Evidenzbasiertes Informationsportal · D-A-CH</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Headline Column */}
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Nährstoffmangel erkennen: <span className="text-emerald-700">Symptome, Ursachen</span> &amp; Hilfe
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Müdigkeit, Haarausfall oder Wadenkrämpfe? Oft stecken unentdeckte Defizite an essenziellen Mikronährstoffen wie Eisen, Vitamin D, Magnesium oder Vitamin B12 dahinter. Erfahren Sie wissenschaftlich fundiert, welche Laborwerte entscheidend sind und wie Sie Ihre Speicher sicher auffüllen.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  to="/symptome"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3.5 rounded-xl min-h-[48px] shadow-sm hover:shadow-md transition-all active:scale-98 text-sm"
                >
                  <Search className="w-4 h-4" />
                  <span>Symptom-Navigator starten</span>
                </Link>

                <Link
                  to="/bluttest"
                  className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3.5 rounded-xl min-h-[48px] border border-slate-300 transition-colors text-sm"
                >
                  <FileText className="w-4 h-4 text-slate-600" />
                  <span>Bluttest-Ratgeber</span>
                </Link>
              </div>

              {/* Trust Strip */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2">
                <span className="flex items-center gap-1 font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  DGE- &amp; RKI-Referenzen
                </span>
                <span className="flex items-center gap-1 font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Keine Kaufzwänge
                </span>
                <span className="flex items-center gap-1 font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  100% Werbetransparenz
                </span>
              </div>
            </div>

            {/* Right Card: Featured Snippet Position-0 Box */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold tracking-wider uppercase text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-md">
                    Definition nach DGE
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">ICD-10: E50–E64</span>
                </div>

                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  Was ist ein Nährstoffmangel?
                </h2>

                <p className="text-sm text-slate-700 leading-relaxed">
                  Ein <strong>Nährstoffmangel</strong> (Hypovitaminose oder Hypomineralämie) beschreibt einen Zustand, bei dem die Zufuhr oder Resorption essenzieller Vitamine, Mineralstoffe oder Spurenelemente unter dem physiologischen Bedarf liegt. Der Organismus kompensiert dies zunächst durch Entleerung seiner Gewebedepots, bevor funktionelle Mangelsymptome oder Anämien auftreten.
                </p>

                <div className="mt-4 pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500 block">Häufigste Folge:</span>
                    <strong className="text-slate-800">Chronische Fatigue</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Diagnostik:</span>
                    <strong className="text-slate-800">Serum / Vollblut</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-100">
            {stats.map((st, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <div className="text-2xl sm:text-3xl font-black text-emerald-800 font-mono tracking-tight mb-1">
                  {st.value}
                </div>
                <div className="text-xs text-slate-600 leading-snug">
                  {st.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section: The 7 Big Deficiencies */}
        <section aria-labelledby="deficiencies-heading">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
                Fokus-Themen
              </div>
              <h2 id="deficiencies-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Die 7 häufigsten Nährstoffmängel in Deutschland
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Klicken Sie auf den jeweiligen Mangel, um Symptome, Ursachen, Risikogruppen und evidenzbasierte Gegenmaßnahmen im Detail zu erfahren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deficiencies.map((d) => {
              const Icon = d.icon;
              return (
                <Link
                  key={d.slug}
                  to={d.slug}
                  className={`group block p-6 rounded-2xl border bg-white shadow-2xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 ${d.accent}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-emerald-100 flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 text-slate-800 group-hover:text-emerald-800 transition-colors" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                      {d.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-1">
                    {d.name}
                  </h3>

                  <div className="text-xs font-semibold text-emerald-800 mb-2">
                    {d.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {d.desc}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 group-hover:text-emerald-900 pt-2 border-t border-slate-100">
                    <span>Vollständigen Leitfaden lesen</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* AdSense Unit */}
        <AdSenseBanner slotId="home-mid-banner" />

        {/* Interactive Feature Teaser: Symptom-Navigator & Nutrition */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Symptom-Navigator */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-200/60 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-4">
                <Activity className="w-3.5 h-3.5" />
                <span>Interaktives Analyse-Tool</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-3">
                Der Symptom-Navigator
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                Wählen Sie Ihre Beschwerden (z. B. Haarausfall, Müdigkeit, Lidzucken oder Frieren) aus unserer strukturierten Symptom-Matrix. Der Navigator berechnet live, welche Mikronährstoffdefizite am wahrscheinlichsten infrage kommen.
              </p>
            </div>
            <Link
              to="/symptome"
              className="inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-3.5 rounded-xl min-h-[48px] shadow-sm transition-colors text-sm self-start"
            >
              <span>Jetzt Symptome abgleichen</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2: Food Matrix */}
          <div className="bg-gradient-to-br from-slate-50 to-emerald-50/40 border border-slate-200 rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>Nährstoff-Datenbank</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-3">
                Nährstoffreiche Lebensmittel
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                Entdecken Sie unsere durchsuchbare Lebensmittel-Matrix mit genauen Angaben zu mg/µg pro 100g, DGE-Tagesbedarfsdeckung und gezielten Tipps zur Steigerung der Bioverfügbarkeit (z. B. Phytat-Abbau).
              </p>
            </div>
            <Link
              to="/ernaehrung"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-xl min-h-[48px] shadow-sm transition-colors text-sm self-start"
            >
              <span>Lebensmittel-Tabelle öffnen</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </section>

        {/* Blood Test CTA Box */}
        <BloodTestCta />

        {/* E-E-A-T Redaktions-Box */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-100 rounded-xl text-emerald-800 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-bold text-slate-900">
                  Wissenschaftliche Fachredaktion &amp; Qualitätskriterien
                </h3>
                <span className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-md font-semibold">
                  Stand: September 2026
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Unsere Artikel entstehen auf der Basis anerkannter ernährungswissenschaftlicher und medizinischer Leitlinien. Wir stützen uns primär auf Veröffentlichungen der <strong>Deutschen Gesellschaft für Ernährung (DGE)</strong>, des <strong>Robert Koch-Instituts (RKI)</strong>, des <strong>Bundesinstituts für Risikobewertung (BfR)</strong> sowie der <strong>Europäischen Behörde für Lebensmittelsicherheit (EFSA)</strong>.
              </p>
              <div className="pt-2">
                <Link to="/ueber-uns" className="text-xs font-bold text-emerald-700 hover:text-emerald-800 underline">
                  Mehr über unsere Redaktionsrichtlinien &amp; Quellen erfahren &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section aria-labelledby="faq-heading" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
              Häufige Fragen
            </div>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Wissenswertes zu Nährstoffmangel &amp; Diagnostik
            </h2>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-slate-200">
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

        {/* Mandatory Medical Disclaimer */}
        <MedicalDisclaimer />

      </div>

    </div>
  );
}
