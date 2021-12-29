import addToCard from './addToCard.js';

const Modal = (img, name, ingredients, price, like, add) => {
    let counter = 1;
    const main = document.querySelector('main');
    
    
    const divModal = document.createElement('div');
    divModal.className = 'modal fade';
    divModal.id = 'exampleModal';
    divModal.setAttribute('tabindex', '-1');
    divModal.setAttribute('aria-labelledby', 'exampleModalLabel');
    divModal.setAttribute('aria-hidden', 'true');
    main.appendChild(divModal);

    const dialogModal = document.createElement('div');
    dialogModal.className = 'modal-dialog';
    divModal.appendChild(dialogModal);

    const contentModal = document.createElement('div');
    contentModal.className = 'modal-content container p-4';
    dialogModal.appendChild(contentModal);

    const row = document.createElement('div');
    row.className = 'row';
    contentModal.appendChild(row);

    const divImg = document.createElement('div');
    divImg.className = 'col-5 mx-5';
    row.appendChild(divImg);

    const imgModal = document.createElement('img');
    imgModal.className = 'img-modal';
    imgModal.src  = img;
    imgModal.setAttribute('alt', name);
    divImg.appendChild(imgModal);

    const bodyModal = document.createElement('div');
    bodyModal.className = 'modal-body col-5 me-5';
    row.appendChild(bodyModal);

    const titelModal = document.createElement('h5');
    titelModal.className = 'modal-title';
    titelModal.innerText = name;
    bodyModal.appendChild(titelModal);

    const textModal = document.createElement('p');
    textModal.className = 'modal-text pt-3';
    textModal.innerText = ingredients;
    bodyModal.appendChild(textModal);

    const footerModal = document.createElement('div');
    footerModal.className = 'modal-footer border-0 justify-content-around align-items-end';
    row.appendChild(footerModal);

    const groupBtn = document.createElement('div');
    footerModal.appendChild(groupBtn);

    const span = document.createElement('span');
    span.className = 'modal-like-text d-flex py-3';
    span.innerText = 'Додати в улюблене?';
    groupBtn.appendChild(span);

    const addLike = document.createElement('button');
    addLike.className = 'd-flex modal-btn-like';
    groupBtn.appendChild(addLike);

    const imgBtn = document.createElement('img');
    imgBtn.setAttribute('alt', 'like');
    imgBtn.setAttribute('width', '40');
    imgBtn.setAttribute('height', '34');
    addLike.appendChild(imgBtn);

    const spanText = document.createElement('span');
    spanText.className = 'modal-like-text';
    addLike.appendChild(spanText);
    
    if (!add) {
        imgBtn.src = './img/like.svg';
        spanText.innerText =`${like} користувача додали в улюблене`;
        span.innerText = 'Додати в улюблене?';
    } else {
        imgBtn.src = './img/heart-add.svg';
        spanText.innerText =`${like} користувача додали в улюблене`;
        span.innerText = 'Ви додали цю страву до улюбленого';
    } 

    const divCounter = document.createElement('div');
    footerModal.appendChild(divCounter);

    const plusBtn = document.createElement('button');
    plusBtn.setAttribute('type', 'button');
    plusBtn.className = 'rounded-circle counter-circle circle-btn border-0';
    plusBtn.innerText = '+';
    divCounter.appendChild(plusBtn);

    const spanCounter = document.createElement('span');
    spanCounter.className = 'counter';
    spanCounter.innerText = counter;
    divCounter.appendChild(spanCounter);

    const minusBtn = document.createElement('button');
    minusBtn.setAttribute('type', 'button');
    minusBtn.className = 'rounded-circle counter-circle circle-btn border-0';
    minusBtn.innerText = '-';
    divCounter.appendChild(minusBtn);

    const addToOrder = document.createElement('button');
    addToOrder.setAttribute('type', 'button');
    addToOrder.setAttribute('data-bs-dismiss', 'modal');
    addToOrder.className = 'btn__header modal-order d-flex align-items-center justify-content-between';
    footerModal.appendChild(addToOrder);

    const spanAdd = document.createElement('span');
    spanAdd.innerText = 'Додати';
    addToOrder.appendChild(spanAdd);

    const spanPrice = document.createElement('span');
    spanPrice.innerText = `${price * counter} ₴`;
    addToOrder.appendChild(spanPrice);

    plusBtn.addEventListener('click', () => {
        counter++;
        spanCounter.innerText = counter;
        spanPrice.innerText = `${price * counter} ₴`;
    })

    minusBtn.addEventListener('click', () => {
        if (counter > 1) {
            counter--;
            spanCounter.innerText = counter;
            spanPrice.innerText = `${price * counter} ₴`;
        }
    })

    addToOrder.addEventListener('click', (e) => {
        addToCard(name, counter, price, divModal);
        
    })
}


export default Modal;

