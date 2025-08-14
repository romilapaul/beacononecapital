$(document).ready(function () {
  $(".testimonial-img-slick").slick({
    dots: false,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: "0",
    asNavFor: ".testimonial-cntn-slider",
    prevArrow: '<div class="swiper-button-prev custom-nav"></div>',
    nextArrow: '<div class="swiper-button-next custom-nav"></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".testimonial-cntn-slider").slick({
    dots: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    centerMode: true,
    infinite: true,
  });

  $(".testimonial-img-slick .slick-center").next().addClass("sl-next");
  $(".testimonial-img-slick .slick-center").prev().addClass("sl-prev");

  $(".testimonial-img-slick").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      $(this).find(".slick-center").next().removeClass("sl-next");
      $(this).find(".slick-center").prev().removeClass("sl-prev");
    }
  );

  $(".testimonial-img-slick").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      $(this).find(".slick-center").next().addClass("sl-next");
      $(this).find(".slick-center").prev().addClass("sl-prev");
    }
  );
  $(".swiper-button-prev, .swiper-button-next").on("click", function () {
    $(".swiper-button-prev, .swiper-button-next").removeClass("is-active");
    $(this).addClass("is-active");
  });
});


