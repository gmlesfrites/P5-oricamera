//Panier vide ou affichage panier + formulaire 
displayContent()

//affichage du panier et du formulaire
function displayContent() {
    if (localStorage.length === 0) {
        //si panier vide pas d'affichage panier + form
        let blocFull = document.querySelector('#full')
        blocFull.setAttribute("style", "display:none");
        //design si panier vide
        let blocEmpty = document.querySelector('#main__content--cart')
        blocEmpty.setAttribute("style", "height = 100vh");

        //articles au panier : affichage panier + formulaire --> pas message
    } else {
        let blocEmpty = document.querySelector('#empty')
        blocEmpty.setAttribute("style", "display: none");
    }
}


//e.preventDefault pour neutraliser envoi du formulaire si mal rempli
window.onload = function () {
    document.getElementById("name").oninput = checkText;
    document.getElementById("firstname").oninput = checkText;
    document.getElementById("email").oninput = checkEmail;
    document.getElementById("telephone").oninput = checkTel;
    document.getElementById("address").oninput = checkAddress;
    document.getElementById("zip").oninput = checkZip;
    document.getElementById("city").oninput = checkText;
    document.getElementById("message").oninput = checkMessage;

    //traitement des erreurs
    function colorize() {
        let input = document.getElementsByTagName('input');
        if (error) {
            input.style.backgroundColor = "#e07373";
            alert('Merci de renseigner correctement ce champ');
        } else {
            input.style.backgroundColor = "#86d411";
        }
    }
    //Nom, prénom, Ville
    function checkText() {

        colorize()
    }
    //email
    function checkEmail() {
        colorize()
    }
    //téléphone
    function checkTel() {
        colorize()
    }
    //adresse
    function checkAddress() {
        colorize()
    }
    //Code Postal
    function checkZip() {
        let constraints = /'^(F-)?\\d{5}$'/;
        colorize()
    }
    //commentaires
    function checkMessage() {
        colorize()
    }
}



//  TODO http://localhost:3000/api/cameras/order


