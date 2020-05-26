// Récupération des données suite bouton voir produit cliqué
let urlCam = document.getElementsByClassName("button__seeProduct");

// pour chaque bouton 'voir le produit'
for (let i = 0; i < urlCam.length; i++) {

    //btnClickElt correspond à l'id du bouton cliqué et du produit :)
    let btnClickElt = urlCam[i].id;
    btnClickElt = document.addEventListener('click', function (e) {


        //fetch pour la récupération des données par id
        const fetchId = async function () {
            try {
                const response = await fetch('');
                if (!response.ok) {
                    throw new Error(response.status);
                } else {
                    const idUrl = await response.json();
                    return idUrl;
                }
            } catch (error) {
                console.log(error);
            }
        };

        //Utilisation des données de fetch pour les insérer dans la page
        fetchId().then(function (idUrl) {
            // // Récup des données de chaque produit
            // const product = new Camera(data.imageUrl, data._id, data.name,
            //     data.description, data.price);

            //Ajout de l'image
            const imageElt = document.getElementById("imageUrl");
            imageElt.setAttribute('src', 'idUrl.imageUrl');

            //Ajout de la référence de produit
            const refElt = document.getElementById("ref");
            refElt.innerHTML = `<p> <strong>Référence du produit : </strong>${idUrl._id} </p>`;

            //Nom du produit
            const singleTitleElt = document.getElementById("name");
            singleTitleElt.innerHTML = `<h2> ${idUrl.name} </h2>`;

            //Description
            const descriptionElt = document.getElementById("description");
            descriptionElt.innerHTML = `<p><strong>Description : </strong> ${idUrl.description} </p>`;

            // Optiques
            const lensesElt = document.querySelector("select");
            const lensesData = idUrl.lenses;
            for (let i = 0; i < lensesData.length; i++) {
                let optElt = document.createElement("option");
                optElt.value = lensesData[i];
                optElt.innerHTML = lensesData[i];
                lensesElt.appendChild(optElt)
            }

            // Prix
            const singlePriceElt = document.getElementById("price");
            //Prix 000.00€
            data.price = (idUrl.price / 100).toFixed(2);
            singlePriceElt.innerHTML = `<p><strong>Prix : </strong> ${data.price} &#128; </p>`;
        });
    })
};





// // // // Constitution Fiche produit
// // // class Camera {
// // //     constructor(imageUrl, id, name, description, lenses, price) {
// // //         this.imageUrl = imageUrl;
// // //         this._id = id;
// // //         this.name = name;
// // //         this.description = description;
// // //         this.lenses = lenses;
// // //         this.price = price;
// // //     }
// // // }