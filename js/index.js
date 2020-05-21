// Récupération des données
const data = fetch("http://localhost:3000/api/cameras")
	.then((resp) => resp.json())
	// Création de tous les contenus dans la main div
	.then(function (data) {
		// Création de la constante pour la div 'boxPolaroid'
		const divElt = document.querySelector("main div");

		for (let i = 0; i < data.length; i++) {
			//Creation de la boite pour chaque item
			const boxPolaroid = document.createElement("section");
			boxPolaroid.classList.add("box__link--polaroid");
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
			newh3.innerHTML = '<h3 id="name">' + data[i].name + "</h3>";
			boxPolaroid.appendChild(newh3);

			//Ajout des détails de prix
			const priceElt = document.createElement("p");
			const price = data[i].price / 100;
			priceElt.innerHTML = '<div id="price">' + price + "&#128;" + "</div>";
			boxPolaroid.appendChild(priceElt);

			// Ajout div pour bouton produit et bouton achat rapide
			const divButtons = document.createElement("div");
			divButtons.className = "container__buttons--flex";
			boxPolaroid.appendChild(divButtons);

			//Ajout du bouton voir le produit
			const buttonElt = document.createElement("button");
			buttonElt.className = "button__seeProduct";
			buttonElt.ariaLabel = "Lien vers la page produit";
			buttonElt.textContent = "Voir le produit";
			divButtons.appendChild(buttonElt);

			//Ajout bouton achat rapide
			const quickCartElt = document.createElement("p");
			quickCartElt.className = "button__quickCart";
			quickCartElt.innerHTML =
				"<p>" +
				'<strong>' +
				'<i class="fas fa-cart-plus toCart"></i>' +
				"</strong>" +
				"</p>";
			divButtons.appendChild(quickCartElt);
		}
	})
	.catch(console.error("erreur" + error));
