$(document).ready(function () {
  $(".menuhamburguer").click(function () {
    $(this).toggleClass("active");
    $(".header__menu").toggleClass("active");
  });
});
$('nav a').click(function (e) {
  e.preventDefault();
  var id = $(this).attr('href');
  targetOffset = $(id).offset().top;
  $('html, body').animate({
    scrollTop: targetOffset
  }, 700)
});