const modal = document.getElementById("contact-modal");

function displayContactModal() {
    modal.showModal();
    const firstFocus = document.getElementById("firstName");
    firstFocus.focus();
}

function closeContactModal() {
    modal.close();
}
