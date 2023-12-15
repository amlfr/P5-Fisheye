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
    const params = new URL(document.location).searchParams;
    const id = parseInt(params.get("id"));
    const { photographerProfile, photographerMedias } =
        await getPhotographerMedias(id);
    console.log(photographerProfile);
    const photographerModel = photographerTemplate(photographerProfile);
    const { userPicture, profile } = photographerModel.getUserHeaderComponent();
    const processFn = photographerModel.processFirstName;
    console.log(processFn);

    const profileHeader = document.querySelector(".photograph-header");
    profileHeader.insertAdjacentHTML("afterbegin", profile.outerHTML);
    profileHeader.appendChild(userPicture);

    const cardContainer = document.querySelector(".card-container");

    photographerMedias.forEach((media) => {
        console.log(processFn);
        contentModel = contentTemplate(
            media,
            photographerProfile.name,
            processFn
        );
        const { cardWrapper } = contentModel();
        cardContainer.appendChild(cardWrapper);
    });
};

init();
