var header = document.getElementById("navbar");
var img = document.getElementById("logo");
var tienda = document.getElementById("tienda");
var tienda1 = document.getElementById("tienda1");
var menu = document.getElementById("menu");
var close = document.getElementById("close");
var oscuro = document.getElementById("oscuro");
var logonav = document.getElementById("logonav");

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
    tienda.style.backgroundColor = "var(--morado)";
    tienda1.style.display = "none";
    menu.style.display = "none";
    close.style.color = "var(--morado)";
    close.style.display = "";
    oscuro.style.display = "";
    logonav.style.display = "";
    if (window.scrollY > 200) {
      img.style.display = "none";
    }
  }
  if (ischecked.checked == false) {
    body.style.overflowY = "auto";
    header.classList.toggle("sticky", window.scrollY > 0);
    img.style.display = "";
    tienda1.style.display = "";
    menu.style.display = "";
    close.style.display = "none";
    oscuro.style.display = "none";
    logonav.style.display = "none";
    if (window.scrollY > 0) {
      img.src = "../public/SVG/logo-color.svg";
    }
  }
};
