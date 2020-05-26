// Récupération des données
const url = 'http://localhost:3000/api/cameras';
const fetchCameras = async function () {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(response.status);
		} else {
			const data = await response.json();
			return data;
		}
	} catch (error) {
		console.log(error);
	}
}

// Création de la constante pour la div 'boxPolaroid'
const divElt = document.querySelector("main div");

//Utilisation des données récupérées pour les insérer dans la page
fetchCameras().then(function (data) {
	for (let i = 0; i < data.length; i++) {
		console.log(data);

		//Creation de la boite pour chaque item
		const boxPolaroid = document.createElement("section");
		boxPolaroid.className = "box__link--polaroid";
		divElt.appendChild(boxPolaroid);

		//Ajout de l'image
		const imgElt = document.createElement("img");
		imgElt.src = data[i].imageUrl;
		imgElt.id = "imageUrl";
		imgElt.className = "box__image--polaroid";
		boxPolaroid.appendChild(imgElt);

		//creation des titres
		const newh3 = document.createElement("h3");
		newh3.className = "h3";
		newh3.innerHTML = `<h3> ${data[i].name} </h3>`;
		boxPolaroid.appendChild(newh3);

		//Ajout des détails de prix
		const priceElt = document.createElement("p");
		const price = (data[i].price / 100).toFixed(2);
		priceElt.innerHTML = `<p> ${price} &#128; </p>`;
		boxPolaroid.appendChild(priceElt);

		// Ajout div pour bouton produit et bouton achat rapide
		const divButtons = document.createElement("div");
		divButtons.className = "container__buttons--flex";
		boxPolaroid.appendChild(divButtons);

		//Id de chaque produit
		const idCam = data[i]._id;

		//Ajout du bouton voir le produit
		const buttonElt = document.createElement("a");
		buttonElt.className = "button__seeProduct";
		buttonElt.id = idCam;
		buttonElt.ariaLabel = "Lien vers la page produit";
		buttonElt.innerHTML = `<a href="html/product.html?id= ${data[i]._id}"> Voir le produit </a>`;
		divButtons.appendChild(buttonElt);
		console.log(buttonElt);

		//Ajout bouton achat rapide
		const quickCartElt = document.createElement("p");
		quickCartElt.className = "button__quickCart";
		quickCartElt.id = "quick" + i;
		quickCartElt.innerHTML = `<p> <strong> <i class="fas fa-cart-plus toCart"></i> </strong> </p>`;
		divButtons.appendChild(quickCartElt);


	}
});

