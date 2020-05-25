// //ajout au panier
// const AddToCart = document.getElementsByClassName("toCart");

//suppression des articles bouton supprimer
const removeFromCart = document.getElementsById("removeFromCart");
for (i = 0; i < removeFromCart.length; i++) {
    let btnRemove = removeFromCart[i];
    btnRemove.addEventListener('click', function (event) {
        let btnclicked = event.target; {
            btnclicked.parentElement.parentElement.remove();
        }
    })
}


//MAJ prix total
let unitPrice = document.getElementsByClassName("unit_price");
let quantity = document.getElementsByClassName("quantity");
let totalPrice = document.getElementsByClassName("total_price")
for (i = 0; i < quantity.length; i++) {
    let quantityElt = quantity[i];
    let priceElt = unitPrice[i];
    totalPrice = quantityElt[i] * priceElt;
}


//localStorage











//  TODO http://localhost:3000/api/cameras/order







//Vérification du formulaire
//nom, prénom, ville 
function inputString() {
    function surligne(champ, erreur) {
        if (erreur)
            champ.style.backgroundColor = "";
        else
            champ.style.backgroundColor = "";
    }
    console.log();
}
//téléphone
function inputTel() {
    console.log();
}
//code postal
function inputPostalCode() {
    console.log();
}
//adresse, commentaires
function inputStrNum() {
    console.log();
}
//email
function inputMail() {
    console.log();
}