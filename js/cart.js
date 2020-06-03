//compteur header
(function howManyItems() {
    const howManyItems = document.querySelector('.howManyItems');
    if (typeof localStorage != 'undefined') {
        let nbItems_json = localStorage.getItem('camera');
        let nbItems = JSON.parse(nbItems_json).length;
        howManyItems.textContent = nbItems;
    } return 0;

})()

//Panier
const cartContent = document.querySelector('section div');
let cart = [];


let cameraInCart_json = localStorage.getItem('camera');
cart = JSON.parse(cameraInCart_json);
console.log(cart);



//Caméras dans le panier par ligne
fetchCameras().then(function (data) {

    //Création ligne avec tout le design html/css dans le panier
    function createLignCamera() {
        //Création de la ligne contenant les infos par camera ajoutée
        const lignCamera = document.createElement('div');
        lignCamera.className = "article__cart";
        lignCamera.appendChild(cartContent);

        const boxImg = document.createElement('div');
        boxImg.className = "subContent__cart--photo";
        boxImg.appendChild(lignCamera);

        const image = document.createElement('img');
        image.className = "img__cart";
        image.src = `${data.imageUrl}`;
        image.ariaLabel = "image du produit";
        image.alt = "image du produit";
        image.appendChild(boxImg);

        let boxInfos = document.createElement('div');
        boxInfos.className = "subContent__cart--article";
        boxInfos.appendChild(lignCamera);

        let nameCamera = createElement('p');
        nameCamera.className = "title__cart--article";
        nameCamera.textContent = `${data.name}`;
        nameCamera.appendChild(boxInfos);

        let idCamera = createElement('p');
        idCamera.className = "ref__cart";
        idCamera.textContent = `${data._id}`;
        idCamera.appendChild(boxInfos);

        let descCamera = createElement('p');
        descCamera.className = "description__cart";
        descCamera.textContent = `${camera.description}`;
        descCamera.appendChild(boxInfos);

        let unitPrice = createElement('p');
        unitPrice.className = "unit__price";
        let cost = NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(`${data.price}`); unitPrice.className = "unit__price";
        unitPrice.textContent = cost;
        unitPrice.appendChild(boxInfos);

        let boxQty = document.createElement('div');
        boxQty.className = "subContent__cart--quantity";
        boxQty.appendChild(lignCamera);

        let plus = document.createElement('span');
        plus.textContent = " + ";
        plus.appendChild(boxQty);
        plus.addEventListener('click', moreCart);

        let qty = document.createElement('input');
        qty.className = "countItems__cart";
        qty.id = "quantity";
        qty.type = "number";
        qty.value = "1"
        qty.appendChild(boxQty);

        let minus = document.createElement('span');
        minus.textContent = " + ";
        minus.appendChild(boxQty);
        minus.addEventListener('click', lessCart);

        let removeFromCart = createElement('button');
        removeFromCart.className = "removeFromCart";
        removeFromCart.ariaLabel = "retirer le produit du panier";
        removeFromCart.textContent = "Supprimer";
        removeFromCart.appendChild(boxQty);
    }

    //Enlever l'article du panier
    function removeFromCart() {
        //suppression des articles bouton supprimer
        removeFromCart = document.getElementsByClassName("removeFromCart");
        for (i = 0; i < removeFromCart.length; i++) {
            let btnRemove = removeFromCart[i];
            btnRemove.addEventListener('click', function (event) {
                let btnclicked = event.target; {
                    btnclicked.parentElement.parentElement.remove();
                }
            })
        }
    }
});