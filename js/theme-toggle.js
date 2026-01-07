// /js/theme-toggle.js
(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('light-toggle');
  const saved = localStorage.getItem('ox_yss_theme');

  function setTheme(theme, userChosen = false) {
    root.setAttribute('data-theme', theme);

    if (userChosen) {
      root.setAttribute('data-user-theme', 'true');
      localStorage.setItem('ox_yss_theme', theme);
    } else {
      root.removeAttribute('data-user-theme');
      localStorage.removeItem('ox_yss_theme');
    }
  }

  // initial theme
  if (saved === 'dark' || saved === 'light') {
    setTheme(saved, true);
  } else {
    setTheme(
      window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    );
  }

  // react to system change if user didn't choose
  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', e => {
      if (!localStorage.getItem('ox_yss_theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });

  // toggle click
  toggleBtn?.addEventListener('click', () => {
    const next =
      root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next, true);
  });
})();
