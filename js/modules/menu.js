document.addEventListener("click", function (e) {
  const toggle = e.target.closest(".nav-toggle");
  const nav = document.querySelector(".nav");
  const links = nav?.querySelector(".nav-links");

  if (!nav || !links) return;

  // Toggle menu
  if (toggle) {
    links.classList.toggle("nav-open");
    return;
  }

  // Close when clicking outside nav
  if (!e.target.closest(".nav")) {
    links.classList.remove("nav-open");
  }

  // Close when clicking a nav link
  if (e.target.closest(".nav-links a")) {
    links.classList.remove("nav-open");
  }
});

// Close on resize (desktop)
window.addEventListener("resize", () => {
  const links = document.querySelector(".nav-links");
  if (window.innerWidth > 768) {
    links?.classList.remove("nav-open");
  }
});
