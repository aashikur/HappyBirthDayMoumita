const autoplayCarousel = document.querySelectorAll('.block-carousel');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Function to handle carousel animation state
function handleCarouselState(shouldReduce) {
  autoplayCarousel.forEach((scroller) => {
    if (shouldReduce) {
      scroller.removeAttribute('data-animated');
      const clonedItems = scroller.querySelectorAll('.clone');
      clonedItems.forEach(item => item.remove());
    } else {
      scroller.setAttribute('data-animated', true);
      const scrollerInner = scroller.querySelector('.carousel-items');
      Array.from(scrollerInner.children)
        .filter(item => !item.classList.contains('clone'))
        .forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', true);
          duplicatedItem.classList.add('clone');
          scrollerInner.appendChild(duplicatedItem);
        });
    }
  });
}

// Initial setup
handleCarouselState(prefersReducedMotion.matches);

// Listen for preference changes
prefersReducedMotion.addEventListener('change', (e) => handleCarouselState(e.matches));