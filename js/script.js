(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem("portfolio-theme");

  if (saved) {
    root.dataset.theme = saved;
  } else {
    root.dataset.theme = "dark";
  }

  const themeBtn = document.querySelector("[data-theme-toggle]");
  const menuBtn = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector(".nav-links");

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      localStorage.setItem("portfolio-theme", next);
      themeBtn.textContent = next === "dark" ? "☀" : "☾";
      themeBtn.setAttribute("aria-label", next === "dark" ? "Switch to light mode" : "Switch to dark mode");
    });
    themeBtn.textContent = root.dataset.theme === "dark" ? "☀" : "☾";
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", nav.classList.contains("open"));
    });
  }

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => nav?.classList.remove("open"));
  });

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
