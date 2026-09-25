import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  X, 
  ArrowRight, 
  Activity, 
  Sparkles, 
  FileText, 
  UtensilsCrossed, 
  Droplet, 
  Sun, 
  Zap, 
  Dna, 
  ShieldAlert, 
  Baby
} from 'lucide-react';
import { deficiencies } from '../data/deficiencies';
import { foodsDatabase } from '../data/foods';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  type: 'mangel' | 'symptom' | 'lebensmittel' | 'ratgeber' | 'hub';
  badge: string;
}

const SEARCH_INDEX: SearchResult[] = [
  // Hubs & Guides
  {
    id: 'hub-vitaminmangel',
    title: 'Vitaminmangel: Symptome, Ursachen & Tests',
    subtitle: 'Der große Themen-Hub zu allen Vitaminen (D, B12, Folsäure, A, C, K)',
    url: '/vitaminmangel',
    type: 'hub',
    badge: 'Themen-Hub'
  },
  {
    id: 'guide-symptome',
    title: 'Symptom-Navigator',
    subtitle: 'Interaktiver Wegweiser: Welche Symptome auf welche Nährstoffmängel hinweisen',
    url: '/symptome',
    type: 'ratgeber',
    badge: 'Interaktives Tool'
  },
  {
    id: 'guide-bluttest',
    title: 'Bluttest-Ratgeber & Laborwerte',
    subtitle: 'Welche Blutwerte (Ferritin, Holo-TC, 25-OH-D3) aussagekräftig sind',
    url: '/bluttest',
    type: 'ratgeber',
    badge: 'Labor-Ratgeber'
  },
  {
    id: 'guide-ernaehrung',
    title: 'Lebensmittel-Nährstoff-Matrix',
    subtitle: 'Die reichhaltigsten Lebensmittel pro Mikronährstoff mit DGE-Tagesbedarf',
    url: '/ernaehrung',
    type: 'ratgeber',
    badge: 'Ernährungsdatenbank'
  },
  // Nährstoffmängel
  ...deficiencies.map(d => ({
    id: `mangel-${d.slug}`,
    title: `${d.name} – Symptome, Ursachen & Tests`,
    subtitle: d.subTitle,
    url: `/${d.slug}`,
    type: 'mangel' as const,
    badge: d.category
  })),
  // Popular Symptoms / Terms
  {
    id: 'sym-muedigkeit',
    title: 'Müdigkeit & Chronische Erschöpfung (Fatigue)',
    subtitle: 'Häufiges Symptom bei Eisenmangel, Vitamin-D-Mangel und Vitamin B12 Defizit',
    url: '/symptome',
    type: 'symptom',
    badge: 'Symptom'
  },
  {
    id: 'sym-haarausfall',
    title: 'Haarausfall & Brüchige Nägel',
    subtitle: 'Typische Zeichen bei niedrigem Ferritin (Eisen) oder Zinkmangel',
    url: '/symptome',
    type: 'symptom',
    badge: 'Symptom'
  },
  {
    id: 'sym-ferritin',
    title: 'Ferritin & Speichereisen',
    subtitle: 'Warum Ferritin unter 50 µg/l Symptome verursacht, obwohl das Blutbild "normal" ist',
    url: '/eisenmangel',
    type: 'symptom',
    badge: 'Laborwert'
  },
  {
    id: 'sym-holo-tc',
    title: 'Holotranscobalamin (Holo-TC) & B12',
    subtitle: 'Der frühzeitige Marker für aktives Vitamin B12 im Gewebe',
    url: '/vitamin-b12-mangel',
    type: 'symptom',
    badge: 'Laborwert'
  },
  // Food items (Top selections)
  ...foodsDatabase.slice(0, 15).map(f => ({
    id: `food-${f.id}`,
    title: `${f.name} (${f.amountPer100g} ${f.nutrient} / 100g)`,
    subtitle: `${f.category} · ${f.note}`,
    url: '/ernaehrung',
    type: 'lebensmittel' as const,
    badge: f.nutrient
  }))
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open search modal handled via custom event
          window.dispatchEvent(new CustomEvent('toggle-search-modal'));
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();
  const results = q === '' 
    ? SEARCH_INDEX.slice(0, 6) 
    : SEARCH_INDEX.filter(item => 
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q)
      );

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 pt-12 sm:pt-20"
      onClick={onClose}
    >
      <div 
        className="bg-white border border-slate-200 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50/80">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Wonach suchen Sie? (z. B. Vitamin B12, Eisen, Müdigkeit, Ferritin, Haferflocken...)"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm sm:text-base font-medium focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="text-xs font-bold text-slate-500 hover:text-slate-900 px-2 py-1 bg-slate-200/60 hover:bg-slate-200 rounded-lg transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 space-y-1 divide-y divide-slate-100">
          {q === '' && (
            <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Beliebte Themen & Schnellzugriff
            </div>
          )}

          {results.length > 0 ? (
            results.map((res) => (
              <Link
                key={res.id}
                to={res.url}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50/60 transition-colors group"
              >
                <div className="space-y-0.5 max-w-[85%]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm group-hover:text-emerald-900 transition-colors">
                      {res.title}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 group-hover:bg-emerald-100 text-slate-600 group-hover:text-emerald-800">
                      {res.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-1">
                    {res.subtitle}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 transition-colors shrink-0" />
              </Link>
            ))
          ) : (
            <div className="p-8 text-center text-slate-500 space-y-2">
              <Search className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="text-sm font-medium">Keine Ergebnisse für „{query}“ gefunden.</p>
              <p className="text-xs text-slate-400">Versuchen Sie es mit Begriffen wie Vitamin D, B12, Folsäure, Haarausfall oder Bluttest.</p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-600 flex items-center justify-between font-mono">
          <span>Tipp: <kbd className="bg-white border border-slate-300 px-1.5 py-0.5 rounded text-[10px]">Strg</kbd> + <kbd className="bg-white border border-slate-300 px-1.5 py-0.5 rounded text-[10px]">K</kbd> öffnet die Suche</span>
          <span>Keine medizinische Diagnose</span>
        </div>
      </div>
    </div>
  );
}
