//Gestion des quantités
function itemQuantity(itemInCart) {
    const qtySelected = document.querySelectorAll('.countItems__cart');
    qtySelected.JSON.filter(j => j.id == "5be9c4471c9d440000a730e8").map(m => {
        m.qty = qtySelected;
        return m;
    });
    // TODO ici on gère la modification des quantités
}


//prix global panier
function updateTotalPrice(itemInCart) {
    if (itemInCart === null) {
        displayContent()
    } else {
        const boxCartTotalPrice = document.querySelector("#totalCart");
        let totalToPay = document.createElement('p');
        boxCartTotalPrice.appendChild(totalToPay);
        for (i = 0; i < itemInCart.length; i++) {
            const price = `${itemInCart[i].price}`;
            const qty = `${itemInCart[i].qty}`;

            totalToPay = (price * qty / 100).toFixed(2);

            const newTotalToPay = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(`${totalToPay}`);
            totalToPay.textContent = newTotalToPay;
        }
    };

}




//gestion des quantités
function addLess(itemInCart) {
    console.log('banana');
}

function addMore(itemInCart) {
    console.log('banana');
}