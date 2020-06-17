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


//Bouton reset formulaire
const reset = () => {
    const buttonReset = document.querySelector('reset');
    buttonReset.addEventListener('click', (event) => {
        console.log('banana');
    })
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