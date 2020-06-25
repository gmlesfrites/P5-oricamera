

// Récupération des données globales
const url = 'http://localhost:3000/api/cameras';
const fetchItems = fetch(url)
	.catch(error => {
		throw new error(response.status);
	})
	.then(response => response.json())
	.then((data) => {
		//Utilisation des données de l'API
		data.map(product => {
			//méthode pour générer les produits
			showProducts(product)

			//compteur d'articles partie header
			howManyItems()
		});
	});

//Génération des articles 
const showProducts = product => {
	// Création de la constante pour la div 'boxPolaroid'
	const divElt = document.querySelector("main div");

	//Creation de la boite pour chaque item
	const boxPolaroid = document.createElement("section");
	boxPolaroid.className = "box__link--polaroid";
	divElt.appendChild(boxPolaroid);

	//Ajout de l'image
	const imgElt = document.createElement("img");
	imgElt.src = `${product.imageUrl}`;
	imgElt.id = "imageUrl";
	imgElt.className = "box__image--polaroid";
	boxPolaroid.appendChild(imgElt);

	//creation des titres
	const newh3 = document.createElement("h3");
	newh3.className = "h3";
	newh3.textContent = `${product.name}`;
	boxPolaroid.appendChild(newh3);

	//Ajout des détails de prix
	const priceElt = document.createElement("p");
	const price = (product.price / 100);
	priceElt.textContent = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(`${price}`);
	boxPolaroid.appendChild(priceElt);

	// Ajout div pour bouton produit et bouton achat rapide
	const divButtons = document.createElement("div");
	divButtons.className = "container__buttons--flex";
	boxPolaroid.appendChild(divButtons);

	//Ajout du bouton voir le produit
	const buttonElt = document.createElement("a");
	buttonElt.className = "button__seeProduct";
	buttonElt.ariaLabel = "Lien vers la page produit";
	buttonElt.href = `html/product.html?id=${product._id}`;
	buttonElt.textContent = "Voir le produit";
	divButtons.appendChild(buttonElt);
}

