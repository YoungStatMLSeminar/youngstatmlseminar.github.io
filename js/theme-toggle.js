// safe theme-toggle.js — does NOT change button HTML
(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('light-toggle'); // keep your markup as-is
  const storageKey = 'ox_yss_theme';

  function setTheme(theme, userChosen = false) {
    root.setAttribute('data-theme', theme);
    if (userChosen) {
      root.setAttribute('data-user-theme', 'true');
      localStorage.setItem(storageKey, theme);
    } else {
      root.removeAttribute('data-user-theme');
      localStorage.removeItem(storageKey);
    }
  }

  // initial theme
  const saved = localStorage.getItem(storageKey);
  if (saved === 'dark' || saved === 'light') {
    setTheme(saved, true);
  } else {
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  // respond to system changes if user didn't choose
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  if (mql.addEventListener) {
    mql.addEventListener('change', (e) => {
      if (!localStorage.getItem(storageKey)) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  } else {
    // fallback for older browsers
    mql.addListener((e) => {
      if (!localStorage.getItem(storageKey)) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  // attach click — do not edit icon markup
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      setTheme(current === 'dark' ? 'light' : 'dark', true);
    });
  }
})();
