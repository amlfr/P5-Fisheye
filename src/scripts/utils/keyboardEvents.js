//Takes a html target and a callback to fire when the element is focused by the user and the enter key is pressed.
const addKeyboardFocusEvent = (target, clickFn) => {
    target.addEventListener("keydown", (event) => {
        const currentFocus = document.activeElement;
        //console.log(currentFocus);
        if (event.key === "Enter" && target === currentFocus) {
            clickFn();
            console.log(`Target is ${target}`, target);
            console.log(`fn is ${clickFn}`, clickFn);
        }
    });
};

//Creates the event listeners handling the carousel navigation with keyboard arrows
const addCarouselArrowListeners = (
    event,
    carouselFnPrevious,
    carouselFnNext
) => {
    const carousel = document.getElementById("carousel-modal");
    if (carousel.open) {
        if (event.key === "ArrowRight") {
            carouselFnNext();
        } else if (event.key === "ArrowLeft") {
            carouselFnPrevious();
        }
    }
};
