document.addEventListener("DOMContentLoaded", () => {
  console.log("ready"); // all elemen

  const reveals = document.querySelectorAll(".reveal"); // animasi reveal

  function runReveal() {
    const windowHeight = window.innerHeight;

    reveals.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 150) {
        el.classList.add("active");
      }
    });
  }

  // nge scroll
  window.addEventListener("scroll", runReveal);

  // pas baru mulai
  runReveal();
});
