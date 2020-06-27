//function affichage de la page panier
const displayContent = () => {
    if (!localStorage.products) {
        //si panier vide pas d'affichage panier + form
        const blocFull = document.querySelector('#full');
        blocFull.setAttribute("style", "display:none");
        //design si panier vide
        const blocEmpty = document.querySelector('#main__content--cart');
        blocEmpty.setAttribute("style", "height: 100vh");

        //articles au panier : affichage panier 
    } else {
        const blocEmpty = document.querySelector('#empty');
        blocEmpty.setAttribute("style", "display: none");
        const formOrder = document.querySelector('#toOrder');
        formOrder.setAttribute("style", "display:none");
        displayCart()
    }
}

//Récupération des articles ajoutés dans le localStorage
const itemsInCart_json = localStorage.getItem('products');
const itemInCart = JSON.parse(itemsInCart_json);

//Fonctions page panier
const displayCart = () => {
    if (itemInCart === null) {
        displayContent()
    } else {
        itemInCart.map(item => addToCart(item));
        deleteCart()
        howManyItems()
        updateTotalPrice()
    }
}

//Création ligne d'article
const addToCart = itemInCart => {
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
    image.setAttribute("alt", "photo du produit présenté à la vente : " + `${itemInCart.name}`);
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
    minus.addEventListener("click", (qtyLess, itemInCart) => {

        qtyLess(itemInCart)// TODO Données de quantité

        addLess(qtyLess)

    });
    if (itemInCart.qty === 1) {
        minus.setAttribute("style", "visibility:hidden")
    }
    qtyCheck.appendChild(minus);

    const qty = document.createElement('p');
    qty.className = "qty";
    qty.textContent = `${itemInCart.qty}`;

    qtyCheck.appendChild(qty);

    const plus = document.createElement('button');
    plus.className = "plus";
    plus.innerHTML = `<strong><i class="fa fa-plus" aria-label="quantité en +"></i></strong>`;
    plus.addEventListener("click", () => {
        //TODO Données de quantité
        const qtyMore = {
            id: `${itemInCart.id}`
        }
        addMore(qtyMore)
    });
    // if (itemInCart.qty >= 5) {
    //     plus.setAttribute("style", "visibility:hidden")
    // }
    qtyCheck.appendChild(plus);

    //bouton retirer l'article du panier
    let removeFromCart = document.createElement('button');
    removeFromCart.className = "removeFromCart";
    removeFromCart.ariaLabel = "retirer le produit du panier";
    removeFromCart.textContent = "Supprimer";
    boxQty.appendChild(removeFromCart);
    removeFromCart.addEventListener("click", () => {
        //TODO Données du produit pour le localStorage
        const itemToRemove = {
            id: `${itemInCart.id}`
        }
        removeItem(itemToRemove)
    });

    // pour affichage responsive Prix de plusieurs du même article
    const boxTotalPrice = document.createElement('div');
    boxTotalPrice.className = "subContent__cart--sevUnit";
    lignItem.appendChild(boxTotalPrice);

    //prix global ligne article
    const lignPrice = document.createElement('p');
    const totalCost = (`${itemInCart.price}` * `${itemInCart.qty}` / 100).toFixed(2);
    const newTotalCost = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(`${totalCost}`);
    lignPrice.innerHTML = "<strong>" + "Prix total : " + "</strong>" + newTotalCost;
    boxTotalPrice.appendChild(lignPrice);
}

//prix global panier
const updateTotalPrice = () => {
    //Position du prix
    const totalPrice = document.getElementById("totalCart");
    let price = 0;

    // Boucle de calcul des qty/price par ligne 
    itemInCart.map(item => price += (parseInt(item.price) * parseInt(item.qty) / 100));

    //Passe en €
    const newTotalToPay = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(`${price}`);
    totalPrice.textContent = newTotalToPay;
    // }
}

//fonction pour le compteur du header
const howManyItems = () => {
    const howManyItems = document.querySelector('.howManyItems');
    let counter = 0;

    //Boucle de calcul des qty par ligne
    if (itemInCart) {
        itemInCart.map(item => counter += parseInt(item.qty));
    }
    howManyItems.textContent = counter;
}

//Gestion de la quantité en -
const qtyLess = itemInCart => {
    id = `${itemInCart.id}`
}
const addLess = qtyLess => {
    const qtyFilter = itemInCart.filter(quantity => quantity.id === qtyLess.id).map(minus => {
        minus.qty--;
        return minus;
    });
    itemInCart.slice(qtyFilter)
    localStorage.setItem('products', JSON.stringify(itemInCart))
    document.location.reload()
}

// Gestion de la quantité en +
const addMore = qtyMore => {
    const qtyFilter = itemInCart.filter(quantity => quantity.id === qtyMore.id).map(plus => {
        plus.qty++;
        return plus;
    });
    itemInCart.slice(qtyFilter)
    localStorage.setItem('products', JSON.stringify(itemInCart))
    document.location.reload()
}

//supprimer un article
const removeItem = itemToRemove => {
    const itemFilter = itemInCart.filter(array => array.id !== itemToRemove.id);
    //mettre à jour le localStorage

    if (itemFilter.length !== 0) {
        const sure = confirm('Le choix est difficile, vous allez supprimer cet article de votre panier ?');
        removeItemSure(sure, itemFilter)
    } else {
        const youSure = confirm('Si vous ôtez cet article, votre panier sera de nouveau vide. Vous confirmez ?');
        deleteYouSure(youSure)
    }
}
//Pour supprimer un seul article
const removeItemSure = (sure, itemFilter) => {
    if (sure) {
        localStorage.setItem('products', JSON.stringify(itemFilter))
        updateTotalPrice()
        document.location.reload()
    }
}

// Supprimer le panier complet
const deleteCart = () => {
    const deleteCart = document.querySelector("#deleteCart");
    deleteCart.addEventListener('click', () => {
        const youSure = confirm('Etes-vous sûr(e) de vouloir supprimer la totalité de votre panier ?');
        deleteYouSure(youSure)
    });
}

// Supression du panier complet (valable pour le bouton supprimer le panier et supprimer dans la ligne article)
const deleteYouSure = youSure => {
    if (youSure) {
        localStorage.clear();
        document.location.reload()
        displayContent()
        howManyItems()
    }
}

//Affichage du formulaire après validation du panier
const displayForm = () => {
    //récupération du bouton "valider le panier"
    const validateCart = document.querySelector("#validateCart");
    validateCart.addEventListener('click', () => submitCart())
}

