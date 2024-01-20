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

const addCarouselArrowListeners = (
    event,
    carouselFnPrevious,
    carouselFnNext
) => {
    const carousel = document.getElementById("carousel-modal");
    if (carousel.open) {
        if (event.key === "ArrowRight") {
            carouselFnNext();
            console.log("right");
        } else if (event.key === "ArrowLeft") {
            carouselFnPrevious();
            console.log("left");
        }
    }
};
