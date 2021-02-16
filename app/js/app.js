$(document).ready(function () {
  const swiper = new Swiper('.swiper-container', {
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 5000,
    },
  });

  //Login modal
  $('.js-login').on('click', function () {
    $('.modal--login').fadeIn(400);
  });

  $('.modal__close').on('click', function () {
    $('.modal--login').fadeOut(400);
  });

  $(document).on('mouseup', function (event) {
    const LoginModal = $('.modal__window');
    if (!LoginModal.is(event.target) && LoginModal.has(event.target).length === 0) {
      $('.modal').fadeOut(400);
    }


  });
})
