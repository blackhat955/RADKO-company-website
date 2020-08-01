
//navbar 
const navbar = document.getElementById("navbar");

document.addEventListener("DOMContentLoaded", () => {
  navbar.style.backgroundColor = "rgba(0, 209, 255, 0.01)";
});

window.onscroll = function () {
  document.body.scrollTop == 1 || document.documentElement.scrollTop == 0
    ? ((navbar.style.transition = "3s"),
      (navbar.style.backgroundColor = "rgba(0, 209, 255, 0.01)"))
    : document.body.scrollTop >= 1500 ||
      document.documentElement.scrollTop >= 1500
    ? ((navbar.style.transition = "5s"),
      (navbar.style.backgroundColor = "rgba(0, 0, 0, 1)"))
    : null;
};
