import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { PrivacyAmazonSection } from '@plattform/core';

export default function Datenschutz() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Datenschutzerklärung', url: '/datenschutz' }]} />

      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Datenschutzerklärung
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Informationen über die Erhebung und Verarbeitung personenbezogener Daten nach DSGVO
        </p>
      </header>

      <section className="space-y-6 text-sm text-slate-700 leading-relaxed bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2">1. Datenschutz auf einen Blick</h2>
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2">2. Verantwortliche Stelle</h2>
          <p>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist der im Impressum genannte Diensteanbieter.
          </p>
          <p className="mt-1 font-medium text-slate-900">
            Vollständige Kontaktdaten siehe <Link to="/impressum" className="text-emerald-700 hover:text-emerald-800 underline">Impressum</Link>.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2">3. Datenerfassung auf dieser Website</h2>
          <p>
            Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Beim Aufruf der Seiten werden durch den Webserver automatisch technische Server-Logfiles erhoben (z. B. Browsertyp, Betriebssystem, Referrer URL, Zugriffszeit). Diese Daten sind technisch erforderlich, um die Stabilität und Sicherheit der Website zu gewährleisten (Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2">4. Vercel Web Analytics (Cookielos &amp; DSGVO-konform)</h2>
          <p>
            Diese Website nutzt <strong>Vercel Web Analytics</strong>, einen datenschutzfreundlichen Webanalysedienst der Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
          </p>
          <p className="mt-2">
            Vercel Analytics verwendet <strong>keine Cookies</strong>, speichert keine IP-Adressen dauerhaft und erstellt keine nutzerübergreifenden Profile. Es werden lediglich aggregierte Metriken erhoben (wie besuchte Pfade, Gerätetyp und ungefähre Länderherkunft), um die technische Performance und das Nutzererlebnis der Website zu optimieren. Rechtsgrundlage ist unser berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2">5. Keine externen Google Fonts (Zero-CDN)</h2>
          <p>
            Diese Website verzichtet vollständig auf die Einbindung externer Web-Schriftarten (wie Google Fonts). Es werden ausschließlich lokal auf Ihrem Endgerät bereits installierte System-Schriftarten verwendet. Beim Seitenaufbau werden keine Schriftdateien von Drittservern nachgeladen und keine IP-Adressen zu Schrift-Hostern übertragen.
          </p>
        </div>

        <PrivacyAmazonSection number="6." headingClassName="text-base font-bold text-slate-900 mb-2" className="space-y-2" />

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2">7. Ihre Rechte als betroffene Person</h2>
          <p>
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen können Sie sich jederzeit unter den im Impressum angegebenen Kontaktdaten an uns wenden.
          </p>
        </div>
      </section>

    </div>
  );
}
