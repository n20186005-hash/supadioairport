(() => {
  const KEY = 'supadio_cookie_preferences';
  const gaId = window.SUPADIO_GA_ID;
  const defaults = { necessary: true, analytics: false, preferences: false, marketing: false };
  let gaLoaded = false;

  function read() {
    try { const raw = localStorage.getItem(KEY); return raw ? { ...defaults, ...JSON.parse(raw) } : null; }
    catch { return null; }
  }
  function loadAnalytics() {
    if (gaLoaded || !gaId) return;
    gaLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', gaId, { anonymize_ip: true });
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
    s.dataset.service = 'google-analytics';
    document.head.appendChild(s);
  }
  function apply(prefs) { if (prefs?.analytics) loadAnalytics(); }
  function save(prefs) {
    localStorage.setItem(KEY, JSON.stringify({ ...defaults, ...prefs, necessary: true, marketing: false }));
    document.getElementById('cookie-banner')?.classList.add('hidden');
    apply(read());
    window.dispatchEvent(new CustomEvent('supadio:consent-changed', { detail: read() }));
  }

  window.SupadioConsent = { read, save, defaults };
  document.addEventListener('DOMContentLoaded', () => {
    const prefs = read();
    const banner = document.getElementById('cookie-banner');
    if (!prefs) banner?.classList.remove('hidden'); else apply(prefs);
    document.querySelector('[data-cookie-accept]')?.addEventListener('click', () => save({ analytics: true }));
    document.querySelector('[data-cookie-reject]')?.addEventListener('click', () => save({ analytics: false }));
  });
})();
