import { FoodNutrient } from '../types';

export const foodsDatabase: FoodNutrient[] = [
  // Eisen (DGE-Referenzwerte für Erwachsene: Männer 11 mg, menstruierende Frauen 16 mg, postmenopausale Frauen 14 mg, nicht menstruierende jüngere Frauen 11 mg)
  {
    id: 'e1',
    name: 'Kürbiskerne',
    category: 'Getreide & Saaten',
    nutrient: 'Eisen',
    amountPer100g: '12,5 mg',
    dailyValuePercentage: 89,
    vegan: true,
    status: 'getrocknet / geschält',
    sourceReference: 'BLS 3.02',
    note: 'Reich an pflanzlichem Nicht-Häm-Eisen. Durch leichtes Rösten oder Kombination mit Vitamin C wird die Resorption verbessert.'
  },
  {
    id: 'e2',
    name: 'Sesamsaat / Tahin',
    category: 'Getreide & Saaten',
    nutrient: 'Eisen',
    amountPer100g: '10,0 mg',
    dailyValuePercentage: 71,
    vegan: true,
    status: 'unbehandelt / getrocknet',
    sourceReference: 'BLS 3.02',
    note: 'Hervorragende Eisen- und Calciumquelle. Ideale Zutat für Hummus, Dressings oder Müsli.'
  },
  {
    id: 'e3',
    name: 'Rote Linsen (trocken)',
    category: 'Hülsenfrüchte & Nüsse',
    nutrient: 'Eisen',
    amountPer100g: '7,5 mg',
    dailyValuePercentage: 54,
    vegan: true,
    status: 'trocken / unzubereitet',
    sourceReference: 'BLS 3.02',
    note: 'Gekocht ca. 2,5 mg/100g durch Wasseraufnahme. Zur besseren Bioverfügbarkeit mit Vitamin C (z. B. Zitronensaft, Tomaten) kombinieren.'
  },
  {
    id: 'e4',
    name: 'Schweineleber',
    category: 'Tierische Produkte',
    nutrient: 'Eisen',
    amountPer100g: '18,0 mg',
    dailyValuePercentage: 129,
    vegan: false,
    status: 'frisch / roh',
    sourceReference: 'BLS 3.02',
    note: 'Sehr hohe Bioverfügbarkeit als Häm-Eisen (Fe2+). Hinweis: Sehr hoher Vitamin-A-Gehalt – Schwangere sollten im 1. Trimenon auf Leber verzichten.'
  },
  {
    id: 'e5',
    name: 'Rindfleisch (mager)',
    category: 'Tierische Produkte',
    nutrient: 'Eisen',
    amountPer100g: '2,6 mg',
    dailyValuePercentage: 19,
    vegan: false,
    status: 'roh / Muskelfleisch',
    sourceReference: 'BLS 3.02',
    note: 'Gut bioverfügbares Häm-Eisen. Die Resorptionsquote liegt bei ca. 15–35 %.'
  },
  {
    id: 'e6',
    name: 'Haferflocken',
    category: 'Getreide & Saaten',
    nutrient: 'Eisen',
    amountPer100g: '4,6 mg',
    dailyValuePercentage: 33,
    vegan: true,
    status: 'Vollkorn / trocken',
    sourceReference: 'BLS 3.02',
    note: 'Pflanzliches Nicht-Häm-Eisen. Einweichen (z. B. Overnight Oats) reduziert hemmende Phytinsäure.'
  },

  // Vitamin D (DGE-Schätzwert bei fehlender Eigensynthese = 20 µg / 800 I.E.)
  {
    id: 'd1',
    name: 'Hering (Matjes)',
    category: 'Tierische Produkte',
    nutrient: 'Vitamin D',
    amountPer100g: '25,0 µg',
    dailyValuePercentage: 125,
    vegan: false,
    status: 'essbarer Anteil',
    sourceReference: 'BLS 3.02',
    note: 'Eine der reichhaltigsten natürlichen Speisefischquellen für Cholecalciferol (Vitamin D3; entspricht 1.000 I.E. pro 100g).'
  },
  {
    id: 'd2',
    name: 'Wildlachs',
    category: 'Tierische Produkte',
    nutrient: 'Vitamin D',
    amountPer100g: '16,0 µg',
    dailyValuePercentage: 80,
    vegan: false,
    status: 'roh / essbarer Anteil',
    sourceReference: 'BLS 3.02',
    note: 'Wildfang weist typischerweise deutlich höhere Vitamin-D-Werte auf als konventioneller Zuchtlachs (dort ca. 4–10 µg/100g).'
  },
  {
    id: 'd3',
    name: 'Hühnereigelb',
    category: 'Tierische Produkte',
    nutrient: 'Vitamin D',
    amountPer100g: '2,9 µg',
    dailyValuePercentage: 15,
    vegan: false,
    status: 'frisch / roh',
    sourceReference: 'BLS 3.02',
    note: 'Enthält fettlösliches Vitamin D3. Der Gehalt variiert je nach Fütterung und Sonnenlichtexposition der Legehennen.'
  },
  {
    id: 'd4',
    name: 'Champignons (UV-behandelt)',
    category: 'Gemüse & Obst',
    nutrient: 'Vitamin D',
    amountPer100g: '3,0 µg',
    dailyValuePercentage: 15,
    vegan: true,
    status: 'frisch / nach UV-Exposition',
    sourceReference: 'BLS 3.02',
    note: 'Enthalten pflanzliches Ergocalciferol (Vitamin D2). Herkömmliche Zuchtpilze ohne UV-Belichtung enthalten nur Spuren (< 0,5 µg).'
  },

  // Magnesium (DGE-Referenzwert Erwachsene = 300–350 mg, Basis 350 mg)
  {
    id: 'm1',
    name: 'Kürbiskerne',
    category: 'Getreide & Saaten',
    nutrient: 'Magnesium',
    amountPer100g: '535 mg',
    dailyValuePercentage: 153,
    vegan: true,
    status: 'getrocknet / geschält',
    sourceReference: 'BLS 3.02',
    note: 'Hervorragende Quelle für organisches Magnesium, Zink und gesunde ungesättigte Fettsäuren.'
  },
  {
    id: 'm2',
    name: 'Sonnenblumenkerne',
    category: 'Getreide & Saaten',
    nutrient: 'Magnesium',
    amountPer100g: '395 mg',
    dailyValuePercentage: 113,
    vegan: true,
    status: 'geschält / getrocknet',
    sourceReference: 'BLS 3.02',
    note: 'Ideales Topping für Salate und Müsli. Reich an Vitamin E und Magnesium.'
  },
  {
    id: 'm3',
    name: 'Dunkle Schokolade (85%)',
    category: 'Algen & Spezialitäten',
    nutrient: 'Magnesium',
    amountPer100g: '230 mg',
    dailyValuePercentage: 66,
    vegan: true,
    status: 'verzehrfertig',
    sourceReference: 'BLS 3.02',
    note: 'Kakaoreiche Schokolade liefert bioaktive Polyphenole und nennenswerte Mengen Magnesium.'
  },
  {
    id: 'm4',
    name: 'Cashewkerne',
    category: 'Hülsenfrüchte & Nüsse',
    nutrient: 'Magnesium',
    amountPer100g: '260 mg',
    dailyValuePercentage: 74,
    vegan: true,
    status: 'unbehandelt / naturbelassen',
    sourceReference: 'BLS 3.02',
    note: 'Gute Magnesium- und Tryptophan-Quelle. Milder Geschmack und sehr bekömmlich.'
  },
  {
    id: 'm5',
    name: 'Spinat (frisch)',
    category: 'Gemüse & Obst',
    nutrient: 'Magnesium',
    amountPer100g: '79 mg',
    dailyValuePercentage: 23,
    vegan: true,
    status: 'roh / essbarer Anteil',
    sourceReference: 'BLS 3.02',
    note: 'Schonend dünsten oder dämpfen, um Auslaugungsverluste von Mineralstoffen im Kochwasser zu minimieren.'
  },

  // Vitamin B12 (DGE-Referenzwert Erwachsene = 4,0 µg)
  {
    id: 'b1',
    name: 'Rinderleber',
    category: 'Tierische Produkte',
    nutrient: 'Vitamin B12',
    amountPer100g: '65,0 µg',
    dailyValuePercentage: 1625,
    vegan: false,
    status: 'frisch / roh',
    sourceReference: 'BLS 3.02',
    note: 'Höchste B12-Dichte im Tierreich. Reagiert empfindlich auf langes, starkes Erhitzen.'
  },
  {
    id: 'b2',
    name: 'Makrele',
    category: 'Tierische Produkte',
    nutrient: 'Vitamin B12',
    amountPer100g: '9,0 µg',
    dailyValuePercentage: 225,
    vegan: false,
    status: 'roh / essbarer Anteil',
    sourceReference: 'BLS 3.02',
    note: 'Fetter Seefisch, reich an bioaktivem Cobalamin und langkettigen Omega-3-Fettsäuren (EPA/DHA).'
  },
  {
    id: 'b3',
    name: 'Emmentaler Käse',
    category: 'Tierische Produkte',
    nutrient: 'Vitamin B12',
    amountPer100g: '3,1 µg',
    dailyValuePercentage: 78,
    vegan: false,
    status: 'verzehrfertig / 45% F.i.Tr.',
    sourceReference: 'BLS 3.02',
    note: 'Bedeutende B12-Quelle für Ovo-Lacto-Vegetarier durch mikrobielle Reifungsprozesse.'
  },
  {
    id: 'b4',
    name: 'Hühnerei (ganz)',
    category: 'Tierische Produkte',
    nutrient: 'Vitamin B12',
    amountPer100g: '1,9 µg',
    dailyValuePercentage: 48,
    vegan: false,
    status: 'roh / Vollei',
    sourceReference: 'BLS 3.02',
    note: 'Zwei mittelgroße Eier (ca. 110 g essbarer Anteil) liefern rund 2,1 µg Vitamin B12.'
  },

  // Zink (DGE-Referenzwert Basis 11 mg: Frauen 7–10 mg, Männer 11–16 mg je nach Phytat)
  {
    id: 'z1',
    name: 'Austern',
    category: 'Tierische Produkte',
    nutrient: 'Zink',
    amountPer100g: '45,0 mg',
    dailyValuePercentage: 409,
    vegan: false,
    status: 'frisch / essbarer Anteil',
    sourceReference: 'BLS 3.02',
    note: 'Höchste Zinkkonzentration im gesamten Lebensmittelreich. Sehr hohe Bioverfügbarkeit.'
  },
  {
    id: 'z2',
    name: 'Kürbiskerne',
    category: 'Getreide & Saaten',
    nutrient: 'Zink',
    amountPer100g: '7,5 mg',
    dailyValuePercentage: 68,
    vegan: true,
    status: 'getrocknet / geschält',
    sourceReference: 'BLS 3.02',
    note: 'Wichtigste pflanzliche Zinkquelle. Leichtes Anrösten oder Einweichen verbessert die Resorption.'
  },
  {
    id: 'z3',
    name: 'Rindfleisch (Gulasch)',
    category: 'Tierische Produkte',
    nutrient: 'Zink',
    amountPer100g: '4,5 mg',
    dailyValuePercentage: 41,
    vegan: false,
    status: 'roh / Muskelfleisch',
    sourceReference: 'BLS 3.02',
    note: 'Tierisches Zink ist frei von hemmender Phytinsäure und wird effizient im Dünndarm resorbiert.'
  },
  {
    id: 'z4',
    name: 'Haferflocken',
    category: 'Getreide & Saaten',
    nutrient: 'Zink',
    amountPer100g: '4,1 mg',
    dailyValuePercentage: 37,
    vegan: true,
    status: 'Vollkorn / trocken',
    sourceReference: 'BLS 3.02',
    note: 'Pflanzliche Zinkquelle. Kombination mit Zitronensäure oder Zubereitung als Sauerteig baut Phytate ab.'
  },

  // Folsäure / Folat (DGE-Referenzwert Erwachsene = 300 µg Folat-Äquivalente)
  {
    id: 'f1',
    name: 'Kichererbsen (getrocknet)',
    category: 'Hülsenfrüchte & Nüsse',
    nutrient: 'Folsäure',
    amountPer100g: '340 µg',
    dailyValuePercentage: 113,
    vegan: true,
    status: 'trocken / unzubereitet',
    sourceReference: 'BLS 3.02',
    note: 'Sehr folatreich. Gekocht ca. 110–130 µg/100g. Kochwasser für Suppen nutzen, da Folat wasserlöslich ist.'
  },
  {
    id: 'f2',
    name: 'Frischer Blattspinat',
    category: 'Gemüse & Obst',
    nutrient: 'Folsäure',
    amountPer100g: '145 µg',
    dailyValuePercentage: 48,
    vegan: true,
    status: 'roh / essbarer Anteil',
    sourceReference: 'BLS 3.02',
    note: 'Namensgeber des Vitamins (folium = Blatt). Roh im Salat oder nur ganz kurz gedämpft verzehren.'
  },
  {
    id: 'f3',
    name: 'Feldsalat',
    category: 'Gemüse & Obst',
    nutrient: 'Folsäure',
    amountPer100g: '140 µg',
    dailyValuePercentage: 47,
    vegan: true,
    status: 'roh / verzehrfertig',
    sourceReference: 'BLS 3.02',
    note: 'Heimischer Wintersalat mit hoher Folat- und Vitamin-C-Dichte.'
  },
  {
    id: 'f4',
    name: 'Grüner Spargel',
    category: 'Gemüse & Obst',
    nutrient: 'Folsäure',
    amountPer100g: '110 µg',
    dailyValuePercentage: 37,
    vegan: true,
    status: 'roh / essbarer Anteil',
    sourceReference: 'BLS 3.02',
    note: 'Hitze- und wasserempfindlich – schonend in etwas Olivenöl anbraten oder dämpfen.'
  },

  // Jod (DGE-Referenzwert Erwachsene = 200 µg)
  {
    id: 'j1',
    name: 'Kabeljau / Dorsch',
    category: 'Tierische Produkte',
    nutrient: 'Jod',
    amountPer100g: '230 µg',
    dailyValuePercentage: 115,
    vegan: false,
    status: 'roh / essbarer Anteil',
    sourceReference: 'BLS 3.02',
    note: 'Magerer Seefisch mit natürlicher Jodanreicherung. Gehalt schwankt nach Fanggebiet (120–230 µg/100g).'
  },
  {
    id: 'j2',
    name: 'Seelachs (Köhler)',
    category: 'Tierische Produkte',
    nutrient: 'Jod',
    amountPer100g: '170 µg',
    dailyValuePercentage: 85,
    vegan: false,
    status: 'roh / essbarer Anteil',
    sourceReference: 'BLS 3.02',
    note: 'Verlässliche heimische Speisefischquelle mit hoher Proteindichte und geringem Fettgehalt.'
  },
  {
    id: 'j3',
    name: 'Jodiertes Speisesalz',
    category: 'Algen & Spezialitäten',
    nutrient: 'Jod',
    amountPer100g: '2.000 µg',
    dailyValuePercentage: 1000,
    vegan: true,
    status: 'Haushaltssalz angereichert',
    sourceReference: 'BfR / Gesetzl. Vorgabe',
    note: 'Gesetzlicher Gehalt: 15–25 mg Jod/kg Salz (Mittelwert 20 µg pro 1g-Messerspitze = 10 % des DGE-Tagesbedarfs). Salz maßvoll verwenden.'
  },
  {
    id: 'j4',
    name: 'Garnelen',
    category: 'Tierische Produkte',
    nutrient: 'Jod',
    amountPer100g: '130 µg',
    dailyValuePercentage: 65,
    vegan: false,
    status: 'gegart / essbarer Anteil',
    sourceReference: 'BLS 3.02',
    note: 'Meeresfrüchte mit hoher Jodkonzentration und wertvollen Spurenelementen.'
  }
];
