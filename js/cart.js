// //ajout au panier
// const AddToCart = document.getElementsByClassName("toCart");

//suppression du panier
const removeFromCart = document.getElementsByClassName("removeFromCart");
for (i = 0; i < removeFromCart.length; i++) {
    let btnRemove = removeFromCart[i];
    btnRemove.addEventListener('click', function () {
        console.log("clicked");
    })
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