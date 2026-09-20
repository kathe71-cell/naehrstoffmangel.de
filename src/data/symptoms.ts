import { SymptomItem } from '../types';

export const symptomsList: SymptomItem[] = [
  {
    id: 'muedigkeit',
    name: 'Chronische Müdigkeit & Antriebslosigkeit',
    category: 'Energie & Wohlbefinden',
    description: 'Ständiges Erschöpfungsgefühl trotz ausreichendem Schlaf, morgendliche Schwere und Nachmittagstief.',
    relatedDeficiencies: [
      { slug: 'eisenmangel', deficiencyName: 'Eisenmangel', relevance: 'Sehr hoch' },
      { slug: 'vitamin-b12-mangel', deficiencyName: 'Vitamin-B12-Mangel', relevance: 'Sehr hoch' },
      { slug: 'vitamin-d-mangel', deficiencyName: 'Vitamin-D-Mangel', relevance: 'Sehr hoch' },
      { slug: 'magnesiummangel', deficiencyName: 'Magnesiummangel', relevance: 'Mittel' },
      { slug: 'folsaeuremangel', deficiencyName: 'Folsäuremangel', relevance: 'Mittel' },
      { slug: 'jodmangel', deficiencyName: 'Jodmangel', relevance: 'Mittel' }
    ]
  },
  {
    id: 'blaessee',
    name: 'Blasse Haut & Augeninnenlider',
    category: 'Haut & Haare',
    description: 'Ungewöhnliche Blässe im Gesicht, blasse Schleimhäute und weißliche Bindehäute der Augen.',
    relatedDeficiencies: [
      { slug: 'eisenmangel', deficiencyName: 'Eisenmangel', relevance: 'Sehr hoch' },
      { slug: 'vitamin-b12-mangel', deficiencyName: 'Vitamin-B12-Mangel', relevance: 'Sehr hoch' },
      { slug: 'folsaeuremangel', deficiencyName: 'Folsäuremangel', relevance: 'Sehr hoch' }
    ]
  },
  {
    id: 'haarausfall',
    name: 'Diffuser Haarausfall & dünnes Haar',
    category: 'Haut & Haare',
    description: 'Verstärkter Haarverlust über den gesamten Kopfbereich, dünner werdende Haarstruktur.',
    relatedDeficiencies: [
      { slug: 'eisenmangel', deficiencyName: 'Eisenmangel', relevance: 'Sehr hoch' },
      { slug: 'zinkmangel', deficiencyName: 'Zinkmangel', relevance: 'Sehr hoch' },
      { slug: 'vitamin-d-mangel', deficiencyName: 'Vitamin-D-Mangel', relevance: 'Mittel' },
      { slug: 'jodmangel', deficiencyName: 'Jodmangel', relevance: 'Möglich' }
    ]
  },
  {
    id: 'nagelprobleme',
    name: 'Brüchige Nägel & weiße Flecken',
    category: 'Haut & Haare',
    description: 'Splitternde Fingernägel, Rillenbildung, Hohlnägel oder weiße Querstreifen auf der Nagelplatte.',
    relatedDeficiencies: [
      { slug: 'zinkmangel', deficiencyName: 'Zinkmangel', relevance: 'Sehr hoch' },
      { slug: 'eisenmangel', deficiencyName: 'Eisenmangel', relevance: 'Sehr hoch' },
      { slug: 'magnesiummangel', deficiencyName: 'Magnesiummangel', relevance: 'Möglich' }
    ]
  },
  {
    id: 'kraempfe',
    name: 'Wadenkrämpfe & Muskelzucken',
    category: 'Muskeln & Knochen',
    description: 'Plötzliche nächtliche Krämpfe in Waden oder Zehen, nervöses Zucken der Augenlider.',
    relatedDeficiencies: [
      { slug: 'magnesiummangel', deficiencyName: 'Magnesiummangel', relevance: 'Sehr hoch' },
      { slug: 'vitamin-d-mangel', deficiencyName: 'Vitamin-D-Mangel', relevance: 'Mittel' }
    ]
  },
  {
    id: 'infektanfaelligkeit',
    name: 'Häufige Infekte & Erkältungen',
    category: 'Immunsystem & Verdauung',
    description: 'Ständige Erkältungen, Halsschmerzen, langwierige Infektverläufe und schlechte Abwehr.',
    relatedDeficiencies: [
      { slug: 'vitamin-d-mangel', deficiencyName: 'Vitamin-D-Mangel', relevance: 'Sehr hoch' },
      { slug: 'zinkmangel', deficiencyName: 'Zinkmangel', relevance: 'Sehr hoch' },
      { slug: 'eisenmangel', deficiencyName: 'Eisenmangel', relevance: 'Mittel' }
    ]
  },
  {
    id: 'kribbeln',
    name: 'Kribbeln & Taubheitsgefühle (Hände/Füße)',
    category: 'Kopf & Nerven',
    description: 'Ameisenlaufen in den Zehen oder Fingerspitzen, Einschlafen der Gliedmaßen ohne äußeren Druck.',
    relatedDeficiencies: [
      { slug: 'vitamin-b12-mangel', deficiencyName: 'Vitamin-B12-Mangel', relevance: 'Sehr hoch' },
      { slug: 'folsaeuremangel', deficiencyName: 'Folsäuremangel', relevance: 'Mittel' },
      { slug: 'magnesiummangel', deficiencyName: 'Magnesiummangel', relevance: 'Möglich' }
    ]
  },
  {
    id: 'konzentration',
    name: 'Konzentrationsstörungen & Brain Fog',
    category: 'Kopf & Nerven',
    description: 'Geistige Vernebelung, Vergesslichkeit, verlangsamtes Denken und Schwierigkeiten beim Fokussieren.',
    relatedDeficiencies: [
      { slug: 'vitamin-b12-mangel', deficiencyName: 'Vitamin-B12-Mangel', relevance: 'Sehr hoch' },
      { slug: 'eisenmangel', deficiencyName: 'Eisenmangel', relevance: 'Sehr hoch' },
      { slug: 'jodmangel', deficiencyName: 'Jodmangel', relevance: 'Mittel' },
      { slug: 'vitamin-d-mangel', deficiencyName: 'Vitamin-D-Mangel', relevance: 'Mittel' }
    ]
  },
  {
    id: 'frieren',
    name: 'Ständiges Frieren & kalte Extremitäten',
    category: 'Energie & Wohlbefinden',
    description: 'Dauerhaftes Kältegefühl auch in beheizten Räumen, eiskalte Hände und Füße.',
    relatedDeficiencies: [
      { slug: 'jodmangel', deficiencyName: 'Jodmangel', relevance: 'Sehr hoch' },
      { slug: 'eisenmangel', deficiencyName: 'Eisenmangel', relevance: 'Sehr hoch' }
    ]
  },
  {
    id: 'mundwinkel',
    name: 'Eingerissene Mundwinkel & Zungenbrennen',
    category: 'Haut & Haare',
    description: 'Schmerzhafte Rhagaden in den Mundwinkeln, gerötete, glatte Zungenoberfläche, Aphthen.',
    relatedDeficiencies: [
      { slug: 'eisenmangel', deficiencyName: 'Eisenmangel', relevance: 'Sehr hoch' },
      { slug: 'vitamin-b12-mangel', deficiencyName: 'Vitamin-B12-Mangel', relevance: 'Sehr hoch' },
      { slug: 'folsaeuremangel', deficiencyName: 'Folsäuremangel', relevance: 'Sehr hoch' },
      { slug: 'zinkmangel', deficiencyName: 'Zinkmangel', relevance: 'Mittel' }
    ]
  },
  {
    id: 'unruhe',
    name: 'Innere Unruhe & Schlafprobleme',
    category: 'Kopf & Nerven',
    description: 'Erhöhte Nervosität, Herzklopfen bei Ruhe, Einschlaf- und Durchschlafstörungen.',
    relatedDeficiencies: [
      { slug: 'magnesiummangel', deficiencyName: 'Magnesiummangel', relevance: 'Sehr hoch' },
      { slug: 'vitamin-d-mangel', deficiencyName: 'Vitamin-D-Mangel', relevance: 'Mittel' },
      { slug: 'vitamin-b12-mangel', deficiencyName: 'Vitamin-B12-Mangel', relevance: 'Mittel' }
    ]
  },
  {
    id: 'knochenschmerzen',
    name: 'Knochen- & Rückenschmerzen',
    category: 'Muskeln & Knochen',
    description: 'Dumpfe Schmerzen im Becken- oder Lendenwirbelbereich, Druckschmerz am Schienbein.',
    relatedDeficiencies: [
      { slug: 'vitamin-d-mangel', deficiencyName: 'Vitamin-D-Mangel', relevance: 'Sehr hoch' },
      { slug: 'magnesiummangel', deficiencyName: 'Magnesiummangel', relevance: 'Mittel' }
    ]
  },
  {
    id: 'wundheilung',
    name: 'Schlechte Wundheilung & Hautunreinheiten',
    category: 'Haut & Haare',
    description: 'Kleine Kratzer heilen nur sehr langsam ab, Neigung zu Entzündungen und unreiner Haut.',
    relatedDeficiencies: [
      { slug: 'zinkmangel', deficiencyName: 'Zinkmangel', relevance: 'Sehr hoch' },
      { slug: 'vitamin-d-mangel', deficiencyName: 'Vitamin-D-Mangel', relevance: 'Mittel' }
    ]
  }
];
