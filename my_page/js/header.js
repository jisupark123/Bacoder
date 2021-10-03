const body = document.querySelector("body");
const darkModeBtn = document.querySelector(".header__dark-button");
const whiteModeBtn = document.querySelector(".header__white-button");
const HIDDEN_CLASSNAME = "hidden";
const DARKMODE_CLASSNAME = "darkmode";

function toDarkMode() {
  body.classList.add(DARKMODE_CLASSNAME);
  darkModeBtn.classList.add(HIDDEN_CLASSNAME);
  whiteModeBtn.classList.remove(HIDDEN_CLASSNAME);
}

function toWhiteMode() {
  body.classList.remove(DARKMODE_CLASSNAME);
  whiteModeBtn.classList.add(HIDDEN_CLASSNAME);
  darkModeBtn.classList.remove(HIDDEN_CLASSNAME);
}

darkModeBtn.addEventListener("click", toDarkMode);
whiteModeBtn.addEventListener("click", toWhiteMode);
