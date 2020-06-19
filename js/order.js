//Ajout des infos de contact au sessionStorage
const addContactToStorage = (contactInfo) => {
    if (!contactInfo) {
        contact = [];
        contact.push(contactInfo);
        sessionStorage.setItem('contact', JSON.stringify(contact));
    }
}


//  TODO http://localhost:3000/api/cameras/order