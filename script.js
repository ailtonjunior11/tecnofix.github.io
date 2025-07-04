// Config menu mobile
document.getElementById("menu-toggle").addEventListener("click", function () {
  this.classList.toggle("active"); // Alterna a classe "active" no botão de menu.

  document.getElementById("nav-links").classList.toggle("show"); // Alterna a classe "show" no menu de navegação.

  document.getElementById("nav-links").addEventListener("click", function () {
    this.classList.remove("show"); // Remove a classe "show" do menu quando um link é clicado.
  });
});

// Config scrollreveal
window.sr = ScrollReveal({ reset: true });

sr.reveal(".home__content", {
  origin: "top",
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
