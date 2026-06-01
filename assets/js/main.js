(() => {
  const menuButton = document.getElementById("menuButton");
  const mainMenu = document.getElementById("mainMenu");

  if (menuButton && mainMenu) {
    menuButton.addEventListener("click", () => {
      const isOpen = mainMenu.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    mainMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainMenu.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  const state = { room: "", concern: "" };
  const result = document.getElementById("quizResult");
  const suggestions = {
    small: "LYL-KQXDJ-07",
    medium: "LYL-KQXDJ-9",
    large: "LYL-Y-ZW-15"
  };

  function buildSuggestion() {
    if (!result) return;

    if (!state.room || !state.concern) {
      result.textContent = "Select two options to get a model suggestion.";
      return;
    }

    let model = suggestions[state.room] || "LYL-KQXDJ-9";
    if (state.concern === "sleep" && state.room !== "large") model = "LYL-KQXDJ-07";
    if (state.concern === "pets" && state.room === "medium") model = "LYL-KQXDJ-9";
    if (state.concern === "smoke" || state.room === "large") model = "LYL-Y-ZW-15";

    result.innerHTML = `Recommended model: <strong>${model}</strong>. Ask for OEM options including logo, filter, packaging and target-market compliance.`;
  }

  document.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.dataset.group;
      const value = button.dataset.value;
      state[group] = value;

      document.querySelectorAll(`.quiz-option[data-group="${group}"]`).forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");
      buildSuggestion();
    });
  });
})();
