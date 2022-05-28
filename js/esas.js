$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false,
        }
      }
    });
  });
  
  
  
  $(document).ready(function () {
    window.addEventListener('scroll', function () {
      $(".header-2").toggleClass('sticky', this.window.scrollY > 25);
    })
  })
  
  // function changeBg(){
  // var navbar=document.getElementById('navbarrr');
  // var scrollValue = window.scrollY;
  
  // if(scrollValue < 150){
  //   navbar.classList.remove('bgColor');
  // }
  // else{
  //   navbar.classList.add('bgColor')
  // }
  // }
  
  // window.addEventListener('scroll', changeBg)