$(window).onbeforeunload = function () {
  window.scrollTo(0, 0);
};

$("document").ready(function () {
  $(window).scroll(function () {
    if (isIntoView($("#about-page"))) {
      $(".background-about").css({
        transform: "translateX(" + window.pageYOffset * 0.15 + "%)",
      });
    }
    if (isIntoView($("#contact-page"))) {
      $(".background-contact").css({
        transform: "translateX(-" + (window.pageYOffset / 40) * 1.5 + "%)",
      });
    }
    if (isIntoView($("#work-page"))) {
      $(".background-work").css({
        transform: "translateY(-" + window.pageYOffset * 0.2 + "%)",
      });
    }
    if (isIntoView("#skill-page")) {
      $(".background-skill").css({
        transform: "translateX(" + window.pageYOffset * 0.05 + "%)",
      });
    }
  });
  $(".burger").click(function () {
    $(".burger").toggleClass("burger-open");
    $("#ln-1").toggleClass("ln-1-open");
    $("#ln-2").toggleClass("ln-2-open");
    $("#ln-3").toggleClass("ln-3-open");
    $(".collapsed-navbar").toggleClass("collapsed-navbar-open");
  });
});
function isIntoView(elem) {
  var documentViewTop = window.pageYOffset;
  var documentViewBottom = documentViewTop + $(window).height();

  var elementTop = $(elem).offset().top;
  var elementBottom = elementTop + $(elem).height();

  if (documentViewBottom >= elementTop && documentViewTop <= elementBottom) {
    return true;
  }
}
