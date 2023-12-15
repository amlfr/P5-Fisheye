function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement("article");

        const photographerURL = `/src/html/photographer.html?id=${id}`;
        const link = document.createElement("a");
        link.setAttribute("href", photographerURL);
        link.setAttribute("aria-label", `${name}`);

        const container = document.createElement("div");
        container.classList.add("container");

        const img = document.createElement("img");
        img.setAttribute("src", picture);
        img.setAttribute("alt", "Photograher profile picture");

        const h2 = document.createElement("h2");
        h2.textContent = name;
        article.appendChild(link);
        link.appendChild(container);
        container.appendChild(img);
        link.appendChild(h2);

        const locationText = createText(`${city}, ${country}`, "location");
        const taglineText = createText(tagline, "tagline");
        const priceText = createText(`${price}€/jour`, "price");

        article.appendChild(locationText);
        article.appendChild(taglineText);
        article.appendChild(priceText);

        return article;
    }

    function getUserHeaderComponent() {
        const profilePicture = `../../assets/photographers/${portrait}`;
        const userHeader = document.querySelector(".photograph-header");

        const profile = document.createElement("div");
        profile.setAttribute("class", "profile-div");
        const userName = document.createElement("h1");
        userName.textContent = name;

        const locationText = createText(`${city}, ${country}`, "location");
        const taglineText = createText(tagline, "tagline");

        profile.appendChild(userName);
        profile.appendChild(locationText, "location");
        profile.appendChild(taglineText, "tagline");

        const userPicture = document.createElement("img");
        userPicture.setAttribute("src", profilePicture);
        userPicture.setAttribute("alt", "Photograher profile picture");

        return { userPicture, profile };
    }

    function processFirstName(fullName) {
        const firstName = fullName.match(/^[a-zA-Z-]+/);
        const processedName = firstName[0].replace("-", " ");

        return processedName;
    }

    function getUserLike() {
        const likeDiv = document.querySelector(".like-div");
    }

    return {
        name,
        picture,
        city,
        country,
        tagline,
        price,
        id,
        getUserCardDOM,
        getUserHeaderComponent,
        processFirstName,
    };
}

const createText = (content, className) => {
    const p = document.createElement("p");
    p.textContent = content;
    p.classList.add(className);
    return p;
};
