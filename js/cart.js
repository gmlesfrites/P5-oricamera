//Compteur header
function howManyItems() {
    const howManyItems = document.querySelector('.howManyItems');
    if (localStorage.length === 0) {
        howManyItems === 0;
    } else {
        let nbItems_json = localStorage.getItem('camera');
        let nbItems = JSON.parse(nbItems_json).length;
        howManyItems.textContent = nbItems;
    }
} howManyItems()

// Fonctions utiles pour la page panier
function displayCart() {
    //Gestion du panier
    const cartContent = document.querySelector('section div');
    let cart = [];

    //Récupération des articles ajoutés dans le localStorage
    let cameraInCart_json = localStorage.getItem('camera');
    let cameraInCart = JSON.parse(cameraInCart_json);
    cameraInCart.map(camera => addToCart(camera));

    //Création ligne d'article
    function addToCart(cameraInCart) {
        //Création de la ligne contenant les infos par camera ajoutée
        const lignCamera = document.createElement('div');
        lignCamera.className = "article__cart";
        cartContent.appendChild(lignCamera);

        //pour affichage responsive (boite image)
        const boxImg = document.createElement('div');
        boxImg.className = "subContent__cart--photo";
        lignCamera.appendChild(boxImg);

        //contenu image
        const image = document.createElement('img');
        image.className = "img__cart";
        image.src = `${cameraInCart.image}`;
        image.ariaLabel = "image du produit";
        image.alt = "image du produit";
        boxImg.appendChild(image);

        //pour affichage responsive (boite nom, ref, description, prix unité)
        const boxInfos = document.createElement('div');
        boxInfos.className = "subContent__cart--article";
        lignCamera.appendChild(boxInfos);

        //nom du produit
        const nameCamera = document.createElement('p');
        nameCamera.className = "title__cart--article";
        nameCamera.textContent = `${cameraInCart.name}`;
        boxInfos.appendChild(nameCamera);

        //référence du produit
        const idCamera = document.createElement('p');
        idCamera.className = "ref__cart";
        idCamera.textContent = `${cameraInCart.id}`;
        boxInfos.appendChild(idCamera);

        // description du produit
        const descCamera = document.createElement('p');
        descCamera.className = "description__cart";
        descCamera.textContent = `${cameraInCart.description}`;
        boxInfos.appendChild(descCamera);

        //prix unitaire
        let unitPrice = document.createElement('p');
        unitPrice.className = "unit__price";
        let cost = (`${cameraInCart.price}` / 100).toFixed(2);
        const newCost = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(`${cost}`);
        unitPrice.className = "unit__price";
        unitPrice.textContent = "Prix unitaire : " + newCost;
        boxInfos.appendChild(unitPrice);

        // pour affichage responsive quantité // bouton supprimer
        const boxQty = document.createElement('div');
        boxQty.className = "subContent__cart--quantity";
        lignCamera.appendChild(boxQty);

        //gestion des quantités avec select + option
        const qty = document.createElement('select');
        qty.className = "countItems__cart";
        qty.ariaLabel = "ajouter plusieurs de ce même article, entre 1 et 2 unités";
        boxQty.appendChild(qty);
        //TODO mettre un addEventListener pour écouter si changement quantité ???? --> localStorage MAJ nombre qté

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
        // TODO voir si function incluse ou non
        removeFromCart.addEventListener('click', () => {
        })
        boxQty.appendChild(removeFromCart);

        // pour affichage responsive Prix de plusieurs du même article
        let boxTotalPrice = document.createElement('div');
        boxTotalPrice.className = "subContent__cart--sevUnit";
        lignCamera.appendChild(boxTotalPrice);

        //prix global ligne article
        const lignPrice = document.createElement('p');
        // TODO voir si c'est bien ça *qty.value ????

        let totalCost = (`${cameraInCart.price}` * qty.value / 100).toFixed(2);
        let newTotalCost = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(`${totalCost}`);
        lignPrice.textContent = "Prix total : " + newTotalCost;
        boxTotalPrice.appendChild(lignPrice);
    }

    // modifier quantité article
    function itemQuantity() {
        let countQuantity = document.querySelectorAll(".countItems__cart");
        //TODO mettre en place le compteur de quantité et la maj des tarifs 
    } itemQuantity()

    //prix global panier
    function updateTotalPrice() {
        const boxCartTotalPrice = document.querySelector("#totalCart");
        let totalToPay = document.createElement('p');
        boxCartTotalPrice.appendChild(totalToPay);


        // TODO à modifier pour faire une concat des prix par ligne
        totalToPay = (`${cameraInCart.price}` * `${cameraInCart.qty}` / 100).toFixed(2);
        console.log(boxCartTotalPrice);




        let newTotalToPay = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(`${totalToPay}`);
        totalToPay.textContent = newTotalToPay;
    } updateTotalPrice()

    //Enlever l'article du panier
    function removeFromCart() {
        //suppression des articles bouton supprimer
        let removeFromCart = document.querySelectorAll(".removeFromCart");

        for (i = 0; i < removeFromCart.length; i++) {
            let btnRemove = removeFromCart[i];
            btnRemove.addEventListener('click', (event) => {
                let btnclicked = event.target; {
                    // cart.splice(removeFromCart[i]); ????
                    // TODO cart supprimer la ligne 
                    btnclicked.parentElement.parentElement.remove();
                    // TODO localStorage.removeItem("trouver la bonne clé");
                }
            });
        };
    } removeFromCart()

    // Supprimer le panier complet lorsqu'il est affiché
    function deleteCart() {
        const deleteCart = document.querySelector("#deleteCart");
        deleteCart.addEventListener('click', function (event) {
            // TODO il faut remettre tout le panier à zéro sans avoir à rafraichir la page
            confirm('Etes-vous sûr(e) de vouloir supprimer la totalité de votre panier ?');
            localStorage.clear();
        });
    } deleteCart()

}
