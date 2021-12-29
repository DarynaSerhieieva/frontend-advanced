import Dish from './Dish.js';

const addDish = (list, main) => {
    list.forEach(({productName, price, productImageUrl, ingredients, like, id, add}) => {   
        main.appendChild((new Dish(productName, productImageUrl, price, ingredients, like, id, add)).render());
    });
    
}

export default addDish;
