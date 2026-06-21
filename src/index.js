import "./styles.css";
import homePageEx from "./pages/homePage.js";
import aboutPage from "./pages/About.js";
import menuPage from "./pages/Menu.js";

const homeBtnEl = document.querySelector(".home-btn");
const menuBtnEl = document.querySelector(".menu-btn");
const aboutBtnEl = document.querySelector(".about-btn");

const homePageDiv = document.getElementById("content");

const renderFunc = (pageImport) => {
  homePageDiv.innerHTML = "";
  return pageImport(homePageDiv);
};

renderFunc(homePageEx);

homeBtnEl.addEventListener("click", () => {
  renderFunc(homePageEx);
});

menuBtnEl.addEventListener("click", () => {
  renderFunc(menuPage);
});

aboutBtnEl.addEventListener("click", () => {
  renderFunc(aboutPage);
});
