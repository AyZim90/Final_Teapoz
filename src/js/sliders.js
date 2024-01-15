const slider = document.getElementById('slider');
let count = 0;
let autoSlideInterval;

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

function nextSlide() {
  count++;
  updateSlider();
}

function prevSlide() {
  count--;
  updateSlider();
}

function updateSlider() {
  const totalSlides = document.querySelectorAll('.slider-cart').length;

  if (count >= totalSlides) {
    count = 0;
  } else if (count < 0) {
    count = totalSlides - 1;
  }

  const translateValue = -count * (100 / totalSlides);
  slider.style.transform = `translateX(${translateValue}%)`;
}

// Добавляем обработчики событий для начала и остановки автоматической прокрутки
slider.addEventListener('mouseenter', stopAutoSlide);
slider.addEventListener('mouseleave', startAutoSlide);

// Запускаем автоматическую прокрутку
startAutoSlide();
