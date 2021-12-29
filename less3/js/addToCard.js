import Order from './Order.js';
import Storage from './Storage.js';

const addToCard = (name, counter, price, div) => {
    const table = document.getElementById('tableOrder');
    
    // Storage.orderList.push(new Order(name, counter, price));
    // console.log(Storage.orderList)
    if (div) {
       div.remove(); 
    }
    
    table.prepend( (new Order(name, counter, price)).render());

}

export default addToCard;