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

var counter = 0;

window.onload = function () {
  console.log(counter);
};

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
  if (window.scrollY > 0) {
    img.src = "../../public/SVG/logo-color.svg";
    arrow.style.color = "var(--morado)";
  } else {
    img.src = "../../public/SVG/LOGO BLANCO.svg";
    arrow.style.color = "white";
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
    if (window.scrollY > 0) {
      img.src = "../../public/SVG/logo-color.svg";
    }
  }
};
const waypoints = [
  {
    id: "ie",
    handler(direction) {
      console.log("u are in 1");
      arrow.href = "#gv";
      console.log("u go to: " + arrow.href);
      arrow.style.transform = "rotate(0deg)";
    },
  },
  {
    id: "gv",
    handler(direction) {
      console.log("u are in 2");
      arrow.href = "#mh";
      console.log("u go to: " + arrow.href);
    },
  },
  {
    id: "mh",
    handler(direction) {
      console.log("u are in 3");
      arrow.href = "#eps";
      console.log("u go to: " + arrow.href);
    },
  },
  {
    id: "eps",
    handler(direction) {
      console.log("u are in 4");
      arrow.style.transform = "rotate(180deg)";
      arrow.href = "#sct1";
      console.log("u go to: " + arrow.href);
    },
  },
];

arrow.onclick = function () {
  counter++;
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
  }
  if (counter == 5) {
    arrow.href = "#sct1";
    counter = 0;
  }
  if (counter > 5) {
    counter = 0;
  }
};

waypoints.forEach(
  ({ id, handler }) =>
    new Waypoint({
      element: document.getElementById(id),
      handler,
      offset: 0,
    })
);
