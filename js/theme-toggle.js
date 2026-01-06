// theme-toggle.js
(function () {
  const btn = document.querySelector('.theme-toggle');
  const root = document.documentElement;

  if (!btn) return;

  function setTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      btn.setAttribute('aria-pressed', 'false');
    }
  }

  // Sync button state with already-applied theme
  const isDark = root.getAttribute('data-theme') === 'dark';
  btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');

  // Toggle on click
  btn.addEventListener('click', () => {
    const currentlyDark = root.getAttribute('data-theme') === 'dark';
    setTheme(currentlyDark ? 'light' : 'dark');
  });
})();
