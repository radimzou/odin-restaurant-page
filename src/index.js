import "./styles.css";
import catPhoto from "./assets/photo-var-1.jpg";
import homePage from "./pages/homePage.js";
import aboutPage from "./pages/About.js";
import menuPage from "./pages/Menu.js";

const homePageDiv = document.getElementById("content");
const homeBtnEl = document.getElementsByClassName("home-btn");
const menuBtnEl = document.getElementsByClassName("menu-btn");
const aboutBtnEl = document.getElementsByClassName("about-btn");

homePageDiv.insertAdjacentHTML("beforeend", homePage);

const figureEl = document.querySelector(".my-figure");
const figcaptionEL = document.querySelector("figcaption");

const catImg = document.createElement("img");
catImg.src = catPhoto;
figureEl.insertBefore(catImg, figcaptionEL);
