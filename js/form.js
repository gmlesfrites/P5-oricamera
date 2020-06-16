//Affichage panier vide / panier plein
displayContent()

//Affichage du formulaire après validation du panier
const displayForm = () => {
    //récupération du bouton "valider le panier"
    const validateCart = document.querySelector("#validateCart");
    validateCart.addEventListener('click', () => {
        submitCart()
    })
}

//transition panier -> formulaire
const submitCart = () => {
    //au clic sur le bouton valider, le panier s'efface
    const validatedCart = document.querySelector('.container__cart--full');
    validatedCart.setAttribute("style", "display:none")

    //au clic sur le bouton valider, le formulaire s'affiche
    const formOrder = document.querySelector('#toOrder');
    formOrder.setAttribute("style", "display:initial");
}


//e.preventDefault pour neutraliser envoi du formulaire si mal rempli
const checkForm = () => {
    document.getElementById("name").oninput = checkText;
    document.getElementById("firstname").oninput = checkText;
    document.getElementById("email").oninput = checkEmail;
    document.getElementById("telephone").oninput = checkTel;
    document.getElementById("address").oninput = checkAddress;
    document.getElementById("zip").oninput = checkZip;
    document.getElementById("city").oninput = checkText;
    document.getElementById("message").oninput = checkMessage;
}

//traitement des erreurs
const colorize = () => {
    const input = document.getElementsByTagName('input');
    if (error) {
        input.style.backgroundColor = "#e07373";
        alert('Merci de renseigner correctement ce champ');
    } else {
        input.style.backgroundColor = "#86d411";
    }
}

//Nom, prénom, Ville
const checkText = () => {
    colorize()
}
//email
const checkEmail = () => {
    colorize()
}
//téléphone
const checkTel = () => {
    colorize()
}
//adresse
const checkAddress = () => {
    colorize()
}
//Code Postal
const checkZip = () => {
    let constraints = /'^(F-)?\\d{5}$'/;
    colorize()
}
//commentaires
const checkMessage = () => {
    colorize()
}




//  TODO http://localhost:3000/api/cameras/order


