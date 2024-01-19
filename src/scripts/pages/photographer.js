let carouselIndex = 0;
let carouselSlides = [];
let currentOrderMedias = [];

//Gets the data on one photographers and its medias
const getPhotographerMedias = async (id) => {
    const response = await fetch("/assets/data/photographers.json");
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
    currentOrderMedias = photographerMedias;

    //Fetches the photographer's picture and it's profile html section
    const photographerModel = photographerTemplate(photographerProfile);
    const { userPicture, profile } = photographerModel.getUserHeaderComponent();
    const setLikeDiv = photographerModel.setLikeDiv;
    const processFn = photographerModel.processFirstName;

    const profileHeader = document.querySelector(".photograph-header");
    profileHeader.insertAdjacentHTML("afterbegin", profile.outerHTML);
    profileHeader.appendChild(userPicture);

    const cardContainer = document.querySelector(".card-container");

    photographerMedias.forEach((media, index) => {
        contentModel = contentTemplate(
            media,
            photographerProfile.name,
            processFn,
            index,
            photographerMedias
        );

        const { cardWrapper } = contentModel.getContentCard();
        cardContainer.appendChild(cardWrapper);
    });

    setLikeDiv();

    //Sets the variables on the contact modal
    const contactContainer = document.querySelector("#contact-container");
    contactContainer.setAttribute(
        "aria-label",
        `Contact me ${photographerProfile.name}`
    );
    createSubmitListener();

    const contactTitle = document.querySelector("#contact-heading");
    contactTitle.textContent =
        contactTitle.textContent + " " + photographerProfile.name;

    createCarouselListeners();

    //Iterates over the medias to create the carousel list elements
    const carouselList = document.querySelector(".carousel-list");
    photographerMedias.forEach((media) => {
        contentModel = contentTemplate(
            media,
            photographerProfile.name,
            processFn
        );
        const { contentElement } = contentModel.getCarouselContent();
        carouselList.appendChild(contentElement);
    });

    carouselSlides = document.querySelectorAll("ul > li");
};

init();
