document.addEventListener('DOMContentLoaded', function() {
 
    let searchList = document.querySelector('.search');
    let searchLink = searchList.querySelector('a');
    let searchInput = searchList.querySelector('.search-form');
    let body = document.querySelector('body');
    
    searchLink.addEventListener('click', function (evt) {
        evt.preventDefault();
        searchInput.classList.add('search-form__active');
      });


    




});



