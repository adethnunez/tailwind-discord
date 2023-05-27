const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header__actions");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  mobileNav.classList.toggle("open");
});