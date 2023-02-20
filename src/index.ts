import "./css/reset.css";
import "./css/style.css";
// import { createHeader } from "./modules/elements/header";
import { createFooter } from "./modules/elements/footer";

// Create the element
const helloWorld: HTMLDivElement = document.createElement("div");

// Set the text content of the element
helloWorld.textContent = "Hello, World!";

// Add the element to the DOM
document.body.appendChild(helloWorld);
// import "./modules/elements/header";
// import { createNavMain } from "./modules/elements/nav";
import { createHomePage } from "./modules/pages/home";
// import { createAboutPage } from "./modules/pages/about";
// import { createMenuPage } from "./modules/pages/menu";
// import { createContactPage } from "./modules/pages/contact";
// import { animateNavMain } from "./modules/functions/animateNav";

const content = document.body;
content.append(
//   createHeader(),
//   createNavMain(),
  createHomePage(),
//   createAboutPage(),
//   createMenuPage(),
//   createContactPage(),
  createFooter()
);

// animateNavMain()

// const hidePages = (...pages) => {
//   for (const page of pages) page.style.display = "none";
// };

// const homePage = document.querySelector("#home-page");
// const aboutPage = document.querySelector("#about-page");
// const menuPage = document.querySelector("#menu-page");
// const contactPage = document.querySelector("#contact-page");

// window.addEventListener("pageshow", () => hidePages(aboutPage, menuPage, contactPage));

// // TODO: Make restaraunt pizza slice logo into home link.
// const pageLinks = document.querySelectorAll(".nav-main a");
// for (const pageLink of pageLinks) {
//   pageLink.addEventListener("click", () => {
//     if (pageLink.parentElement.classList.contains("home")) {
//       homePage.style.display = "flex";
//       hidePages(aboutPage, menuPage, contactPage);
//     }
//     if (pageLink.parentElement.classList.contains("about")) {
//       aboutPage.style.display = "flex";
//       hidePages(homePage, menuPage, contactPage);
//     }
//     if (pageLink.parentElement.classList.contains("menu")) {
//       menuPage.style.display = "flex";
//       hidePages(homePage, aboutPage, contactPage)
//     }
//     if (pageLink.parentElement.classList.contains("contact")) {
//       contactPage.style.display = "flex";
//       hidePages(homePage, aboutPage, menuPage);
//     }
//   });
// }