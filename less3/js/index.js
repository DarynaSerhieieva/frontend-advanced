import Storage from './Storage.js';
import addDish from './addDish.js';
import getData from './getData.js';

window.addEventListener('DOMContentLoaded', async () => {
    
    const main = document.getElementById('mainList');    

    Storage.storeg = JSON.parse(localStorage.getItem('menu'));

    if (!Storage.storeg) {
        await getData('./menu.json');
        Storage.storeg = JSON.parse(localStorage.getItem('menu'));
        
        addDish(Storage.storeg, main);
    } else {
        addDish(Storage.storeg, main);
    }
})