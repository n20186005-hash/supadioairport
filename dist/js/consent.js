(() => {
  const key = 'supadio_cookie_preferences', deniedKey = 'supadio_analytics_denied', gaId = 'G-HXM22WWPKP';
  const namePrefix = 'supadio-analytics-denied:';
  const en = document.documentElement.lang === 'en';
  const messages = en ? {
    on: 'Google Analytics allowed in this tab.', off: 'Google Analytics rejected in this tab.',
    session: 'Google Analytics is off for this tab while its refusal remains available, including same-site navigation and refresh. The permanent choice could not be saved and stored permission may remain and be used in other tabs. Clear site data in browser settings to remove stored permission.',
    page: 'Google Analytics is off on this page. Stored permission may remain and be used in other tabs. Refusal could not be retained for another page; clear site data in browser settings before navigating or refreshing.',
    rollback: 'Google Analytics is off on this page. The unconfirmed stored permission was rejected or removed. Check these settings before allowing again.'
  } : {
    on: 'Google Analytics diizinkan pada tab ini.', off: 'Google Analytics ditolak pada tab ini.',
    session: 'Google Analytics nonaktif pada tab ini selama penolakannya masih tersedia, termasuk perpindahan halaman dalam situs dan pemuatan ulang. Pilihan permanen gagal disimpan dan izin tersimpan mungkin masih ada dan digunakan di tab lain. Hapus data situs melalui pengaturan peramban untuk menghapus izin tersimpan.',
    page: 'Google Analytics nonaktif pada halaman ini. Izin tersimpan mungkin masih ada dan digunakan di tab lain. Penolakan gagal dipertahankan untuk halaman berikutnya; hapus data situs melalui pengaturan peramban sebelum berpindah atau memuat ulang.',
    rollback: 'Google Analytics nonaktif pada halaman ini. Izin tersimpan yang gagal dikonfirmasi telah ditolak atau dihapus. Periksa pengaturan ini sebelum mengizinkan kembali.'
  };
  function nameDenied() { return String(window.name || '').startsWith(namePrefix); }
  function read() {
    try {
      const denied = window.__supadioDenied || nameDenied() || sessionStorage.getItem(deniedKey) === '1';
      const raw = JSON.parse(localStorage.getItem(key) || 'null');
      return { analytics: !denied && raw?.analytics === true, decided: !!denied || typeof raw?.analytics === 'boolean', denied: !!denied, storedDenial: raw?.analytics === false, failed: false };
    } catch { return { analytics: false, decided: false, denied: !!window.__supadioDenied, failed: true }; }
  }
  function applyRuntime(allowed) {
    window['ga-disable-' + gaId] = !allowed;
    if (!allowed) {
      if (window.gtag) window.gtag('consent', 'update', { analytics_storage: 'denied' });
      for (const part of document.cookie.split(';')) {
        const name = part.split('=')[0].trim();
        if (/^_ga(?:_|$)/.test(name)) for (const domain of ['', '; domain=' + location.hostname, '; domain=.supadioairport.com']) document.cookie = name + '=; Max-Age=0; path=/' + domain;
      }
      return;
    }
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    if (!window.__supadioConfigured) window.gtag('consent', 'default', { analytics_storage: 'denied' });
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    if (!window.__supadioConfigured) {
      window.__supadioConfigured = true;
      window.gtag('js', new Date()); window.gtag('config', gaId);
    }
    if (window.__supadioLoaded) return;
    window.__supadioLoaded = true;
    const script = document.createElement('script'); script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId; document.head.appendChild(script);
  }
  function denySession() {
    window.__supadioDenied = true;
    applyRuntime(false);
    let retained = false;
    try { sessionStorage.setItem(deniedKey, '1'); retained = sessionStorage.getItem(deniedKey) === '1'; } catch {}
    try {
      if (!nameDenied()) window.name = namePrefix + String(window.name || '');
      retained = nameDenied() || retained;
    } catch {}
    return retained;
  }
  function clearVeto() {
    try {
      sessionStorage.getItem(deniedKey);
      const name = String(window.name || '');
      sessionStorage.removeItem(deniedKey);
      if (sessionStorage.getItem(deniedKey) !== null) return false;
      if (name.startsWith(namePrefix)) window.name = name.slice(namePrefix.length);
      return !nameDenied();
    } catch { return false; }
  }
  function rollbackGrant() {
    try {
      localStorage.setItem(key, JSON.stringify({ analytics: false }));
      if (JSON.parse(localStorage.getItem(key) || 'null')?.analytics === false) return true;
    } catch {}
    try { localStorage.removeItem(key); return localStorage.getItem(key) === null; } catch { return false; }
  }
  function updateUI(state, message) {
    const checkbox = document.getElementById('analytics'); if (checkbox) checkbox.checked = state.analytics;
    if (message !== undefined) document.querySelectorAll('[data-consent-status]').forEach(node => { node.textContent = message; });
    const banner = document.getElementById('cookie-banner');
    if (state.decided && !state.failed && (!state.denied || state.storedDenial)) banner?.classList.add('hidden'); else banner?.classList.remove('hidden');
  }
  function apply() {
    const state = read(); applyRuntime(state.analytics);
    updateUI(state, state.failed ? messages.page : state.denied && !state.storedDenial ? messages.session : state.decided ? (state.analytics ? messages.on : messages.off) : '');
    return state;
  }
  function save(value) {
    value = value === true; let retained = false, saved = false, grantCleared = false;
    if (!value) {
      retained = denySession();
      try {
        localStorage.setItem(key, JSON.stringify({ analytics: false }));
        saved = JSON.parse(localStorage.getItem(key) || 'null')?.analytics === false;
      } catch {}
    } else {
      // Verify reads and both tab vetoes before publishing a shared grant.
      try {
        if (read().failed || !clearVeto()) throw Error('Choice unavailable');
        localStorage.setItem(key, JSON.stringify({ analytics: true }));
        if (JSON.parse(localStorage.getItem(key) || 'null')?.analytics !== true) throw Error('Choice not retained');
        window.__supadioDenied = false;
        const state = read();
        if (state.failed || !state.analytics) throw Error('Choice unavailable');
        saved = true;
      } catch {
        grantCleared = rollbackGrant();
        retained = denySession();
      }
    }
    let state = apply();
    if (saved && value && (state.failed || !state.analytics)) {
      grantCleared = rollbackGrant();
      retained = denySession(); saved = false; state = apply();
    }
    const result = { saved, analytics: state.analytics, message: saved ? (state.analytics ? messages.on : messages.off) : (grantCleared ? messages.rollback : retained ? messages.session : messages.page) };
    updateUI(state, result.message);
    if (!saved) document.getElementById('cookie-banner')?.classList.remove('hidden');
    return result;
  }
  window.SupadioConsent = { read, save };
  apply();
  const checkbox = document.getElementById('analytics');
  document.querySelectorAll('[data-cookie-accept]').forEach(node => node.addEventListener('click', () => save(true)));
  document.querySelectorAll('[data-cookie-reject]').forEach(node => node.addEventListener('click', () => save(false)));
  document.getElementById('cookie-settings')?.addEventListener('submit', event => { event.preventDefault(); save(checkbox?.checked === true); });
  window.addEventListener('storage', apply);
})();
