document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.querySelector(".site-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});
