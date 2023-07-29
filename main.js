const menu = document.querySelector(".menu");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");

function setMenuHeightAndPosition() {
  const headerHeight = header.getBoundingClientRect().bottom;
  menu.style.height = `${window.innerHeight - headerHeight}px`;
  menu.style.top = `${headerHeight}px`;
}

function closeMenu() {
  menu.classList.remove("open-menu");
  openIcon.classList.add("show-icon");
  closeIcon.classList.remove("show-icon");
  console.log("scroll");
  window.removeEventListener("scroll", closeMenu);
}

function toggleMenu() {
  setMenuHeightAndPosition();
  menu.classList.toggle("open-menu");
  openIcon.classList.toggle("show-icon");
  closeIcon.classList.toggle("show-icon");

  if (menu.classList.contains("open-menu")) {
    window.addEventListener("scroll", closeMenu);
  } else {
    closeMenu();
  }
}

function checkScreenWidth() {
  if (window.innerWidth <= 768) {
    setMenuHeightAndPosition();
  } else {
    menu.style.height = "auto";
    closeMenu();
  }
}

checkScreenWidth();
hamburger.addEventListener("click", toggleMenu);
window.addEventListener("resize", checkScreenWidth);
