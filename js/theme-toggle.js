// theme-toggle.js
(function () {
  const STORAGE_KEY = "theme"; // saved values: "system", "dark", "light"
  const btnId = "light-toggle";
  const ICON_SYSTEM = "light-toggle-system";
  const ICON_DARK   = "light-toggle-dark";
  const ICON_LIGHT  = "light-toggle-light";

  // cycle order: system -> dark -> light -> system ...
  const ORDER = ["system", "dark", "light"];

  function readSaved() {
    try { return localStorage.getItem(STORAGE_KEY); } catch(e){ return null; }
  }

  function save(theme) {
    try {
      if (theme === "system") localStorage.setItem(STORAGE_KEY, "system");
      else localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) { /* ignore */ }
  }

  function setUserThemeAttr(theme) {
    if (theme === "system") {
      // remove the user override attribute so CSS media query can apply
      document.documentElement.removeAttribute("data-user-theme");
      // remove explicit data-theme so we don't force author dark/light
      document.documentElement.removeAttribute("data-theme");
    } else {
      // mark that the user selected a theme
      document.documentElement.setAttribute("data-user-theme", theme);
      if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        // light -> remove data-theme (light is the default), but still mark user choice
        document.documentElement.removeAttribute("data-theme");
      }
    }
  }

  function getCurrentIndex(theme) {
    const idx = ORDER.indexOf(theme);
    return idx === -1 ? 0 : idx;
  }

  function nextTheme(theme) {
    const idx = getCurrentIndex(theme);
    return ORDER[(idx + 1) % ORDER.length];
  }

  function setIcons(theme) {
    const s = document.getElementById(ICON_SYSTEM);
    const d = document.getElementById(ICON_DARK);
    const l = document.getElementById(ICON_LIGHT);
    if (!s || !d || !l) return;
    s.classList.remove("active");
    d.classList.remove("active");
    l.classList.remove("active");

    if (theme === "system") s.classList.add("active");
    else if (theme === "dark") d.classList.add("active");
    else l.classList.add("active");
  }

  function init() {
    const btn = document.getElementById(btnId);
    if (!btn) return;

    // decide initial theme:
    // precedence: saved localStorage -> system preference (if no saved value)
    let saved = readSaved();
    if (!saved || saved === "system") {
      // if explicitly saved as "system" keep it; if null default to system unless prefers dark
      if (!saved) {
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        saved = prefersDark ? "dark" : "system";
        // we do NOT auto-save the inferred fallback; we only save on user action
      }
    }

    // Apply initial visual state (but do not persist unless user clicks)
    setUserThemeAttr(readSaved() || saved);
    setIcons(readSaved() || saved);

    // Click cycles: system -> dark -> light -> ...
    btn.addEventListener("click", () => {
      const cur = readSaved() || (window.getComputedStyle(document.documentElement).getPropertyValue("--_unused") && null) || 
                  (document.documentElement.getAttribute("data-user-theme") || (document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "system"));
      const next = nextTheme(cur);
      // persist
      save(next);
      // apply
      setUserThemeAttr(next);
      setIcons(next);

      // accessibility hint: update aria-pressed (true when not system)
      if (next === "system") {
        btn.setAttribute("aria-pressed", "false");
      } else {
        btn.setAttribute("aria-pressed", "true");
      }
    });

    // also update if user changes system preference while on "system"
    if (window.matchMedia) {
      const m = window.matchMedia("(prefers-color-scheme: dark)");
      m.addEventListener?.("change", (e) => {
        // only react to system changes when user hasn't selected an explicit theme
        const stored = readSaved();
        if (!stored || stored === "system") {
          const newTheme = e.matches ? "dark" : "system";
          setUserThemeAttr(stored || newTheme);
          setIcons(stored || newTheme);
        }
      });
    }
  }

  // DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
