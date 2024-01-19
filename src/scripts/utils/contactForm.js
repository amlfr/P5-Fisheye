const modal = document.getElementById("contact-modal");

const displayContactModal = () => {
    modal.showModal();
    const firstFocus = document.getElementById("firstName");
    firstFocus.focus();
};

const closeContactModal = () => {
    modal.close();
    //reset form
};

const createSubmitListener = () => {
    document
        .getElementById("contact-form")
        .addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            console.log(formData);
            //reset form
            closeContactModal();
        });
};

const resetForm = () => {};
