const modal = document.getElementById("contact-modal");

const displayContactModal = () => {
    modal.close();
    modal.showModal();
    const contactButton = document.querySelector(".contact-button");
    contactButton.blur();
    const firstFocus = document.getElementById("firstName");
    firstFocus.focus();
};

const closeContactModal = () => {
    resetForm();
    modal.close();
    modal.setAttribute("open", false);
};

const contactForm = document.getElementById("contact-form");

const createSubmitListener = () => {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(formData);
        closeContactModal();
    });
};

const resetForm = () => {
    contactForm.reset();
};
