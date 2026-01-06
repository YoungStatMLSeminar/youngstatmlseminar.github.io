(function () {
  const ROOT = document.documentElement;
  const storageKey = 'site-theme'; // value: 'dark' or 'light' or null

  function applyTheme(theme, save = true) {
    if (theme === 'dark') {
      ROOT.setAttribute('data-theme', 'dark');
    } else {
      ROOT.removeAttribute('data-theme');
    }
    // Mark that user explicitly chose (so prefers-color-scheme fallback won't override)
    if (save) {
      localStorage.setItem(storageKey, theme);
      ROOT.setAttribute('data-user-theme', theme);
    } else {
      ROOT.removeAttribute('data-user-theme');
      localStorage.removeItem(storageKey);
    }
    // update toggle aria-pressed if exists
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.setAttribute('aria-pressed', theme === 'dark');
  }

  function getPreferredTheme() {
    const saved = localStorage.getItem(storageKey);
    if (saved === 'dark' || saved === 'light') return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  // initial
  applyTheme(getPreferredTheme(), false);

  // attach toggle behavior to any .theme-toggle button
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.theme-toggle');
    if (!btn) return;
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next, true);
  });

  // if you want live sync across tabs
  window.addEventListener('storage', (e) => {
    if (e.key === storageKey) {
      applyTheme(e.newValue === 'dark' ? 'dark' : 'light', false);
    }
  });
})();
