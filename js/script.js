$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    margin: 20,
    loop: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
  });
});




$(document).ready(function () {
  window.addEventListener('scroll', function () {
    $(".header-2").toggleClass('sticky', this.window.scrollY > 25);
  })
})



// Preloader - Прелоадер
function preloader() {
  $(() => {
    setInterval(() => {
      let p = $('.preloader');
      p.css('opacity', 0);


      if (p.css('opacity', 0)) {
        p.remove();
      }

    }, 1000);
  });
}

preloader();



// Вщзвращает наврх-Yuxari verir
window.addEventListener('scroll', function () {
  var scroll = this.document.querySelector('.upward');
  scroll.classList.toggle("upwardactive", this.window.scrollY > 450)
})
function scrollTopTop() {
  window.scrollTo({

    top: 0,
    behavior: 'smooth'
  })
}
