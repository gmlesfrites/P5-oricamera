class Camera {
    constructor(image, ref, name, description, price) {
        this.image = image;
        this.ref = ref;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

// Récupération des données globales
const url = 'http://localhost:3000/api/cameras';
const fetchCameras = async function () {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.status);
        } else {
            const data = await response.json();
            console.log(data);
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}

//Récupération des données par id
// Récupération des données suite btn produit cliqué
const newId = new URLSearchParams(window.location.search.substring(0));
const id = newId.get("id");

//fetch pour la récupération des données par id
const urlId = `http://localhost:3000/api/cameras/${id}`;
const fetchId = async function () {
    try {
        const response = await fetch(urlId);
        if (!response.ok) {
            throw new Error(response.status);
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(error);
    }
};


