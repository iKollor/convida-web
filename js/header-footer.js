$(function () {
  $("#header").load("../../html/components/header.html");
  $("#footer").load("../../html/components/footer.html");
});
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  dh = $(document).height();
  wh = $(window).height();
  scrollPercent = (scroll / (dh - wh)) * 100;
  $("#progressbar").css("height", scrollPercent + "%");
});
