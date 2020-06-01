//Affichage panier  vide // panier + formulaire de commande
const blocFull = document.getElementById('full').style.display = "none";
const blocEmpty = document.getElementById('main__content--cart').style.height = "100vh";

// function displayContent() {
//     const blocEmpty = document.getElementById('empty').style.display = "none";
//     const blocEmpty = document.getElementById('main__content--cart').style.height = "auto";
// };


/* <p class="description__cart total__price"><span id="totalPrice">0</span></p> 
    new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(`${total}`);*/

//Creation contenu par ligne
function createCamera() {
    //Récupération du contenant panier
    const cartContent = document.getElementById('article__cart');

    //Création de la ligne contenant les infos par camera ajoutée
    const lignCamera = document.createElement('div');
    lignCamera.className = "article__cart";
    lignCamera.appendChild(cartContent);

    const boxImg = document.createElement('div');
    boxImg.className = "subContent__cart--photo";
    boxImg.appendChild(lignCamera);

    const image = document.createElement('img');
    image.className = "img__cart";
    image.src = `${camera.imageUrl}`;
    image.ariaLabel = "image du produit";
    image.alt = "image du produit";
    image.appendChild(boxImg);

    let boxInfos = document.createElement('div');
    boxInfos.className = "subContent__cart--article";
    boxInfos.appendChild(lignCamera);

    let nameCamera = createElement('p');
    nameCamera.className = "title__cart--article";
    nameCamera.textContent = `${camera.name}`;
    nameCamera.appendChild(boxInfos);

    let idCamera = createElement('p');
    idCamera.className = "ref__cart";
    idCamera.textContent = `${camera.id}`;
    idCamera.appendChild(boxInfos);

    let descCamera = createElement('p');
    descCamera.className = "description__cart";
    descCamera.textContent = `${camera.description}`;
    descCamera.appendChild(boxInfos);

    let unitPrice = createElement('p');
    unitPrice.className = "unit__price";
    let cost = NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(`${camera.price}`); unitPrice.className = "unit__price";
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


















// function cartContent() {
//     //Panier == Array
//     this.cart = [];

//     //Verification si déjà un article sinon crée une nouvelle ligne de produit
//     this.addItem = function (image, id, name, description, price, quantity) {
//         let myArray = this.getId(id);
//         if (myArray == -1) this.cart.push(new Camera(image, id, name, description, price, quantity));
//         else this.cart[myArray].addQuantity(quantity);
//     }

//     //Ajouter un article
//     this.id = function (id) {
//         for (let i = 0; i < this.myArray.length; i++)
//             if (id == this.myArray[i].getCode()) return i;
//         return -1;
//     }

//     //Supprimer un article
//     this.supprimerArticle = function (id) {
//         let cart = this.getArticle(id);
//         if (myArray > -1) this.myArray.splice(myArray, 1);
//     }

//     //Générer le prix total
//     this.getTotalPrice = function () {
//         let total = 0;
//         for (let i = 0; i < this.myArray.length; i++)
//             total += this.myArray[i].getTotalPrice();
//         return total;
//     }

// }



// fetchCameras().then(function (data) {



//     //suppression des articles bouton supprimer
//     const removeFromCart = document.getElementsByClassName("removeFromCart");
//     const removeCamera = data.map(camera => {
//         let btnRemove = removeFromCart[i];
//         btnRemove.addEventListener('click', function (event) {
//             let btnclicked = event.target; {
//                 btnclicked.parentElement.parentElement.remove();
//             };
//         });
//     });
// });


//localStorage.setItem(clé, valeur)


// const cartJSON = JSON.stringify(cart);
// console.log(cartJSON);

// //Cameras
// const cameras = {}
// console.log(cameras);







// //récupération du prix par unité
// newFunction();

// function newFunction() {
//     let unitPrice = document.getElementsByClassName("unit__price")[0];
//     //récupération de la quantité 
//     let quantity = document.getElementsByClassName("quantity");
//     //récupération du prix total
//     let totalPrice = document.getElementsByClassName("total__price");
//     totalPrice = unitPrice * quantity;
//     console.log(totalPrice);
// }
