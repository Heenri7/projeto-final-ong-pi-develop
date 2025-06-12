function getVisibleCount() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 2;
  if (window.innerWidth <= 1200) return 3;
  return 4;
}

let visibleCount = getVisibleCount();
window.addEventListener('resize', () => {
  visibleCount = getVisibleCount();
  if (start + visibleCount > cards.length) {
    start = Math.max(0, cards.length - visibleCount);
  }
  updateCarousel();
});