function displayContentModal(index) {
    const modal = document.getElementById("carousel-modal");
    modal.showModal();
    carouselIndex = index;
    carouselSlides[carouselIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
    });
    /* const firstFocus = document.getElementById("right-arrow");
    firstFocus.focus(); */
}

function closeContentModal() {
    const modal = document.getElementById("carousel-modal");
    carouselIndex = 0;
    carouselSlides[carouselIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
    });
    modal.close();
}

const createCarouselListeners = () => {
    const contentCards = document.querySelectorAll(".content-card");
    contentCards.forEach((card, index) => {
        card.addEventListener("click", () => {
            displayContentModal(index);
        });
    });
    const closeCarouselBtn = document.querySelector("#close-carousel");
    closeCarouselBtn.addEventListener("click", () => {
        closeContentModal();
    });

    const previousContentBtn = document.querySelector("#left-arrow");
    previousContentBtn.addEventListener("click", () => {
        if (carouselIndex > 0) {
            carouselIndex -= 1;
        } else {
            carouselIndex = carouselSlides.length - 1;
        }

        carouselSlides[carouselIndex].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    });

    const nextContentBtn = document.querySelector("#right-arrow");
    nextContentBtn.addEventListener("click", () => {
        carouselIndex += 1;
        carouselSlides[carouselIndex].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    });
};

const updateCarousel = (target) => {
    carouselIndex = target;
};
