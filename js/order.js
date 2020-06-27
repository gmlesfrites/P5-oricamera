// Gestion du localStorage
window.addEventListener("unload", () => localStorage.clear());

//Gestion de l'affichage du récap de commande 
const orderId = new URLSearchParams(window.location.search.substring(0)).get("orderId");
console.log(orderId);
const cartJSON = localStorage.getItem('products');
const cart = JSON.parse(cartJSON);

if (orderId && cart) {
    //ajout de l'information dans la page utilisateur
    const refPurchase = document.querySelector('#refPurchase');
    refPurchase.innerHTML = "La référence de votre commande est la suivante : " + "<br>" + orderId + ".";

    //gestion de l'affichage du prix du panier
    let pricePurchase = document.querySelector('#orderPurchase');
    let price = 0;

    //récupération des données de qty*price de chaque ligne puis addition du tableau complet
    cart.map(item => price += (parseInt(item.price) * parseInt(item.qty) / 100))
    const priceEuro = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(`${price}`);
    pricePurchase.innerHTML = `Le montant de votre commande est : ${priceEuro}`;

    //cache la partie mauvaise manip de l'url
    const noPurchase = document.getElementById("noId");
    noPurchase.setAttribute("style", "display:none");
} else {
    const noId = document.getElementById("orderOk");
    noId.setAttribute("style", "display:none");
}




