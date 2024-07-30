import './js/card';
import './style.css';

const numberOfColumns = 3;

for (let i = 0; i < numberOfColumns; i++) {
    const btn = document.getElementById(i + 1 + '_btn');

    const btnSubmit = document.createElement('button');
    btnSubmit.classList.add('btn-submit');
    btnSubmit.id = i + 1 + '_btn-submit';

    const placeForCard = document.getElementById(i + 1 + '_cards');

    const cardForm = document.createElement('div');
    cardForm.classList.add('card-form');
    cardForm.id = i + 1 + '_card-form';
    placeForCard.appendChild(cardForm);

    const cardSpace = document.createElement('textarea');
    cardSpace.classList.add('card');
    cardSpace.id = i + 1 + '_card-space';

    btn.addEventListener('click', () => {
        btn.classList.add('hide-btn');
    
        btnSubmit.textContent = 'Add Card';

        cardForm.appendChild(cardSpace);
        cardForm.appendChild(btnSubmit);
    })

    if (btnSubmit) {
        btnSubmit.addEventListener('click', () => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.textContent = cardSpace.value;
            
            placeForCard.appendChild(card);
            btn.classList.remove('hide-btn');
            cardForm.remove();
        })
    }
}

let allCards = [...document.querySelectorAll('.card')];

console.log(allCards.length);

for (let i = 0; i < allCards.length; i++) {
    const card = allCards[i];
    card.addEventListener('mouseover', () => {
        const cross = document.createElement('div');
        cross.classList.add('cross');
        card.appendChild(cross);
        cross.textContent = '×';
    })

}

