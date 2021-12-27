$(document).ready(function () {

  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load', function () {

    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    $('section').each(function () {

      let top = $(window).scrollTop();
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr('id');

      if (top >= offset && top < offset + height) {
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }

    });

  });

  $('.accordion-heading').click(function () {

    $('.accordion .accordion-content').slideUp();

    $(this).next('.accordion-content').slideDown();

  });

});
const typed = new Typed('.typed', {
  strings: ['<i class="text">Isabel Tello</i>', '<i class="text">Maquetadora web</i>', '<i class="text">Desarrolladora frontend</i>'],
  typeSpeed: 75,
  startDelay: 300,
  backSpeed: 75,
  loop: true
});
