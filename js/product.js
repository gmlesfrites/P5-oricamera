//Récupération des données par id (paramètre Url suite btn cliqué)
const newId = new URLSearchParams(window.location.search.substring(0));
const id = newId.get("id");

//fetch pour la récupération des données par id
const urlId = `http://localhost:3000/api/cameras/${id}`;

const fetchItem = fetch(urlId)
    .then(response => {
        if (response.ok) {
            response.json()
                .then(data => {
                    showItemDetail(data)
                    badId()
                });
        } else {
            manageError()
        }
    }).catch(console.error);



//Utilisation des données de fetch par Id pour les insérer dans la page
const showItemDetail = data => {
    //Ajout de l'image
    const imageElt = document.getElementById("imageUrl");
    imageElt.src = data.imageUrl;

    //Ajout de la référence de produit
    const refElt = document.getElementById("ref");
    refElt.innerHTML = `<p> <strong>Référence du produit : </strong>${data._id} </p>`;

    //Nom du produit
    const singleTitleElt = document.getElementById("name");
    singleTitleElt.textContent = `${data.name}`;

    //Description
    const descriptionElt = document.getElementById("description");
    descriptionElt.innerHTML = `<p><strong>Description : </strong> ${data.description} </p>`;

    // Optiques
    const lensesElt = document.querySelector("select");
    const lensesData = data.lenses;
    lensesData.map(lenses => {
        let optElt = document.createElement("option");
        optElt.value = lenses;
        optElt.id = lenses;
        optElt.className = "lenses";
        optElt.innerHTML = lenses;
        lensesElt.appendChild(optElt)
    });

    // Prix
    const singlePriceElt = document.getElementById("price");

    //Prix 000.00€
    let priceDot = (data.price / 100);
    priceDot = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(`${priceDot}`);

    singlePriceElt.innerHTML = `<p><strong>Prix : </strong> ${priceDot} </p>`;

    //Bouton addToCart page produit
    const btnAddToCart = document.getElementById('addToCart');
    btnAddToCart.id = `${data._id} `;
    btnAddToCart.className = "button__product--toCart addToCart"
    btnAddToCart.addEventListener("click", () => {
        //Données du produit pour le localStorage
        const itemToAdd = {
            id: `${id}`,
            image: `${data.imageUrl}`,
            name: `${data.name}`,
            description: `${data.description}`,
            price: `${data.price}`,
            qty: 1
        }
        addItemToCart(itemToAdd)
    })
    howManyItems()
};

//Ajout au panier
const addItemToCart = itemToAdd => {
    //récup du localStorage
    const itemToCart = localStorage.getItem('products');
    cart = JSON.parse(itemToCart);

    if (itemToCart) {
        const existingItem = cart.filter(item => item.id === itemToAdd.id).map(oneMore => {
            oneMore.qty++;
            return oneMore;
        });;

        //si déjà des articles dans le panier vérif si article identique
        if (existingItem) {

            existingItem.qty++;
            cart.slice(existingItem)
            localStorage.setItem('products', JSON.stringify(cart));

        } else {

            //si déjà produit(s) avec id différent
            cart.push(itemToAdd);
            localStorage.setItem('products', JSON.stringify(cart));

        }
    } else {
        //création du panier si non créé et 0 article 
        cart = [];
        cart.push(itemToAdd);
        localStorage.setItem('products', JSON.stringify(cart));
    }
}

//cache la partie mauvaise manip de l'url
const badId = () => {
    const badId = document.querySelector("#badId");
    badId.setAttribute("style", "display:none");

}

//gestion des erreurs d'identifiant produit
const manageError = () => {
    const productPage = document.querySelector("#product");
    productPage.setAttribute("style", "display:none");
}