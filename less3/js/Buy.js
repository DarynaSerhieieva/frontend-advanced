import Storage from './Storage.js';

const Buy = () => {
    const orderPrice = document.getElementById('orderPrice');
    let priceForEverything = 50;

    if (Storage.orderList.length < 1) {
        orderPrice.innerText = `50 ₴`;
    } else {
        Storage.orderList.forEach(item => {
            const price = item.price * item.counter;
            priceForEverything += price;
        })
        orderPrice.innerText = `${priceForEverything} ₴`;
    }
}

export default Buy;