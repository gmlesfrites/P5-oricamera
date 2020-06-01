//Utilisation des données récupérées dans Camera.js pour les insérer dans la page
fetchCameras().then(function (data) {
	const cameras = data.map(camera => {
		// Création de la constante pour la div 'boxPolaroid'
		const divElt = document.querySelector("main div");

		//Creation de la boite pour chaque item
		const boxPolaroid = document.createElement("section");
		boxPolaroid.className = "box__link--polaroid";
		divElt.appendChild(boxPolaroid);

		//Ajout de l'image
		const imgElt = document.createElement("img");
		imgElt.src = camera.imageUrl;
		imgElt.id = "imageUrl";
		imgElt.className = "box__image--polaroid";
		boxPolaroid.appendChild(imgElt);

		//creation des titres
		const newh3 = document.createElement("h3");
		newh3.className = "h3";
		newh3.textContent = `${camera.name}`;
		boxPolaroid.appendChild(newh3);

		//Ajout des détails de prix
		const priceElt = document.createElement("p");
		const price = (camera.price / 100).toFixed(2);
		priceElt.textContent = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(`${price}`);
		boxPolaroid.appendChild(priceElt);

		// Ajout div pour bouton produit et bouton achat rapide
		const divButtons = document.createElement("div");
		divButtons.className = "container__buttons--flex";
		boxPolaroid.appendChild(divButtons);

		//Id de chaque produit
		const idCam = camera._id;

		//Ajout du bouton voir le produit
		const buttonElt = document.createElement("a");
		buttonElt.className = "button__seeProduct";
		buttonElt.ariaLabel = "Lien vers la page produit";
		buttonElt.href = `html/product.html?id=${idCam}`;
		buttonElt.textContent = "Voir le produit";
		divButtons.appendChild(buttonElt);

		// //Ajout bouton achat rapide
		// const quickCartElt = document.createElement("a");
		// quickCartElt.className = "button__quickCart addToCart";
		// quickCartElt.ariaLabel = "Bouton d'achat rapide";
		// quickCartElt.id = idCam;
		// quickCartElt.href = "#boxPolaroid";
		// quickCartElt.innerHTML = `<strong> <i class="fas fa-cart-plus toCart"></i> </strong> `;
		// divButtons.appendChild(quickCartElt);
	})

});







//******  Première version avec boucle for          *******
// // Création de la constante pour la div 'boxPolaroid'
// const divElt = document.querySelector("main div");

// //Utilisation des données récupérées pour les insérer dans la page
// fetchCameras().then(function (data) {
// 	for (let i = 0; i < data.length; i++) {
// 		//Creation de la boite pour chaque item
// 		const boxPolaroid = document.createElement("section");
// 		boxPolaroid.className = "box__link--polaroid";
// 		divElt.appendChild(boxPolaroid);

// 		//Ajout de l'image
// 		const imgElt = document.createElement("img");
// 		imgElt.src = data[i].imageUrl;
// 		imgElt.id = "imageUrl";
// 		imgElt.className = "box__image--polaroid";
// 		boxPolaroid.appendChild(imgElt);

// 		//creation des titres
// 		const newh3 = document.createElement("h3");
// 		newh3.className = "h3";
// 		newh3.innerHTML = `${data[i].name}`;
// 		boxPolaroid.appendChild(newh3);

// 		//Ajout des détails de prix
// 		const priceElt = document.createElement("p");
// 		const price = (data[i].price / 100).toFixed(2);
// 		priceElt.innerHTML = `${price} &#128; `;
// 		boxPolaroid.appendChild(priceElt);

// 		// Ajout div pour bouton produit et bouton achat rapide
// 		const divButtons = document.createElement("div");
// 		divButtons.className = "container__buttons--flex";
// 		boxPolaroid.appendChild(divButtons);

// 		//Id de chaque produit
// 		const idCam = data[i]._id;

// 		//Ajout du bouton voir le produit
// 		const buttonElt = document.createElement("a");
// 		buttonElt.className = "button__seeProduct";
// 		buttonElt.ariaLabel = "Lien vers la page produit";
// 		buttonElt.href = `html/product.html?id=${idCam}`;
// 		buttonElt.textContent = "Voir le produit";
// 		divButtons.appendChild(buttonElt);

// 		//Ajout bouton achat rapide
// 		const quickCartElt = document.createElement("a");
// 		quickCartElt.className = "button__quickCart addToCart";
// 		quickCartElt.ariaLabel = "Lien vers la page produit";
// 		quickCartElt.id = idCam;
// 		quickCartElt.href = "#boxPolaroid";
// 		quickCartElt.innerHTML = `<strong> <i class="fas fa-cart-plus toCart"></i> </strong> `;
// 		divButtons.appendChild(quickCartElt);
// 	}
// });
