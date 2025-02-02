let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto-slide functionality (optional)
setInterval(() => {
  changeSlide(1);
}, 5000); // Change every 5 seconds
