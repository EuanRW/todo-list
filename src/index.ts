import "./css/reset.css";
import "./css/style.css";
// import { createHeader } from "./modules/elements/header";
import { createHomePage } from "./modules/pages/home";
import { createFooter } from "./modules/elements/footer";
import { Todo } from "./modules/objects/todo";
import { List } from "./modules/objects/list";
import { createList } from "./modules/elements/list";

const listArray:List[] = [];
const todoArray:Todo[]  = [];

// Create initial list.
const initialList: List = {
  title: 'General'
}
listArray.push(initialList)
  
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

export {listArray, todoArray}

// animateNavMain()

// const hidePages = (...pages) => {
//   for (const page of pages) page.style.display = "none";
// };

// const homePage = document.querySelector("#home-page");
// const aboutPage = document.querySelector("#about-page");
// const menuPage = document.querySelector("#menu-page");
// const contactPage = document.querySelector("#contact-page");

// window.addEventListener("pageshow", () => hidePages(aboutPage, menuPage, contactPage));

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