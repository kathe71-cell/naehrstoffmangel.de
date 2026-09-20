import { FoodNutrient } from '../types';

export const foodsDatabase: FoodNutrient[] = [
  // Eisen
  { id: 'e1', name: 'Kürbiskerne', category: 'Getreide & Saaten', nutrient: 'Eisen', amountPer100g: '12,5 mg', dailyValuePercentage: 100, vegan: true, note: 'Spitzenreiter unter den Saaten. Ideal leicht angeröstet im Müsli oder Salat.' },
  { id: 'e2', name: 'Sesamsaat / Tahin', category: 'Getreide & Saaten', nutrient: 'Eisen', amountPer100g: '10,0 mg', dailyValuePercentage: 80, vegan: true, note: 'Hervorragende Quelle für Hummus oder Dressings.' },
  { id: 'e3', name: 'Rote Linsen (trocken)', category: 'Hülsenfrüchte & Nüsse', nutrient: 'Eisen', amountPer100g: '7,5 mg', dailyValuePercentage: 60, vegan: true, note: 'Immer mit Vitamin C (z. B. Zitronensaft oder Tomaten) kombinieren.' },
  { id: 'e4', name: 'Schweineleber', category: 'Tierische Produkte', nutrient: 'Eisen', amountPer100g: '18,0 mg', dailyValuePercentage: 140, vegan: false, note: 'Sehr hohe Bioverfügbarkeit als Häm-Eisen (Fe2+).' },
  { id: 'e5', name: 'Rindfleisch (mager)', category: 'Tierische Produkte', nutrient: 'Eisen', amountPer100g: '2,6 mg', dailyValuePercentage: 22, vegan: false, note: 'Gute Häm-Eisenquelle mit hoher Resorptionsquote.' },
  { id: 'e6', name: 'Haferflocken', category: 'Getreide & Saaten', nutrient: 'Eisen', amountPer100g: '4,6 mg', dailyValuePercentage: 37, vegan: true, note: 'Basis für Porridge. Vorab einweichen mindert Phytinsäure.' },

  // Vitamin D
  { id: 'd1', name: 'Hering (Matjes)', category: 'Tierische Produkte', nutrient: 'Vitamin D', amountPer100g: '25,0 µg', dailyValuePercentage: 125, vegan: false, note: 'Beste natürliche Speisefisch-Quelle für Cholecalciferol.' },
  { id: 'd2', name: 'Wildlachs', category: 'Tierische Produkte', nutrient: 'Vitamin D', amountPer100g: '16,0 µg', dailyValuePercentage: 80, vegan: false, note: 'Wildfang enthält deutlich mehr Vitamin D als Zuchtlachs.' },
  { id: 'd3', name: 'Hühnereigelb', category: 'Tierische Produkte', nutrient: 'Vitamin D', amountPer100g: '2,9 µg', dailyValuePercentage: 15, vegan: false, note: 'Enthält fettlösliches Vitamin D3 gebunden an Lipide.' },
  { id: 'd4', name: 'Champignons (UV-behandelt)', category: 'Gemüse & Obst', nutrient: 'Vitamin D', amountPer100g: '3,0 µg', dailyValuePercentage: 15, vegan: true, note: 'Enthalten pflanzliches Ergocalciferol (Vitamin D2).' },

  // Magnesium
  { id: 'm1', name: 'Kürbiskerne', category: 'Getreide & Saaten', nutrient: 'Magnesium', amountPer100g: '535 mg', dailyValuePercentage: 160, vegan: true, note: 'Bereits 50 g decken rund 80 % des Tagesbedarfs.' },
  { id: 'm2', name: 'Sonnenblumenkerne', category: 'Getreide & Saaten', nutrient: 'Magnesium', amountPer100g: '395 mg', dailyValuePercentage: 120, vegan: true, note: 'Hervorragend als Snack oder Salat-Topping.' },
  { id: 'm3', name: 'Dunkle Schokolade (85%)', category: 'Algen & Spezialitäten', nutrient: 'Magnesium', amountPer100g: '230 mg', dailyValuePercentage: 70, vegan: true, note: 'Reich an Flavonoiden und bioverfügbarem Magnesium.' },
  { id: 'm4', name: 'Cashewkerne', category: 'Hülsenfrüchte & Nüsse', nutrient: 'Magnesium', amountPer100g: '260 mg', dailyValuePercentage: 75, vegan: true, note: 'Sehr gut bekömmlich und tryptophanreich.' },
  { id: 'm5', name: 'Spinat (frisch)', category: 'Gemüse & Obst', nutrient: 'Magnesium', amountPer100g: '79 mg', dailyValuePercentage: 24, vegan: true, note: 'Schonend dünsten für optimale Mineralstofferhaltung.' },

  // Vitamin B12
  { id: 'b1', name: 'Rinderleber', category: 'Tierische Produkte', nutrient: 'Vitamin B12', amountPer100g: '65,0 µg', dailyValuePercentage: 1600, vegan: false, note: 'Höchste B12-Dichte im Tierreich.' },
  { id: 'b2', name: 'Makrele', category: 'Tierische Produkte', nutrient: 'Vitamin B12', amountPer100g: '9,0 µg', dailyValuePercentage: 225, vegan: false, note: 'Reich an bioaktivem Cobalamin und Omega-3.' },
  { id: 'b3', name: 'Emmentaler Käse', category: 'Tierische Produkte', nutrient: 'Vitamin B12', amountPer100g: '3,1 µg', dailyValuePercentage: 78, vegan: false, note: 'Sehr gute Quelle für Ovo-Lacto-Vegetarier.' },
  { id: 'b4', name: 'Hühnerei', category: 'Tierische Produkte', nutrient: 'Vitamin B12', amountPer100g: '1,9 µg', dailyValuePercentage: 48, vegan: false, note: 'Zwei Eier decken annähernd den Tagesbedarf.' },

  // Zink
  { id: 'z1', name: 'Austern', category: 'Tierische Produkte', nutrient: 'Zink', amountPer100g: '45,0 mg', dailyValuePercentage: 400, vegan: false, note: 'Absoluter Rekordhalter im gesamten Lebensmittelreich.' },
  { id: 'z2', name: 'Kürbiskerne', category: 'Getreide & Saaten', nutrient: 'Zink', amountPer100g: '7,5 mg', dailyValuePercentage: 70, vegan: true, note: 'Wichtigste pflanzliche Quelle.' },
  { id: 'z3', name: 'Rindfleisch (Gulasch)', category: 'Tierische Produkte', nutrient: 'Zink', amountPer100g: '4,5 mg', dailyValuePercentage: 40, vegan: false, note: 'Frei von hemmender Phytinsäure.' },
  { id: 'z4', name: 'Haferflocken', category: 'Getreide & Saaten', nutrient: 'Zink', amountPer100g: '4,1 mg', dailyValuePercentage: 38, vegan: true, note: 'Sauerteigfermentation oder Einweichen steigert Resorption.' },

  // Folsäure / Folat
  { id: 'f1', name: 'Kichererbsen (getrocknet)', category: 'Hülsenfrüchte & Nüsse', nutrient: 'Folsäure', amountPer100g: '340 µg', dailyValuePercentage: 113, vegan: true, note: 'Extrem folatreich. Kochwasser nicht wegschütten (für Suppen/Aquafaba).' },
  { id: 'f2', name: 'Frischer Blattspinat', category: 'Gemüse & Obst', nutrient: 'Folsäure', amountPer100g: '145 µg', dailyValuePercentage: 48, vegan: true, note: 'Namensgeber des Vitamins (folium = Blatt). Roh oder nur kurz dämpfen.' },
  { id: 'f3', name: 'Feldsalat', category: 'Gemüse & Obst', nutrient: 'Folsäure', amountPer100g: '140 µg', dailyValuePercentage: 47, vegan: true, note: 'Optimaler heimischer Wintersalat.' },
  { id: 'f4', name: 'Grüner Spargel', category: 'Gemüse & Obst', nutrient: 'Folsäure', amountPer100g: '110 µg', dailyValuePercentage: 36, vegan: true, note: 'Hitzeempfindlich – nur sanft anbraten oder dämpfen.' },

  // Jod
  { id: 'j1', name: 'Kabeljau / Dorsch', category: 'Tierische Produkte', nutrient: 'Jod', amountPer100g: '230 µg', dailyValuePercentage: 115, vegan: false, note: 'Deckt mit einer normalen Portion den gesamten Tagesbedarf.' },
  { id: 'j2', name: 'Seelachs', category: 'Tierische Produkte', nutrient: 'Jod', amountPer100g: '170 µg', dailyValuePercentage: 85, vegan: false, note: 'Häufiger Speisefisch mit verlässlichem Jodgehalt.' },
  { id: 'j3', name: 'Jodiertes Speisesalz', category: 'Algen & Spezialitäten', nutrient: 'Jod', amountPer100g: '2.000 µg', dailyValuePercentage: 100, vegan: true, note: '1 Messerspitze (1g) liefert ca. 20 µg Jod.' },
  { id: 'j4', name: 'Garnelen', category: 'Tierische Produkte', nutrient: 'Jod', amountPer100g: '130 µg', dailyValuePercentage: 65, vegan: false, note: 'Meeresfrüchte mit hoher Jodkonzentration.' }
];
