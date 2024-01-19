const handleLikeClick = (index, originalLikes, event) => {
    event.stopPropagation();
    const contentLikes = document.querySelector(`#likes-${index}`);
    const allLikesCounter = document.querySelector("#likes");

    //Checks if the likes have been incremented already and if not it increments it in both the specific and general counters
    parseInt(contentLikes.textContent) === originalLikes
        ? ((contentLikes.textContent = (
              parseInt(contentLikes.textContent) + 1
          ).toString()),
          (allLikesCounter.textContent = (
              parseInt(allLikesCounter.textContent) + 1
          ).toString()))
        : null;
};
