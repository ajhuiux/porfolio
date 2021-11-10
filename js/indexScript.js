var swiper = new Swiper(".workCon", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
    }
 });
  
  $(function () {
    $(".menuBt").click(function () {
      $("nav").addClass("on");
      $(".menuBt").addClass("hide");
    });
    $(".closeBt").click(function () {
      $("nav").removeClass("on");
      $(".menuBt").removeClass("hide");
    });

    $("a.ready").click(function() {
      alert('추후 업데이트 예정입니다. :)');
      console.log('추후 업데이트 예정입니다. :)');
      return false;
  });
  });


//   $(function (){  
//     $(".sec04").load(window.location.href + ".sec04");
// });