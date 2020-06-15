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

//Fonctions  page panier
function displayCart() {
    let cart = [];

    //Récupération des articles ajoutés dans le localStorage
    const itemsInCart_json = localStorage.getItem('products');
    const itemInCart = JSON.parse(itemsInCart_json);

    if (itemInCart === null) {
        displayContent()
    } else {
        itemInCart.map(item => addToCart(item));
        deleteCart();
        // TODO ajouter les fonctions qty, suppression article, MAJ Prix ligne et prix global
    }
}

//cette méthode est appelée dans la méthode ligne 38 -->déclenchée au clic sur le précédnt screen
removeFromCart(itemInCart)

//Création ligne d'article
function addToCart(itemInCart) {
    //Gestion du panier
    const cartContent = document.querySelector('section div');

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

    //gestion des quantités avec -/+
    const qtyCheck = document.createElement('div');
    qtyCheck.className = "countItems__cart";
    boxQty.appendChild(qtyCheck);

    const minus = document.createElement('button');
    minus.className = "minus";
    minus.innerHTML = `<strong><i class="fa fa-minus" aria-label="quantité en moins"></i></strong>`;
    // minus.addEventListener("click", () => {
    //     addLess(itemInCart)
    // });
    qtyCheck.appendChild(minus);

    const qty = document.createElement('p');
    qty.className = "qty";
    qty.textContent = `${itemInCart.qty}`;
    qtyCheck.appendChild(qty);

    const plus = document.createElement('button');
    plus.className = "plus";
    plus.innerHTML = `<strong><i class="fa fa-plus" aria-label="quantité en +"></i></strong>`;
    // plus.addEventListener("click", () => {
    //     addMore(itemInCart)
    // });
    qtyCheck.appendChild(plus);

    //bouton retirer l'article du panier
    let removeFromCart = document.createElement('button');
    removeFromCart.className = "removeFromCart";
    removeFromCart.ariaLabel = "retirer le produit du panier";
    removeFromCart.textContent = "Supprimer";
    boxQty.appendChild(removeFromCart);
    removeFromCart.addEventListener("click", () => {
        removeFromCart(itemInCart)
        // removeFromCart.parentElement.parentElement.remove();
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

// Supprimer le panier complet
function deleteCart() {
    const deleteCart = document.querySelector("#deleteCart");
    deleteCart.addEventListener('click', () => {
        let youSure = confirm('Etes-vous sûr(e) de vouloir supprimer la totalité de votre panier ?');
        if (youSure) {
            localStorage.clear();
            document.location.reload()
            displayContent()
            howManyItems()
        }
    });
}

//supprimer un article
function removeFromCart(itemInCart) {
    const removeItem = itemInCart.filter((item) => {
        return item.id !== id
    });
    //mettre à jour le localStorage
    if (localStorage !== undefined) {
        localStorage.setItem('products', JSON.stringify(removeItem))
    } else {
        localStorage.clear()
    }

}