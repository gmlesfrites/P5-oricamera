//Affichage panier vide / panier plein
displayContent()
displayForm()

//transition panier -> formulaire
const submitCart = () => {
    //au clic sur le bouton valider, le panier s'efface
    const validatedCart = document.querySelector('.container__cart--full');
    validatedCart.setAttribute("style", "display:none")

    //au clic sur le bouton valider, le formulaire s'affiche
    const formOrder = document.querySelector('#toOrder');
    formOrder.setAttribute("style", "display:initial");
    getOrderDone()
}

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
Array.from(inputs).map(checkForm);

//Gestion du formulaire 
const getOrderDone = (lastName, firstName, email, address, city) => {
    //Gestion des données du contact
    lastName = document.forms['formOrder']['lastName'];
    firstName = document.forms['formOrder']['firstName'];
    email = document.forms['formOrder']['email'];
    address = document.forms['formOrder']['address'];
    city = document.forms['formOrder']['city'];

    //au 'submit' sur le formulaire validé
    let form = document.getElementById('formOrder');
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        clickedForm(lastName, firstName, email, address, city)
    });
}

//méthode utilisée au clic
const clickedForm = (lastName, firstName, email, address, city) => {
    //Gestion des données du panier
    const productsParse = JSON.parse(localStorage.getItem('products'));
    products = productsParse.map(item => item.id);

    //Gestion des infos du formulaire
    contact = {
        lastName: lastName.value,
        firstName: firstName.value,
        email: email.value,
        address: address.value,
        city: city.value
    }

    //transformation en objet JSON pour fetch
    const toSend = JSON.stringify({ contact, products });
    fetchOrder(toSend)
}

//Fetch pour envoi à l'api
const fetchOrder = (toSend) => {
    //Envoi à l'API method="POST"
    const url = 'http://localhost:3000/api/cameras/order';

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: toSend
    }).catch(error => {
        throw new error(response.status);
    }).then(res => res.json())
        .then(data => showPurchase(data));
}

//ouverture de la page de confirmation
showPurchase = data => {
    const orderId = `${data.orderId}`;
    window.location.href = '../html/order.html?orderId=' + `${orderId}`;
}