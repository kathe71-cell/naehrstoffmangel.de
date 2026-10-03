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

export interface ArticleSource {
  citation: string;
  url?: string;
}

export interface RelatedLink {
  title: string;
  url: string;
  description: string;
}

export interface SymptomArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  shortAnswer: string;
  associatedDeficiencies: {
    name: string;
    slug: string;
    pathomechanism: string;
    labMarker: string;
    relevance: 'Häufig assoziiert' | 'Möglicher Kofaktor' | 'Differentialdiagnostisch relevant';
  }[];
  whyUnspecific: string;
  differentialDiagnoses: {
    condition: string;
    explanation: string;
  }[];
  whenToSeeDoctor: string[];
  redFlags: string[];
  relevantLabTests: {
    name: string;
    url?: string;
    description: string;
  }[];
  relatedArticles: RelatedLink[];
  sources: ArticleSource[];
  lastUpdated: string;
}

export interface LabTestArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  whatIsMeasured: string;
  purpose: string;
  referenceRanges: {
    group: string;
    range: string;
    source: string;
    note?: string;
  }[];
  limitations: string[];
  influencingFactors: {
    factor: string;
    effect: string;
    clinicalRelevance: string;
  }[];
  markerCombinations: {
    marker: string;
    rationale: string;
  }[];
  whenToSeeDoctor: string[];
  pillarNutrient: {
    name: string;
    slug: string;
  };
  relatedArticles: RelatedLink[];
  sources: ArticleSource[];
  lastUpdated: string;
}

export interface CauseArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  shortSummary: string;
  biologicalMechanism: string[];
  evidenceAndStats: {
    stat: string;
    context: string;
    source: string;
  }[];
  affectedNutrients: {
    name: string;
    slug: string;
    why: string;
  }[];
  diagnosticSteps: {
    test: string;
    why: string;
    url?: string;
  }[];
  actionSteps: string[];
  whenToConsultDoctor: string[];
  pillarNutrient: {
    name: string;
    slug: string;
  };
  relatedArticles: RelatedLink[];
  sources: ArticleSource[];
  lastUpdated: string;
}

export interface FoodArticle {
  slug: string;
  nutrient: string;
  nutrientSlug: string;
  title?: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  dgeRequirementSummary: string;
  topFoods: {
    name: string;
    amount: string;
    portionNote: string;
    category: string;
    vegan: boolean;
    tip?: string;
  }[];
  bioavailabilityFactors: {
    enhancers: string[];
    inhibitors: string[];
    preparationTips: string[];
  };
  practicalMealIdeas: string[];
  whenFoodIsNotEnough: string;
  relatedLabTest: {
    name: string;
    url: string;
  };
  relatedArticles: RelatedLink[];
  sources: ArticleSource[];
  lastUpdated: string;
}
