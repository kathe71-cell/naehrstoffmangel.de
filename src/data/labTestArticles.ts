import { LabTestArticle } from '../types';

export const labTestArticles: LabTestArticle[] = [
  {
    slug: 'ferritin',
    title: 'Ferritin-Wert verstehen: Speichereisen, Zielbereiche und Entzündungsgrenzen',
    metaTitle: 'Ferritin-Wert Bluttest: Was bedeuten niedrige Werte? | nährstoffmangel.de',
    metaDescription: 'Ferritin im Blutbild verstehen: Was der Speichereisenwert aussagt, warum CRP wichtig ist, welche Grenzwerte gelten & wie man leere Speicher erkennt.',
    h1: 'Ferritin-Wert im Blut: Speichereisen, Referenzbereiche und differenzierte Beurteilung',
    whatIsMeasured: 'Ferritin ist ein globuläres Protein, das im Zellinneren (v. a. in Hepatozyten der Leber, Makrophagen und Knochenmarkszellen) bis zu 4.500 Eisen-Atome in wasserlöslicher, ungiftiger Form bindet. Im Blut zirkuliert eine geringe Menge Serum-Ferritin, die unter physiologischen Bedingungen proportional zur Gesamtkörper-Eisenreserve steht (1 µg/l Serum-Ferritin entspricht ca. 8–10 mg Speichereisen).',
    purpose: 'Serum-Ferritin ist der sensitivste und etablierteste Laborparameter zur quantitativen Erfassung der körpereigenen Eisenspeicher. Es dient der Frühdiagnose eines Speichereisenmangels, noch bevor eine manifeste mikrozytäre Eisenmangelanämie mit Absinken des Hämoglobinwerts vorliegt, sowie der Verlaufskontrolle einer Eisentherapie.',
    referenceRanges: [
      {
        group: 'Gesunde Erwachsene (ohne Entzündungsaktivität)',
        range: 'ca. 15 – 150 µg/l (Frauen) bzw. 30 – 300 µg/l (Männer)',
        source: 'Thomas L., Labor und Diagnose (9. Aufl.) / DGKL',
        note: 'Labor- und methodenspezifische Referenzbereiche beachten.'
      },
      {
        group: 'WHO-Kriterium für entleerte Speicher (Allgemeinbevölkerung)',
        range: '< 15 µg/l',
        source: 'WHO Guideline on serum ferritin concentrations (2020)',
        note: 'Zeigt bei fehlender Entzündung entleerte Eisenspeicher an.'
      },
      {
        group: 'AWMF / DGHO Schwellenwert für Speicherdefizit',
        range: '< 30 µg/l',
        source: 'AWMF S3-Leitlinie 025/021 Eisenmangelanämie',
        note: 'Gilt in der klinischen Praxis als Indikator für ein behandlungsbedürftiges Defizit bei vorliegender Symptomatik.'
      },
      {
        group: 'Chronisch-entzündliche Erkrankungen / Herzinsuffizienz',
        range: '< 100 µg/l (oder 100–299 µg/l bei TfS < 20 %)',
        source: 'ESC Guidelines on Heart Failure / AWMF',
        note: 'Aufgrund der Akute-Phase-Reaktion gelten bei chronischer Inflammation deutlich höhere Entscheidungsgrenzen.'
      }
    ],
    limitations: [
      'Akute-Phase-Protein: Bei akuten oder chronischen Entzündungen (Infekte, Rheuma, Colitis, COVID-19, Adipositas) steigt Ferritin reaktiv an und kann normale oder erhöhte Werte vortäuschen, obwohl die Eisenspeicher tatsächlich entleert sind.',
      'Leberzellschädigung: Bei Fettleber, Hepatitis oder Alkoholkonsum wird intrazelluläres Ferritin unkontrolliert ins Blut freigesetzt.',
      'Malignome: Manche Tumoren führen zu paraneoplastischen Ferritinerhöhungen.'
    ],
    influencingFactors: [
      {
        factor: 'Akute Entzündung / Infektion',
        effect: 'Falsch normal oder falsch erhöht',
        clinicalRelevance: 'Gleichzeitige Bestimmung des C-reaktiven Proteins (CRP) ist für die verlässliche Interpretation sinnvoll.'
      },
      {
        factor: 'Schwangerschaft',
        effect: 'Physiologischer Abfall ab dem 2. Trimester',
        clinicalRelevance: 'Erhöhter mütterlicher und fetaler Eisenbedarf erfordert engmaschige Kontrollen.'
      },
      {
        factor: 'Hämochromatose (Eisenspeicherkrankheit)',
        effect: 'Exzessiv erhöht (> 500–1000 µg/l)',
        clinicalRelevance: 'Gefahr von Organschäden an Leber, Herz und Pankreas; erfordert humangenetische Abklärung.'
      }
    ],
    markerCombinations: [
      {
        marker: 'C-reaktives Protein (CRP)',
        rationale: 'Schließt eine Akute-Phase-Reaktion aus. Ist CRP erhöht, verliert ein normales Ferritin seine Aussagekraft für volle Eisenspeicher.'
      },
      {
        marker: 'Transferrinsättigung (TfS)',
        rationale: 'Misst das funktionell für die Blutbildung verfügbare Transporteisen. Eine TfS unter 20 % weist auch bei unklarem oder erhöhtem Ferritin auf einen funktionellen Mangel hin.'
      },
      {
        marker: 'Löslicher Transferrinrezeptor (sTfR)',
        rationale: 'Wird von Erythroblasten bei zellulärem Eisenhunger hochreguliert. Im Gegensatz zu Ferritin wird sTfR kaum durch Entzündungen beeinflusst.'
      }
    ],
    whenToSeeDoctor: [
      'Ein Serum-Ferritin unter 30 µg/l in Kombination mit Erschöpfung, Haarausfall oder Kälteintoleranz.',
      'Unerklärlich hohe Ferritinwerte (> 300 µg/l bei Frauen, > 400 µg/l bei Männern) zum Ausschluss einer Eisenüberladung.',
      'Chronische Magen-Darm-Beschwerden oder starke Monatsblutungen.'
    ],
    pillarNutrient: {
      name: 'Eisenmangel',
      slug: '/eisenmangel'
    },
    relatedArticles: [
      {
        title: 'Müdigkeit und Nährstoffmangel',
        url: '/symptome/muedigkeit',
        description: 'Wie Speichereisenmangel zu chronischer Erschöpfung führt.'
      },
      {
        title: 'Transferrinsättigung verstehen',
        url: '/laborwerte/transferrinsaettigung',
        description: 'Der ergänzende Parameter zur Beurteilung des funktionellen Eisens.'
      },
      {
        title: 'Eisenmangel bei starker Menstruation',
        url: '/ursachen/eisenmangel-starke-menstruation',
        description: 'Häufigste Ursache entleerter Eisenspeicher bei prämenopausalen Frauen.'
      }
    ],
    sources: [
      { citation: 'AWMF S3-Leitlinie 025/021: Diagnostik und Therapie der Eisenmangelanämie (DGHO / DGIM 2022).', url: 'https://www.awmf.org/' },
      { citation: 'WHO Guideline on use of ferritin concentrations to assess iron status in individuals and populations (2020).', url: 'https://www.who.int/publications/i/item/9789240008526' },
      { citation: 'Thomas, L.: Labor und Diagnose. 9. Auflage, TH-Books Verlagsgesellschaft (2020).', url: 'https://www.labor-und-diagnose.de/' },
      { citation: 'Deutsche Gesellschaft für Ernährung (DGE): Referenzwerte für Eisen (Stand 2024).', url: 'https://www.dge.de/wissenschaft/referenzwerte/eisen/' }
    ],
    lastUpdated: '03. Oktober 2026'
  },
  {
    slug: 'transferrinsaettigung',
    title: 'Transferrinsättigung (TfS) verstehen: Das funktionelle Transporteisen',
    metaTitle: 'Transferrinsättigung (TfS) im Bluttest erklärt | nährstoffmangel.de',
    metaDescription: 'Was bedeutet die Transferrinsättigung (TfS)? Berechnung aus Eisen und Transferrin, Normbereich (> 20 %) & warum sie bei Entzündung wichtig ist.',
    h1: 'Transferrinsättigung (TfS): Berechnung, Referenzbereiche und klinische Bedeutung',
    whatIsMeasured: 'Die Transferrinsättigung (TfS) ist ein rechnerischer Parameter, der angibt, wie viel Prozent der Eisenbindungsstellen des Transportproteins Transferrin im Blutplasma aktuell mit Eisenionen besetzt sind. Sie errechnet sich aus dem Serumeisen und dem Transferringehalt (Formel: Serumeisen in µmol/l / [Transferrin in g/l × 25,1] × 100 %).',
    purpose: 'Während Ferritin die statischen Gewebespeicher erfasst, bildet die Transferrinsättigung das dynamisch zirkulierende Transporteisen ab, das den teilungsaktiven Zellen des Knochenmarks für die Blutbildung unmittelbar zur Verfügung steht. Sie ist unverzichtbar bei der Differenzierung zwischen absolutem und funktionellem Eisenmangel.',
    referenceRanges: [
      {
        group: 'Physiologischer Normbereich (Erwachsene)',
        range: '16 – 45 % (in den meisten Leitlinien Zielwert > 20 %)',
        source: 'AWMF S3-Leitlinie Eisenmangelanämie / DGHO',
        note: 'Werte unter 20 % weisen auf eine unzureichende Eiseneisenversorgung des Knochenmarks hin.'
      },
      {
        group: 'Absoluter oder funktioneller Eisenmangel',
        range: '< 16 – 20 %',
        source: 'DGHO Leitlinie / KDIGO',
        note: 'Spricht für eine verminderte Verfügbarkeit von Eisen für die Erythropoese.'
      },
      {
        group: 'Verdacht auf Hämochromatose (Eisenüberladung)',
        range: '> 45 – 50 % (wiederholt nüchtern)',
        source: 'EASL Guidelines on Haemochromatosis',
        note: 'Erfordert weiterführende genetische Abklärung des HFE-Gens.'
      }
    ],
    limitations: [
      'Da das freie Serumeisen im Zähler der Berechnungsformel steht, unterliegt die Transferrinsättigung denselben ausgeprägten zirkadianen Schwankungen und sollte morgens nüchtern bestimmt werden.',
      'Östrogene (orale Kontrazeptiva, Schwangerschaft) steigern die hepatische Transferrinsynthese, was die TfS bei unverändertem Serumeisen rechnerisch senken kann.'
    ],
    influencingFactors: [
      {
        factor: 'Tageszeit der Blutentnahme',
        effect: 'Morgens höchste Werte, abends bis zu 50 % niedriger',
        clinicalRelevance: 'Blutabnahme sollte standardisiert morgens nüchtern erfolgen.'
      },
      {
        factor: 'Pille / Schwangerschaft',
        effect: 'Erhöhtes Transferrin, rechnerisch niedrigere TfS',
        clinicalRelevance: 'Klinischer Kontext muss bei der Befundung berücksichtigt werden.'
      },
      {
        factor: 'Chronische Entzündung / Hepcidin-Ausschüttung',
        effect: 'Eisen im Makrophagenspeicher gefangen, niedrige TfS trotz normalem Ferritin',
        clinicalRelevance: 'Zeigt funktionellen Eisenmangel (Iron-Restricted Erythropoiesis).'
      }
    ],
    markerCombinations: [
      {
        marker: 'Serum-Ferritin',
        rationale: 'Zusammen mit Ferritin ermöglicht die TfS die klare Unterscheidung zwischen reinem Speichermangel (Ferritin niedrig, TfS normal/niedrig) und funktionellem Mangel (Ferritin normal/hoch, TfS < 20 %).'
      },
      {
        marker: 'C-reaktives Protein (CRP)',
        rationale: 'Beurteilung entzündlicher Einflüsse auf den Hepcidinhaushalt.'
      }
    ],
    whenToSeeDoctor: [
      'Transferrinsättigung unter 20 % bei bestehenden Erschöpfungssymptomen.',
      'Wiederholte Werte über 45 % zum Ausschluss einer erblichen Hämochromatose.',
      'Bei chronischen Erkrankungen (z. B. Herzinsuffizienz, chronische Nierenerkrankung) zur Festlegung einer gezielten Eisentherapie.'
    ],
    pillarNutrient: {
      name: 'Eisenmangel',
      slug: '/eisenmangel'
    },
    relatedArticles: [
      {
        title: 'Ferritin-Wert verstehen',
        url: '/laborwerte/ferritin',
        description: 'Der primäre Marker zur Beurteilung der Körperspeicher.'
      },
      {
        title: 'Eisenwert im Blut',
        url: '/laborwerte/eisen',
        description: 'Warum freies Serumeisen allein nicht ausreicht.'
      },
      {
        title: 'Bluttest-Ratgeber',
        url: '/bluttest',
        description: 'Laborwerte, GOÄ-Ziffern und Kosten im Überblick.'
      }
    ],
    sources: [
      { citation: 'AWMF S3-Leitlinie 025/021: Diagnostik und Therapie der Eisenmangelanämie (DGHO / DGIM 2022).', url: 'https://www.awmf.org/' },
      { citation: 'European Association for the Study of the Liver (EASL): Clinical Practice Guidelines on haemochromatosis.', url: 'https://easl.eu/' },
      { citation: 'Thomas, L.: Labor und Diagnose (9. Auflage, 2020).', url: 'https://www.labor-und-diagnose.de/' }
    ],
    lastUpdated: '03. Oktober 2026'
  },
  {
    slug: 'eisen',
    title: 'Eisenwert im Blut: Warum Serumeisen allein nicht ausreicht',
    metaTitle: 'Eisenwert im Blutbild: Was das Serumeisen wirklich aussagt | nährstoffmangel.de',
    metaDescription: 'Freies Eisen im Blut: Warum der Wert stark schwankt, warum Ferritin überlegen ist & wie ein Eisen-Bluttest richtig interpretiert wird.',
    h1: 'Eisenwert im Blut (Serumeisen): Aussagekraft, Tagesschwankungen und Einordnung',
    whatIsMeasured: 'Das Serumeisen misst die Konzentration des an das Transportprotein Transferrin gebundenen dreiwertigen Eisens (Fe3+) in der flüssigen Phase des geronnenen Blutes. Es repräsentiert weniger als 0,1 Prozent des Gesamtkörpereisens und bildet lediglich eine Momentaufnahme des Eisentransports zwischen Aufnahme, Speichern und Knochenmark ab.',
    purpose: 'Die isolierte Bestimmung des Serumeisens hat in der modernen Labormedizin nur noch einen sehr eingeschränkten Stellenwert. Sie wird primär benötigt, um rechnerisch die Transferrinsättigung (TfS) zu ermitteln, oder bei akuten Vergiftungen mit Eisenpräparaten.',
    referenceRanges: [
      {
        group: 'Erwachsene Männer (morgens nüchtern)',
        range: 'ca. 11,6 – 31,3 µmol/l (65 – 175 µg/dl)',
        source: 'Thomas L., Labor und Diagnose (9. Aufl.)',
        note: 'Starke tageszeitliche und ernährungsbedingte Schwankungen.'
      },
      {
        group: 'Erwachsene Frauen (morgens nüchtern)',
        range: 'ca. 9,0 – 30,4 µmol/l (50 – 170 µg/dl)',
        source: 'Thomas L., Labor und Diagnose (9. Aufl.)',
        note: 'Zyklusabhängig vor der Menstruation oft niedriger.'
      }
    ],
    limitations: [
      'Ausgeprägte zirkadiane Rhythmik: Serumeisenwerte können im Tagesverlauf beim selben Menschen um bis zu 50–100 Prozent variieren (morgens hoch, nachmittags und abends deutlich niedriger).',
      'Starke Beeinflussung durch die letzte Mahlzeit: Bereits eine eisenhaltige Mahlzeit (z. B. Fleischgericht oder Haferflocken) am Vorabend kann das Serumeisen vorübergehend in den Normbereich anheben, obwohl die Gewebespeicher völlig entleert sind.',
      'Freisetzung bei Hämolyse: Geringfügig hämolytische Blutproben verfälschen das Ergebnis nach oben.'
    ],
    influencingFactors: [
      {
        factor: 'Nahrungsaufnahme / Vorabendmahlzeit',
        effect: 'Vorübergehender Konzentrationsanstieg',
        clinicalRelevance: 'Blutentnahme sollte nach mindestens 10–12 Stunden Nahrungskarenz erfolgen.'
      },
      {
        factor: 'Infekte und Stress',
        effect: 'Rascher Abfall des Serumeisens innerhalb von Stunden',
        clinicalRelevance: 'Hepcidinanstieg blockiert die Eisenfreisetzung aus den Makrophagen.'
      }
    ],
    markerCombinations: [
      {
        marker: 'Serum-Ferritin',
        rationale: 'Erfasst die stabilen Speichereisenreserven und ist dem Serumeisen diagnostisch weit überlegen.'
      },
      {
        marker: 'Transferrin',
        rationale: 'Ermöglicht die Berechnung der Transferrinsättigung.'
      },
      {
        marker: 'Kleines Blutbild (Hämoglobin)',
        rationale: 'Überprüfung auf eine bereits manifeste Anämie.'
      }
    ],
    whenToSeeDoctor: [
      'Bei Verdacht auf Eisenmangel sollte der Arzt gezielt um die Bestimmung von Ferritin und CRP gebeten werden.',
      'Bei versehentlicher Einnahme von Überdosen an Eisentabletten (insb. bei Kindern – Vergiftungsgefahr!).'
    ],
    pillarNutrient: {
      name: 'Eisenmangel',
      slug: '/eisenmangel'
    },
    relatedArticles: [
      {
        title: 'Ferritin-Wert verstehen',
        url: '/laborwerte/ferritin',
        description: 'Der verlässliche Speicherparameter für Eisen.'
      },
      {
        title: 'Blasse Haut als Anämiezeichen',
        url: '/symptome/blasse-haut',
        description: 'Wann Blässe auf gestörte Blutbildung hinweist.'
      },
      {
        title: 'Eisenreiche Lebensmittel',
        url: '/ernaehrung/eisenreiche-lebensmittel',
        description: 'Ernährungsquellen für eine stabile Versorgung.'
      }
    ],
    sources: [
      { citation: 'AWMF S3-Leitlinie 025/021: Diagnostik und Therapie der Eisenmangelanämie (DGHO / DGIM 2022).', url: 'https://www.awmf.org/' },
      { citation: 'Thomas, L.: Labor und Diagnose. 9. Auflage (2020).', url: 'https://www.labor-und-diagnose.de/' },
      { citation: 'DGKL: Empfehlungen zur Labordiagnostik des Eisenstoffwechsels.', url: 'https://www.dgkl.de/' }
    ],
    lastUpdated: '03. Oktober 2026'
  },
  {
    slug: 'holo-tc',
    title: 'Holo-TC (Holotranscobalamin): Das aktive Vitamin B12 verstehen',
    metaTitle: 'Holo-TC Wert im Blut: Aktives Vitamin B12 richtig deuten | nährstoffmangel.de',
    metaDescription: 'Was bedeutet der Holo-TC-Wert? Warum Holotranscobalamin dem Gesamt-B12 überlegen ist, welche Grenzwerte gelten & wie man B12-Mangel früh erkennt.',
    h1: 'Holotranscobalamin (Holo-TC): Aktives Vitamin B12, Referenzbereiche und Stufendiagnostik',
    whatIsMeasured: 'Holotranscobalamin (Holo-TC) ist der Komplex aus Vitamin B12 (Cobalamin) und seinem spezifischen Transportprotein Transcobalamin II. Nur dieser Komplex (rund 20 bis 30 Prozent des gesamten im Blut zirkulierenden B12) kann von den Zellen über rezeptorvermittelte Endozytose aufgenommen und biologisch verwertet werden. Die restlichen 70 bis 80 Prozent sind an inaktives Haptocorrin gebunden.',
    purpose: 'Holo-TC gilt als der sensitivste Frühmarker zur Erfassung eines beginnenden Vitamin-B12-Mangels. Da es ausschließlich das metabolisch verfügbare B12 misst, sinkt Holo-TC bereits ab, wenn die zelluläre Versorgung gefährdet ist, während das Gesamt-B12 im Serum durch Haptocorrin-Bindung noch scheinbar im Normbereich verweilen kann.',
    referenceRanges: [
      {
        group: 'Ausreichende B12-Versorgung',
        range: '> 50 pmol/l',
        source: 'AWMF / DEGAM-Leitlinie & Herrmann et al.',
        note: 'Ein zellulärer B12-Mangel ist bei diesem Wert sehr unwahrscheinlich.'
      },
      {
        group: 'Intermediärer Graubereich',
        range: '37 – 50 pmol/l (oder 35–50 pmol/l laborabhängig)',
        source: 'Thomas L. / Herrmann et al.',
        note: 'Beginnende Unterversorgung möglich; Bestimmung von Methylmalonsäure (MMA) empfohlen.'
      },
      {
        group: 'Manifestes B12-Defizit',
        range: '< 37 pmol/l',
        source: 'Herrmann et al., Dt. Ärzteblatt Int.',
        note: 'Spricht für ein relevantes zelluläres Defizit; Behandlungsbedarf prüfen.'
      }
    ],
    limitations: [
      'Eingeschränkte Nierenfunktion: Bei terminaler Niereninsuffizienz kann Holo-TC verlangsamt eliminiert werden und falsch-hohe Werte aufweisen.',
      'Kostennote: Die Holo-TC-Bestimmung ist methodisch anspruchsvoller und in der Regel teurer als das Gesamt-B12 (häufig IGeL-Leistung).'
    ],
    influencingFactors: [
      {
        factor: 'Rein pflanzliche (vegane) Ernährung',
        effect: 'Kontinuierlicher Abfall bei fehlender Supplementierung',
        clinicalRelevance: 'Regelmäßige Kontrolle alle 12 bis 24 Monate empfehlenswert.'
      },
      {
        factor: 'Schwangerschaft',
        effect: 'Physiologische Hämodilution kann Werte leicht senken',
        clinicalRelevance: 'Klinischen Gesamteindruck und MMA hinzuziehen.'
      }
    ],
    markerCombinations: [
      {
        marker: 'Methylmalonsäure (MMA)',
        rationale: 'Funktioneller Marker. Bei grenzwertigem Holo-TC (37–50 pmol/l) belegt ein erhöhtes MMA im Serum oder Urin den intrazellulären Funktionsmangel.'
      },
      {
        marker: 'Homocystein',
        rationale: 'Steigt bei B12- und Folatmangel an; dient als ergänzender Risikomarker im Gefäßstoffwechsel.'
      },
      {
        marker: 'Serum-Kreatinin / eGFR',
        rationale: 'Zur Beurteilung möglicher Nierenfunktionseinflüsse auf Holo-TC und MMA.'
      }
    ],
    whenToSeeDoctor: [
      'Holo-TC-Wert unter 37 pmol/l (oder 37–50 pmol/l mit erhöhtem MMA).',
      'Neurologische Symptome wie Kribbeln in den Beinen, Gangunsicherheit oder Konzentrationsstörungen.',
      'Langjährige Einnahme von Säureblockern (PPI) oder Metformin.'
    ],
    pillarNutrient: {
      name: 'Vitamin-B12-Mangel',
      slug: '/vitamin-b12-mangel'
    },
    relatedArticles: [
      {
        title: 'MMA bei Vitamin B12',
        url: '/laborwerte/mma',
        description: 'Der funktionelle Stoffwechselmarker im Detail.'
      },
      {
        title: 'Kribbeln und Taubheitsgefühle',
        url: '/symptome/kribbeln-taubheit',
        description: 'Neurologische Zeichen eines fortgeschrittenen Cobalaminmangels.'
      },
      {
        title: 'B12-Mangel bei Metformin & PPI',
        url: '/ursachen/b12-mangel-metformin-ppi',
        description: 'Warum Medikamente die Aufnahme im Magen-Darm-Trakt hemmen.'
      }
    ],
    sources: [
      { citation: 'Herrmann, W., Obeid, R. (2019): Ursachen und frühzeitige Diagnostik von Vitamin-B12-Mangel. Deutsches Ärzteblatt Int, 105(40): 680–685.', url: 'https://www.aerzteblatt.de/' },
      { citation: 'DEGAM Anwenderhandbuch: Vitamin B12 Diagnostik (Deutsche Gesellschaft für Allgemeinmedizin und Familienmedizin).', url: 'https://www.degam.de/' },
      { citation: 'Deutsche Gesellschaft für Ernährung (DGE): Referenzwerte für Vitamin B12 (Stand 2024).', url: 'https://www.dge.de/wissenschaft/referenzwerte/vitamin-b12/' }
    ],
    lastUpdated: '03. Oktober 2026'
  },
  {
    slug: 'mma',
    title: 'Methylmalonsäure (MMA): Der funktionelle B12-Gewebemarker',
    metaTitle: 'MMA-Wert bei Vitamin B12: Normbereich & Aussagekraft | nährstoffmangel.de',
    metaDescription: 'MMA im Urin oder Serum: Was bedeutet ein erhöhter Methylmalonsäure-Wert? Zusammenspiel mit Vitamin B12, Nierenfunktion & Diagnostik.',
    h1: 'Methylmalonsäure (MMA): Stoffwechselmarker für Vitamin B12, Referenzwerte und Nierenfunktion',
    whatIsMeasured: 'Methylmalonsäure (MMA) ist ein physiologisches Zwischenprodukt des zellulären Aminosäuren- und Fettsäurenstoffwechsels (Abbau von Valin, Isoleucin, Threonin, Methionin und ungeradzahligen Fettsäuren). Das Enzym Methylmalonyl-CoA-Mutase wandelt Methylmalonyl-CoA in Succinyl-CoA um – und benötigt hierfür Adenosylcobalamin (eine aktive Koenzymform von Vitamin B12). Bei zellulärem B12-Defizit staut sich das Substrat an und MMA gelangt ins Blut und in den Urin.',
    purpose: 'MMA dient als sensitiver funktioneller Stoffwechselmarker für einen intrazellulären Vitamin-B12-Mangel. Während Gesamt-B12 und Holo-TC die zirkulierende Menge im Blut messen, spiegelt MMA wider, ob den Enzymen in den Geweben tatsächlich ausreichend aktives B12 zur Verfügung steht.',
    referenceRanges: [
      {
        group: 'Serum-MMA (Erwachsene, intakte Nierenfunktion)',
        range: '< 271 nmol/l (bzw. < 32 µg/l)',
        source: 'Herrmann et al. / Thomas L. Labor und Diagnose',
        note: 'Gilt als Richtwert für unauffällige zelluläre B12-Versorgung.'
      },
      {
        group: 'Erhöhter Serum-MMA (Verdacht auf zellulären Mangel)',
        range: '> 271 – 300 nmol/l',
        source: 'DEGAM / Herrmann et al.',
        note: 'Weist bei normaler eGFR auf ein intrazelluläres Cobalamindefizit hin.'
      },
      {
        group: 'Urin-MMA (bezogen auf Kreatinin)',
        range: '< 1,5 – 2,0 mg/g Kreatinin (laborabhängig)',
        source: 'Fachlabore für Umwelt- und Ernährungsmedizin',
        note: 'Nicht-invasive Alternative zum Serumtest.'
      }
    ],
    limitations: [
      'Niereninsuffizienz: MMA wird renal eliminiert. Bei eingeschränkter glomerulärer Filtrationsrate (eGFR < 60 ml/min) reichert sich MMA im Blut an, ohne dass zwangsläufig ein B12-Mangel vorliegt. Eine Beurteilung muss daher immer unter Einbeziehung von Kreatinin und eGFR erfolgen.',
      'Schilddrüsenunterfunktion: Eine schwere Hypothyreose kann den MMA-Spiegel moderat beeinflussen.',
      'Dehydratation: Verminderte Harnausscheidung kann Messwerte beeinflussen.'
    ],
    influencingFactors: [
      {
        factor: 'Eingeschränkte eGFR / Niereninsuffizienz',
        effect: 'Falsch erhöhte MMA-Werte im Serum',
        clinicalRelevance: 'Interpretation nur in Kombination mit Holo-TC verlässlich.'
      },
      {
        factor: 'Bakterielle Fehlbesiedlung des Dünndarms (SIBO)',
        effect: 'Bakterielle Propionatbildung kann MMA moderat steigern',
        clinicalRelevance: 'Gastroenterologische Begleitsymptomatik beachten.'
      }
    ],
    markerCombinations: [
      {
        marker: 'Holotranscobalamin (Holo-TC)',
        rationale: 'Holo-TC und MMA ergänzen sich diagnostisch sinnvoll: Holo-TC zeigt die Zufuhr- und Transportsituation, MMA den funktionellen Gewebebedarf.'
      },
      {
        marker: 'Serum-Kreatinin / eGFR',
        rationale: 'Klinisch notwendig, um eine renale Ursache für den MMA-Anstieg auszuschließen.'
      }
    ],
    whenToSeeDoctor: [
      'Serum-MMA über 271–300 nmol/l bei normaler Nierenfunktion.',
      'Bestehende neurologische oder hämatologische Symptome trotz grenzwertigem Gesamt-B12.',
      'Bedarf einer differenzierten Stufendiagnostik nach unklarem B12-Bluttest.'
    ],
    pillarNutrient: {
      name: 'Vitamin-B12-Mangel',
      slug: '/vitamin-b12-mangel'
    },
    relatedArticles: [
      {
        title: 'Holo-TC verstehen',
        url: '/laborwerte/holo-tc',
        description: 'Der ergänzende Marker für aktives Vitamin B12.'
      },
      {
        title: 'B12-Mangel trotz Fleischkonsum',
        url: '/ursachen/b12-mangel-trotz-fleisch',
        description: 'Resorptionsprobleme als verborgener Auslöser erhöhter MMA-Werte.'
      },
      {
        title: 'Vitamin-B12-reiche Lebensmittel',
        url: '/ernaehrung/vitamin-b12-lebensmittel',
        description: 'Ernährungsquellen für eine stabile Versorgung.'
      }
    ],
    sources: [
      { citation: 'Herrmann, W., Obeid, R. (2019): Ursachen und frühzeitige Diagnostik von Vitamin-B12-Mangel. Deutsches Ärzteblatt Int, 105(40): 680–685.', url: 'https://www.aerzteblatt.de/' },
      { citation: 'Stabler, S. P. (2013): Vitamin B12 Deficiency. New England Journal of Medicine, 368(2): 149–160.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { citation: 'Thomas, L.: Labor und Diagnose. 9. Auflage (2020).', url: 'https://www.labor-und-diagnose.de/' }
    ],
    lastUpdated: '03. Oktober 2026'
  },
  {
    slug: '25-oh-vitamin-d',
    title: '25-OH-Vitamin-D3 (Calcidiol): Laborwerte, RKI-Kriterien und Zielbereiche',
    metaTitle: '25-OH-Vitamin-D Wert im Bluttest verstehen | nährstoffmangel.de',
    metaDescription: 'Was bedeutet der 25(OH)D-Wert? RKI- und DGE-Klassifikation (<30 mangelhaft, ≥50 nmol/l ausreichend), Saisonalität & wann supplementiert werden sollte.',
    h1: '25-OH-Vitamin-D3 (Calcidiol): Laborwerte, RKI-Klassifikation und evidenzbasierte Interpretation',
    whatIsMeasured: 'Das 25-Hydroxyvitamin D3 (25(OH)D bzw. Calcidiol) ist die primäre zirkulierende Speicherform von Vitamin D im menschlichen Blut. Es entsteht in den Leberzellen (Hepatozyten) durch 25-Hydroxylierung von Cholecalciferol (das entweder über kutane UV-B-Synthese gebildet oder über die Nahrung aufgenommen wurde). 25(OH)D weist eine biologische Plasmahalbwertszeit von rund 2 bis 3 Wochen auf.',
    purpose: '25(OH)D ist der international anerkannte Standardmarker zur Beurteilung des Vitamin-D-Versorgungsstatus. Das biologisch aktive Hormon 1,25-Dihydroxyvitamin D (Calcitriol) hat hingegen eine Halbwertszeit von nur wenigen Stunden und wird bei sinkendem 25(OH)D durch kompensatorisch ansteigendes Parathormon (sekundärer Hyperparathyreoidismus) oft künstlich im Normbereich gehalten; es ist zur Mangeldiagnostik ungeeignet.',
    referenceRanges: [
      {
        group: 'Mangelhafte Versorgung (erhöhtes Risiko für Knochenerkrankungen)',
        range: '< 30 nmol/l (entspricht < 12 ng/ml)',
        source: 'Robert Koch-Institut (RKI) / DGE',
        note: 'Klinisch relevantes Defizit mit Gefahr von Osteomalazie / Rachitis.'
      },
      {
        group: 'Suboptimale Versorgung',
        range: '30 bis unter 50 nmol/l (12 bis < 20 ng/ml)',
        source: 'RKI / DGE',
        note: 'Kein akuter Mangel, aber nicht die volle angestrebte präventive Wirkung auf die Knochengesundheit.'
      },
      {
        group: 'Ausreichende Versorgung für die Allgemeinbevölkerung',
        range: '≥ 50 nmol/l (≥ 20 ng/ml)',
        source: 'RKI / DGE / EFSA / IOM',
        note: 'Sichert bei gesunden Menschen die Knochengesundheit ab.'
      },
      {
        group: 'Höhere Zielbereiche (in der Fachliteratur diskutiert)',
        range: '75 – 125 nmol/l (30 – 50 ng/ml)',
        source: 'Endocrine Society / einzelne Fachgesellschaften',
        note: 'Wird von einigen Gesellschaften für Risikogruppen wie Osteoporose-Patienten empfohlen, ist jedoch kein allgemeiner Konsens der DGE/RKI.'
      }
    ],
    limitations: [
      'Ausgeprägte Saisonalität: In Deutschland sinken die 25(OH)D-Spiegel im Winterhalbjahr (Oktober bis April) physikalisch bedingt kontinuierlich ab und erreichen im Februar/März ihren Tiefpunkt (Nadir). Ein Einzelwert im Spätwinter darf nicht unkritisch als Dauerzustand gewertet werden.',
      'Methodenabhängigkeit: Verschiedene Testmethoden (LC-MS/MS vs. Chemilumineszenz-Immunoassays) können Abweichungen von 10 bis 20 Prozent aufweisen.',
      'Umrechnungsfaktor beachten: 1 ng/ml entspricht 2,5 nmol/l (bzw. 1 nmol/l = 0,4 ng/ml).'
    ],
    influencingFactors: [
      {
        factor: 'Jahreszeit und Sonnenexposition',
        effect: 'Bis zu 50 % höhere Werte im Spätsommer (August) gegenüber Spätwinter',
        clinicalRelevance: 'Interpretation immer im saisonalen Kontext betrachten.'
      },
      {
        factor: 'Hauttyp und Alter',
        effect: 'Dunklere Hauttypen und ältere Menschen bilden pro UV-Einheit weniger Vitamin D',
        clinicalRelevance: 'Höheres Risiko für Werte unter 30 nmol/l.'
      },
      {
        factor: 'Adipositas (BMI > 30)',
        effect: 'Geringere Bioverfügbarkeit durch Sequestrierung im Fettgewebe',
        clinicalRelevance: 'Oft niedrigere zirkulierende 25(OH)D-Spiegel trotz ausreichender Zufuhr.'
      }
    ],
    markerCombinations: [
      {
        marker: 'Parathormon (PTH)',
        rationale: 'Steigt bei funktionellem Vitamin-D-Mangel kompensatorisch an (sekundärer Hyperparathyreoidismus).'
      },
      {
        marker: 'Serum-Calcium & Phosphat',
        rationale: 'Zur Beurteilung des Calcium-Phosphat-Haushalts und zur Überwachung vor hochdosierter Einnahme.'
      }
    ],
    whenToSeeDoctor: [
      '25(OH)D-Werte unter 30 nmol/l (< 12 ng/ml).',
      'Bestehende Knochenschmerzen, Muskelschwäche oder gehäufte Knochenbrüche (Osteoporose-Verdacht).',
      'Zur Abstimmung einer leitliniengerechten Dosis vor Beginn einer Einnahme (BfR empfiehlt max. 20 µg bzw. 800 I.E./Tag für Nahrungsergänzungsmittel).'
    ],
    pillarNutrient: {
      name: 'Vitamin D Mangel',
      slug: '/vitamin-d-mangel'
    },
    relatedArticles: [
      {
        title: 'Vitamin D Mangel im Winter',
        url: '/vitamin-d-mangel',
        description: 'Symptome, Sonnenhormon-Physiologie und DGE-Empfehlungen.'
      },
      {
        title: 'Müdigkeit und Nährstoffmangel',
        url: '/symptome/muedigkeit',
        description: 'Einfluss von Vitamin D auf mitochondriale und neuromuskuläre Prozesse.'
      },
      {
        title: 'Bluttest-Ratgeber',
        url: '/bluttest',
        description: 'Kosten und Ablauf von IGeL-Messungen in der Praxis.'
      }
    ],
    sources: [
      { citation: 'Robert Koch-Institut (RKI): Antworten auf häufig gestellte Fragen zu Vitamin D (Stand 2023).', url: 'https://www.rki.de/SharedDocs/FAQ/Vitamin_D/Vitamin_D_FAQ-Liste.html' },
      { citation: 'Deutsche Gesellschaft für Ernährung (DGE): Referenzwerte für Vitamin D (Stand 2024).', url: 'https://www.dge.de/wissenschaft/referenzwerte/vitamin-d/' },
      { citation: 'Bundesinstitut für Risikobewertung (BfR): Aktualisierte Höchstmengenvorschläge für Vitamin D in Nahrungsergänzungsmitteln (2021).', url: 'https://www.bfr.bund.de/' },
      { citation: 'Rabenberg, M., Mensink, G. B. (2016): Vitamin-D-Status in Deutschland. Journal of Health Monitoring, 1(2): 36–42 (DEGS1).', url: 'https://edoc.rki.de/' }
    ],
    lastUpdated: '03. Oktober 2026'
  }
];
