const carousel = document.getElementById("carousel");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

const scrollAmount = 200; // Sesuaikan dengan kebutuhan
let maxScrollLeft = 0;
let maxScrollRight = 0;

function updateScrollLimits() {
    maxScrollLeft = 0;
    maxScrollRight = carousel.scrollWidth - carousel.clientWidth;
}

function slideLeft() {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
}

function slideRight() {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
}

// Update batas scroll setelah konten dimuat
window.addEventListener("load", updateScrollLimits);
window.addEventListener("resize", updateScrollLimits);
