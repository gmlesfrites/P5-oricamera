//après chargement complet du DOM
window.onload = () => {
	//Récupération des caméras
	const data = [
		{
			lenses: ["35mm 1.4", "50mm 1.6"],
			_id: "5be1ed3f1c9d44000030b061",
			name: "Zurss 50S",
			price: 49900,
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			imageUrl: "http://localhost:3000/images/vcam_1.jpg",
		},
		{
			lenses: ["50mm 1.8", "60mm 2.8", "24-60mm 2.8/4.5"],
			_id: "5be1ef211c9d44000030b062",
			name: "Hirsch 400DTS",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			price: 309900,
			imageUrl: "http://localhost:3000/images/vcam_2.jpg",
		},
		{
			lenses: ["25mm 4.5"],
			_id: "5be9bc241c9d440000a730e7",
			name: "Franck JS 105",
			price: 209900,
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			imageUrl: "http://localhost:3000/images/vcam_3.jpg",
		},
		{
			lenses: ["50mm 1.7", "35mm 1.4"],
			_id: "5be9c4471c9d440000a730e8",
			name: "Kuros TTS",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			price: 159900,
			imageUrl: "http://localhost:3000/images/vcam_4.jpg",
		},
		{
			lenses: ["50mm 1.4", "35mm 1.8", "28-200mm 2.8/4.5"],
			_id: "5be9c4c71c9d440000a730e9",
			name: "Katatone",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			price: 59900,
			imageUrl: "http://localhost:3000/images/vcam_5.jpg",
		},
	];
	// Création des contenus dans la div 'boxPolaroid'
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
		priceElt.innerHTML =
			'<div id="price">' + data[i].price + "&#128;" + "</div>";
		boxPolaroid.appendChild(priceElt);

		// Ajout div pour bouton produit et bouton achat rapide
		const divButtons = document.createElement("div");
		divButtons.className = "container__buttons--flex";
		boxPolaroid.appendChild(divButtons);

		//Ajout du bouton voir le produit
		const buttonElt = document.createElement("button");
		buttonElt.className = "button__seeProduct"
		buttonElt.textContent = "Voir le produit";
		divButtons.appendChild(buttonElt);

		//Ajout bouton achat rapide
		const quickCartElt = document.createElement("i");
		quickCartElt.className = "fas fa-cart-plus button__quickCart";
		divButtons.appendChild(quickCartElt);
	}
};
