function contentTemplate(media, name, processFn, index, photographerMedias) {
    function getContentCard() {
        const cardWrapper = document.createElement("div");
        cardWrapper.classList.add("content-card");
        cardWrapper.setAttribute("tabIndex", 0);

        let content;
        const processedName = processFn(name);
        if (media._image) {
            content = document.createElement("img");
            content.setAttribute(
                "src",
                `../../assets/content/${processedName}/${media._image}`
            );
            content.setAttribute("alt", media._title);
        } else if (media._video) {
            content = document.createElement("img");
            const pictureName = media._video.replace(/\.[^/.]+$/, "");

            content.setAttribute(
                "src",
                `../../assets/content/${processedName}/${pictureName}.png`
            );
        }
        cardWrapper.appendChild(content);

        const headerWrapper = document.createElement("div");
        headerWrapper.classList.add("header-wrapper");
        cardWrapper.appendChild(headerWrapper);

        const cardHeader = document.createElement("div");
        cardHeader.classList.add("content-header");
        headerWrapper.appendChild(cardHeader);

        const title = document.createElement("p");
        title.textContent = media._title;
        cardHeader.appendChild(title);

        const likesDiv = document.createElement("div");
        likesDiv.classList.add("likes-container");
        likesDiv.setAttribute("tabIndex", 0);
        likesDiv.setAttribute(
            "onClick",
            `handleLikeClick(${index}, ${photographerMedias[index]._likes}, event)`
        );
        addKeyboardFocusEvent(likesDiv, () => {
            handleLikeClick(index, photographerMedias[index]._likes, event);
        });

        const likes = document.createElement("p");
        likes.classList.add("likes-number");
        likes.setAttribute("id", `likes-${index}`);
        likes.textContent = media._likes;
        likesDiv.appendChild(likes);

        const likeSvg = document.createElement("img");
        likeSvg.setAttribute("src", "../../assets/icons/likes-primary.svg");
        likeSvg.setAttribute("alt", "likes");
        likesDiv.appendChild(likeSvg);
        cardHeader.appendChild(likesDiv);

        return { cardWrapper };
    }

    function getCarouselContent() {
        const contentElement = document.createElement("li");

        let content;
        const processedName = processFn(name);
        if (media._image) {
            content = document.createElement("img");
            content.setAttribute("tabindex", "-1");
            content.setAttribute(
                "src",
                `../../assets/content/${processedName}/${media._image}`
            );
            content.setAttribute("alt", media._title);
        } else if (media._video) {
            content = document.createElement("video");
            content.setAttribute("tabindex", "-1");
            content.setAttribute(
                "src",
                `../../assets/content/${processedName}/${media._video}`
            );
        }

        contentElement.appendChild(content);

        return { contentElement };
    }

    return { getContentCard, getCarouselContent };
}
