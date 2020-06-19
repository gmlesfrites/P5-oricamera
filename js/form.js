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
const inputs = document.querySelectorAll("input")
const checkForm = input => {
    input.addEventListener('input', (event) => {
        if (!event.target.validity.valid) {
            event.target.parentElement.classList.add('error')
        }
    })

    input.addEventListener('input', (event) => {
        if (event.target.validity.valid) {
            event.target.parentElement.classList.remove('error')
        }
    })
}

Array.from(inputs).forEach(checkForm);

//Gestion du remplissage -> e.preventDefault pour neutraliser envoi du formulaire si mal rempli  e.preventDefault()
const getcontact = () => {
    const form = document.querySelector('form');
    form.addEventListener('input', (e) => {
        //Données du produit pour le localStorage
        const contact = {
            lastName: `${e.target.lastName.value}`,
            firstName: `${e.target.firstName.value}`,
            address: `${e.target.address.value}`,
            email: `${e.target.email.value}`,
            city: `${e.target.city.value}`,
        }
    })
}

// Données du formulaire
document.addEventListener('DOMContentLoaded', () => {
    document
        .getElementById('formOrder')
        .addEventListener('submit', getInfos);
});

const getInfos = event => {
    //interdire le rechargement pour éviter la perte d'infos
    event.preventDefault()
    
}