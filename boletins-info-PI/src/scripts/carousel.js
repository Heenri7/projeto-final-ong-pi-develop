const visibleCount = 4;
let start = 0;

const carousel = document.querySelector('.container-carousel');
const cards = Array.from(carousel.children);

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth + 16; // 16 = gap, ajuste se necessário
  const offset = start * cardWidth * -1;
  carousel.style.transform = `translateX(${offset}px)`;
}

document.getElementById('prevBtn').onclick = function() {
  if (start > 0) {
    start--;
    updateCarousel();
  }
};
document.getElementById('nextBtn').onclick = function() {
  if (start + visibleCount < cards.length) {
    start++;
    updateCarousel();
  }
};

// Inicialize o estilo
carousel.style.transition = 'transform 0.4s cubic-bezier(.77,0,.18,1)';
updateCarousel();