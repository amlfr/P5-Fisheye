class MediasFactory {
    constructor(media, type) {
        if (type === "image") {
            return new Photo(media);
        } else if (type === "video") {
            return new Video(media);
        } else {
            throw "Unknown type of content";
        }
    }
}
