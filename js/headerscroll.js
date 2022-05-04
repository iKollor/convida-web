var header = document.getElementById("navbar");
var img = document.getElementById("logo");
var tienda = document.getElementById("tienda");
var tienda1 = document.getElementById("tienda1");
var menu = document.getElementById("menu");
var close = document.getElementById("close");
var oscuro = document.getElementById("oscuro");
var logonav = document.getElementById("logonav");
var html = document.getElementsByTagName("html")[0];
var arrow = document.getElementById("arrow");
var arrowicon = document.getElementById("arrowicon");
var offset = 200;

var counter = 0;

window.onload = function () {
  console.log(counter);
};

$(window).scroll(function () {
  alturaTotalDoc = $(document).height() - 1;
  alturaScrollTop = Math.trunc($(this).scrollTop());
  alturaViewPort = $(this).height();

  if (alturaTotalDoc == alturaScrollTop + alturaViewPort) {
    arrow.href = "#sct1";
    arrow.style.transform = "rotate(180deg)";
    $("#arrow").addClass("up").attr("data-content", "Deslizar Hacia arriba");
    counter = -1;
  }
});

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
  if (window.scrollY > 0) {
    img.src = "../../public/SVG/logo-color.svg";
    arrow.style.color = "var(--morado)";
  } else {
    img.src = "../../public/SVG/LOGO BLANCO.svg";
    arrow.style.color = "white";
  }
  if (window.scrollY == 0) {
    arrow.href = "#ie";
    arrow.style.transform = "rotate(0deg)";
    $("#arrow").removeClass("up").attr("data-content", "Deslizar Hacia arriba");
  }
});

var body = document.getElementById("body");
ischecked = document.getElementById("check");

ischecked.onclick = function () {
  console.log("clicked");
  if (ischecked.checked == true) {
    body.style.overflowY = "hidden";
    html.style.overflowY = "hidden";
    header.classList.remove("sticky");
    img.src = "../../public/SVG/LOGO BLANCO.svg";
    tienda.style.backgroundColor = "var(--morado)";
    tienda1.style.display = "none";
    menu.style.display = "none";
    close.style.color = "var(--morado)";
    close.style.display = "";
    oscuro.style.display = "";
    if (window.scrollY > 200) {
      img.style.display = "none";
    }
  }
  if (ischecked.checked == false) {
    body.style.overflowY = "auto";
    html.style.overflowY = "auto";
    header.classList.toggle("sticky", window.scrollY > 0);
    img.style.display = "";
    tienda1.style.display = "";
    menu.style.display = "";
    close.style.display = "none";
    oscuro.style.display = "none";
    if (window.scrollY > 1) {
      img.src = "../../public/SVG/logo-color.svg";
    }
  }
};

arrow.onclick = function () {
  counter++;
  arrow.style.transform = "rotate(0deg)";
  $("#arrow").removeClass("up").attr("data-content", "Deslizar Hacia arriba");
  console.log("arrow=" + counter);
  if (counter == 1) {
    arrow.href = "#ie";
  }
  if (counter == 2) {
    arrow.href = "#gv";
  }
  if (counter == 3) {
    arrow.href = "#mh";
  }
  if (counter == 4) {
    arrow.href = "#eps";
    arrow.style.transform = "rotate(180deg)";
    $("#arrow").addClass("up").attr("data-content", "Deslizar Hacia arriba");
  }
  if (counter == 5) {
    arrow.href = "#sct1";
    counter = 0;
  }
  if (counter > 5) {
    counter = 0;
  }
};
// detect when element gets visible on scroll
window.addEventListener("scroll", detect_visibility);

// detect when screen opens for first time
detect_visibility();

function detect_visibility() {
  var element = document.getElementById("footer");

  var top_of_element = element.offsetTop;
  var bottom_of_element =
    element.offsetTop + element.offsetHeight + element.style.marginTop;
  var bottom_of_screen = window.scrollY + window.innerHeight;
  var top_of_screen = window.scrollY;

  if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
    // Element is visible write your codes here
    // You can add animation or other codes here
    arrow.href = "#sct1";
    arrow.style.transform = "rotate(180deg)";
    $("#arrow").addClass("up").attr("data-content", "Deslizar Hacia arriba");
    counter = -1;
  } else {
    // the element is not visible, do something else
  }
}
