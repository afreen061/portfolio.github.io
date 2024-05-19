function background(){
    document.getElementById("sec").style.backgroundColor='#484E56';
document.getElementById("first").style.backgroundColor ='#282B30';
}
function backgroundd(){
    document.getElementById("sec").style.backgroundColor='#282B30';
    document.getElementById("first").style.backgroundColor='#484E56';
}


document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.mySwiper', {
      autoplay: {
        delay: 3000, // 3 seconds delay between slides
        disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      centeredSlides: true,
      spaceBetween: 30,
      slidesPerView: 'auto', // Keep auto for responsiveness
      initialSlide: 1,
    });
  });
  const images = document.getElementsByClassName('gallery-image');

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
      const focused = document.querySelector('.focused');
      if (focused) {
        focused.classList.remove('focused');
      }
      this.classList.add('focused');
    });
  }
