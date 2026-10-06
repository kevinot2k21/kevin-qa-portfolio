document.addEventListener("DOMContentLoaded", function () {

    const track = document.getElementById("carouselTrack");
    const slides = document.querySelectorAll(".carousel-slide");

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const dots = document.querySelectorAll(".dot");

    let currentSlide = 0;


    function updateCarousel() {

        track.style.transform =
            `translateX(-${currentSlide * 100}%)`;

        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentSlide
            );

        });
    }


    nextBtn.addEventListener("click", function () {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        updateCarousel();

    });


    prevBtn.addEventListener("click", function () {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        updateCarousel();

    });


    dots.forEach((dot, index) => {

        dot.addEventListener("click", function () {

            currentSlide = index;

            updateCarousel();

        });

    });

});