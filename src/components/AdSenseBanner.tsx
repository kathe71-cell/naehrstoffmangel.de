import { useEffect } from 'react';

interface AdSenseBannerProps {
  slotId?: string;
  format?: 'auto' | 'rectangle' | 'horizontal';
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export default function AdSenseBanner({
  slotId = 'default-content-slot',
  format = 'auto',
  className = ''
}: AdSenseBannerProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch {
      // Ignore adsbygoogle push errors (e.g. adblocker active)
    }
  }, []);

  return (
    <div className={`adsense-slot my-8 mx-auto max-w-4xl text-center no-print ${className}`}>
      <div className="text-[10px] tracking-wider uppercase text-slate-600 font-semibold mb-1">
        Anzeige
      </div>
      <div className="min-h-[100px] sm:min-h-[140px] bg-slate-100 border border-dashed border-slate-300 rounded-xl flex items-center justify-center p-4 overflow-hidden">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', minHeight: '90px' }}
          data-ad-client="ca-pub-7078147966379221"
          data-ad-slot={slotId}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
