// //ajout au panier
// const AddToCart = document.getElementsByClassName("toCart");

//suppression des articles bouton supprimer
const removeFromCart = document.getElementsByClassName("removeFromCart");
for (i = 0; i < removeFromCart.length; i++) {
    let btnRemove = removeFromCart[i];
    btnRemove.addEventListener('click', function () {
        let btnclicked = event.target; {
            btnclicked.parentElement.parentElement.parentElement.remove();
        }
        updateTotalPrice();
    })
}

function updateTotalPrice() {
    let unitPrice = document.getElementsByClassName("price")
    let
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