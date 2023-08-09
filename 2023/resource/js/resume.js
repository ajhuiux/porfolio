let menuBtn = document.querySelector('.menuBtn');
let gnb = document.querySelector('.gnbWrap');
let closeBtn = document.querySelector('.closeBtn');

menuBtn.addEventListener("click", function(){
  gnb.classList.add("active");
});


closeBtn.addEventListener("click", function(){
  gnb.classList.remove("active");
});

gnb.addEventListener("click", function(event){
  event.target.classList.remove("active");
});

$(function() {
  let li = $('.desc > li');
  let span = $('.desc > li > span');
  let p = $('.desc > li > p');

  p.hide();
  span.mouseover(function(){
    $(this).siblings('p').show(350);
  }).mouseout(function(){
    $(this).siblings('p').hide(350);
  });
});