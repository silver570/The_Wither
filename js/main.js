const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1,
    loop: true,
    /* spaceBetween: 10, */
    navigation: {
        nextEl: '.arrow',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        540: {
          slidesPerView: 2
        }
      }
    
  })

  var menuButton  = document.querySelector('.menu-button');
  var menu = document.querySelector('.header');
  menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('menu-button-active'); 
    menu.classList.toggle('header-active');
  })