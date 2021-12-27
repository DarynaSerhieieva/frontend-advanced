let orderList = [];
let storeg = [];

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
        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        // const modal = document.getElementById('exampleModal');

        const div = document.createElement('div');
        div.className = 'col-12 col-lg-4 col-sm-6 mb-4';

        div.addEventListener('click', () => {
            const priceModal = document.getElementById('priceModal');
            const addLikeModal = document.getElementById('addLikeModal');
            const counterNumer = document.getElementById('counterNumer');
            const addToOrder = document.getElementById('addToOrder');

            let counter = 1;

            document.getElementById('imgModal').src = `${this.img}`;
            document.getElementById('titelModal').innerText = `${this.name}`;
            document.getElementById('textModal').innerText = `${this.ingredients}`;
            priceModal.innerText = `${this.price}`;
            addLikeModal.innerText = `${this.like} користувача додали в улюблене`;
            counterNumer.innerText = counter;

            myModal.show();

            document.getElementById('counterPlus').addEventListener('click', () => {
                counter++;
                counterNumer.innerText = counter;
                priceModal.innerText = `${this.price * counter} `;
            })
            

            document.getElementById('counterMinus').addEventListener('click', () => {
                if (counter > 1) {
                    counter--;
                    counterNumer.innerText = counter;
                    priceModal.innerText = `${this.price * counter} `;
                }
            })

            addToOrder.addEventListener('click', (e) => {
                addItemToOrder(this.name, counterNumer.innerText, this.price);
                myModal.hide();
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
                storeg[this.id - 1].like = this.like;
                storeg[this.id - 1].add = true;
                localStorage['menu'] = JSON.stringify(storeg);
            } else {
                this.add = false;
                imgLike.src = './img/heart-border.svg';
                this.like --;
                storeg[this.id - 1].like = this.like;
                storeg[this.id - 1].add = false;
                localStorage['menu'] = JSON.stringify(storeg);
            }
        })

        return div;
    }
}

class Order {
    constructor(name, counter, price) {
        this.name = name,
        this.counter = +counter,
        this.price = price
    }

    render = () => {
        const tr = document.createElement('tr');
        
        const tdName = document.createElement('td');
        tdName.className = 'border-0';
        tr.appendChild(tdName);

        const hName = document.createElement('h5');
        hName.className = 'text-table';
        hName.innerText = `${this.name}`;
        tdName.appendChild(hName);

        const tdCounter =document.createElement('td');
        tdCounter.className = 'align-top border-0';
        tr.appendChild(tdCounter);

        const buttonPlus = document.createElement('button');
        buttonPlus.className ='rounded-circle circle-btn border-0';
        buttonPlus.setAttribute('type', 'button');
        buttonPlus.innerText = '+';
        tdCounter.appendChild(buttonPlus);

        const spanContent = document.createElement('span');
        spanContent.className = 'px-2';
        spanContent.innerText = `${this.counter}`;
        tdCounter.appendChild(spanContent);

        const buttonMinus = document.createElement('button');
        buttonMinus.className = 'rounded-circle circle-btn border-0';
        buttonMinus.innerText = '-';
        buttonMinus.setAttribute('type', 'button');
        tdCounter.appendChild(buttonMinus);

        const tdPrice = document.createElement('td');
        tdPrice.className = 'align-top text-table border-0';
        tdPrice.innerText = `${this.price * this.counter} ₴`;
        tr.appendChild(tdPrice);

        return tr;
    }
}

const addItemToOrder = (name, counter, price) => {
    const table = document.getElementById('tableOrder');
    
    orderList.push(new Order(name, counter, price));
    console.log(orderList)
    // table.prepend( (new Order(name, counter, price)).render());

}

const getData = async (url) => {

    const element = await fetch(url);
    const elementJson = await element.json();

    localStorage.setItem('menu', JSON.stringify(elementJson));
}

const addDish = (list, main) => {
    list.forEach(({productName, price, productImageUrl, ingredients, like, id, add}) => {   
        main.appendChild((new Dish(productName, productImageUrl, price, ingredients, like, id, add)).render());
    });
    
}

window.addEventListener('DOMContentLoaded', async () => {
    
    const main = document.getElementById('mainList');
    

    storeg = JSON.parse(localStorage.getItem('menu'));

    if (!storeg) {
        await getData('./menu.json');
        storeg = JSON.parse(localStorage.getItem('menu'));
        
        addDish(storeg, main);
    } else {
        addDish(storeg, main);
    }
})