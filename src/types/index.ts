export interface FaqItem {
  question: string;
  answer: string;
}

export interface DeficiencyData {
  slug: string;
  name: string;
  subTitle: string;
  metaTitle: string;
  metaDescription: string;
  category: 'Spurenelement' | 'Vitamin' | 'Mineralstoff';
  dailyRequirement: string;
  dailyRequirementNote: string;
  testBiomarker: string;
  optimalRange: string;
  intro: string;
  whatIsIt: string[];
  symptoms: {
    primary: string[];
    secondary: string[];
  };
  causes?: {
    title: string;
    description: string;
  };
  causesList: {
    title: string;
    description: string;
  }[];
  riskGroups: {
    group: string;
    reason: string;
  }[];
  dietarySources: {
    food: string;
    amount: string;
    vegan: boolean;
  }[];
  treatmentInfo: {
    dietTips: string[];
    supplementTips: string[];
    interactions: string[];
  };
  faqs: FaqItem[];
  schemaCode: string;
}

export interface SymptomItem {
  id: string;
  name: string;
  category: 'Kopf & Nerven' | 'Energie & Wohlbefinden' | 'Muskeln & Knochen' | 'Haut & Haare' | 'Immunsystem & Verdauung';
  description: string;
  relatedDeficiencies: {
    slug: string;
    deficiencyName: string;
    relevance: 'Sehr hoch' | 'Mittel' | 'Möglich';
  }[];
}

export interface FoodNutrient {
  id: string;
  name: string;
  category: 'Hülsenfrüchte & Nüsse' | 'Gemüse & Obst' | 'Getreide & Saaten' | 'Tierische Produkte' | 'Algen & Spezialitäten';
  nutrient: string;
  amountPer100g: string;
  dailyValuePercentage: number;
  vegan: boolean;
  note: string;
}
