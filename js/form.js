//Panier : vide ou affichage panier + formulaire
(function displayContent() {
    if (cart !== 0) {
        let blocFull = document.querySelector('#full').style.display = "none";
        let blocEmpty = document.querySelector('#main__content--cart').style.height = "100vh";
        //articles au panier : affichage panier + formulaire --> pas message
    } else {
        let blocEmpty = document.querySelector('#empty').style.display = "none";
    }
})()

//e.preventDefault pour neutraliser envoi du formulaire si mal rempli


//  TODO http://localhost:3000/api/cameras/order


// //Vérification du formulaire
// //nom, prénom, ville 
// function inputString() {

//     console.log();
// }
// //téléphone
// function inputTel() {
//     console.log();
// }
// //code postal
// function inputPostalCode() {
//     console.log();
// }
// //adresse, commentaires
// function inputStrNum() {
//     console.log();
// }
// //email
// function inputMail() {
//     console.log();
// }

// function surligne(champ, erreur) {
//     if (erreur)
//         champ.style.backgroundColor = "#e07373";
//     else
//         champ.style.backgroundColor = "#86d411";
// }