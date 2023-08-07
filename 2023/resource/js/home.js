(function (global, $) {
  var $menu     = $('header a'),
      $contents = $('.scroll'),
      $doc      = $('html, body'),
      $headerHeight = $('header').innerHeight();

    $(function () {
        // header active class 추가
        $menu.first().addClass('active');
        $(window).scroll(function(){
            var scltop = $(window).scrollTop();
            $.each($contents, function(idx, item){
                var $target   = $contents.eq(idx),
                    targetTop = $target.offset().top - $headerHeight;

                if (targetTop <= scltop) {
                    $menu.removeClass('active');
                    $menu.eq(idx).addClass('active');
                }
            })
        });

        $('.contact').css('height', $(window).height() - $headerHeight );

        // 해당 섹션으로 스크롤 이동
        $menu.on('click', function(e){
            var $target = $(this),
                idx     = $target.index(),
                section = $contents.eq(idx),
                offsetTop = section.offset().top - $headerHeight;

            if (idx < 3) {
                $doc.stop().animate({
                            scrollTop :offsetTop
                        }, 800);
            } else {
                $doc.stop().animate({
                    scrollTop :document.documentElement.scrollHeight
                }, 800);
            };
            return false;
        });
    });
}(window, window.jQuery));



AOS.init();