//Loader
const showContent = (loader) => {
    const mainIndex = document.querySelector('body')

    loader = document.createElement("div");
    loader.classList = "container__loader hidden";
    mainIndex.appendChild(loader);

    const blurLoader = document.createElement("div");
    blurLoader.classList = "container__loader--blur";
    loader.appendChild(blurLoader)

    const titleLoader = document.createElement("p");
    titleLoader.classList = "title__loader";
    titleLoader.textContent = "Bienvenue chez Oricamera";
    blurLoader.appendChild(titleLoader);

    const circleLoader = document.createElement("div");
    circleLoader.classList = "loader";
    blurLoader.appendChild(circleLoader);
}

const hiddenLoader = (loader) => {
    loader = document.getElementsByClassName('.container__loader hidden')
    loader.style = "display:none";
}
const loader = sessionStorage.getItem('loader');

if (!loader) {
    setTimeout(showContent(loader), 3500)
    sessionStorage.setItem('loader', JSON.stringify('only one time'))
} else {
    hiddenLoader(loader)
}

// Gestion du localStorage
window.addEventListener("close", () => {
    sessionStorage.removeItem('loader')
});