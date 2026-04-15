/* ============================================================
   OS Selector Script
   Reads data-os attributes, shows/hides content blocks,
   persists choice in localStorage.
   ============================================================ */

(function () {
  const OS_KEY = "preferred-os";
  const OS_LIST = ["windows", "macos", "arch", "ubuntu", "debian", "rhel"];
  const OS_LABELS = {
    windows: "🪟 Windows",
    macos:   "🍎 macOS",
    arch:    "🐧 Arch",
    ubuntu:  "🐧 Ubuntu",
    debian:  "🐧 Debian",
    rhel:    "🐧 RHEL / CentOS",
  };

  function getPreferred() {
    return localStorage.getItem(OS_KEY) || "macos";
  }

  function setPreferred(os) {
    localStorage.setItem(OS_KEY, os);
  }

  function applyOS(os) {
    // Update block visibility
    document.querySelectorAll(".os-block").forEach((el) => {
      const targets = el.dataset.os ? el.dataset.os.split(" ") : [];
      el.classList.toggle("os-visible", targets.includes(os));
    });

    // Update button states
    document.querySelectorAll(".os-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.os === os);
    });
  }

  function buildSelector() {
    const containers = document.querySelectorAll(".os-selector-bar");
    containers.forEach((bar) => {
      bar.innerHTML = `<span class="os-selector-label">Operating System:</span>`;
      OS_LIST.forEach((os) => {
        const btn = document.createElement("button");
        btn.className = "os-btn";
        btn.dataset.os = os;
        btn.textContent = OS_LABELS[os];
        btn.addEventListener("click", () => {
          setPreferred(os);
          applyOS(os);
        });
        bar.appendChild(btn);
      });
    });
  }

  function init() {
    buildSelector();
    applyOS(getPreferred());
  }

  // Run on initial load and after MkDocs instant navigation
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Re-run on MkDocs instant page navigation
  document.addEventListener("DOMContentSwitch", init);
})();
