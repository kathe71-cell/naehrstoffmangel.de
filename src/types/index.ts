export interface FaqItem {
  question: string;
  answer: string;
}

export interface LongTailKeyword {
  keyword: string;
  searchIntent: 'informational' | 'navigational' | 'commercial';
  monthlySearches: string; // descriptive range e.g. "1.000–5.000/Monat"
}

export interface DeficiencyData {
  slug: string;
  name: string;
  subTitle: string;
  metaTitle: string;
  metaDescription: string;
  // SEO: Primary Long-Tail H1 (the actual targeted search query, not just the name)
  seoH1: string;
  // Cluster of long-tail keywords this page is optimized for
  longTailKeywords: LongTailKeyword[];
  // FAQ questions written as exact search queries (= voice search & People Also Ask)
  faqLongTail?: FaqItem[];
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
  // Medical Claim Hardening & Evidence
  sources: { citation: string; url?: string }[];
  bfrRecommendation?: string;
  dgeDetailedRequirements?: { group: string; value: string }[];
  diagnosticLimits?: string;
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
  status?: string;
  sourceReference?: string;
}
