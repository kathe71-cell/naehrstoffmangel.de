import { SymptomArticle } from '../types';

export const symptomArticles: SymptomArticle[] = [
  {
    slug: 'muedigkeit',
    title: 'Müdigkeit und Nährstoffmangel: Ursachen, Diagnostik & Abgrenzung',
    metaTitle: 'Müdigkeit und Nährstoffmangel: Welche Blutwerte zählen? | nährstoffmangel.de',
    metaDescription: 'Ständige Müdigkeit trotz Schlaf? Welche Nährstoffdefizite (Eisen, B12, Vitamin D) infrage kommen, warum Müdigkeit unspezifisch ist & wann Sie zum Arzt sollten.',
    h1: 'Müdigkeit und Nährstoffmangel: Zusammenhänge, Laborwerte und Differenzialdiagnosen',
    shortAnswer: 'Chronische Müdigkeit und rasche Erschöpfbarkeit gehören zu den häufigsten Beratungsanlässen in der Primärversorgung. In der Ernährungsmedizin kommen als Begleitursachen vor allem ein Speichereisenmangel (niedriges Ferritin), ein Vitamin-B12-Defizit, eine suboptimale Vitamin-D-Versorgung oder ein Folsäuremangel in Betracht. Da Müdigkeit jedoch ein hochgradig unspezifisches Symptom ist, darf sie niemals vorschnell als reines Nährstoffdefizit interpretiert werden.',
    associatedDeficiencies: [
      {
        name: 'Eisenmangel',
        slug: '/eisenmangel',
        pathomechanism: 'Eisen ist der zentrale Baustein des Hämoglobins für den Sauerstofftransport zu Gehirn und Muskulatur sowie Kofaktor der mitochondrialen Atmungskette (ATP-Synthese). Bei entleerten Speichern sinkt die zelluläre Energiebereitstellung.',
        labMarker: 'Serum-Ferritin + CRP, Transferrinsättigung',
        relevance: 'Häufig assoziiert'
      },
      {
        name: 'Vitamin-B12-Mangel',
        slug: '/vitamin-b12-mangel',
        pathomechanism: 'B12 ist essenziell für die Zellteilung im Knochenmark (Erythropoese) und die Myelinisierung von Nervenbahnen. Ein Mangel hemmt die Zellreifung und führt zu makrozytärer Anämie sowie kognitiver Erschöpfung.',
        labMarker: 'Holotranscobalamin (Holo-TC), Methylmalonsäure (MMA)',
        relevance: 'Häufig assoziiert'
      },
      {
        name: 'Vitamin-D-Mangel',
        slug: '/vitamin-d-mangel',
        pathomechanism: 'Vitamin D wirkt über den Vitamin-D-Rezeptor (VDR) modulatorisch auf das Immunsystem, neuromuskuläre Prozesse und die mitochondriale Funktion der Skelettmuskulatur.',
        labMarker: '25-Hydroxyvitamin D3 [25(OH)D]',
        relevance: 'Möglicher Kofaktor'
      },
      {
        name: 'Folsäuremangel',
        slug: '/folsaeuremangel',
        pathomechanism: 'Folat ist unentbehrlich für den C1-Kohlenstofftransfer und die DNA-Synthese. Wie bei B12 führt ein Defizit zu gestörter Blutbildung und rascher Ermüdbarkeit.',
        labMarker: 'Serum-Folat, Erythrozyten-Folat',
        relevance: 'Möglicher Kofaktor'
      }
    ],
    whyUnspecific: 'Müdigkeit ist kein isoliertes Krankheitsbild, sondern eine universelle physiologische und pathophysiologische Reaktionsweise des Organismus auf Energieungleichgewichte, Entzündungsreaktionen, hormonelle Dysbalancen oder psychische Belastungen. Nahezu jede chronische Erkrankung geht mit Erschöpfung einher.',
    differentialDiagnoses: [
      {
        condition: 'Schilddrüsenunterfunktion (Hypothyreose)',
        explanation: 'Eine verlangsamte Stoffwechselrate durch Mangel an Schilddrüsenhormonen (fT3/fT4) führt klassischerweise zu Antriebsarmut, Frieren und Gewichtszunahme.'
      },
      {
        condition: 'Schlafbezogene Atmungsstörungen (Schlafapnoe)',
        explanation: 'Nächtliche Atemaussetzer fragmentieren die Tiefschlafphasen und führen zu ausgeprägter Tagesmüdigkeit trotz scheinbar ausreichender Schlafdauer.'
      },
      {
        condition: 'Chronische Infektionen oder Entzündungsprozesse',
        explanation: 'Persistierende Zytokinaktivierung (z. B. nach Virusinfekten oder bei rheumatischen Erkrankungen) induziert Fatigue.'
      },
      {
        condition: 'Depressive Episoden / Chronischer Distress',
        explanation: 'Affektive Störungen verändern die Neurotransmitter- und Cortisolregulation und äußern sich primär in Erschöpfung und Freudlosigkeit.'
      }
    ],
    whenToSeeDoctor: [
      'Die Müdigkeit besteht seit mehr als vier Wochen ohne erkennbaren Schlafmangel.',
      'Trotz Erholungsphasen und Urlaub tritt keine Besserung des Leistungsniveaus ein.',
      'Begleitend treten unerklärlicher Gewichtsverlust, Nachtschweiß oder Lymphknotenschwellungen auf.',
      'Es bestehen depressive Verstimmungen, Antriebsverlust oder ausgeprägte Schlafstörungen.'
    ],
    redFlags: [
      'Neu aufgetretene Atemnot bei geringer Belastung oder in Ruhe',
      'Brustschmerzen, Herzrasen oder Synkopen (plötzliche Ohnmachtsanfälle)',
      'Auffallende Blässe in Kombination mit pechschwarzem Stuhlgang (Hinweis auf Magen-Darm-Blutung)',
      'Akuter rapider Leistungsabfall innerhalb weniger Tage'
    ],
    relevantLabTests: [
      {
        name: 'Ferritin & CRP',
        url: '/laborwerte/ferritin',
        description: 'Zentraler Parameter zur Beurteilung der Eisenspeicher; CRP schließt akute Entzündungen aus.'
      },
      {
        name: 'Holotranscobalamin (Holo-TC)',
        url: '/laborwerte/holo-tc',
        description: 'Misst das aktive, zellverfügbare Vitamin B12 im Serum.'
      },
      {
        name: '25-OH-Vitamin-D3',
        url: '/laborwerte/25-oh-vitamin-d',
        description: 'Bestimmt die zirkulierende Speicherform von Vitamin D im Serum.'
      },
      {
        name: 'Kleines Blutbild & TSH',
        url: '/bluttest',
        description: 'Ausschluss einer Anämie (Hämoglobin) sowie Überprüfung der Schilddrüsenfunktion.'
      }
    ],
    relatedArticles: [
      {
        title: 'Eisenmangel-Ratgeber',
        url: '/eisenmangel',
        description: 'Symptome, Ferritin-Zielbereiche und evidenzbasierte Ernährungsstrategien.'
      },
      {
        title: 'Eisenmangel bei starker Menstruation',
        url: '/ursachen/eisenmangel-starke-menstruation',
        description: 'Warum zyklische Blutverluste die häufigste Ursache für Erschöpfung bei Frauen sind.'
      },
      {
        title: 'Eisenreiche Lebensmittel',
        url: '/ernaehrung/eisenreiche-lebensmittel',
        description: 'Tabelle mit pflanzlichen und tierischen Quellen für den täglichen Bedarf.'
      }
    ],
    sources: [
      { citation: 'DEGAM-Leitlinie Nr. 2: Müdigkeit (AWMF-Registernummer 053-002, Überarbeitung 2022).', url: 'https://www.awmf.org/' },
      { citation: 'AWMF S3-Leitlinie 025/021: Diagnostik und Therapie der Eisenmangelanämie (DGHO / DGIM 2022).', url: 'https://www.awmf.org/' },
      { citation: 'Deutsche Gesellschaft für Ernährung (DGE): Referenzwerte für die Nährstoffzufuhr (Stand 2024).', url: 'https://www.dge.de/wissenschaft/referenzwerte/' },
      { citation: 'Robert Koch-Institut (RKI): DEGS1-Gesundheitssurvey – Vitamin-D-Status bei Erwachsenen in Deutschland (2016).', url: 'https://www.rki.de/' }
    ],
    lastUpdated: '03. Oktober 2026'
  },
  {
    slug: 'haarausfall',
    title: 'Haarausfall und Nährstoffmangel: Welche Nährstoffe wirklich zählen',
    metaTitle: 'Haarausfall durch Nährstoffmangel? Laborwerte & Ursachen | nährstoffmangel.de',
    metaDescription: 'Diffuser Haarausfall durch Eisenmangel, Zink oder Biotin? Wissenschaftliche Einordnung relevanter Blutwerte, Haarzyklus & wann Diagnostik nötig ist.',
    h1: 'Haarausfall und Nährstoffmangel: Evidenz, Biomarker und Differenzialdiagnosen',
    shortAnswer: 'Diffuser Haarausfall (Telogeneffluvium) kann durch metabolische Einschnitte im Körper ausgelöst werden. In der wissenschaftlichen Literatur sind vor allem entleerte Eisenspeicher (niedriges Serum-Ferritin), schwere Zinkdefizite sowie Proteinunterversorgung mit einer vorzeitigen Beendigung der Wachstumsphase (Anagenphase) der Haarfollikel assoziiert. Haarfollikel gehören zu den teilungsaktivsten Zellen des Körpers und reagieren sensibel auf Mangelzustände – gleichzeitig sind hormonelle, genetische und dermatologische Ursachen jedoch weitaus häufiger.',
    associatedDeficiencies: [
      {
        name: 'Eisenmangel (Speichereisen)',
        slug: '/eisenmangel',
        pathomechanism: 'Eisen ist essenzieller Kofaktor der Ribonukleotid-Reduktase, dem schrittmachenden Enzym der DNA-Synthese in der Haarmatrix. Niedrige Ferritinspiegel können die Telogenphase triggern.',
        labMarker: 'Serum-Ferritin (ohne Entzündung)',
        relevance: 'Häufig assoziiert'
      },
      {
        name: 'Zinkmangel',
        slug: '/zinkmangel',
        pathomechanism: 'Zink reguliert als Kofaktor von über 300 Metalloenzymen die Proteinsynthese von Keratin. Ein Mangel schwächt die Haarstruktur und kann zu telogenem Haarausfall führen.',
        labMarker: 'Zink im Serum (Nüchternblut)',
        relevance: 'Möglicher Kofaktor'
      },
      {
        name: 'Biotinmangel (Vitamin B7)',
        slug: '/vitaminmangel',
        pathomechanism: 'Biotin fungiert als Coenzym von Carboxylasen im Lipid- und Keratinstoffwechsel. Ein echter isolierter Biotinmangel ist in westlichen Mischkost-Ernährungen jedoch extrem selten.',
        labMarker: 'Biotin im Serum / Urinausscheidung',
        relevance: 'Differentialdiagnostisch relevant'
      }
    ],
    whyUnspecific: 'Haarausfall tritt zeitverzögert auf: Zwischen dem auslösenden Ereignis (z. B. hohes Fieber, Crashdiät, Nährstoffmangel, hormonelle Umstellung) und dem sichtbaren Ausfall der Haare vergehen biologisch bedingt typischerweise 2 bis 4 Monate (Dauer der Telogenphase). Ein akuter Mangel spiegelt sich daher nicht sofort im Haarbild wider.',
    differentialDiagnoses: [
      {
        condition: 'Androgenetische Alopezie',
        explanation: 'Genetisch bedingte Überempfindlichkeit der Haarfollikel gegenüber Dihydrotestosteron (DHT); häufigste Form des Haarausfalls bei Männern und Frauen.'
      },
      {
        condition: 'Postpartales Telogeneffluvium',
        explanation: 'Hormonabfall nach der Entbindung; betrifft einen Großteil der Mütter nach 2 bis 4 Monaten, normalisiert sich meist spontan.'
      },
      {
        condition: 'Schilddrüsenerkrankungen (Hashimoto / Hypothyreose)',
        explanation: 'Schilddrüsenhormone regulieren den Energiestoffwechsel der Follikel; Unter- wie Überfunktion können diffusen Haarausfall bedingen.'
      },
      {
        condition: 'Alopecia areata (Kreisrunder Haarausfall)',
        explanation: 'Autoimmunerkrankung mit herdförmigem, kreisrundem Haarausfall ohne Nährstoffursache.'
      }
    ],
    whenToSeeDoctor: [
      'Der Haarausfall besteht länger als 3 Monate oder führt zu sichtbaren lichten Arealen.',
      'Es fallen täglich deutlich mehr als 100 bis 150 Haare aus.',
      'Der Haarausfall tritt kreisrund, fleckig oder unter Narbenbildung auf.',
      'Begleitend bestehen Juckreiz, Rötungen, Schuppen oder Schmerzen auf der Kopfhaut.'
    ],
    redFlags: [
      'Vernarbende Veränderungen der Kopfhaut (Gefahr des irreversiblen Follikelverlusts)',
      'Kreisrunder Haarausfall (Autoimmunprozess erfordert dermatologische Intervention)',
      'Gleichzeitiger Ausfall von Augenbrauen, Wimpern oder Körperbehaarung'
    ],
    relevantLabTests: [
      {
        name: 'Serum-Ferritin & CRP',
        url: '/laborwerte/ferritin',
        description: 'Zentraler Speichereisenparameter; in der Trichologie wird häufig ein Wert von über 30–50 µg/l diskutiert.'
      },
      {
        name: 'Zink im Serum',
        url: '/bluttest',
        description: 'Morgens nüchtern bestimmt zur Erfassung des Spurenelementstatus.'
      },
      {
        name: 'TSH (Thyreotropin)',
        url: '/bluttest',
        description: 'Screening auf Schilddrüsendysfunktionen als häufige hormonelle Ursache.'
      }
    ],
    relatedArticles: [
      {
        title: 'Eisenmangel Symptome bei Frauen',
        url: '/eisenmangel',
        description: 'Zusammenhang zwischen niedrigen Ferritinwerten und diffusem Haarausfall.'
      },
      {
        title: 'Ferritin-Wert verstehen',
        url: '/laborwerte/ferritin',
        description: 'Was der Speichereisenwert wirklich aussagt und welche Grenzen gelten.'
      },
      {
        title: 'Zinkmangel bei veganer Ernährung',
        url: '/ursachen/zinkmangel-vegan',
        description: 'Einfluss von Phytinsäure auf die Zinkresorption und Haarstruktur.'
      }
    ],
    sources: [
      { citation: 'AWMF S3-Leitlinie: Diagnostik und Therapie der Alopecia androgenetica und des Telogeneffluviums (Deutsche Dermatologische Gesellschaft).', url: 'https://www.awmf.org/' },
      { citation: 'Trüeb, R. M. (2016): Serum Ferritin and Hair Loss. International Journal of Trichology, 8(2): 73–77.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { citation: 'Deutsche Gesellschaft für Ernährung (DGE): Referenzwerte für Spurenelemente (Eisen, Zink).', url: 'https://www.dge.de/wissenschaft/referenzwerte/' },
      { citation: 'BfR (2021): Aktualisierte Höchstmengenvorschläge für Vitamine und Mineralstoffe in Nahrungsergänzungsmitteln.', url: 'https://www.bfr.bund.de/' }
    ],
    lastUpdated: '03. Oktober 2026'
  },
  {
    slug: 'wadenkraempfe',
    title: 'Wadenkrämpfe und Nährstoffmangel: Wann fehlt Magnesium wirklich?',
    metaTitle: 'Wadenkrämpfe nachts: Fehlt Magnesium? Ursachen & Fakten | nährstoffmangel.de',
    metaDescription: 'Nächtliche Wadenkrämpfe nur durch Magnesiummangel? Warum Krämpfe neuromuskulär entstehen, welche Elektrolyte mitspielen & wann zum Arzt.',
    h1: 'Wadenkrämpfe und Nährstoffmangel: Elektrolythaushalt, Ursachen und Evidenz',
    shortAnswer: 'Nächtliche Wadenkrämpfe werden im Alltag fast reflexartig mit Magnesiummangel gleichgesetzt. Wissenschaftliche Studien und Leitlinien der Deutschen Gesellschaft für Neurologie (DGN) zeigen jedoch: Bei gesunden Erwachsenen ohne Nierenerkrankungen oder Diuretika-Einnahme ist ein echter labordiagnostischer Magnesiummangel seltener die alleinige Ursache als allgemein angenommen. Wadenkrämpfe entstehen durch eine Übererregbarkeit peripherer Nervenfasern, die auch durch Muskelüberlastung, venöse Stauung, Kälte oder Medikamente bedingt sein kann.',
    associatedDeficiencies: [
      {
        name: 'Magnesiummangel',
        slug: '/magnesiummangel',
        pathomechanism: 'Magnesium fungiert als physiologischer Calcium-Antagonist an der motorischen Endplatte. Bei erniedrigter Konzentration strömt unkontrolliert Calcium in die Muskelzelle ein, was die spontane Depolarisation und Daueranspannung begünstigt.',
        labMarker: 'Serum-Magnesium (< 0,75 mmol/l)',
        relevance: 'Häufig assoziiert'
      },
      {
        name: 'Kalium- & Natriumdysbalancen',
        slug: '/bluttest',
        pathomechanism: 'Veränderungen des extrazellulären Kalium- und Natriumspiegels verändern das Ruhemembranpotenzial von Muskel- und Nervenzellen, was zu Spontanentladungen führen kann.',
        labMarker: 'Elektrolyte im Serum (Na+, K+)',
        relevance: 'Möglicher Kofaktor'
      },
      {
        name: 'Calciummangel (Hypokalzämie)',
        slug: '/bluttest',
        pathomechanism: 'Ein Calciummangel im Extrazellulärraum erhöht die Membrandurchlässigkeit für Natriumionen und führt zu tetanischer Übererregbarkeit.',
        labMarker: 'Gesamt-Calcium / ionisiertes Calcium',
        relevance: 'Differentialdiagnostisch relevant'
      }
    ],
    whyUnspecific: 'Ein Muskelkrampf ist die finale gemeinsame Endstrecke verschiedenster neurophysiologischer Reize. Ob Dehydratation, langes Sitzen, monotone Belastung, arterielle Durchblutungsstörungen oder Nervenwurzelreizungen an der Lendenwirbelsäule – der Krampf fühlt sich für den Betroffenen identisch an.',
    differentialDiagnoses: [
      {
        condition: 'Familiäre / Idiopathische Wadenkrämpfe',
        explanation: 'Häufigste Form ohne erkennbare pathologische Grunderkrankung; tritt bevorzugt nachts in Ruhe auf.'
      },
      {
        condition: 'Medikamenten-induzierte Krämpfe',
        explanation: 'Diuretika (Entwässerungstabletten), Statine (Cholesterinsenker), Betamimetika und manche Antihypertensiva erhöhen das Krampfrisiko.'
      },
      {
        condition: 'Chronisch-venöse Insuffizienz (Krampfadern)',
        explanation: 'Venöse Rückflussstörungen führen abends zu Schweregefühl, Schwellungen und nächtlichen Wadenkrämpfen.'
      },
      {
        condition: 'Lumbale Nervenwurzelkompression',
        explanation: 'Reizung der Spinalnerven (z. B. durch Bandscheibenprotrusion) triggert reflektorische Wadenkrämpfe.'
      }
    ],
    whenToSeeDoctor: [
      'Die Krämpfe treten fast jede Nacht auf und stören den Schlaf erheblich.',
      'Die Muskelbeschwerden bessern sich trotz Dehnung und konservativer Maßnahmen nicht.',
      'Krämpfe treten nicht nur in den Waden, sondern auch in Händen, Oberschenkeln oder Rumpf auf.',
      'Es bestehen begleitend Beinschwellungen, Rötungen oder Schmerzen beim Gehen.'
    ],
    redFlags: [
      'Einseitig geschwollene, überwärmte und schmerzhafte Wade (Verdacht auf tiefe Beinvenenthrombose / TVT)',
      'Taubheitsgefühle oder Schwäche (Lähmungserscheinungen) im Fuß (Parese-Verdacht)',
      'Begleitende Schmerzen im Brustkorb oder Atemnot (Lungenembolie-Gefahr)'
    ],
    relevantLabTests: [
      {
        name: 'Serum-Magnesium',
        url: '/laborwerte/eisen',
        description: 'Referenzbereich 0,75–1,05 mmol/l; Werte unter 0,75 mmol/l weisen auf ein klinisches Defizit hin.'
      },
      {
        name: 'Serum-Elektrolyte (Kalium, Calcium, Natrium)',
        url: '/bluttest',
        description: 'Ausschluss weitergehender Elektrolytverschiebungen.'
      },
      {
        name: 'Nierenwerte (Kreatinin, eGFR)',
        url: '/bluttest',
        description: 'Beurteilung der renalen Ausscheidungsfunktion für Mineralstoffe.'
      }
    ],
    relatedArticles: [
      {
        title: 'Magnesiummangel-Ratgeber',
        url: '/magnesiummangel',
        description: 'Ursachen, Formen (Bisglycinat vs. Citrat) und DGE-Referenzwerte.'
      },
      {
        title: 'Magnesiummangel durch Medikamente',
        url: '/ursachen/magnesiummangel-medikamente',
        description: 'Wie Diuretika und Säureblocker die Ausscheidung und Resorption beeinflussen.'
      },
      {
        title: 'Magnesiumreiche Lebensmittel',
        url: '/ernaehrung/magnesiumreiche-lebensmittel',
        description: 'Top-Lebensmittel zur ernährungsbasierten Versorgung.'
      }
    ],
    sources: [
      { citation: 'DGN-Leitlinie: Crampi / Muskelkrampf (Deutsche Gesellschaft für Neurologie, AWMF-Registernummer 030/037).', url: 'https://dgn.org/leitlinien/' },
      { citation: 'Deutsche Gesellschaft für Ernährung (DGE): Referenzwerte für Magnesium (Stand 2024).', url: 'https://www.dge.de/wissenschaft/referenzwerte/magnesium/' },
      { citation: 'BfR (2021): Höchstmengenvorschläge für Magnesium in Nahrungsergänzungsmitteln (max. 250 mg/Tag).', url: 'https://www.bfr.bund.de/' },
      { citation: 'Garrison, S. R. et al. (2020): Magnesium for skeletal muscle cramps. Cochrane Database of Systematic Reviews, Issue 9.', url: 'https://www.cochranelibrary.com/' }
    ],
    lastUpdated: '03. Oktober 2026'
  },
  {
    slug: 'kribbeln-taubheit',
    title: 'Kribbeln und Taubheitsgefühle: Neurologische Zeichen von Nährstoffmangel',
    metaTitle: 'Kribbeln in Händen & Füßen: Welcher Nährstoffmangel? | nährstoffmangel.de',
    metaDescription: 'Parästhesien, Kribbeln oder taube Zehen: Wann Vitamin B12, B1 oder Folsäure dahinterstecken & warum neurologische Abklärung Vorrang hat.',
    h1: 'Kribbeln und Taubheit (Parästhesien): Nährstoffdefizite, Nervenbahnen und Diagnostik',
    shortAnswer: 'Sensibilitätsstörungen wie Kribbeln („Ameisenlaufen“), Taubheitsgefühle oder ein pelziges Gefühl in den Zehen und Fingerspitzen werden medizinisch als Parästhesien bezeichnet. Im ernährungsmedizinischen Kontext ist vor allem ein lang anhaltender Vitamin-B12-Mangel von herausragender Bedeutung, da Cobalamin für den Erhalt der Myelinscheiden um die Nervenfasern unersetzlich ist. Ein unbehandeltes Defizit kann zu irreversiblen Schädigungen des Rückenmarks (funikuläre Myelose) und der peripheren Nerven (Polyneuropathie) führen.',
    associatedDeficiencies: [
      {
        name: 'Vitamin-B12-Mangel',
        slug: '/vitamin-b12-mangel',
        pathomechanism: 'B12 ist als Kofaktor der Methionin-Synthase an der Bildung von Myelin beteiligt. Bei Mangel akkumulieren toxische Zwischenprodukte, was zur Demyelinisierung der Hinterstränge des Rückenmarks und peripherer Nerven führt.',
        labMarker: 'Holotranscobalamin (Holo-TC), Methylmalonsäure (MMA)',
        relevance: 'Häufig assoziiert'
      },
      {
        name: 'Vitamin-B1-Mangel (Thiamin)',
        slug: '/vitaminmangel',
        pathomechanism: 'Thiamin ist schlüsselnotwendig für den Glukosestoffwechsel von Nervenzellen. Ausgeprägter Mangel führt zur Beriberi-Neuropathie.',
        labMarker: 'Thiamindiphosphat im Vollblut',
        relevance: 'Differentialdiagnostisch relevant'
      },
      {
        name: 'Vitamin-B6-Dysbalance (Mangel oder Überdosierung)',
        slug: '/vitaminmangel',
        pathomechanism: 'Sowohl ein Mangel als auch eine chronische Überdosierung (über 25–50 mg/Tag über Monate) von Vitamin B6 können eine sensorische Polyneuropathie auslösen.',
        labMarker: 'Pyridoxalphosphat (PLP) im Plasma',
        relevance: 'Möglicher Kofaktor'
      }
    ],
    whyUnspecific: 'Missempfindungen entstehen, wenn Nervenfasern mechanisch gereizt, entzündet, toxisch geschädigt oder unzureichend durchblutet werden. Ein Bandscheibenvorfall an der Halswirbelsäule oder ein Karpaltunnelsyndrom kann exakt dasselbe Kribbeln in den Fingern hervorrufen wie eine metabolische Nervenstörung.',
    differentialDiagnoses: [
      {
        condition: 'Diabetische Polyneuropathie',
        explanation: 'Chronisch erhöhte Blutzuckerspiegel schädigen mikrovaskuläre Gefäße und periphere Nervenbahnen; häufigste Neuropathieursache in Industrieländern.'
      },
      {
        condition: 'Karpaltunnelsyndrom / Nervenkompressionssyndrome',
        explanation: 'Mechanischer Druck auf den Nervus medianus am Handgelenk führt zu Kribbeln und Schmerzen in Daumen, Zeige- und Mittelfinger.'
      },
      {
        condition: 'Radikulopathien (Bandscheibenschäden)',
        explanation: 'Kompression von Nervenwurzeln an der Hals- oder Lendenwirbelsäule mit Ausstrahlung in Arme oder Beine.'
      },
      {
        condition: 'Alkohologene Neuropathie',
        explanation: 'Kombination aus direkter toxischer Wirkung von Alkohol und alimentärem Thiamin-/B-Vitamin-Defizit.'
      }
    ],
    whenToSeeDoctor: [
      'Das Kribbeln oder Taubheitsgefühl hält länger als wenige Tage an oder breitet sich aus.',
      'Es tritt eine spürbare Gangunsicherheit („Gehen wie auf Watte“) auf.',
      'Es besteht eine rein pflanzliche (vegane) Ernährungsweise ohne konsequente B12-Supplementierung.',
      'Es werden langfristig Säureblocker (PPI) oder Metformin eingenommen.'
    ],
    redFlags: [
      'Plötzliches Kribbeln oder Lähmung einer Körperhälfte oder im Gesicht (Schlaganfall-Verdacht – sofort 112)',
      'Akuter Verlust der Kontrolle über Blasen- oder Mastdarmfunktion',
      'Rasche Zunahme von Muskelschwäche mit Fallfuß oder Unfähigkeit, Gegenstände zu greifen'
    ],
    relevantLabTests: [
      {
        name: 'Holotranscobalamin (Holo-TC)',
        url: '/laborwerte/holo-tc',
        description: 'Frühester sensitiver Biomarker für aktives B12; Werte < 37–50 pmol/l zeigen Mangel an.'
      },
      {
        name: 'Methylmalonsäure (MMA)',
        url: '/laborwerte/mma',
        description: 'Funktioneller Gewebemarker; erhöht bei zellulärem B12-Defizit (unter Berücksichtigung der eGFR).'
      },
      {
        name: 'HbA1c & Nüchternglukose',
        url: '/bluttest',
        description: 'Ausschluss eines bislang unentdeckten Diabetes mellitus als Ursache der Neuropathie.'
      }
    ],
    relatedArticles: [
      {
        title: 'Vitamin-B12-Mangel-Ratgeber',
        url: '/vitamin-b12-mangel',
        description: 'Symptome, Resorption via Intrinsic Factor und Leitlinien-Dosierungen.'
      },
      {
        title: 'Holo-TC verstehen',
        url: '/laborwerte/holo-tc',
        description: 'Warum Gesamt-B12 im Serum oft trügerisch ist und was Holo-TC misst.'
      },
      {
        title: 'B12-Mangel bei Metformin & PPI',
        url: '/ursachen/b12-mangel-metformin-ppi',
        description: 'Mechanismen, wie Magensäureblocker und Diabetesmedikamente die B12-Aufnahme hemmen.'
      }
    ],
    sources: [
      { citation: 'DGN-Leitlinie: Diagnostik bei Polyneuropathien (Deutsche Gesellschaft für Neurologie, AWMF-Registernummer 030/067).', url: 'https://dgn.org/leitlinien/' },
      { citation: 'Herrmann, W., Obeid, R. (2019): Ursachen und frühzeitige Diagnostik von Vitamin-B12-Mangel. Deutsches Ärzteblatt Int, 105(40): 680–685.', url: 'https://www.aerzteblatt.de/' },
      { citation: 'Deutsche Gesellschaft für Ernährung (DGE): Referenzwerte für Vitamin B12 (Stand 2024).', url: 'https://www.dge.de/wissenschaft/referenzwerte/vitamin-b12/' },
      { citation: 'Stabler, S. P. (2013): Clinical practice. Vitamin B12 deficiency. New England Journal of Medicine, 368(2): 149–160.', url: 'https://pubmed.ncbi.nlm.nih.gov/' }
    ],
    lastUpdated: '03. Oktober 2026'
  },
  {
    slug: 'konzentrationsprobleme',
    title: 'Konzentrationsprobleme und Nährstoffmangel: Brain Fog wissenschaftlich erklärt',
    metaTitle: 'Konzentrationsstörungen durch Nährstoffmangel? Fakten | nährstoffmangel.de',
    metaDescription: 'Brain Fog, Vergesslichkeit und Konzentrationsschwäche: Welche Rolle spielen Eisen, B12 und Vitamin D für den neuronalen Stoffwechsel?',
    h1: 'Konzentrationsprobleme (Brain Fog): Nährstoffdefizite, Neurotransmitter und Diagnostik',
    shortAnswer: 'Geistige Erschöpfung, Konzentrationsschwierigkeiten und das Gefühl von „Gehirnnebel“ (Brain Fog) sind häufig geklagte Symptome. Das menschliche Gehirn beansprucht rund 20 Prozent des gesamten Grundumsatzes an Glukose und Sauerstoff. Defizite an Spurenelementen wie Eisen (Sauerstoffversorgung, Neurotransmittersynthese), Vitamin B12 (Myelinstruktur) oder Jod (Schilddrüsenhormone) können neuronale Stoffwechselpfade nachweislich beeinträchtigen. Gleichzeitig sind jedoch Schlafmangel, Reizüberflutung, Stress und depressive Episoden weitaus häufigere Ursachen.',
    associatedDeficiencies: [
      {
        name: 'Eisenmangel',
        slug: '/eisenmangel',
        pathomechanism: 'Eisen ist unabdingbar für die Synthese von Dopamin, Noradrenalin und Serotonin (via Tryptophanhydroxylase und Tyrosinhydroxylase) sowie für die zerebrale Sauerstoffversorgung.',
        labMarker: 'Serum-Ferritin + CRP',
        relevance: 'Häufig assoziiert'
      },
      {
        name: 'Vitamin-B12-Mangel',
        slug: '/vitamin-b12-mangel',
        pathomechanism: 'B12-Mangel führt zur Akkumulation von Homocystein und MMA, was neurotoxische Effekte ausübt und die Signalübertragung im Zentralnervensystem stört.',
        labMarker: 'Holo-TC, Serum-MMA',
        relevance: 'Häufig assoziiert'
      },
      {
        name: 'Jodmangel',
        slug: '/jodmangel',
        pathomechanism: 'Jod ist Grundbaustein der Schilddrüsenhormone T3/T4, die die neuronale Erregbarkeit und Verarbeitungsgeschwindigkeit des Gehirns modulieren.',
        labMarker: 'Urin-Jodausscheidung, TSH / fT3 / fT4',
        relevance: 'Möglicher Kofaktor'
      }
    ],
    whyUnspecific: 'Kognitive Leistungsfähigkeit reagiert hochgradig vulnerabel auf Schlafdefizite, psychische Belastungen, subklinische Infektionen und hormonelle Schwankungen. Ein Nährstoffdefizit kann einen beitragenden Faktor darstellen, ist jedoch selten das alleinige isolierte Phänomen.',
    differentialDiagnoses: [
      {
        condition: 'Chronischer Schlafmangel / Schlafstörungen',
        explanation: 'Unzureichende REM- und Tiefschlafphasen verhindern die synaptische Konsolidierung und führen zu akuten kognitiven Defiziten.'
      },
      {
        condition: 'Chronischer Stress / Burnout / Depression',
        explanation: 'Dauerhaft erhöhte Glukokortikoidspiegel (Cortisol) beeinträchtigen die Neuroplastizität im Hippocampus.'
      },
      {
        condition: 'Post-akute Infektionssyndrome (Post-COVID / ME/CFS)',
        explanation: 'Immunologische und neuroinflammatorische Prozesse nach Infekten mit typischer Symptomkonstellation aus Brain Fog und Belastungsintoleranz.'
      },
      {
        condition: 'ADHS im Erwachsenenalter',
        explanation: 'Neurobiologische Störung der dopaminergen Signalübertragung, die primär zu Ablenkbarkeit und Exekutivfunktionsstörungen führt.'
      }
    ],
    whenToSeeDoctor: [
      'Die Konzentrationsprobleme schränken den Berufs- oder Studienalltag über Wochen spürbar ein.',
      'Es treten merkliche Gedächtnislücken oder Wortfindungsstörungen auf.',
      'Es bestehen begleitend depressive Verstimmungen, anhaltende Schlaflosigkeit oder Gewichtsverlust.',
      'Trotz Ausschlafens und Lebensstiloptimierung tritt keine kognitive Klarheit ein.'
    ],
    redFlags: [
      'Plötzliche Sprach- oder Sehstörungen (Notfall – Schlaganfall-Verdacht)',
      'Rasche Wesensveränderungen oder Desorientiertheit zu Ort und Zeit',
      'Begleitende schwere Kopfschmerzen mit Fieber oder Nackensteifigkeit'
    ],
    relevantLabTests: [
      {
        name: 'Ferritin & CRP',
        url: '/laborwerte/ferritin',
        description: 'Überprüfung der Eisenspeicher im Hinblick auf Neurotransmittersynthese.'
      },
      {
        name: 'Holotranscobalamin (Holo-TC)',
        url: '/laborwerte/holo-tc',
        description: 'Frühzeitige Erkennung eines zellulären B12-Defizits vor Eintreten morphologischer Schäden.'
      },
      {
        name: 'TSH & freie Schilddrüsenwerte (fT3, fT4)',
        url: '/bluttest',
        description: 'Ausschluss einer subklinischen oder manifesten Schilddrüsenunterfunktion.'
      }
    ],
    relatedArticles: [
      {
        title: 'Eisenmangel und Fatigue',
        url: '/eisenmangel',
        description: 'Wie Speichereisenmangel die mitochondriale ATP-Bildung im Gehirn beeinflusst.'
      },
      {
        title: 'B12-Mangel trotz Fleischkonsum',
        url: '/ursachen/b12-mangel-trotz-fleisch',
        description: 'Warum Resorptionsstörungen im Magen auch Fleischesser treffen können.'
      },
      {
        title: 'Symptom-Navigator',
        url: '/symptome',
        description: 'Interaktive Übersicht über häufige assoziierte Symptome und Mikronährstoffe.'
      }
    ],
    sources: [
      { citation: 'WHO: Iron deficiency anaemia: assessment, prevention and control (Genf).', url: 'https://www.who.int/' },
      { citation: 'Deutsche Gesellschaft für Neurologie (DGN): Leitlinien Demenzen und kognitive Störungen.', url: 'https://dgn.org/leitlinien/' },
      { citation: 'Deutsche Gesellschaft für Ernährung (DGE): Referenzwerte für die Nährstoffzufuhr (2024).', url: 'https://www.dge.de/wissenschaft/referenzwerte/' },
      { citation: 'BfR (2021): Höchstmengen für Vitamine und Mineralstoffe in Nahrungsergänzungsmitteln.', url: 'https://www.bfr.bund.de/' }
    ],
    lastUpdated: '03. Oktober 2026'
  },
  {
    slug: 'blasse-haut',
    title: 'Blasse Haut und Nährstoffmangel: Anämiezeichen verstehen',
    metaTitle: 'Blasse Haut durch Nährstoffmangel? Eisen & B12 im Check | nährstoffmangel.de',
    metaDescription: 'Ungewöhnliche Blässe von Haut und Bindehaut: Wann ein Mangel an Eisen, B12 oder Folsäure dahintersteckt & welche Blutwerte Klarheit schaffen.',
    h1: 'Blasse Haut (Blässe): Blutbildung, Anämieformen und differenzierte Diagnostik',
    shortAnswer: 'Eine auffällige oder neu aufgetretene Blässe der Gesichts- und Körperhaut kann ein klinischer Hinweis auf eine verminderte Sauerstofftransportkapazität des Blutes (Anämie) sein. Bei der körperlichen Untersuchung beurteilt die Ärztin oder der Arzt insbesondere die Konjunktiven (Bindehäute der Augen), die Mundschleimhaut und die Handinnenflächen, da die Hautfarbe selbst stark von der individuellen Pigmentierung und kutanen Durchblutung abhängt. Als ernährungsbedingte Auslöser kommen primär Eisenmangel (mikrozytäre hypochrome Anämie) sowie Vitamin-B12- oder Folsäuremangel (makrozytäre hyperchrome Anämie) infrage.',
    associatedDeficiencies: [
      {
        name: 'Eisenmangel (Eisenmangelanämie)',
        slug: '/eisenmangel',
        pathomechanism: 'Eisen ist zentraler Bestandteil des roten Blutfarbstoffs Hämoglobin. Fehlt Eisen, bilden die Vorläuferzellen im Knochenmark zu kleine (mikrozytäre) und blasse (hypochrome) Erythrozyten mit verringertem Hämoglobingehalt.',
        labMarker: 'Hämoglobin (Hb), Erythrozytenindizes (MCV, MCH), Ferritin',
        relevance: 'Häufig assoziiert'
      },
      {
        name: 'Vitamin-B12-Mangel',
        slug: '/vitamin-b12-mangel',
        pathomechanism: 'Gestörte DNA-Synthese führt zu verlangsamter Kernteilung bei normalem Zellwachstum. Es entstehen vergrößerte, unreife Makrozyten/Megaloblasten, die vorzeitig in der Milz abgebaut werden (hämolytische Komponente führt oft zu blass-gelblicher Hautfarbe).',
        labMarker: 'Holo-TC, Serum-MMA, MCV erhöht',
        relevance: 'Häufig assoziiert'
      },
      {
        name: 'Folsäuremangel',
        slug: '/folsaeuremangel',
        pathomechanism: 'Analog zu B12 führt Folsäuremangel zu einer megaloblastären Reifungsstörung im Knochenmark und verminderter Erythrozytenzahl.',
        labMarker: 'Serum-Folat, Erythrozyten-Folat',
        relevance: 'Möglicher Kofaktor'
      }
    ],
    whyUnspecific: 'Hautblässe kann schlichtweg konstitutionell bedingt sein (helle Hautfarbe, dicke Epidermis, tiefer liegende Kapillargefäße) oder durch Kälteeinwirkung (Vasokonstriktion), niedrigen Blutdruck (Hypotonie) oder akuten Schreck ausgelöst werden. Sie ist daher für sich genommen kein Beweis für eine Blutanomalie.',
    differentialDiagnoses: [
      {
        condition: 'Konstitutionelle / genetische Hautpigmentierung',
        explanation: 'Individuell geringe Melaninproduktion oder geringe Kapillardichte ohne jeglichen Krankheitswert.'
      },
      {
        condition: 'Arterielle Hypotonie (niedriger Blutdruck)',
        explanation: 'Geringerer peripherer Perfusionsdruck bedingt eine blassere Erscheinung, besonders morgens oder bei raschem Aufstehen.'
      },
      {
        condition: 'Akute oder chronische Blutverluste (okkulte gastrointestinale Blutung)',
        explanation: 'Blutverluste über Magenulcera, Polypen oder Darmentzündungen entleeren Eisen rasch und führen zu manifester Anämie.'
      },
      {
        condition: 'Nierenerkrankungen (renale Anämie)',
        explanation: 'Verminderte Bildung des blutbildungsfördernden Hormons Erythropoetin (EPO) in der Niere.'
      }
    ],
    whenToSeeDoctor: [
      'Die Blässe hat in den letzten Wochen oder Monaten merklich zugenommen.',
      'Die Bindehaut der Augen oder das Zahnfleisch erscheinen auffallend weiß oder wachsartig.',
      'Begleitend bestehen Kurzatmigkeit bei Treppensteigen, Herzklopfen oder chronische Erschöpfung.',
      'Es treten Schwindelanfälle, Ohrensausen oder Kälteintoleranz auf.'
    ],
    redFlags: [
      'Pechschwarzer, teerartiger Stuhlgang (Teerstuhl / Meläna) – sofortige Notfallabklärung!',
      'Erbrechen von Blut oder kaffeesatzartigem Material',
      'Akute Atemnot oder Engegefühl in der Brust bei leichter Belastung'
    ],
    relevantLabTests: [
      {
        name: 'Kleines Blutbild (Hb, MCV, MCH)',
        url: '/bluttest',
        description: 'Bestimmt den Hämoglobinwert und morphologische Erythrozytenindizes zur Unterscheidung mikro- vs. makrozytär.'
      },
      {
        name: 'Serum-Ferritin & CRP',
        url: '/laborwerte/ferritin',
        description: 'Erfasst die Speichereisenreserven zur Abklärung einer mikrozytären Anämie.'
      },
      {
        name: 'Holotranscobalamin (Holo-TC)',
        url: '/laborwerte/holo-tc',
        description: 'Zur Abklärung makrozytärer Erythrozytenveränderungen (hoher MCV).'
      }
    ],
    relatedArticles: [
      {
        title: 'Eisenwert im Blut verstehen',
        url: '/laborwerte/eisen',
        description: 'Der Unterschied zwischen freiem Serumeisen, Ferritin und Hämoglobin.'
      },
      {
        title: 'Eisenreiche Lebensmittel',
        url: '/ernaehrung/eisenreiche-lebensmittel',
        description: 'Ernährungsquellen und Tipps zur Steigerung der Eisenaufnahme.'
      },
      {
        title: 'Bluttest-Ratgeber',
        url: '/bluttest',
        description: 'Ablauf, Kosten und Parameter des labormedizinischen Bluttests.'
      }
    ],
    sources: [
      { citation: 'AWMF S3-Leitlinie 025/021: Diagnostik und Therapie der Eisenmangelanämie (DGHO / DGIM 2022).', url: 'https://www.awmf.org/' },
      { citation: 'WHO Guidelines on Haemoglobin Concentrations for the Diagnosis of Anaemia and Assessment of Severity (2024).', url: 'https://www.who.int/' },
      { citation: 'Deutsche Gesellschaft für Hämatologie und Medizinische Onkologie (DGHO): Leitlinie Eisenmangel und Eisenmangelanämie.', url: 'https://www.onkopedia.com/' },
      { citation: 'Deutsche Gesellschaft für Ernährung (DGE): Referenzwerte Eisen und Vitamin B12 (Stand 2024).', url: 'https://www.dge.de/wissenschaft/referenzwerte/' }
    ],
    lastUpdated: '03. Oktober 2026'
  }
];
