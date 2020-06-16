//Affichage panier vide / panier plein
displayContent()

//transition panier -> formulaire
const submitCart = () => {
    //au clic sur le bouton valider, le panier s'efface
    const validatedCart = document.querySelector('.container__cart--full');
    validatedCart.setAttribute("style", "display:none")

    //au clic sur le bouton valider, le formulaire s'affiche
    const formOrder = document.querySelector('#toOrder');
    formOrder.setAttribute("style", "display:initial");
}
displayForm()

// Vérification de la saisie
const checkForm = () => {
    document.getElementById("name").oninput = checkInput;
    document.getElementById("firstname").oninput = checkInput;
    document.getElementById("email").oninput = checkInput;
    document.getElementById("address").oninput = checkInput;
    document.getElementById("city").oninput = checkInput;
}

//commentaires
const checkInput = () => {
    colorize()
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







//  TODO http://localhost:3000/api/cameras/order


//Gestion du remplissage -> e.preventDefault pour neutraliser envoi du formulaire si mal rempli
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('name:', e.target.name.value)
    console.log('firstname:', e.target.firstname.value)
    console.log('address:', e.target.address.value)
    console.log('email:', e.target.email.value)
    console.log('city:', e.target.city.value)
});