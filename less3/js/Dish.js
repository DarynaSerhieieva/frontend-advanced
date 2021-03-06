import Storage from './Storage.js';
import OrderList from './OrderList.js';
import Modal from './Modal.js';
import changeLike from './changeLike.js';
import addToCard from './addToCard.js';
import Buy from './Buy.js';

class Dish {
    constructor(name, img, price, ingredients, like, id, add) {
        this.name = name,
        this.img = img,
        this.price = price,
        this.ingredients = ingredients,
        this.like = like ?? 0,
        this.add = add,
        this.id = id
    }

    render = () => {
        let myModal = '';
        const div = document.createElement('div');

        div.className = 'col-12 col-lg-4 col-sm-6 mb-4';

        div.addEventListener('click', () => {

            Modal(this.img, this.name, this.ingredients, this.price, this.like, this.add, this.id);

            const modal = document.getElementById('exampleModal');

            myModal = new bootstrap.Modal(modal);
            myModal.show();

            modal.addEventListener('hidden.bs.modal', function (event) {
                modal.remove();
            })
        })

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
        price.innerText = `${this.price} ??????.`;
        price.setAttribute('href', '#');
        divPrice.appendChild(price);

        const addCard = document.createElement('a');
        addCard.className = 'add-cart';
        addCard.innerText = '?? ??????????????';
        addCard.setAttribute('href', '#');
        divPrice.appendChild(addCard);

        addCard.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCard(this.name, 1, this.price, this.id);
            Buy();
        })

        const linkLike = document.createElement('a');
        linkLike.setAttribute('href', '#');
        divPrice.appendChild(linkLike);

        const imgLike = document.createElement('img');
        imgLike.className = 'heart';

        if (!this.add) {
            imgLike.src = './img/heart-border.svg';
        } else {
            imgLike.src = './img/heart-add.svg';
        } 

        imgLike.setAttribute('alt', 'like');
        imgLike.setAttribute('width', '24');
        imgLike.setAttribute('height', '24');
        imgLike.id = 'like';
        linkLike.appendChild(imgLike);

        imgLike.addEventListener('mouseover', () => {
            imgLike.src = './img/like.svg';
        })

        imgLike.addEventListener('mouseout', () => {
            if (!this.add) {
                imgLike.src = './img/heart-border.svg';
            } else {
                imgLike.src = './img/heart-add.svg';
            }
        })

        imgLike.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!this.add) {
                this.add = true;
                this.like ++;
                imgLike.src = './img/heart-add.svg';
            } else {
                this.add = false;
                this.like --;
                imgLike.src = './img/heart-border.svg';
            }

            changeLike(this.add, (this.id - 1), this.like);
        })

        return div;
    }
}

export default Dish;
