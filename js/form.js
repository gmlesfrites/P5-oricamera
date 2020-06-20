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

// Données du formulaire
document.addEventListener('DOMContentLoaded', () => {
    document
        .getElementById('formOrder')
        .addEventListener('submit', getInfos);
});

const getInfos = event => {
    //interdire le rechargement pour éviter la perte d'infos
    event.preventDefault()
    //récupérer les données du formulaire
    const contact = event.target;
    let toSend = JSON.stringify(new FormData(contact));

    //ajoute le panier
    toSend.append(localStorage.getItem('products'));
}

//Envoi à l'API
const url = 'http://localhost:3000/api/cameras/order';
const headersFetch = new Headers();
headersFetch.append('Content-type', 'application/json');

const requestFetch = new Request(url, {
    headers: headersFetch,
    body: getInfos,
    method: 'POST',
});

fetch(requestFetch)
    .then((Response) => Response.json())
    .then((data) => {
        console.log('Response from server');
        console.log(data);
    })
    .catch(console.warn);