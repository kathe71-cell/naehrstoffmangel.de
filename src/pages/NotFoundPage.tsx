import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, AlertTriangle, FileQuestion } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 bg-slate-50 text-slate-800">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 shadow-xs">
          <FileQuestion className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
            Fehler 404
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Seite nicht gefunden
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Die von Ihnen aufgerufene Adresse existiert leider nicht oder wurde im Rahmen unserer Qualitätssicherung aktualisiert.
          </p>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 text-left space-y-2">
          <strong className="text-slate-900 block font-semibold">Hilfreiche Orientierung:</strong>
          <ul className="space-y-1.5 list-disc list-inside">
            <li>Nutzen Sie unsere Übersicht der <Link to="/" className="text-emerald-700 hover:underline font-medium">häufigsten Nährstoffmängel</Link>.</li>
            <li>Konsultieren Sie den <Link to="/bluttest" className="text-emerald-700 hover:underline font-medium">Bluttest-Ratgeber</Link> zu Laborwerten.</li>
            <li>Wählen Sie passende Nahrungsmittel in der <Link to="/ernaehrung" className="text-emerald-700 hover:underline font-medium">Lebensmittel-Matrix</Link>.</li>
          </ul>
        </div>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-xs transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Zurück zur Startseite</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
