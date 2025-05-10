const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

const readMoreBtn = document.getElementById("read-more");
const moreText = document.getElementById("more-text");

readMoreBtn.addEventListener("click", () => {
  moreText.classList.toggle("show");
  readMoreBtn.textContent = moreText.classList.contains("show") ? "Read Less" : "Read More";
});
