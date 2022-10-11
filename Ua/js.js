(function(){
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 50){
      header.classList.add('header_active')
    } else {
      header.classList.remove('header_active')
    }
  };
}());


//Burger

(function () {
  const burgerItem = document.querySelector('.burger');
  burgerItem.addEventListener('click', () => {
    console.log(1)
  })
} ());