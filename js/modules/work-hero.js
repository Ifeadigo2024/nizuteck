const workHero = document.querySelector("[data-work-hero]");

if (workHero) {
  const slides = Array.from(workHero.querySelectorAll(".work-hero-slide"));
  const dots = Array.from(workHero.querySelectorAll(".work-hero-dot"));
  let activeIndex = slides.findIndex(slide => slide.classList.contains("is-active"));
  let autoTimer = null;

  if (activeIndex < 0) {
    activeIndex = 0;
  }

  function setActive(index) {
    activeIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    });

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-pressed", String(isActive));
    });
  }

  function stopAuto() {
    if (autoTimer !== null) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function startAuto() {
    stopAuto();

    if (slides.length < 2) {
      return;
    }

    autoTimer = setInterval(() => {
      setActive(activeIndex + 1);
    }, 5500);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      setActive(index);
      startAuto();
    });
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAuto();
    } else {
      startAuto();
    }
  });

  setActive(activeIndex);
  startAuto();
}
