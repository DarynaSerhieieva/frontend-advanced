let data = [];

class Dish {
    constructor(name, img, price, ingredients) {
        this.name = name,
        this.img = img,
        this.price = price,
        this.ingredients = ingredients
    }

    render = () => {
        const div = document.createElement('div');
        div.className = 'col-12 col-lg-4 col-sm-6 mb-4';

        const card = document.createElement('div');
        card.className = 'card-active card-height card shadow-card p-0';
        div.appendChild(card);

        const imgDish = document.createElement('img');
        imgDish.className = 'card-img-top';
        imgDish.setAttribute('alt', `${this.name}`);
        imgDish.src = `${this.img}`;
        card.appendChild(imgDish);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex flex-column justify-content-between';
        card.appendChild(cardBody);

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.innerText = `${this.name}`;
        cardBody.appendChild(cardTitle);

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.innerText = `${this.ingredients}`;
        cardBody.appendChild(cardText);

        const divPrice = document.createElement('div');
        divPrice.className = 'd-flex align-items-center justify-content-between';
        cardBody.appendChild(divPrice);

        const price = document.createElement('a');
        price.className = 'price';
        price.innerText = `${this.price} грн.`;
        price.setAttribute('href', '#');
        divPrice.appendChild(price);

        const addCard = document.createElement('a');
        addCard.className = 'add-cart';
        addCard.innerText = 'В корзину';
        addCard.setAttribute('href', '#');
        divPrice.appendChild(addCard);

        const linkLike = document.createElement('a');
        linkLike.setAttribute('href', '#');
        divPrice.appendChild(linkLike);

        const imgLike = document.createElement('img');
        imgLike.className = 'heart';
        imgLike.src = './img/heart-border.svg';
        imgLike.setAttribute('alt', 'like');
        imgLike.setAttribute('width', '24');
        imgLike.setAttribute('height', '24');
        linkLike.appendChild(imgLike);

        return div;
    }
}

const getData = async (url) => {

    const element = await fetch(url);
    const elementJson = await element.json();

    localStorage.setItem('menu', JSON.stringify(elementJson));
}

const addDish = (list, main) => {
    list.forEach(({productName, price, productImageUrl, ingredients}) => {   
        main.appendChild((new Dish(productName, productImageUrl, price, ingredients)).render());
    });
    
}

window.addEventListener('DOMContentLoaded', async () => {
    let dataLocal = JSON.parse(localStorage.getItem('menu'));
    const main = document.getElementById('mainList');

    if (!dataLocal) {
        await getData('./menu.json');
        dataLocal = JSON.parse(localStorage.getItem('menu'));
        
        addDish(dataLocal, main);
    } else {
        addDish(dataLocal, main);
    }
})