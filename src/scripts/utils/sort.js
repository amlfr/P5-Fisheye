const popularitySort = async () => {
    const { photographerProfile, photographerMedias } = await initializeSort();

    currentOrderMedias = photographerMedias.sort((a, b) => b._likes - a._likes);

    refreshCards(photographerMedias, photographerProfile);
    refreshCarousel(photographerMedias, photographerProfile);
};

const dateSort = async () => {
    const { photographerProfile, photographerMedias } = await initializeSort();

    currentOrderMedias = photographerMedias.sort(
        (a, b) => new Date(a._date) - new Date(b._date)
    );

    refreshCards(photographerMedias, photographerProfile);
    refreshCarousel(photographerMedias, photographerProfile);
};

const titleSort = async () => {
    const { photographerProfile, photographerMedias } = await initializeSort();

    currentOrderMedias = photographerMedias.sort((a, b) =>
        a._title.localeCompare(b._title)
    );

    refreshCards(photographerMedias, photographerProfile);
    refreshCarousel(photographerMedias, photographerProfile);
};

const initializeSort = async () => {
    const currentNodes = document.querySelectorAll(".content-card");
    const params = new URL(document.location).searchParams;
    const id = parseInt(params.get("id"));
    const { photographerProfile, photographerMedias } =
        await getPhotographerMedias(id);

    return { photographerProfile, photographerMedias };
};

const refreshCards = (photographerMedias, photographerProfile) => {
    const cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = "";
    const photographerModel = photographerTemplate(photographerProfile);
    const processFn = photographerModel.processFirstName;
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
    const contentCards = document.querySelectorAll(".content-card");
    contentCards.forEach((card, index) => {
        card.addEventListener("click", () => {
            displayContentModal(index);
        });
    });
    carouselSlides = document.querySelectorAll("ul > li");
};

const refreshCarousel = (photographerMedias, photographerProfile) => {
    const carouselList = document.querySelector(".carousel-list");
    carouselList.innerHTML = "";
    const photographerModel = photographerTemplate(photographerProfile);
    const processFn = photographerModel.processFirstName;
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
    carouselSlides.forEach((_, key) =>
        console.log(carouselSlides[key].firstChild, "afterRefresh")
    );
};

const updateDropdown = () => {};
