//Utilisation des données de fetch par Id pour les insérer dans la page
fetchId().then(function (data) {
    //Ajout de l'image
    const imageElt = document.getElementById("imageUrl");
    imageElt.src = data.imageUrl;

    //Ajout de la référence de produit
    const refElt = document.getElementById("ref");
    refElt.innerHTML = `<p> <strong>Référence du produit : </strong>${data._id} </p>`;

    //Nom du produit
    const singleTitleElt = document.getElementById("name");
    singleTitleElt.innerHTML = `<h2> ${data.name} </h2>`;

    //Description
    const descriptionElt = document.getElementById("description");
    descriptionElt.innerHTML = `<p><strong>Description : </strong> ${data.description} </p>`;

    // Optiques
    const lensesElt = document.querySelector("select");
    const lensesData = data.lenses;
    lensesData.map(lenses => {
        let optElt = document.createElement("option");
        optElt.value = lenses;
        optElt.innerHTML = lenses;
        lensesElt.appendChild(optElt)
    });

    // Prix
    const singlePriceElt = document.getElementById("price");

    //Prix 000.00€
    let priceDot = (data.price / 100).toFixed(2);
    priceDot = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(`${priceDot}`);

    singlePriceElt.innerHTML = `<p><strong>Prix : </strong> ${priceDot} </p>`;

    //Bouton addToCart page produit
    const btnAddToCart = document.getElementById('addToCart');
    btnAddToCart.id = `${data._id} `;
    btnAddToCart.className = "button__product--toCart addToCart"

});