function slideBar() {
  setTimeout(function () {
    document.getElementById("nav-bar").classList.add("nav-bar");
  }, 1000);
}

function slideHomeBar() {
  setTimeout(function () {
    document.getElementById("home-nav-bar").classList.add("home-nav-bar");
  }, 1000);
}

function slideContactBar() {
  setTimeout(function () {
    document.getElementById("contact-nav-bar").classList.add("contact-nav-bar");
  }, 1000);
}

window.addEventListener("load", myInit, true);
function myInit() {
  slideBar();
  slideHomeBar();
  slideContactBar();
}
