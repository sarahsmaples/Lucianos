// Sticky nav background on scroll
const nav = document.getElementById("main-nav");
if (nav) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.classList.add("bg-gray-900");
    } else {
      nav.classList.remove("bg-gray-900");
    }
  });
}

// Mobile menu toggle
const menuToggle = document.getElementById("mobile-menu-toggle");
const menu = document.getElementById("navbar-default");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("hidden");
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !expanded);
  });
}

// Scroll-triggered animations
const scrollEls = document.querySelectorAll(".scroll-animate");

if (scrollEls.length) {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(function () {
            entry.target.classList.add("visible");
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  scrollEls.forEach(function (el) {
    observer.observe(el);
  });
}
