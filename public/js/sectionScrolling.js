const aboutUsSection = document.getElementById("about-us");
const shopSection = document.getElementById("shop");
const contactUsSection = document.getElementById("contact-us");
const pagesSection = document.getElementById("pages");

const aboutUsLink = document.getElementById("about-us-link");
const shopLink = document.getElementById("shop-link");
const contactUsLink = document.getElementById("contact-us-link");
const pagesLink = document.getElementById("pages-link");

function scrollToSection(section) {
  section.scrollIntoView({
    behavior: "smooth",
  });
}

aboutUsLink.addEventListener("click", () => {
  scrollToSection(aboutUsSection);
});

shopLink.addEventListener("click", () => {
  scrollToSection(shopSection);
});

contactUsLink.addEventListener("click", () => {
  scrollToSection(contactUsSection);
});

pagesLink.addEventListener("click", () => {
  scrollToSection(pagesSection);
});
