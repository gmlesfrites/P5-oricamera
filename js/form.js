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

Array.from(inputs).forEach(checkForm);

//Gestion de l'envoi du bon de commande (contact + products)
const getOrderDone = () => {
    //Gestion des données du panier
    const productsJSON = localStorage.getItem('products');
    const productsParse = JSON.parse(productsJSON);
    let products = [];
    products = productsParse.map(item => {
        return item.id;
    });

    //Gestion des données du contact
    const lastName = document.forms['formOrder']['lastName'];
    const firstName = document.forms['formOrder']['firstName'];
    const email = document.forms['formOrder']['email'];
    const address = document.forms['formOrder']['address'];
    const city = document.forms['formOrder']['city'];

    //au 'submit' sur le formulaire validé
    let form = document.getElementById('formOrder');
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        contact = {
            lastName: lastName.value,
            firstName: firstName.value,
            email: email.value,
            address: address.value,
            city: city.value
        }

        //envoi en objet de contact + products
        let toSend = { contact, products };
        toSend = JSON.stringify(toSend);

        //Envoi à l'API method="POST"
        const url = 'http://localhost:3000/api/cameras/order';

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: toSend
        })
            .catch(error => {
                throw new error(response.status);
            })
            .then(res => res.json())
            .then(data => showPurchase(data));
    });
}

//ouverture de la page de confirmation
showPurchase = data => {
    const orderId = `${data.orderId}`;
    window.location.href = '../html/order.html?orderId=' + `${orderId}`;
}