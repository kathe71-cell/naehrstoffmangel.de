import React from 'react';
import { AlertCircle, ShieldAlert } from 'lucide-react';

interface MedicalDisclaimerProps {
  compact?: boolean;
}

export default function MedicalDisclaimer({ compact = false }: MedicalDisclaimerProps) {
  if (compact) {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900 flex items-start gap-2 my-4">
        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong>Wichtiger medizinischer Hinweis:</strong> Diese Seite dient ausschließlich der allgemeinen Information und ersetzt keinesfalls eine professionelle ärztliche Beratung, Diagnose oder Behandlung.
        </div>
      </div>
    );
  }

  return (
    <aside aria-label="Medizinischer Disclaimer" className="bg-slate-50 border-l-4 border-emerald-600 border-y border-r border-slate-200 rounded-r-xl p-5 my-8 shadow-xs">
      <div className="flex items-start gap-3.5">
        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-800 shrink-0 mt-0.5">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <div className="text-sm text-slate-700 leading-relaxed">
          <p className="font-bold text-slate-900 mb-1 text-base">
            Redaktioneller &amp; Medizinischer Hinweis
          </p>
          <p>
            Die auf <strong className="text-slate-900">nährstoffmangel.de</strong> bereitgestellten Inhalte wurden sorgfältig nach wissenschaftlichen Leitlinien und Veröffentlichungen der DGE, des RKI und internationaler Fachgesellschaften recherchiert. Sie dienen jedoch ausschließlich der neutralen Information und allgemeinen Orientierung.
          </p>
          <p className="mt-2 font-medium text-slate-900">
            Diese Seite ersetzt keine ärztliche Beratung. Bei Verdacht auf einen Mangel oder bei unklaren körperlichen Beschwerden wenden Sie sich bitte an eine qualifizierte Ärztin oder einen Arzt. Nehmen Sie hochdosierte Nährstoffpräparate nicht ohne vorherige labordiagnostische Bestätigung und ärztliche Rücksprache ein.
          </p>
        </div>
      </div>
    </aside>
  );
}
