$(function () {
    $("main").addClass("text-focus-in");
  
    $("a.expBt.ready").click(function() {
        alert('추후 업데이트 예정입니다. :)');
        console.log('추후 업데이트 예정입니다. :)');
        return false;
    })
    //  모바일 전용 메뉴버튼
    $(".menuBt").click(function(){
		$(this).toggleClass("open");
	});
});

//  모바일
if ($(window).width() < 641) {
    $(document).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 534) {
          $(".mainWork").addClass("swiper-slide-active");
        }
        else if (scroll < 533) {
          $(".mainWork").removeClass("swiper-slide-active");
        }
      });
}