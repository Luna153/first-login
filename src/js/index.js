//@prepros-prepend toggle.js
//@prepros-prepend form_api.js
//@prepros-prepend gsapAnim.js

$(document).ready(function () {
  // GSAP //
  gsapAni();
  gsap.registerPlugin(ScrollTrigger);

  AOS.init({
    once: true // animate once
  });

  $(window).on("scroll", function () {
    AOS.init();
  });

  window.addEventListener('resize', () => {
    AOS.refresh();
  });

  // Navbar
  // ------------------------
  $(".nav__trigger").on("click", function () {
    var $nav = $(".nav");
    var $body = $("body");

    if (!$nav.hasClass("nav--active")) {
      $nav.addClass("nav--active");
      $body.addClass("scroll-fixed");
    } else {
      $nav.removeClass("nav--active");
      $body.removeClass("scroll-fixed");
    }

    $(".nav__link").on("click", function () {
      $nav.removeClass("nav--active");
      $body.removeClass("scroll-fixed");

    });

    $(".nav__overlay").on("click", function () {
      $nav.removeClass("nav--active");
      $body.removeClass("scroll-fixed");
    });

  });

  // Scroll 到區塊時 Navbar選單加上active
  // ------------------------
  $(window).on('scroll touchmove', function () {
    var scrollPos = $(this).scrollTop();
    var documentHeight = $(document).height();
    var windowHeight = $(this).height();
    // var connectionHeight = $('#section-connection').height();

    $('section').each(function () {
      var sectionTop = $(this).offset().top - 100;
      var sectionBottom = sectionTop + $(this).height();
      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        var sectionId = $(this).attr('id');
        $('.nav__link').removeClass('active');
        $('.nav__link[href="#' + sectionId + '"]').addClass('active');
      }
    });

    // Check if at the bottom of the page（解決section-connection高度不足問題）
    // if (scrollPos + windowHeight + connectionHeight + (window.innerWidth <= 768 ? 300 : 0) >= documentHeight) {
    //   $('.nav__link').removeClass('active');
    //   $('.nav__link[href="#section-connection"]').addClass('active');
    // }
  });
});