$(function () {
  $(".p-e-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: false,
    cssEase: "linear",
    prevArrow: ".p-e-reviews-list-left",
    nextArrow: ".p-e-reviews-list-right",
  });
});
