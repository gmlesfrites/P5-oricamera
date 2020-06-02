// //Panier : vide ou affichage panier + formulaire
// function displayContent() {
//     if (cart.length === 0) {
//         const blocFull = document.getElementById('full').style.display = "none";
//         const blocEmpty = document.getElementById('main__content--cart').style.height = "100vh";
//         //articles au panier : affichage panier + formulaire --> pas message
//     } else {
//         const blocEmpty = document.getElementById('empty').style.display = "none";
//     }
// }
// displayContent()





//  TODO http://localhost:3000/api/cameras/order


//Vérification du formulaire
//nom, prénom, ville 
function inputString() {
    
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

function surligne(champ, erreur) {
    if (erreur)
        champ.style.backgroundColor = "#e07373";
    else
        champ.style.backgroundColor = "#86d411";
}