const modal = document.getElementById("contact-modal");

const displayContactModal = () => {
    modal.showModal();
    const firstFocus = document.getElementById("firstName");
    firstFocus.focus();
};

const closeContactModal = () => {
    modal.close();
    resetForm();
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
