import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Activity, 
  Dna, 
  Sun, 
  Zap, 
  Sparkles, 
  ShieldAlert, 
  Baby, 
  Droplet,
  UtensilsCrossed,
  FileText
} from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const deficiencies = [
    { name: 'Eisenmangel', slug: '/eisenmangel', icon: Droplet, desc: 'Müdigkeit, Blässe & Ferritin' },
    { name: 'Vitamin-D-Mangel', slug: '/vitamin-d-mangel', icon: Sun, desc: 'Sonnenhormon & Wintertief' },
    { name: 'Magnesiummangel', slug: '/magnesiummangel', icon: Zap, desc: 'Wadenkrämpfe & Stress' },
    { name: 'Vitamin-B12-Mangel', slug: '/vitamin-b12-mangel', icon: Dna, desc: 'Veganer & Nervensystem' },
    { name: 'Zinkmangel', slug: '/zinkmangel', icon: Sparkles, desc: 'Immunsystem & Wundheilung' },
    { name: 'Folsäuremangel', slug: '/folsaeuremangel', icon: Baby, desc: 'Schwangerschaft & Zellteilung' },
    { name: 'Jodmangel', slug: '/jodmangel', icon: ShieldAlert, desc: 'Schilddrüse & Jodmangel-Land DE' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
      {/* Top Banner */}
      <div className="bg-emerald-900 text-emerald-100 text-[11px] sm:text-xs py-1.5 px-4 text-center font-medium">
        <span>Evidenzbasierte Orientierung zu Mikronährstoffen · Keine ärztliche Beratung</span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group py-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white shadow-sm group-hover:bg-emerald-800 transition-colors">
              <Activity className="w-5 h-5 text-emerald-200" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                nährstoff<span className="text-emerald-700">mangel</span>.de
              </span>
              <span className="hidden sm:block text-[11px] text-slate-600 font-medium tracking-wide">
                Unabhängiges Fachportal für Mikronährstoffe
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Deficiencies Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button 
                type="button"
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors min-h-[44px] ${
                  deficiencies.some(d => isActive(d.slug)) 
                    ? 'text-emerald-700 bg-emerald-50' 
                    : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
                }`}
                aria-expanded={dropdownOpen}
              >
                <span>Nährstoffmängel</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-2.5 grid gap-1 mt-1 z-50">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-600 px-3 py-1">
                    7 häufigste Mängel in Deutschland
                  </div>
                  {deficiencies.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.slug}
                        to={item.slug}
                        className={`flex items-start gap-3 p-2.5 rounded-xl text-sm transition-colors ${
                          isActive(item.slug) ? 'bg-emerald-50 text-emerald-900 font-bold' : 'hover:bg-slate-50 text-slate-800'
                        }`}
                        onClick={() => setDropdownOpen(false)}
                      >
                        <div className="p-2 rounded-lg bg-emerald-100/70 text-emerald-800 shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{item.name}</div>
                          <div className="text-xs text-slate-500">{item.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Tools & Guides */}
            <Link
              to="/symptome"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors min-h-[44px] flex items-center gap-1.5 ${
                isActive('/symptome') ? 'text-emerald-700 bg-emerald-50' : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
              }`}
            >
              <Activity className="w-4 h-4 text-emerald-600" />
              <span>Symptom-Navigator</span>
            </Link>

            <Link
              to="/bluttest"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors min-h-[44px] flex items-center gap-1.5 ${
                isActive('/bluttest') ? 'text-emerald-700 bg-emerald-50' : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>Bluttest-Ratgeber</span>
            </Link>

            <Link
              to="/ernaehrung"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors min-h-[44px] flex items-center gap-1.5 ${
                isActive('/ernaehrung') ? 'text-emerald-700 bg-emerald-50' : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
              }`}
            >
              <UtensilsCrossed className="w-4 h-4 text-emerald-600" />
              <span>Lebensmittel</span>
            </Link>

            <Link
              to="/ueber-uns"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors min-h-[44px] flex items-center ${
                isActive('/ueber-uns') ? 'text-emerald-700 bg-emerald-50' : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
              }`}
            >
              Über uns
            </Link>
          </div>

          {/* Quick CTA button */}
          <div className="hidden sm:flex items-center gap-2">
            <Link
              to="/symptome"
              className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl min-h-[44px] flex items-center gap-1.5 shadow-2xs hover:shadow-xs transition-all active:scale-98"
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Symptome prüfen</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button (>= 48px touch target) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              type="button"
              className="w-12 h-12 flex items-center justify-center rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label="Hauptmenü öffnen oder schließen"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-600 px-3 py-2">
              Nährstoffmängel (Die 7 Wichtigsten)
            </div>
            {deficiencies.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.slug}
                  to={item.slug}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm min-h-[48px] ${
                    isActive(item.slug) ? 'bg-emerald-50 text-emerald-900 font-bold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            <div className="border-t border-slate-100 my-2 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-600 px-3 py-2">
                Tools &amp; Ratgeber
              </div>

              <Link
                to="/symptome"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm min-h-[48px] ${
                  isActive('/symptome') ? 'bg-emerald-50 text-emerald-900 font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Activity className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Symptom-Navigator</span>
              </Link>

              <Link
                to="/bluttest"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm min-h-[48px] ${
                  isActive('/bluttest') ? 'bg-emerald-50 text-emerald-900 font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <FileText className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Bluttest-Ratgeber</span>
              </Link>

              <Link
                to="/ernaehrung"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm min-h-[48px] ${
                  isActive('/ernaehrung') ? 'bg-emerald-50 text-emerald-900 font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <UtensilsCrossed className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Lebensmittel-Tabelle</span>
              </Link>

              <Link
                to="/ueber-uns"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm min-h-[48px] ${
                  isActive('/ueber-uns') ? 'bg-emerald-50 text-emerald-900 font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Über uns &amp; Redaktionsleitlinien</span>
              </Link>

              <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100 text-xs">
                <Link
                  to="/impressum"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-900"
                >
                  Impressum
                </Link>
                <Link
                  to="/datenschutz"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-900"
                >
                  Datenschutz
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
