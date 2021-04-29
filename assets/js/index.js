const inputsEl = document.querySelectorAll(".custom-input input");

inputsEl.forEach((inputEl) => {
  inputEl.addEventListener("focus", ({ target }) => {
    document
      .querySelector(`.custom-input[for="${target.id}"]`)
      .classList.add("active");
  });
  inputEl.addEventListener("blur", ({ target }) => {
    document
      .querySelector(`.custom-input[for="${target.id}"]`)
      .classList.remove("active");
  });
});
