document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  });

  document.querySelectorAll(".animate-on-scroll").forEach((item) => {
    observer.observe(item);
  });
});
