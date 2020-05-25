// Récupération des données par id
let idUrl = 'http://localhost:3000/api/cameras';
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

//Utilisation des données récupérées pour les insérer dans la page
fetchId().then(function (idData) {
    console.log(idData);
});


// Constitution Fiche produit
class Camera {
    constructor(imageUrl, id, name, description, lenses, price) {
        this.imageUrl = imageUrl;
        this._id = id;
        this.name = name;
        this.description = description;
        this.lenses = lenses;
        this.price = price;
    }
}

// Récup des données de chaque produit
const product1 = new Camera();
const product2 = new Camera();
const product3 = new Camera();
const product4 = new Camera();
const product5 = new Camera();




// const imageElt = document.getElementById("imageUrl");
// // imageElt.src=; //TODO ajouter l'image par caméra

// const refElt = document.getElementById("ref");
// //refElt.textContent = ; //TODO ajouter l'id par caméra

// const singleTitleElt = document.getElementById("name");
// // singlePriceElt.textContent =; //TODO ajouter le name de la caméra

// const descriptionElt = document.getElementById("description");
// // descriptionElt.textContent = ;//TODO ajouter la description par caméra

// const lensesElt = document.getElementById("lenses");
// //lensesElt. //TODO voir comment gérer la personnalisation de l'affichage des optiques

// const singlePriceElt = document.getElementById("price");
//     //singlePriceElt.textContent = ; //TODO ajouter le prix et le diviser par 100