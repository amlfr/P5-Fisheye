const addKeyboardFocusEvent = (target, clickEvent) => {
    target.addEventListener("keydown", function (event) {
        const currentFocus = document.activeElement;
        //console.log(currentFocus);
        if (event.key === "Enter" && target === currentFocus) {
            clickEvent();
            console.log(`Target is ${target}`, target);
        }
    });
};
