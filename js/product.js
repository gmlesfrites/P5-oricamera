// Récupération des données par id
const urlCam1 = 'http://localhost:3000/api/cameras/5be1ed3f1c9d44000030b061';
const urlCam2 = 'http://localhost:3000/api/cameras/5be1ed3f1c9d44000030b062';
const urlCam3 = 'http://localhost:3000/api/cameras/5be1ed3f1c9d44000030b063';
const urlCam4 = 'http://localhost:3000/api/cameras/5be1ed3f1c9d44000030b064';
const urlCam5 = 'http://localhost:3000/api/cameras/5be1ed3f1c9d44000030b065';

const fetchId = async function () {
    try {
        const response = await fetch(urlCam1);
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

//Utilisation des données récupérées pour les insérer dans la page
fetchId().then(function (data) {
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
    const product = new Camera(data.imageUrl, data._id, data.name,
        data.description, data.price);
    console.log(product);


    //Ajout de l'image
    const imageElt = document.getElementById("imageUrl");
    imageElt.src = data.imageUrl;


    //Ajout de la référence de produit
    const refElt = document.getElementById("ref");
    refElt.insertAdjacentHTML('beforeend', "<p>" + data._id + "</p>");


    //Nom du produit
    const singleTitleElt = document.getElementById("name");
    singleTitleElt.innerHTML = `<h2>${data.name}</h2>`;


    //Description
    const descriptionElt = document.getElementById("description");
    descriptionElt.insertAdjacentHTML('beforeend', "<p>" + data.description + "</p>");


    // Optiques
    const lensesElt = document.querySelector("ul");
    const lensesData = data.lenses;
    for (let i = 0; i < lensesData.length; i++) {
        let liElt = document.createElement("li");
        liElt.innerHTML = lensesData[i];
        console.log(liElt)
        lensesElt.appendChild(liElt)
    }


    // Prix
    const singlePriceElt = document.getElementById("price");
    data.price = (data.price / 100).toFixed(2);
    singlePriceElt.insertAdjacentHTML('beforeend', "<span>" + data.price + "&nbsp;" + "&#128" + "</span>");
});










