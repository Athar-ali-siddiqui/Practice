$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      500: {
        items: 2,
        nav: true,
        loop: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1500: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  });
  AOS.init();
});
