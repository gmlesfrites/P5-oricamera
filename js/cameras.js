// Récupération des données par id
const idUrl = 'http://localhost:3000/api/:id';
const fetchId = async function () {
    try {
        const response = await fetch(idUrl);
        if (!response.ok) {
            throw new Error(response.status);
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}

// Création de la constante pour la div 'boxPolaroid'
const divElt = document.querySelector("main div");

//Utilisation des données récupérées pour les insérer dans la page
fetchCameras().then(function (data) {
window.onload = () => {

// Constitution Fiche produit
class Camera {
    constructor(name, price, description, lenses, imageUrl) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.lenses = lenses;
        this.imageUrl = imageUrl;
    }
}

const camera1;
const camera2;
const camera3;
const camera4;
const camera5;


};