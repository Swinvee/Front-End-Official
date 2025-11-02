// assets/js/spa.js

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const main = document.querySelector("main");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const page = link.getAttribute("href");
      fetch(page)
        .then(res => res.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const content = doc.querySelector("main").innerHTML;
          main.innerHTML = content;
          window.history.pushState({}, "", page);
        });
    });
  });

  window.addEventListener("popstate", () => {
    location.reload();
  });
});
