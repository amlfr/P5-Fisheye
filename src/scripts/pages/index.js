//Fetches and returns the data of all photographers
async function getPhotographers() {
    const response = await fetch("../../assets/data/photographers.json");
    const data = await response.json();

    const photographers = data.photographers;

    return photographers;
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(
        ".photographer_section"
    );

    //Iterates over the data to generate photographers cards
    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    //Gets data then displays it
    const photographers = await getPhotographers();
    displayData(photographers);
}

init();
