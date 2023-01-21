// header js start
$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
});
// header js end
// mobile menu js start
$(document).ready(function () {
  $(".mobile-menu-ico").click(function () {
    $(".mobile-menu-wrap").addClass("mobile-menu-wrap-show");
  });

  $(".close-ico").click(function () {
    $(".mobile-menu-wrap").removeClass("mobile-menu-wrap-show");
  });
});

$(document).mouseup(function (e) {
  var popup = $(".mobile-menu-wrap");
  if (
    !$(".mobile-menu-ico").is(e.target) &&
    !popup.is(e.target) &&
    popup.has(e.target).length == 0
  ) {
    popup.removeClass("mobile-menu-wrap-show");
  }
});
$(document).ready(function () {
  $(".list-menu .link").click(function () {
    $(".mobile-menu-wrap").removeClass("mobile-menu-wrap-show");
  });
});
// mobile menu js end
// hero swiper js start
var swiper = new Swiper(".custom-hero-swiper-slider", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// hero swiper js end
// about swiper js start
var swiper = new Swiper(".about-swiper-slider", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// about swiper js end
// photo swiper slider js start
var swiper = new Swiper(".photo-swiper-slider0", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
var swiper = new Swiper(".photo-swiper-slider1", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
// photo swiper slider js end
// lightbox js start
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
});
// lightbox js end
// scroll top content (on click header menu option) start
$(document).ready(function () {
  $(".link").on("click", function (e) {
    var hash = $(this).attr("href");
    $("html,body").animate(
      {
        scrollTop: $(hash).offset().top(),
      },
      800
    );

    return false;
  });
});
// scroll top content (on click header menu option) end
// AOS start
AOS.init();
// AOS end
