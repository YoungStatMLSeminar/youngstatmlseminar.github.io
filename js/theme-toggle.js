// /js/theme-toggle.js
(function () {
  const STORAGE_KEY = "theme"; // "system" | "dark" | "light"
  const BTN_ID = "light-toggle";
  const ICON_SYSTEM = "light-toggle-system";
  const ICON_DARK   = "light-toggle-dark";
  const ICON_LIGHT  = "light-toggle-light";

  const ORDER = ["system", "dark", "light"];

  function readSaved() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function writeSaved(val) {
    try { localStorage.setItem(STORAGE_KEY, val); } catch (e) {}
  }

  function setHtmlForTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-user-theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else if (theme === "light") {
      document.documentElement.setAttribute("data-user-theme", "light");
      document.documentElement.removeAttribute("data-theme");
    } else {
      // system/device mode
      document.documentElement.removeAttribute("data-user-theme");
      // follow system preference for rendering
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
    }
  }

  function setIconsAndA11y(btn, theme) {
    const s = document.getElementById(ICON_SYSTEM);
    const d = document.getElementById(ICON_DARK);
    const l = document.getElementById(ICON_LIGHT);
    if (s) s.classList.toggle("active", theme === "system");
    if (d) d.classList.toggle("active", theme === "dark");
    if (l) l.classList.toggle("active", theme === "light");

    // aria-pressed: true when explicit (dark or light), false when system
    if (btn) {
      btn.setAttribute("aria-pressed", theme === "system" ? "false" : "true");
      btn.title = theme === "system" ? "Theme: Device/system (follows OS)" :
                  theme === "dark"   ? "Theme: Dark (forced)" :
                                       "Theme: Light (forced)";
    }
  }

  function nextTheme(theme) {
    const idx = ORDER.indexOf(theme);
    return ORDER[(idx + 1) % ORDER.length];
  }

  function init() {
    const btn = document.getElementById(BTN_ID);
    if (!btn) return;

    // Determine initial logical theme: prefer saved value, else 'system'
    let saved = readSaved() || "system";

    // apply page for initial state
    setHtmlForTheme(saved);
    setIconsAndA11y(btn, saved);

    // Listen to clicks: cycle system -> dark -> light -> system
    btn.addEventListener("click", () => {
      // Compute current state from storage (not from attributes, storage is source of truth)
      const current = readSaved() || "system";
      const next = nextTheme(current);
      writeSaved(next);
      setHtmlForTheme(next);
      setIconsAndA11y(btn, next);
    });

    // If stored state is "system", follow OS changes live
    if (window.matchMedia) {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener?.("change", () => {
        const storedNow = readSaved() || "system";
        if (storedNow === "system") {
          // update data-theme to reflect new system preference
          setHtmlForTheme("system");
          setIconsAndA11y(btn, "system");
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
