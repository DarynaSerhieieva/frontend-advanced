import Storage from './Storage.js';

import Modal from './Modal.js';

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
        // const modal = document.getElementById('exampleModal');

        const div = document.createElement('div');
        div.className = 'col-12 col-lg-4 col-sm-6 mb-4';

        div.addEventListener('click', () => {
            Modal(this.img, this.name, this.ingredients, this.price, this.like, this.add);
            myModal = new bootstrap.Modal(document.getElementById('exampleModal'));

            
            // const priceModal = document.getElementById('priceModal');
            // const addLikeModal = document.getElementById('addLikeModal');
            // const counterNumer = document.getElementById('counterNumer');
            // const addToOrder = document.getElementById('addToOrder');

            // let counter = 1;

            // document.getElementById('imgModal').src = `${this.img}`;
            // document.getElementById('titelModal').innerText = `${this.name}`;
            // document.getElementById('textModal').innerText = `${this.ingredients}`;
            // priceModal.innerText = `${this.price}`;
            // addLikeModal.innerText = `${this.like} користувача додали в улюблене`;
            // counterNumer.innerText = counter;

            myModal.show();

            // document.getElementById('counterPlus').addEventListener('click', () => {
            //     counter++;
            //     counterNumer.innerText = counter;
            //     priceModal.innerText = `${this.price * counter} `;
            // })
            

            // document.getElementById('counterMinus').addEventListener('click', () => {
            //     if (counter > 1) {
            //         counter--;
            //         counterNumer.innerText = counter;
            //         priceModal.innerText = `${this.price * counter} `;
            //     }
            // })

            // addToOrder.addEventListener('click', (e) => {
            //     addItemToOrder(this.name, counterNumer.innerText, this.price);
            //     myModal.hide();
            // })

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

        if (!this.add) {
            imgLike.src = './img/heart-border.svg';
        } else {
            imgLike.src = './img/heart-add.svg';
        } 

        imgLike.setAttribute('alt', 'like');
        imgLike.setAttribute('width', '24');
        imgLike.setAttribute('height', '24');
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
                imgLike.src = './img/heart-add.svg';
                this.like ++;
                Storage.storeg[this.id - 1].like = this.like;
                Storage.storeg[this.id - 1].add = true;
                localStorage['menu'] = JSON.stringify(Storage.storeg);
            } else {
                this.add = false;
                imgLike.src = './img/heart-border.svg';
                this.like --;
                Storage.storeg[this.id - 1].like = this.like;
                Storage.storeg[this.id - 1].add = false;
                localStorage['menu'] = JSON.stringify(Storage.storeg);
            }
        })

        return div;
    }
}

// const addItemToOrder = (name, counter, price) => {
//     const table = document.getElementById('tableOrder');
    
//     Storage.orderList.push(new Order(name, counter, price));
//     console.log(Storage.orderList)
//     // table.prepend( (new Order(name, counter, price)).render());

// }

export default Dish;