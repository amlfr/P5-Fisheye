const popularitySort = async () => {
    console.log("sorted by popularity");
    const currentNodes = document.querySelectorAll(".content-card");
    const params = new URL(document.location).searchParams;
    const id = parseInt(params.get("id"));
    const { photographerProfile, photographerMedias } =
        await getPhotographerMedias(id);
    console.log(photographerMedias, "before sort");
    const sortedData = photographerMedias.sort((a, b) => b._likes - a._likes);
    console.log(sortedData);

    const cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = "";

    const photographerModel = photographerTemplate(photographerProfile);
    const processFn = photographerModel.processFirstName;
    photographerMedias.forEach((media) => {
        contentModel = contentTemplate(
            media,
            photographerProfile.name,
            processFn
        );
        const { cardWrapper } = contentModel.getContentCard();
        cardContainer.appendChild(cardWrapper);
    });
    createCarouselListeners();
    carouselSlides = document.querySelectorAll("ul > li");
    console.log(carouselSlides, "slides after sort ");
};
