import { FoodArticle } from '../types';

export const foodArticles: FoodArticle[] = [
  {
    slug: 'eisenreiche-lebensmittel',
    nutrient: 'Eisen',
    nutrientSlug: '/eisenmangel',
    metaTitle: 'Eisenhaltige Lebensmittel: Tabelle mit Gehalt & Bioverfügbarkeit | nährstoffmangel.de',
    metaDescription: 'Die besten eisenreichen Lebensmittel im Vergleich: Pflanzliches vs. tierisches Eisen, Resorptions-Booster (Vitamin C) & DGE-Referenzwerte.',
    h1: 'Eisenreiche Lebensmittel: Gehaltstabelle, Bioverfügbarkeit und optimale Kombinationen',
    intro: 'Eine bedarfsgerechte Eisenversorgung über die Ernährung erfordert mehr als den reinen Blick auf Gramm- oder Milligrammangaben auf der Verpackung. Entscheidend für den Körper ist die sogenannte Bioverfügbarkeit – also welcher Anteil des in der Nahrung enthaltenen Eisens tatsächlich über die Dünndarmschleimhaut ins Blut gelangt. Man unterscheidet grundlegend zwischen zweiwertigem Häm-Eisen aus tierischen Produkten (Resorptionsquote 15–35 %) und dreiwertigem Nicht-Häm-Eisen aus pflanzlichen Quellen (Resorptionsquote 2–15 %), dessen Aufnahme stark von Nahrungsbegleitstoffen beeinflusst wird.',
    dgeRequirementSummary: 'DGE-Referenzwerte für Erwachsene: Männer 11 mg/Tag, menstruierende Frauen 16 mg/Tag, postmenopausale Frauen 14 mg/Tag, nicht menstruierende jüngere Frauen 11 mg/Tag, Schwangere 27 mg/Tag, Frauen nach der Geburt (Stillzeit) 16 mg/Tag.',
    topFoods: [
      {
        name: 'Kürbiskerne',
        amount: '12,5 mg',
        portionNote: 'ca. 3,8 mg pro Portion (30 g Handvoll)',
        category: 'Getreide & Saaten',
        vegan: true,
        tip: 'Leicht anrösten und als Topping für Suppen oder Salate nutzen.'
      },
      {
        name: 'Sesam / Tahin (Sesammus)',
        amount: '10,0 mg',
        portionNote: 'ca. 2,0 mg pro Esslöffel (20 g)',
        category: 'Getreide & Saaten',
        vegan: true,
        tip: 'Hervorragend als Basis für Dressings und Hummus.'
      },
      {
        name: 'Schweineleber (gegart)',
        amount: '18,0 mg',
        portionNote: 'ca. 18,0 mg pro Portion (100 g)',
        category: 'Tierische Produkte',
        vegan: false,
        tip: 'Höchster Häm-Eisengehalt. Schwangere sollten Leber im 1. Trimester wegen sehr hohem Vitamin-A-Gehalt meiden!'
      },
      {
        name: 'Rindfleisch (mager, gegart)',
        amount: '2,6 mg',
        portionNote: 'ca. 3,9 mg pro Steak (150 g)',
        category: 'Tierische Produkte',
        vegan: false,
        tip: 'Zweiwertiges Häm-Eisen mit hoher, von Begleitstoffen weitgehend unbeeinflusster Bioverfügbarkeit.'
      },
      {
        name: 'Linsen (trocken)',
        amount: '8,0 mg',
        portionNote: 'ca. 4,8 mg pro verzehrfertige Portion (60 g trocken)',
        category: 'Hülsenfrüchte',
        vegan: true,
        tip: 'Vor dem Kochen einweichen und mit frischer Paprika oder Zitronensaft servieren.'
      },
      {
        name: 'Kichererbsen (getrocknet)',
        amount: '6,1 mg',
        portionNote: 'ca. 3,7 mg pro Portion (60 g trocken)',
        category: 'Hülsenfrüchte',
        vegan: true,
        tip: 'Als Curry oder Falafel idealer pflanzlicher Eisenlieferant.'
      },
      {
        name: 'Haferflocken',
        amount: '4,5 mg',
        portionNote: 'ca. 2,3 mg pro Schale Porridge (50 g)',
        category: 'Getreide & Saaten',
        vegan: true,
        tip: 'Mit Beerenobst (Vitamin C) zubereiten, um die Resorption zu verdreifachen.'
      },
      {
        name: 'Pfifferlinge (frisch)',
        amount: '6,5 mg',
        portionNote: 'ca. 6,5 mg pro 100 g',
        category: 'Gemüse & Pilze',
        vegan: true,
        tip: 'Frisch zubereitet eine der eisenreichsten Pilzsorten.'
      }
    ],
    bioavailabilityFactors: {
      enhancers: [
        'Vitamin C (Ascorbinsäure): Reduziert schwer lösliches dreiwertiges Fe3+ zu gut löslichem zweiwertigem Fe2+ (z. B. Orangensaft, Paprika, Brokkoli, Beeren).',
        'Organische Säuren (Zitronensäure, Milchsäure): Bilden lösliche Komplexe im Darmlumen.',
        'Sauerteiggärung und Keimung: Bauen resorptionshemmende Phytinsäure durch enzymatische Spaltung um bis zu 70–90 % ab.',
        'Fleisch, Fisch und Geflügel („Meat-Factor“): Fördert auch die parallele Aufnahme von Nicht-Häm-Eisen.'
      ],
      inhibitors: [
        'Phytinsäure / Phytat: In unfermentiertem Vollkorn, Hülsenfrüchten und Kleie.',
        'Polyphenole und Tannine: In Kaffee, schwarzem Tee, grünem Tee, Rotwein und Kakao (mind. 1–2 Stunden Abstand zu den Mahlzeiten halten).',
        'Calcium: Hemmt bei hohen Konzentrationen (> 300 mg) sowohl Häm- als auch Nicht-Häm-Eisen kompetitiv (z. B. Milchprodukte zum Essen).',
        'Phosphate: In verarbeiteten Lebensmitteln und Softdrinks.'
      ],
      preparationTips: [
        'Trinken Sie Kaffee oder schwarzen Tee nicht direkt zum Essen, sondern mit mindestens einer Stunde Zeitabstand.',
        'Kombinieren Sie jedes Getreide- oder Hülsenfruchtgericht mit einer Vitamin-C-Quelle (z. B. ein Spritzer Zitronensaft, frische Paprika oder ein Glas Orangensaft).',
        'Weichen Sie Hülsenfrüchte über Nacht ein und schütten Sie das Einweichwasser weg.'
      ]
    },
    practicalMealIdeas: [
      'Frühstück: Haferflocken-Porridge mit frischen Erdbeeren oder Blaubeeren und einem Esslöffel Kürbiskernen.',
      'Mittagessen: Vollkorn-Linsensalat mit buntem Paprikagemüse, Petersilie und Zitronen-Olivenöl-Vinaigrette.',
      'Abendessen: Vollkorn-Sauerteigbrot mit Tahin-Kichererbsen-Aufstrich und frischen Tomatenscheiben.'
    ],
    whenFoodIsNotEnough: 'Liegt ein labordiagnostisch nachgewiesener manifester Speichereisenmangel (Serum-Ferritin < 15–30 µg/l) oder eine Eisenmangelanämie vor, reicht eine bloße Ernährungsumstellung in der Regel nicht aus, um die entleerten Körperspeicher zeitnah aufzufüllen. Bei einem Defizit von 500 bis 1.000 mg Eisen im Gesamtkörper würde dies über die Nahrung viele Monate bis Jahre dauern. In solchen Fällen ist eine ärztlich begleitete orale Eisentherapie (z. B. mit Eisenbisglycinat oder Eisensulfat) oder bei Unverträglichkeit eine intravenöse Gabe medizinisch indiziert.',
    relatedLabTest: {
      name: 'Serum-Ferritin & Transferrinsättigung',
      url: '/laborwerte/ferritin'
    },
    relatedArticles: [
      {
        title: 'Eisenmangel Symptome',
        url: '/eisenmangel',
        description: 'Müdigkeit, Blässe und Ferritinwerte im Detail.'
      },
      {
        title: 'Eisenmangel bei starker Menstruation',
        url: '/ursachen/eisenmangel-starke-menstruation',
        description: 'Wie Blutverluste den Bedarf steigern.'
      },
      {
        title: 'Blasse Haut als Anämiezeichen',
        url: '/symptome/blasse-haut',
        description: 'Wann Blässe auf einen Mangel hindeutet.'
      }
    ],
    sources: [
      { citation: 'Bundeslebensmittelschlüssel (BLS), Version 3.02: Nährstoffdatenbank der Bundesrepublik Deutschland.', url: 'https://www.ble.de/' },
      { citation: 'Deutsche Gesellschaft für Ernährung (DGE): Referenzwerte für Eisen (Stand 2024).', url: 'https://www.dge.de/wissenschaft/referenzwerte/eisen/' },
      { citation: 'AWMF S3-Leitlinie 025/021: Diagnostik und Therapie der Eisenmangelanämie (DGHO / DGIM 2022).', url: 'https://www.awmf.org/' },
      { citation: 'Hurrell, R., Egli, I. (2010): Iron bioavailability and dietary reference values. American Journal of Clinical Nutrition, 91(5): 1461S–1467S.', url: 'https://academic.oup.com/ajcn' }
    ],
    lastUpdated: '03. Oktober 2026'
  },
  {
    slug: 'vitamin-b12-lebensmittel',
    nutrient: 'Vitamin B12',
    nutrientSlug: '/vitamin-b12-mangel',
    title: 'Vitamin-B12-reiche Lebensmittel: Quellen, Bedarf & vegane Realität',
    metaTitle: 'Vitamin B12 in Lebensmitteln: Tabelle, Gehalt & Mythen | nährstoffmangel.de',
    metaDescription: 'Welche Lebensmittel enthalten echtes Vitamin B12? Tabelle tierischer Quellen, vegane Fakten (Algen-Mythos) & DGE-Zufuhrempfehlungen.',
    h1: 'Vitamin-B12-Lebensmittel: Vorkommen, tierische Quellen und pflanzliche Grenzen',
    intro: 'Vitamin B12 (Cobalamin) nimmt unter den Vitaminen eine ernährungsphysiologische Sonderstellung ein: Es kann im gesamten Pflanzen- und Tierreich weder von Pflanzen noch von Tieren selbst synthetisiert werden, sondern ausschließlich von bestimmten Mikroorganismen (Bakterien und Archaeen). Tiere nehmen diese Bakterien über die Nahrung oder den Boden auf, bzw. Mikroorganismen im Pansen von Wiederkäuern bilden das Vitamin, das sich anschließend in Fleisch, Innereien, Milch und Eiern anreichert. Für den Menschen sind naturbelassene pflanzliche Nahrungsmittel daher keine verlässliche Quelle.',
    dgeRequirementSummary: 'DGE-Referenzwert: Jugendliche ab 15 Jahren und Erwachsene 4,0 µg/Tag. Schwangere 4,5 µg/Tag, Stillende 5,5 µg/Tag.',
    topFoods: [
      {
        name: 'Rinderleber (gegart)',
        amount: '65,0 µg',
        portionNote: 'ca. 65,0 µg pro 100 g Portion',
        category: 'Tierische Produkte',
        vegan: false,
        tip: 'Enthält die höchsten natürlichen B12-Konzentrationen, da die Leber das zentrale Speicherorgan darstellt.'
      },
      {
        name: 'Hering / Makrele',
        amount: '8,5 – 10,0 µg',
        portionNote: 'ca. 13,0 µg pro Fischfilet (150 g)',
        category: 'Fisch & Meeresfrüchte',
        vegan: false,
        tip: 'Liefert gleichzeitig wertvolle marine Omega-3-Fettsäuren (EPA/DHA).'
      },
      {
        name: 'Lachs (Atlantik, gegart)',
        amount: '3,0 µg',
        portionNote: 'ca. 4,5 µg pro Portion (150 g Filet)',
        category: 'Fisch & Meeresfrüchte',
        vegan: false,
        tip: 'Deckt bereits mit einer Portion den gesamten Tagesbedarf eines Erwachsenen.'
      },
      {
        name: 'Rindfleisch (mager, gegart)',
        amount: '2,5 µg',
        portionNote: 'ca. 3,8 µg pro Steak (150 g)',
        category: 'Tierische Produkte',
        vegan: false,
        tip: 'Regelmäßiger Verzehr sichert den Grundbedarf bei gesunder Magenresorption.'
      },
      {
        name: 'Emmentaler / Bergkäse',
        amount: '2,0 – 3,1 µg',
        portionNote: 'ca. 1,0 µg pro Scheibe (40 g)',
        category: 'Milchprodukte',
        vegan: false,
        tip: 'Hartkäsesorten weisen durch die Reifung höhere Gehalte auf als Frischmilch.'
      },
      {
        name: 'Hühnerei (Vollei)',
        amount: '1,8 µg',
        portionNote: 'ca. 1,0 µg pro mittelgroßes Ei (ca. 55 g)',
        category: 'Tierische Produkte',
        vegan: false,
        tip: 'Das Vitamin befindet sich fast ausschließlich im Eigelb.'
      },
      {
        name: 'Kuhmilch (Vollmilch 3,5 %)',
        amount: '0,4 µg',
        portionNote: 'ca. 0,8 µg pro Glas (200 ml)',
        category: 'Milchprodukte',
        vegan: false,
        tip: 'Durch Pasteurisation gehen nur geringe Anteile verloren.'
      }
    ],
    bioavailabilityFactors: {
      enhancers: [
        'Ausreichende Magensäurebildung: Unabdingbar zur proteolytischen Abspaltung des Vitamins von Nahrungsproteinen.',
        'Intakter Intrinsic Factor (IF): Bildung in den Belegzellen des Magens für die rezeptorvermittelte Resorption im Ileum.',
        'Gesunde Ileumschleimhaut: Der letzte Dünndarmabschnitt muss entzündungsfrei sein (Ausschluss von Morbus Crohn).'
      ],
      inhibitors: [
        'Magensäuremangel (Achlorhydrie, Gastritis, Einnahme von Säureblockern / PPI): Verhindert die Freisetzung aus Nahrungsproteinen.',
        'Metformin-Dauertherapie: Hemmt die calciumabhängige Membranbindung des IF-B12-Komplexes.',
        'Chronischer Alkoholkonsum: Schädigt Schleimhäute und beeinträchtigt den enterohepatischen Kreislauf von Cobalamin.'
      ],
      preparationTips: [
        'Vitamin B12 ist relativ hitzestabil, lichtempfindlich und wasserlöslich. Kochen in viel Wasser kann Auslaugungsverluste verursachen; Dünsten oder schonendes Braten erhält mehr Vitamin.',
        'Achtung bei Algen (Spirulina, Chlorella): Enthalten überwiegend inaktive B12-Analoga („Pseudovitamin B12“), die im Darm die echten Rezeptoren blockieren können und keine verlässliche Bedarfsdeckung darstellen!'
      ]
    },
    practicalMealIdeas: [
      'Mischkost: Gedämpftes Lachsfilet mit Brokkoli und Pellkartoffeln deckt den Tagesbedarf vollständig ab.',
      'Vegetarisch: Zwei Rühreier mit Vollkornbrot und einer Scheibe Emmentaler liefern ca. 3,0 µg Vitamin B12.',
      'Vegan: Eine bedarfsdeckende Versorgung ist über herkömmliche pflanzliche Lebensmittel nicht möglich. Vegan lebende Menschen müssen Vitamin B12 dauerhaft über Nahrungsergänzungsmittel oder angereicherte Produkte supplementieren.'
    ],
    whenFoodIsNotEnough: 'Bei einer rein pflanzlichen (veganen) Ernährung gibt es keine verlässlichen pflanzlichen Lebensmittelquellen für bioaktives Vitamin B12. Die Deutsche Gesellschaft für Ernährung (DGE) empfiehlt Veganern daher ausdrücklich die dauerhafte Supplementierung eines B12-Präparats. Ebenso reicht bei Resorptionsstörungen (z. B. atrophische Gastritis, Einnahme von PPI/Metformin, Zöliakie, nach Magenbypass) der normale Nahrungskonsum nicht aus, da das Vitamin im Darm nicht aufgenommen werden kann.',
    relatedLabTest: {
      name: 'Holotranscobalamin (Holo-TC) & MMA',
      url: '/laborwerte/holo-tc'
    },
    relatedArticles: [
      {
        title: 'B12-Mangel trotz Fleischkonsum',
        url: '/ursachen/b12-mangel-trotz-fleisch',
        description: 'Warum auch Fleischesser an Resorptionsstörungen leiden.'
      },
      {
        title: 'Kribbeln und Taubheitsgefühle',
        url: '/symptome/kribbeln-taubheit',
        description: 'Neurologische Spätfolgen eines unentdeckten Defizits.'
      },
      {
        title: 'Vitamin B12 Mangel Ratgeber',
        url: '/vitamin-b12-mangel',
        description: 'Umfassende Übersicht zu Formen, Dosierungen und Diagnostik.'
      }
    ],
    sources: [
      { citation: 'Bundeslebensmittelschlüssel (BLS), Version 3.02: Nährstoffdatenbank.', url: 'https://www.ble.de/' },
      { citation: 'Deutsche Gesellschaft für Ernährung (DGE): Referenzwerte für Vitamin B12 (Stand 2024).', url: 'https://www.dge.de/wissenschaft/referenzwerte/vitamin-b12/' },
      { citation: 'DGE-Positionspapier: Vegane Ernährung (2016/2020).', url: 'https://www.dge.de/' },
      { citation: 'Watanabe, F. et al. (2014): Vitamin B12-containing plant food sources for vegetarians. Nutrients, 6(5): 1861–1873.', url: 'https://www.mdpi.com/journal/nutrients' }
    ],
    lastUpdated: '03. Oktober 2026'
  },
  {
    slug: 'magnesiumreiche-lebensmittel',
    nutrient: 'Magnesium',
    nutrientSlug: '/magnesiummangel',
    title: 'Magnesiumreiche Lebensmittel: Tabelle, Gehalt & Bioverfügbarkeit',
    metaTitle: 'Magnesium in Lebensmitteln: Die besten Quellen im Check | nährstoffmangel.de',
    metaDescription: 'Top magnesiumreiche Lebensmittel: Kerne, Nüsse, Kakao & Hülsenfrüchte im Vergleich. DGE-Referenzwerte (300–400 mg) & Tipps für den Alltag.',
    h1: 'Magnesiumreiche Lebensmittel: Gehaltstabelle, pflanzliche Spitzenreiter und Aufnahme im Körper',
    intro: 'Magnesium ist ein lebensnotwendiger Mineralstoff, den der menschliche Organismus nicht selbst herstellen kann. Als Aktivator von über 300 bis 600 Enzymen ist Magnesium unentbehrlich für die Muskelentspannung, die zelluläre Energiegewinnung (ATP-Stabilisierung), die Erregungsleitung im Nervensystem und den Aufbau stabiler Knochen und Zähne. Im Gegensatz zu manchen Spurenelementen lässt sich der tägliche Magnesiumbedarf gesunder Menschen durch eine gezielte Auswahl vollwertiger, pflanzenbetonter Lebensmittel hervorragend decken.',
    dgeRequirementSummary: 'DGE-Referenzwerte für Erwachsene: Frauen ab 25 Jahren 300 mg/Tag (19–<25 J.: 350 mg), Männer ab 25 Jahren 350 mg/Tag (19–<25 J.: 400 mg). Schwangere 310 mg/Tag, Stillende 390 mg/Tag.',
    topFoods: [
      {
        name: 'Kürbiskerne',
        amount: '535 mg',
        portionNote: 'ca. 160 mg pro Handvoll (30 g)',
        category: 'Getreide & Saaten',
        vegan: true,
        tip: 'Einer der magnesiumreichsten natürlichen Pflanzensamen überhaupt.'
      },
      {
        name: 'Hanfsamen (geschält)',
        amount: '700 mg',
        portionNote: 'ca. 140 mg pro Portion (20 g)',
        category: 'Getreide & Saaten',
        vegan: true,
        tip: 'Ideales Müsli- oder Salat-Topping mit optimalem Omega-3/Omega-6-Verhältnis.'
      },
      {
        name: 'Kakaopulver (schwach entölt)',
        amount: '420 mg',
        portionNote: 'ca. 42 mg pro Esslöffel (10 g)',
        category: 'Algen & Spezialitäten',
        vegan: true,
        tip: 'Echter Rohkakao liefert neben Magnesium reichlich antioxidative Flavanole.'
      },
      {
        name: 'Sonnenblumenkerne',
        amount: '395 mg',
        portionNote: 'ca. 118 mg pro Handvoll (30 g)',
        category: 'Getreide & Saaten',
        vegan: true,
        tip: 'Vielseitig einsetzbar in Salaten, Broten und Aufläufen.'
      },
      {
        name: 'Cashewkerne',
        amount: '270 mg',
        portionNote: 'ca. 81 mg pro Handvoll (30 g)',
        category: 'Hülsenfrüchte & Nüsse',
        vegan: true,
        tip: 'Liefern zusätzlich wertvolle ungesättigte Fettsäuren und Tryptophan.'
      },
      {
        name: 'Mandeln',
        amount: '250 mg',
        portionNote: 'ca. 75 mg pro Handvoll (30 g)',
        category: 'Hülsenfrüchte & Nüsse',
        vegan: true,
        tip: 'Mit Haut verzehren, um die sekundären Pflanzenstoffe mitzunutzen.'
      },
      {
        name: 'Haferflocken (Vollkorn)',
        amount: '140 mg',
        portionNote: 'ca. 70 mg pro Schale Porridge (50 g)',
        category: 'Getreide & Saaten',
        vegan: true,
        tip: 'Liefern gleichzeitig quellfähige Beta-Glucane für die Darmflora.'
      },
      {
        name: 'Schwarze Bohnen (gekocht)',
        amount: '70 mg',
        portionNote: 'ca. 105 mg pro Teller (150 g gegart)',
        category: 'Hülsenfrüchte & Nüsse',
        vegan: true,
        tip: 'Kombiniert Ballaststoffe, pflanzliches Protein und Mineralstoffe.'
      },
      {
        name: 'Mineralwasser (magnesiumreich)',
        amount: '50 – 100 mg/l',
        portionNote: 'ca. 100 – 150 mg pro 1,5 Liter',
        category: 'Getränke',
        vegan: true,
        tip: 'Achten Sie beim Kauf auf das Etikett: Ab 50 mg/l gilt ein Wasser als magnesiumhaltig.'
      }
    ],
    bioavailabilityFactors: {
      enhancers: [
        'Verteilung auf mehrere Mahlzeiten: Der Körper nimmt bei kleineren Einzeldosen einen prozentual höheren Anteil Magnesium im Darm auf als bei einer einzelnen Riesenportion.',
        'Fermentation und Sauerteig: Bauen Phytinsäure ab, die andernfalls Magnesium unlöslich binden würde.',
        'Präbiotische Ballaststoffe (Inulin, FOS): Fördern die passive Resorption im Dickdarm.'
      ],
      inhibitors: [
        'Übermäßige Phytinsäurezufuhr ohne Einweichen oder Fermentation.',
        'Sehr hohe Phosphatzufuhr (z. B. durch Wurstwaren, Fast Food und Colagetränke).',
        'Hoher Alkoholkonsum: Fördert die renale Ausscheidung von Magnesium über die Nieren massiv.',
        'Chronische PPI-Einnahme (Säureblocker): Hemmt den TRPM6-Transporter im Darm.'
      ],
      preparationTips: [
        'Integrieren Sie Nüsse und Samen täglich als festen Bestandteil in Frühstück und Zwischenmahlzeiten.',
        'Greifen Sie zu magnesiumreichem Mineralwasser (über 50–100 mg Magnesium pro Liter) – hier liegt das Magnesium in bereits gelöster, sofort resorbierbarer Ionenform vor.',
        'Dämpfen Sie Gemüse statt es in reichlich Wasser auszukochen, da Magnesium wasserlöslich ist.'
      ]
    },
    practicalMealIdeas: [
      'Frühstück: Haferflocken-Müsli mit Sonnenblumenkernen, Chiasamen, Banane und einem Teelöffel reinem Kakaopulver.',
      'Snack: Eine Handvoll ungesalzene Mandeln oder Cashewkerne am Nachmittag.',
      'Abendessen: Quinoa- oder Vollkornnudel-Bowl mit gedämpftem Brokkoli, schwarzen Bohnen und einem gerösteten Kürbiskern-Topping.'
    ],
    whenFoodIsNotEnough: 'Unter physiologischen Normalbedingungen lässt sich der DGE-Bedarf von 300 bis 400 mg täglich durch eine ausgewogene Vollwerternährung zuverlässig decken. Ein Mehrbedarf oder Verlust, der durch Nahrung allein schwer auszugleichen ist, entsteht vor allem bei Einnahme von Entwässerungstabletten (Diuretika), chronischer PPI-Therapie, chronischen Darmerkrankungen (Morbus Crohn, Zöliakie) oder extremem Leistungssport mit starkem Schweißverlust. Hier kann nach ärztlicher Rücksprache eine gezielte Nahrungsergänzung mit organischen Magnesiumverbindungen (z. B. Magnesiumbisglycinat oder Magnesiumcitrat, max. 250 mg/Tag laut BfR) sinnvoll sein.',
    relatedLabTest: {
      name: 'Serum-Magnesium',
      url: '/laborwerte/eisen'
    },
    relatedArticles: [
      {
        title: 'Wadenkrämpfe und Nährstoffmangel',
        url: '/symptome/wadenkraempfe',
        description: 'Zusammenhang zwischen Elektrolyten und Muskelkrämpfen.'
      },
      {
        title: 'Magnesiummangel durch Medikamente',
        url: '/ursachen/magnesiummangel-medikamente',
        description: 'Wie Diuretika und Säureblocker den Mineralstoffhaushalt stören.'
      },
      {
        title: 'Magnesiummangel-Ratgeber',
        url: '/magnesiummangel',
        description: 'Leitfaden zu Symptomen, Formen und physiologischen Funktionen.'
      }
    ],
    sources: [
      { citation: 'Bundeslebensmittelschlüssel (BLS), Version 3.02: Nährstoffgehalte von Lebensmitteln.', url: 'https://www.ble.de/' },
      { citation: 'Deutsche Gesellschaft für Ernährung (DGE): Referenzwerte für Magnesium (Stand 2024).', url: 'https://www.dge.de/wissenschaft/referenzwerte/magnesium/' },
      { citation: 'Bundesinstitut für Risikobewertung (BfR): Höchstmengenvorschläge für Magnesium in Nahrungsergänzungsmitteln (2021).', url: 'https://www.bfr.bund.de/' },
      { citation: 'Costello, R. B. et al. (2016): Perspective: The Promising Role of Magnesium in Health and Disease. Advances in Nutrition, 7(6): 977–993.', url: 'https://academic.oup.com/advances' }
    ],
    lastUpdated: '03. Oktober 2026'
  }
];
