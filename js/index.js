// Création de la constante pour la div 'boxPolaroid'
const divElt = document.querySelector("main div");

// Récupération des données
const data = async function () {
	try {
		const response = await fetch("http://localhost:3000/api/cameras");
		if (response.ok) {
			const jsonData = await response.json();
			console.log(jsonData);
		} else {
			console.error("server response : " + response.status);
		}
	} catch (error) {
		console.error(error);
	}
};

data()

console.log(data());
for (let i = 0; i < jsonData.length; i++) {
	//Creation de la boite pour chaque item
	const boxPolaroid = document.createElement("section");
	boxPolaroid.classList.add("box__link--polaroid");
	divElt.appendChild(boxPolaroid);

	//Ajout de l'image
	const imgElt = document.createElement("img");
	imgElt.src = jsonData[i].imageUrl;
	imgElt.id = "imageUrl";
	imgElt.className = "box__image--polaroid";
	boxPolaroid.appendChild(imgElt);

	//creation des titres
	const newh3 = document.createElement("h3");
	newh3.className = "h3";
	newh3.innerHTML = '<h3 id="name">' + jsonData[i].name + "</h3>";
	boxPolaroid.appendChild(newh3);

	//Ajout des détails de prix
	const priceElt = document.createElement("p");
	const price = jsonData[i].price / 100;
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
	quickCartElt.innerHTML = "<p>" + "<strong>" + '<i class="fas fa-cart-plus toCart"></i>' + "</strong>" + "</p>";
	divButtons.appendChild(quickCartElt);
}



