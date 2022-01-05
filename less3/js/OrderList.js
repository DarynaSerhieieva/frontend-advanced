import Order from './Order.js';
import Storage from './Storage.js';

const OrderList = () => {
    const table = document.getElementById('tableOrder');
    
    table.innerHTML = `
        <tr>
            <td colspan="2" class="border-0">Доставка</td>
            <td class="border-0">50 ₴ </td>
        </tr>
    `;

    Storage.orderList.forEach( ({id, name, counter, price}) => {
        table.prepend((new Order(id, name, counter, price)).render())
    })
}

export default OrderList;
