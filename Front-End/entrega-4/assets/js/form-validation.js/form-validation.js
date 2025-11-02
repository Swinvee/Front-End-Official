// assets/js/form-validation.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", e => {
    const inputs = form.querySelectorAll("input, select");
    let valid = true;

    inputs.forEach(input => {
      if (!input.checkValidity()) {
        input.classList.add("invalid");
        valid = false;
      } else {
        input.classList.remove("invalid");
      }
    });

    if (!valid) {
      e.preventDefault();
      alert("Por favor, corrija os campos destacados.");
    }
  });
});
