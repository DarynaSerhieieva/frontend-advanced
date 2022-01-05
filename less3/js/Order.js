import Buy from './Buy.js';
import Storage from './Storage.js';

class Order {
    constructor(id, name, counter, price) {
        this.id = id,
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

        buttonPlus.addEventListener('click', () => {

            this.counter ++;
            spanContent.innerText = `${this.counter}`;
            const element = Storage.orderList.find(item => item.id == this.id);
            element.counter = this.counter;
            tdPrice.innerText = `${this.price * this.counter} ₴`;
            localStorage['order'] = JSON.stringify(Storage.orderList);

            Buy();
        })

        const spanContent = document.createElement('span');
        spanContent.className = 'px-2';
        spanContent.innerText = `${this.counter}`;
        tdCounter.appendChild(spanContent);

        const buttonMinus = document.createElement('button');
        buttonMinus.className = 'rounded-circle circle-btn border-0';
        buttonMinus.innerText = '-';
        buttonMinus.setAttribute('type', 'button');
        tdCounter.appendChild(buttonMinus);

        buttonMinus.addEventListener('click', () => {

            if (this.counter > 1) {

                this.counter --;
                spanContent.innerText = `${this.counter}`;
                const element = Storage.orderList.find(item => item.id == this.id);
                element.counter = this.counter;
                tdPrice.innerText = `${this.price * this.counter} ₴`;
            } else {

                tr.remove();
                Storage.orderList = Storage.orderList.filter(item => item.id != this.id);
            }
            
            localStorage['order'] = JSON.stringify(Storage.orderList);

            Buy();
        })

        const tdPrice = document.createElement('td');
        tdPrice.className = 'align-top text-table border-0';
        tdPrice.innerText = `${this.price * this.counter} ₴`;
        tr.appendChild(tdPrice);

        return tr;
    }
}

export default Order;