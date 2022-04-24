function slideBar() {
  setTimeout(function () {
    document.getElementById("nav-bar").classList.add("nav-bar");
  }, 1000);
}

function slideHomeContactBar() {
  setTimeout(() => {
    document
      .getElementById("home-contact-bar")
      .classList.add("home-contact-bar");
  }, 1000);
}

window.addEventListener("load", myInit, true);
function myInit() {
  slideBar();
}
