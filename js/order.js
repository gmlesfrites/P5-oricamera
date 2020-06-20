//  TODO http://localhost:3000/api/cameras/order

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