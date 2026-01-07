// /js/theme-toggle.js
(function () {
  const root = document.documentElement;
  const toggleBtn = document.querySelector('.theme-toggle');

  // Read saved user preference
  const saved = localStorage.getItem('ox_yss_theme'); // 'light' | 'dark' | null

  function applyTheme(theme, {userChosen = false} = {}) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
    }

    if (userChosen) {
      // mark that user chose a theme to prevent CSS media rule from overriding it
      root.setAttribute('data-user-theme', 'true');
      localStorage.setItem('ox_yss_theme', theme);
    } else {
      // no explicit user choice
      root.removeAttribute('data-user-theme');
      localStorage.removeItem('ox_yss_theme');
    }

    // update aria-pressed / button contents so user sees current state
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      toggleBtn.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
  }

  // determine system preference
  const mql = window.matchMedia('(prefers-color-scheme: dark)');

  // initial logic:
  if (saved === 'dark' || saved === 'light') {
    applyTheme(saved, {userChosen: true});
  } else {
    // Respect the system pref — but do NOT set data-user-theme so the CSS media block can still apply
    applyTheme(mql.matches ? 'dark' : 'light', {userChosen: false});
  }

  // if system preference changes and user has not chosen explicitly, update theme
  mql.addEventListener?.('change', (e) => {
    const stillSaved = localStorage.getItem('ox_yss_theme');
    if (!stillSaved) {
      applyTheme(e.matches ? 'dark' : 'light', {userChosen: false});
    }
  });

  // click toggler: toggle between light/dark and mark as user-chosen
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next, {userChosen: true});
    });
  }
})();
