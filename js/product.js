// Récupération des données par id
const idUrl = 'http://localhost:3000/api/:id';
const fetchId = async function () {
    try {
        const response = await fetch(idUrl);
        if (!response.ok) {
            throw new Error(response.status);
        } else {
            const idData = await response.json();
            return idData;
        }
    } catch (error) {
        console.log(error);
    }
}

// Création de la constante pour la div 'boxPolaroid'
const sectionElt = document.querySelector("main section");

//Utilisation des données récupérées pour les insérer dans la page
fetchCameras().then(function (idData) {
    const imageElt = document.getElementById("imageUrl");
    // imageElt.src=; //TODO ajouter l'image par caméra

    const refElt = document.getElementById("ref");
    //refElt.textContent = ; //TODO ajouter l'id par caméra

    const singleTitleElt = document.getElementById("name");
    // singlePriceElt.textContent =; //TODO ajouter le name de la caméra

    const descriptionElt = document.getElementById("description");
    // descriptionElt.textContent = ;//TODO ajouter la description par caméra

    const lensesElt = document.getElementById("lenses");
    //lensesElt. //TODO voir comment gérer la personnalisation de l'affichage des optiques

    const singlePriceElt = document.getElementById("price");
    //singlePriceElt.textContent = ; //TODO ajouter le prix et le diviser par 100
});









// Constitution Fiche produit
class Camera {
    constructor(imageUrl, _id, name, description, lenses, price) {
        this.imageUrl = imageUrl;
        this._id = _id;
        this.name = name;
        this.description = description;
        this.lenses = lenses;
        this.price = price;
    }
}

const camera1;
const camera2;
const camera3;
const camera4;
const camera5;