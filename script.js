// Config menu mobile
document.getElementById("menu-toggle").addEventListener("click", function () {
  this.classList.toggle("active");
  document.getElementById("nav-links").classList.toggle("show");
});

// Config scrollreveal
window.sr = ScrollReveal({ reset: true });

sr.reveal(".home__content", {
  origin: "left",
  distance: "100px",
  duration: 1500,
});

sr.reveal(".about__text", {
  origin: "top",
  distance: "130px",
  duration: 1500,
});

sr.reveal(".product__card", {
  origin: "bottom",
  distance: "130px",
  duration: 1500,
});

sr.reveal(".contact__content", {
  duration: 1500,
  opacity: 0,
});
