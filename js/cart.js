//Panier avec localStorage
const cart = {
    key: 'oricamerakey',
    //contenu
    inCart: [],
    //initialisation de localStorage
    init() {
        let _inCart = localStorage.getItem(cart.key);
        if (_inCart) {
            cart.inCart = JSON.parse(_inCart);
        } else {
            cart.synchro();
        }
    },
    //synchronisation localStorage
    async synchro() {
        let _cart = JSON.stringify(cart.inCart);
        localStorage.setItem(cart.key, _cart);
    },
    //panier vide
    empty() {
        cart.inCart = [];
        //MAJ localStorage
        cart.synchro();
    },
    //trouver un article avec son id
    find(id) {
        let correspond = cart.inCart.filter(item => {
            if (item.id == id)
                return true;
        });
        if (correspond && correspond[0])
            return correspond[0];
    },
    //ajouter un produit
    add(id) {
        if (cart.find(id)) {
            cart.addItem(id, 1);
        } else {
            let array = cameras.filter(camera => {
                if (camera.id == id) {
                    return true;
                }
            });
            if (array && array[0]) {
                let unitCamera = {
                    image: array[0].image,
                    id: array[0].id,
                    name: array[0].name,
                    description: array[0].description,
                    quantity: 1,
                    price: array[0].price
                };
                cart.inCart.push(unitCamera);
                cart.synchro();
            } else {
                console.error('Pas de produit')
            }
        }
    },
    //augmenter la quantité d'un produit
    increase(id, quantity = 1) {
        cart.inCart = cart.inCart.map(item => {
            if (item.id === id)
                item.quantity += quantity;
            return item;
        });
        cart.synchro()
    },
    //diminuer la quantité d'un produit
    reduce(id, quantity = 1) {
        cart.inCart = cart.inCart.map(item => {
            if (item.id === id)
                item.quantity -= quantity;
            return item;
        });
        cart.inCart.forEach(async item => {
            if (item.id === id && item.quantity === 0)
                cart.remove(id);
        });
        cart.synchro();
    },
    //supprimer tout l'article
    remove(id) {
        cart.inCart = cart.inCart.filter(item => {
            if (item.id !== id)
                return true;
        });
        cart.synchro()
    }
};

document.addEventListener('DOMContentLoaded', function () {
    getCameras();
    cart.init();
});

function getCameras() {
    //Pour connaître la caméra cliquée
    let addToCart = document.getElementsByClassName('addToCart');
    addToCart.addEventListener = ('click', addToCart);

    for (i = 0; i < addToCart.length; i++) {
        //Récupération du contenant panier
        const cartContent = document.getElementById('article__cart');

        //Création de la ligne contenant les infos par camera ajoutée
        let lignCamera = document.createElement('div');
        lignCamera.className = "article__cart";
        lignCamera.appendChild(cartContent);

        let boxImg = document.createElement('div');
        boxImg.className = "subContent__cart--photo";
        boxImg.appendChild(lignCamera);

        let image = document.createElement('img');
        image.className = "img__cart";
        image.src = `${data[i].imageUrl}`;
        image.ariaLabel = "image du produit";
        image.alt = "image du produit";
        image.appendChild(boxImg);

        let boxInfos = document.createElement('div');
        boxInfos.className = "subContent__cart--article";
        boxInfos.appendChild(lignCamera);

        let nameCamera = createElement('p');
        nameCamera.className = "title__cart--article";
        nameCamera.textContent = `${data[i].name}`;
        nameCamera.appendChild(boxInfos);

        let idCamera = createElement('p');
        idCamera.className = "ref__cart";
        idCamera.textContent = `${data[i].id}`;
        idCamera.appendChild(boxInfos);

        let descCamera = createElement('p');
        descCamera.className = "description__cart";
        descCamera.textContent = `${data[i].description}`;
        descCamera.appendChild(boxInfos);

        let unitPrice = createElement('p');
        unitPrice.className = "unit__price";
        let cost = NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(`${data[i].price}`); unitPrice.className = "unit__price";
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


