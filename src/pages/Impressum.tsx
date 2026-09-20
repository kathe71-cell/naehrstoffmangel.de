import Breadcrumbs from '../components/Breadcrumbs';

export default function Impressum() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Impressum', url: '/impressum' }]} />

      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Impressum
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2 Medienstaatsvertrag (MStV)
        </p>
      </header>

      <section className="space-y-6 text-sm text-slate-700 leading-relaxed bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2">Diensteanbieter</h2>
          <p className="font-medium text-slate-900">Jens Kathe</p>
          <p>Hansastraße 6</p>
          <p>34119 Kassel</p>
          <p>Deutschland</p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2">Kontakt</h2>
          <p>
            Telefon:{' '}
            <a href="tel:+491786652623" className="text-emerald-700 hover:text-emerald-800 font-semibold underline">
              +49 178 6652623
            </a>
          </p>
          <p>
            E-Mail:{' '}
            <a href="mailto:jens@kathe.org" className="text-emerald-700 hover:text-emerald-800 font-semibold underline">
              jens@kathe.org
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2">Umsatzsteuer</h2>
          <p>
            Als Kleinunternehmer im Sinne von § 19 Abs. 1 UStG wird keine Umsatzsteuer berechnet und ausgewiesen.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="font-medium text-slate-900">Jens Kathe</p>
          <p>Hansastraße 6, 34119 Kassel, Deutschland</p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2">
            Wichtiger medizinischer Haftungsausschluss
          </h2>
          <p>
            Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt recherchiert und erstellt. Sie dienen jedoch ausschließlich der allgemeinen Information und Orientierung. Sie stellen keine medizinische Beratung dar und können eine individuelle Untersuchung, Beratung oder Diagnose durch approbierte Ärztinnen oder Ärzte keinesfalls ersetzen. Nehmen Sie Medikamente oder hochdosierte Nahrungsergänzungsmittel niemals eigenmächtig und ohne vorherige labordiagnostische Bestätigung und ärztliche Rücksprache ein.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2">Haftung für Inhalte und Links</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Für externe Links zu fremden Websites übernehmen wir keine Gewähr; für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2">EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800 underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </section>

    </div>
  );
}
