
//Gestion de l'identifiant de commande 
//récupération de l'Id par paramètre de l'url
let orderId = new URLSearchParams(window.location.search.substring(0));
orderId = orderId.get("orderId");

if (orderId) {
    //ajout de l'information dans la page utilisateur
    const refPurchase = document.querySelector('#refPurchase');
    refPurchase.innerHTML = "La référence de votre commande est la suivante : " + "<br>" + orderId + ".";


    //gestion de l'affichage du prix du panier
    // const orderPurchase = () => {
    let pricePurchase = document.querySelector('#orderPurchase');

    const cartJSON = localStorage.getItem('products');
    let cart = JSON.parse(cartJSON);

    let price = 0;

    //récupération des données de qty*price de chaque ligne puis addition du tableau complet
    cart.map(item => price += (parseInt(item.price) * parseInt(item.qty) / 100))

    console.log(price);

    const priceEuro = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(`${price}`);

    pricePurchase.innerHTML = `Le montant de votre commande est : ${priceEuro}`;
}

window.addEventListener("unload", () => {
    localStorage.clear()
});
