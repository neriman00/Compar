function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }


 document.addEventListener('DOMContentLoaded', function () {
   particleground(document.getElementById('Contact'), {
     dotColor: '#fff',
     lineColor: '#8B008B'
   });
   var intro = document.getElementById('intro');
   intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
 }, false);
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }

  $(".Wp").click(function(){
    $(".activeWp").toggleClass("social-disp")
    });


    $('.slider-all').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
        



$('.all-team').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 1500,
  speed: 1000,
});


AOS.init({
  duration : 1000,
});


$('.counter').counterUp({
  delay: 10,
  time: 2000
});