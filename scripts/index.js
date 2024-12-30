const placesList = document.querySelector('.places__list');

function makeCard (cardContent, deleteCardCallBack) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__image').src = cardContent.link;
    cardElement.querySelector('.card__image').alt = cardContent.alt;
    cardElement.querySelector('.card__title').textContent = cardContent.name;
    cardElement.querySelector('.card__delete-button').addEventListener('click', () => deleteCardCallBack(cardElement));
    
    return cardElement;
};


function deleteCard(cardDeleted) {
    cardDeleted.remove();
};

initialCards.forEach(cardInfo => {
    const card = makeCard(cardInfo, deleteCard);    
    placesList.append(card);
}); 
