document.addEventListener('DOMContentLoaded', function() {
 /* Search form  */
    let searchList = document.querySelector('.search');
    let searchLink = searchList.querySelector('a');
    let searchInput = searchList.querySelector('.search-form');
    let body = document.querySelector('body');
    let searchCloseBtn = searchList.querySelector('.search-close__btn');
    
    searchLink.addEventListener('click', function (evt) {
        evt.preventDefault();
        searchInput.classList.toggle('search-form__active');
      });
    searchCloseBtn.addEventListener('click', function () {
        searchInput.classList.remove('search-form__active');
      });
/* Slick slider */
      $('.second-slider').slick({
        arrows:true,
        dots: true,
        initialSlide:1,
        autoplay:true,
        autoplaySpeed:4000,
        infinite:false,
        speed:1500,
        easing:'ease'
      });
 /* Header-burger  */

    let headerBurger = document.querySelector('.header-burger');
    let headerMenu = document.querySelector('.menu');
    
    headerBurger.addEventListener('click', function (evt) {
      evt.preventDefault();
      headerBurger.classList.toggle('active');
      headerMenu.classList.toggle('active');
      body.classList.toggle('lock');
    });



});



