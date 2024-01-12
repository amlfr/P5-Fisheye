function contactTemplate(name) {
    function getContactModal() {
        const flexWrapper = document.createElement("div");
        flexWrapper.setAttribute("class", "flex-modal-wrapper");

        const contactContainer = document.createElement("section");
        contactContainer.setAttribute("id", "contact-container");
        contactContainer.setAttribute("aria-label", `Contact me ${name}`);
        contactContainer.setAttribute("aria-labelledby", "contact-heading");
        flexWrapper.appendChild(contactContainer);

        const headerWrapper = document.createElement("div");
        headerWrapper.setAttribute("id", "header-wrapper-contact");
        contactContainer.appendChild(headerWrapper);

        const contactHeading = document.createElement("h1");
        contactHeading.textContent = `Contactez-moi ${name}`;
        contactHeading.setAttribute("id", "contact-heading");
        headerWrapper.appendChild(contactHeading);

        const closeIcon = document.createElement("img");
        closeIcon.src = "../../assets/icons/close.svg";
        closeIcon.setAttribute("aria-label", "Close Contact form");
        closeIcon.setAttribute("tabindex", "3");
        closeIcon.onclick = () => {
            closeContactModal();
        };
        headerWrapper.appendChild(closeIcon);

        const contactForm = document.createElement("form");
        contactContainer.appendChild(contactForm);

        const firstNameLabel = document.createElement("label");
        firstNameLabel.textContent = "Prénom";
        firstNameLabel.setAttribute("for", "firstName");
        firstNameLabel.setAttribute("id", "firstName-label");
        contactForm.appendChild(firstNameLabel);

        const firstNameInput = document.createElement("input");
        firstNameInput.setAttribute("type", "text");
        firstNameInput.setAttribute("name", "firstName");
        firstNameInput.setAttribute("placeholder", "Prénom");
        firstNameInput.setAttribute("aria-label", "First Name");
        firstNameInput.setAttribute("aria-labelledby", "firstName-label");
        firstNameInput.setAttribute("tabindex", "1");
        firstNameInput.setAttribute("id", "firstName");

        contactForm.appendChild(firstNameInput);

        const lastNameLabel = document.createElement("label");
        lastNameLabel.textContent = "Nom";
        lastNameLabel.setAttribute("for", "lastName");
        lastNameLabel.setAttribute("aria-labe", "lastName-label");
        contactForm.appendChild(lastNameLabel);

        const lastNameInput = document.createElement("input");
        lastNameInput.setAttribute("type", "text");
        lastNameInput.setAttribute("name", "lastName");
        lastNameInput.setAttribute("placeholder", "Nom");
        lastNameInput.setAttribute("tabindex", "1");
        lastNameInput.setAttribute("aria-label", "Last Name");
        lastNameInput.setAttribute("aria-labelledby", "lastName-label");

        contactForm.appendChild(lastNameInput);

        const emailLabel = document.createElement("label");
        emailLabel.textContent = "Nom";
        emailLabel.setAttribute("for", "email");
        emailLabel.setAttribute("id", "email-label");
        contactForm.appendChild(emailLabel);

        const emailInput = document.createElement("input");
        emailInput.setAttribute("type", "text");
        emailInput.setAttribute("name", "email");
        emailInput.setAttribute("placeholder", "exemple@domain.com");
        emailInput.setAttribute("tabindex", "1");
        emailInput.setAttribute("aria-label", "Email");
        emailInput.setAttribute("aria-labelledby", "email-label");
        contactForm.appendChild(emailInput);

        const messageLabel = document.createElement("label");
        messageLabel.textContent = "Votre message";
        messageLabel.setAttribute("for", "message");
        messageLabel.setAttribute("id", "message-label");
        contactForm.appendChild(messageLabel);

        const messageInput = document.createElement("textarea");
        messageInput.setAttribute("type", "text");
        messageInput.setAttribute("name", "message");
        messageInput.setAttribute("placeholder", "Votre message... ");
        messageInput.setAttribute("id", "message-input");
        messageInput.setAttribute("tabindex", "1");
        messageInput.setAttribute("aria-label", "Your Message");
        messageInput.setAttribute("aria-labelledby", "message-label");

        contactForm.appendChild(messageInput);

        const submitButton = document.createElement("input");
        submitButton.setAttribute("type", "submit");
        submitButton.setAttribute("value", "Submit");
        submitButton.setAttribute("class", "submit");
        submitButton.setAttribute("aria-label", "Send");
        submitButton.setAttribute("tabindex", "1");
        contactForm.appendChild(submitButton);

        return { flexWrapper };
    }

    return { getContactModal };
}
