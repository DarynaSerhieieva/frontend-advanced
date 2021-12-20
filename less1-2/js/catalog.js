window.addEventListener('DOMContentLoaded', () => {

    const cartAll = document.querySelectorAll('.card-body');
    const myModal = new bootstrap.Modal(document.getElementById('myModal'));

    const platform = navigator.platform;

    if (platform.includes('Linux')) {
        addColor(cartAll, 'green');
    }
    if (platform.includes('win')) {
        addColor(cartAll, 'blue');
    }
    if (platform.includes('mac')) {
        addColor(cartAll, 'rosybrown');
    }

    if(navigator.getBattery){
        navigator.getBattery().then(function(b){
            if (b.level * 100 < 95) {
                myModal.show();
            }
        })
    }

    console.log(window.navigator.getBattery())

})

const addColor = (items, color) => {
    items.forEach(item => {
        item.style.backgroundColor = color;
    });
};