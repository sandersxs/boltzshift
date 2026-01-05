$(function () {

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 0 && !$('.header__inner').hasClass('header__inner--open')) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  })

  $('.burger').on('click', function (e) {
    e.preventDefault()
    $('.header__inner').toggleClass('header__inner--open')
  })

})
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const headerInner = document.querySelector('.header__inner');
    
    if (burger && headerInner) {
        burger.addEventListener('click', function() {
            headerInner.classList.toggle('header__inner--open');
            document.body.style.overflow = headerInner.classList.contains('header__inner--open') ? 'hidden' : '';
        });
        
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                headerInner.classList.remove('header__inner--open');
                document.body.style.overflow = '';
            });
        });
        

        document.addEventListener('click', function(e) {
            if (!headerInner.contains(e.target) && !burger.contains(e.target) && headerInner.classList.contains('header__inner--open')) {
                headerInner.classList.remove('header__inner--open');
                document.body.style.overflow = '';
            }
        });
    }
});
