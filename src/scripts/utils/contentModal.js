//Contains the carousel slides in the order they'll be appended to the
let newOrderSlides;

//Opens up the carousel after changing the actual slides order
function displayContentModal(index) {
    const carouselList = document.querySelector(".carousel-list");
    carouselList.innerHTML = "";

    newOrderSlides = reorderCarousel(index, carouselSlides);
    newOrderSlides.forEach((slide) => carouselList.appendChild(slide));
    const modal = document.getElementById("carousel-modal");
    modal.showModal();
}

//Closes the carousel after cleaning the list of its html elements
function closeContentModal() {
    const modal = document.getElementById("carousel-modal");
    carouselIndex = 0;
    const carouselList = document.querySelector(".carousel-list");
    carouselList.innerHTML = "";
    carouselList.scrollLeft = 0;

    modal.close();
}

//
const createCarouselListeners = () => {
    const contentCards = document.querySelectorAll(".content-card");

    contentCards.forEach((card, index) => {
        card.addEventListener("click", () => {
            displayContentModal(index);
        });
        addKeyboardFocusEvent(contentCards[index], () =>
            displayContentModal(index)
        );
    });

    const closeCarouselBtn = document.querySelector("#close-carousel");
    closeCarouselBtn.addEventListener("click", () => {
        closeContentModal();
    });
    addKeyboardFocusEvent(closeCarouselBtn, () => closeContentModal());

    const previousContentBtn = document.querySelector("#left-arrow");
    const showPreviousContent = () => {
        if (carouselIndex > 0) {
            carouselIndex -= 1;
        } else {
            carouselIndex = carouselSlides.length - 1;
        }

        carouselSlides.forEach((_, key) =>
            console.log(carouselSlides[key].firstChild, "nextBtnOrder")
        );

        newOrderSlides[carouselIndex].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    };

    previousContentBtn.addEventListener("click", () => showPreviousContent());
    addKeyboardFocusEvent(previousContentBtn, () => showPreviousContent());

    const nextContentBtn = document.querySelector("#right-arrow");
    const showNextContent = () => {
        console.log(carouselIndex, "before");
        if (carouselIndex >= carouselSlides.length - 1) {
            carouselIndex = 0;
        } else {
            carouselIndex += 1;
        }

        console.log(carouselIndex, "after");
        newOrderSlides[carouselIndex].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    };

    nextContentBtn.addEventListener("click", () => {
        showNextContent();
    });
    addKeyboardFocusEvent(nextContentBtn, () => showNextContent());

    const carousel = document.getElementById("carousel-modal");
    carousel.addEventListener("keydown", (event) => {
        addCarouselArrowListeners(
            event,
            () => showPreviousContent(),
            () => showNextContent()
        );
    });
};

//Takes in the index of the card and the carousel slides in order and return an array in the same order with index 0 being the card index
const reorderCarousel = (index, medias) => {
    const newArray = [];

    for (let i = 0; i < medias.length; i++) {
        const newIndex = (i + index) % medias.length;
        newArray[i] = medias[newIndex];
    }

    return newArray;
};
