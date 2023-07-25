const navicon = document.querySelector("#nav-icon");
const navmenu = document.querySelector(".nav-menu");

navicon.addEventListener("click", (e) => {
  e.preventDefault();
  navmenu.classList.toggle("show-menu");
});