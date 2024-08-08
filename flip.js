function showSlide(index, carouselId) {
    const slides = document.querySelectorAll(`#${carouselId}-carousel .carousel-item`);
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
    });
}

function nextSlide(carouselId) {
    showSlide(currentSlide + 1, carouselId);
}

function prevSlide(carouselId) {
    showSlide(currentSlide - 1, carouselId);
}

// Initialize the carousel
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide, 'story');
    initializeCountdown();
});

// flip.js
function flipCard(card) {
    const innerCard = card.querySelector('.flip-card-inner');
    innerCard.classList.toggle('flipped');
}

