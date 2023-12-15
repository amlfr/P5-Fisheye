function contentTemplate(media, name, processFn) {
    function getContentCard() {
        console.log(processFn);
        const cardWrapper = document.createElement("div");
        cardWrapper.classList.add("content-card");
        let content;
        const processedName = processFn(name);
        if (media._image) {
            content = document.createElement("img");
            content.setAttribute(
                "src",
                `../../assets/content/${processedName}/${media._image}`
            );
        } else if (media._video) {
            content = document.createElement("video");
            content.setAttribute(
                "src",
                `../../assets/content/${processedName}/${media._video}`
            );
        }

        const cardHeader = document.createElement("div");
        cardHeader.classList.add("content-header");
        cardWrapper.appendChild(cardHeader);
        cardHeader.appendChild(content);

        return { cardWrapper };
    }

    return getContentCard;
}
