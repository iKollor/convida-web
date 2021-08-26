var header = document.getElementById("navbar");
var img = document.getElementById("logo");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
  if (window.scrollY > 0) {
    img.src = "../public/SVG/logo-color.svg";
  } else {
    img.src = "../public/SVG/LOGO BLANCO.svg";
  }
});

var body = document.getElementById("body");
ischecked = document.getElementById("check");

ischecked.onclick = function () {
  console.log("clicked");
  if (ischecked.checked == true) {
    body.style.overflowY = "hidden";
    header.classList.remove("sticky");
    img.src = "../public/SVG/LOGO BLANCO.svg";
  }
  if (ischecked.checked == false) {
    body.style.overflowY = "auto";
    header.classList.toggle("sticky", window.scrollY > 0);
    if (window.scrollY > 0) {
      img.src = "../public/SVG/logo-color.svg";
    }
  }
};
