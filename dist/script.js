document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll("#abt, #schd");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navbar.classList.add("bg-custom");
        } else {
          navbar.classList.remove("bg-custom");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
