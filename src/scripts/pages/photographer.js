let carouselIndex = 0;
let carouselSlides = [];

//Gets the data on one photographers and its medias
const getPhotographerMedias = async (id) => {
    const response = await fetch("../../../assets/data/photographers.json");
    const data = await response.json();
    const photographers = data.photographers;

    const photographerProfile = photographers.find(
        (photographer) => photographer.id === id
    );

    const medias = data.media;
    let photographerMedias = [];
    medias.forEach((media) => {
        if (media.photographerId === id) {
            const keys = Object.keys(media);
            const typeKey = keys[3];
            photographerMedias.push(new MediasFactory(media, typeKey));
        }
    });

    return { photographerProfile, photographerMedias };
};

const init = async () => {
    //Fetches photographer and its medias
    const params = new URL(document.location).searchParams;
    const id = parseInt(params.get("id"));
    const { photographerProfile, photographerMedias } =
        await getPhotographerMedias(id);

    //Fetches the photographer's picture and
    const photographerModel = photographerTemplate(photographerProfile);
    const { userPicture, profile } = photographerModel.getUserHeaderComponent();
    const setLikeDiv = photographerModel.setLikeDiv;
    const processFn = photographerModel.processFirstName;

    const profileHeader = document.querySelector(".photograph-header");
    profileHeader.insertAdjacentHTML("afterbegin", profile.outerHTML);
    profileHeader.appendChild(userPicture);

    const cardContainer = document.querySelector(".card-container");

    photographerMedias.forEach((media) => {
        contentModel = contentTemplate(
            media,
            photographerProfile.name,
            processFn
        );
        const { cardWrapper } = contentModel.getContentCard();
        cardContainer.appendChild(cardWrapper);
    });

    setLikeDiv();

    //Generate the contact modal // TODO MAKE IT HARDCODED U DUMMY
    const contactModel = contactTemplate(photographerProfile.name);
    const { flexWrapper } = contactModel.getContactModal();
    const contactDialog = document.querySelector("#contact-modal");
    contactDialog.appendChild(flexWrapper);

    createCarouselListeners();

    //Iterates over the medias to create the carousel list elements
    const carouselList = document.querySelector(".carousel-list");
    photographerMedias.forEach((media) => {
        const { contentElement } = contentModel.getCarouselContent();
        carouselList.appendChild(contentElement);
    });

    carouselSlides = document.querySelectorAll("ul > li");
};

init();
