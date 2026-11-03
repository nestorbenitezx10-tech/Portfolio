
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

// Toggle between dark and light themes.
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  const isLight = document.body.classList.contains("light-theme");

  themeIcon.className = isLight
    ? "fa-solid fa-moon"
    : "fa-regular fa-sun";

  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );
});

// Display the current year in the sidebar.
document.getElementById("year").textContent =
  new Date().getFullYear();

// Highlight the sidebar link for the current section.
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// Update the active navigation item while scrolling.
const sections = document.querySelectorAll(
  "main section[id]"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          const matches =
            link.getAttribute("href") === `#${entry.target.id}`;

          link.classList.toggle("active", matches);
        });
      }
    });
  },
  {
    rootMargin: "-20% 0px -65% 0px"
  }
);

sections.forEach((section) => observer.observe(section));
