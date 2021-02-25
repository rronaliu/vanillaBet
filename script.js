// const navitem = document.querySelector(".nav-item");

function classToggleNav() {
  this.classList.toggle("active");
}

document.querySelector(".nav-item-1").addEventListener("click", classToggleNav);
document.querySelector(".nav-item-2").addEventListener("click", classToggleNav);
document.querySelector(".nav-item-3").addEventListener("click", classToggleNav);
document.querySelector(".nav-item-4").addEventListener("click", classToggleNav);

function classToggle() {
  this.classList.toggle("active-icon");
}

document
  .querySelector(".stories-icon-1")
  .addEventListener("click", classToggle);
document
  .querySelector(".stories-icon-2")
  .addEventListener("click", classToggle);
document
  .querySelector(".stories-icon-3")
  .addEventListener("click", classToggle);
document
  .querySelector(".stories-icon-4")
  .addEventListener("click", classToggle);
document
  .querySelector(".stories-icon-5")
  .addEventListener("click", classToggle);
