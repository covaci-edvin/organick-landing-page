const menu = document.querySelector(".menu");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");
const menuLinks = document.querySelectorAll(".menu__link");

let isMobile;

function setMenuHeightAndPosition() {
  const headerHeight = header.getBoundingClientRect().bottom;
  menu.style.height = `${window.innerHeight - headerHeight}px`;
  menu.style.top = `${headerHeight}px`;
}

function closeMenu() {
  menu.classList.remove("open-menu");
  openIcon.classList.add("show-icon");
  closeIcon.classList.remove("show-icon");
  isMobile && document.body.classList.remove("lock-scroll");
}

function checkScreenWidth() {
  if (window.innerWidth <= 768) {
    setMenuHeightAndPosition();
    isMobile = true;
  } else {
    menu.style.height = "auto";
    closeMenu();
    isMobile = false;
  }
}

function toggleMenu() {
  setMenuHeightAndPosition();
  menu.classList.toggle("open-menu");
  openIcon.classList.toggle("show-icon");
  closeIcon.classList.toggle("show-icon");
  isMobile && document.body.classList.toggle("lock-scroll");
}

checkScreenWidth();
hamburger.addEventListener("click", toggleMenu);
menuLinks.forEach((link) => link.addEventListener("click", toggleMenu));
window.addEventListener("resize", checkScreenWidth);
