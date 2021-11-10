$(document).ready(function(){
    $(".menuBt").click(function () {
        $("nav").addClass("on");
        $(".menuBt").addClass("hide");
      });
      $(".closeBt").click(function () {
        $("nav").removeClass("on");
        $(".menuBt").removeClass("hide");
      });
});