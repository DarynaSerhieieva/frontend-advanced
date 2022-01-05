import Storage from './Storage.js';
import addDish from './addDish.js';
import getData from './getData.js';
import OrderList from './OrderList.js';
import Buy from './Buy.js';

window.addEventListener('DOMContentLoaded', async () => {
    
    const main = document.getElementById('mainList');    
    const table = document.getElementById('tableOrder');
    const orderBtn = document.getElementById('orderBtn');

    Storage.storeg = JSON.parse(localStorage.getItem('menu'));

    if (!Storage.storeg) {
        await getData('./menu.json');
        Storage.storeg = JSON.parse(localStorage.getItem('menu'));
    }

    addDish(Storage.storeg, main);

    Storage.orderList = JSON.parse(localStorage.getItem('order')) || [];

    if (Storage.orderList.length < 1) {
        table.innerHTML = `
            <tr>
                <td colspan="3" class="border-0">На жаль кошик порожній</td>
            </tr>
            <tr>
                <td colspan="2" class="border-0">Доставка</td>
                <td class="border-0">50 ₴ </td>
            </tr>
        `;
    } else {
        OrderList(table);
    }

    Buy();

    orderBtn.addEventListener('click', () => {
        console.log(Storage.orderList)
        Storage.orderList = [];
        localStorage.removeItem('order');
        table.innerHTML = `
            <tr>
                <td colspan="3" class="border-0">Замовлення відправлено успішно! Дякую!</td>
            </tr>
            <tr>
                <td colspan="2" class="border-0">Доставка</td>
                <td class="border-0">50 ₴ </td>
            </tr>
        `;
    })
})