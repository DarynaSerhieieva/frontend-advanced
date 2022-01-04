import Order from "./Order.js";
import OrderList from "./OrderList.js";
import Storage from "./Storage.js";

const addToCard = (name, counter, price, id) => {

    if (Storage.orderList.length < 1) {

        Storage.orderList.push( new Order(id, name, counter, price));
       
    } else {
        Storage.orderList.forEach(element => {
            if (element.id == id) {
                element.counter += counter;
            } 
        })
        Storage.orderList.push( new Order(id, name, counter, price));
        
    }

    localStorage.setItem('order', JSON.stringify(Storage.orderList));
    OrderList();

}

export default addToCard;