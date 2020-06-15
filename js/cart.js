//Compteur header
howManyItems()

//fonction pour le compteur du header
function howManyItems() {
    const howManyItems = document.querySelector('.howManyItems');
    if (localStorage === null) {
        howManyItems === 0;
    } else if (localStorage.length !== 0) {
        const nbItems_json = localStorage.getItem('products');
        const nbItems = JSON.parse(nbItems_json).length;
        howManyItems.textContent = nbItems;
    }
}

// Fonctions utiles pour la page panier
function displayCart() {
    //Gestion du panier
    const cartContent = document.querySelector('section div');
    let cart = [];

    //Récupération des articles ajoutés dans le localStorage
    const itemsInCart_json = localStorage.getItem('products');
    const itemInCart = JSON.parse(itemsInCart_json);

    if (itemInCart === null) {
        displayContent()
    } else {
        itemInCart.map(item => addToCart(item));
    }

    //Création ligne d'article
    function addToCart(itemInCart) {
        //Création de la ligne contenant les infos par camera ajoutée
        const lignItem = document.createElement('div');
        lignItem.className = "article__cart";
        cartContent.appendChild(lignItem);

        //pour affichage responsive (boite image)
        const boxImg = document.createElement('div');
        boxImg.className = "subContent__cart--photo";
        lignItem.appendChild(boxImg);

        //contenu image
        const image = document.createElement('img');
        image.className = "img__cart";
        image.src = `${itemInCart.image}`;
        image.ariaLabel = "image du produit";
        image.alt = "image du produit";
        boxImg.appendChild(image);

        //pour affichage responsive (boite nom, ref, description, prix unité)
        const boxInfos = document.createElement('div');
        boxInfos.className = "subContent__cart--article";
        lignItem.appendChild(boxInfos);

        //nom du produit
        const nameItem = document.createElement('p');
        nameItem.className = "title__cart--article";
        nameItem.textContent = `${itemInCart.name}`;
        boxInfos.appendChild(nameItem);

        //référence du produit
        const idItem = document.createElement('p');
        idItem.className = "ref__cart";
        idItem.textContent = `${itemInCart.id}`;
        boxInfos.appendChild(idItem);

        // description du produit
        const descItem = document.createElement('p');
        descItem.className = "description__cart";
        descItem.textContent = `${itemInCart.description}`;
        boxInfos.appendChild(descItem);

        //prix unitaire
        let unitPrice = document.createElement('p');
        unitPrice.className = "unit__price";
        let cost = (`${itemInCart.price}` / 100).toFixed(2);
        const newCost = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(`${cost}`);
        unitPrice.className = "unit__price";
        unitPrice.textContent = "Prix unitaire : " + newCost;
        boxInfos.appendChild(unitPrice);

        // pour affichage responsive quantité // bouton supprimer
        const boxQty = document.createElement('div');
        boxQty.className = "subContent__cart--quantity";
        lignItem.appendChild(boxQty);

        //gestion des quantités avec select + option
        const qty = document.createElement('select');
        qty.className = "countItems__cart";
        qty.ariaLabel = "ajouter plusieurs de ce même article, entre 1 et 2 unités";
        qty.addEventListener("change", () => {
            itemQuantity()
        });
        boxQty.appendChild(qty);

        const optQty1 = document.createElement('option');
        optQty1.value = "1";
        optQty1.selected;
        optQty1.textContent = "1";
        qty.appendChild(optQty1);

        const optQty2 = document.createElement('option');
        optQty2.value = "2";
        optQty2.textContent = "2";
        qty.appendChild(optQty2);

        //bouton retirer l'article du panier
        let removeFromCart = document.createElement('button');
        removeFromCart.className = "removeFromCart";
        removeFromCart.ariaLabel = "retirer le produit du panier";
        removeFromCart.textContent = "Supprimer";
        boxQty.appendChild(removeFromCart);
        removeFromCart.addEventListener("click", () => {
            removeItem()
            removeFromCart.parentElement.parentElement.remove();
        });

        // pour affichage responsive Prix de plusieurs du même article
        let boxTotalPrice = document.createElement('div');
        boxTotalPrice.className = "subContent__cart--sevUnit";
        lignItem.appendChild(boxTotalPrice);

        //prix global ligne article
        const lignPrice = document.createElement('p');
        let totalCost = (`${itemInCart.price}` * `${itemInCart.qty}` / 100).toFixed(2);
        let newTotalCost = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(`${totalCost}`);
        lignPrice.textContent = "Prix total : " + newTotalCost;
        boxTotalPrice.appendChild(lignPrice);
    }

    //Gestion des quantités
    function itemQuantity(qty) {

        console.log('banana');
        //     cart.find(element => element.id === cameraToCart.id);
        //     if (cameraToAdd !== undefined) {
        //         console.log(cameraToCart);
        //         cameraToAdd.qty++;

        //console.log(cameraInCart.id);
        // console.log(qty.value);

        // JSON.filter(j => j.id == `${cameraInCart.id}`).map(m => {
        //     m.qty = qty.value;
        //     return m;
        // });
        // TODO ici on gère la modification des quantités
        // JSON.filter(j => j.id == `${cameraInCart.id}`).map(m => {
        //     //         m.qty = qty.value;
        //     //         return m;
        //     //     });
    }

    //prix global panier
    function updateTotalPrice() {
        if (itemInCart === null) {
            displayContent()
        } else {
            const boxCartTotalPrice = document.querySelector("#totalCart");
            let totalToPay = document.createElement('p');
            boxCartTotalPrice.appendChild(totalToPay);
            for (i = 0; i < itemInCart.length; i++) {
                const price = `${itemInCart[i].price}`;
                const qty = `${itemInCart[i].qty}`;

                totalToPay = (price * qty / 100).toFixed(2);

                const newTotalToPay = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(`${totalToPay}`);
                totalToPay.textContent = newTotalToPay;
            }
        };

    } updateTotalPrice()

    //supprimer un article
    function removeItem(removeFromCart) {
        // variable.splice(n°index,1);
        // let newCameraInCart = localStorage.setItem('camera', JSON.stringify('variable '));

        // supprimer l'élément dans le tableau cameraInCart
        //mettre à jour le localStorage
        // TODO si le panier est vide en supprimant cet article alors localStorage.clear() sinon localStorage.removeItem("clé du produit")
    } removeItem()

    // Supprimer le panier complet lorsqu'il est affiché
    function deleteCart() {
        const deleteCart = document.querySelector("#deleteCart");
        deleteCart.addEventListener('click', (event) => {
            let youSure = confirm('Etes-vous sûr(e) de vouloir supprimer la totalité de votre panier ?');
            if (youSure) {
                localStorage.clear();
                document.location.reload()
                displayContent()
                howManyItems()
            }
        });
    } deleteCart()

}
