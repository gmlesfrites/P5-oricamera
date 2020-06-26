//Loader
const showContent = () => {
    let loader = document.querySelector(".container__loader");
    loader.setAttribute("style", "display: block");
    document.querySelector(".container__loader").classList.add('hidden');

}
const hiddenLoader = () => {
    document.querySelector(".container__loader").setAttribute('style', "display:none");
}
const loader = sessionStorage.getItem('loader');

if (!loader) {
    setTimeout(showContent, 3500)
    sessionStorage.setItem('loader', JSON.stringify('only one time'))
} else {
    hiddenLoader()
}

// Gestion du localStorage
window.addEventListener("close", () => {
    sessionStorage.removeItem('loader')
});