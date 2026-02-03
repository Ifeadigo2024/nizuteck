function setMenuState(links, isOpen) {
  links.classList.toggle("nav-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
}

document.addEventListener("click", function (e) {
  const toggle = e.target.closest(".nav-toggle");
  const nav = document.querySelector(".nav");
  const links = nav?.querySelector(".nav-links");

  if (!nav || !links) return;

  // Toggle menu
  if (toggle) {
    const isOpen = !links.classList.contains("nav-open");
    setMenuState(links, isOpen);
    return;
  }

  // Close when clicking outside nav
  if (!e.target.closest(".nav")) {
    setMenuState(links, false);
  }

  // Close when clicking a nav link
  if (e.target.closest(".nav-links a")) {
    setMenuState(links, false);
  }
});

// Close on resize (desktop)
window.addEventListener("resize", () => {
  const links = document.querySelector(".nav-links");
  if (window.innerWidth > 768 && links) {
    setMenuState(links, false);
  }
});
