let date = {};
let valid = true;

class FormData {
    constructor(name, date) {
        this[name] = date
    }
};

const setDate = (name, value) => {
    const objDate = new FormData(name, value);
    date = Object.assign(objDate, date);
};

const removeClassError = (element) => {
    element.classList.remove('error');
};

const addClassError = (element) => {
    element.classList.add('error');
    valid = false;
};

window.addEventListener('DOMContentLoaded', () => {

    const name = ['type', 'ferstName', 'lastName', 'email', 'tel', 'additional', 'country', 'town', 'index', 'delivery', 'payment', 'more', 'privateInformation'];
    
    const form = document.querySelector('.form');
    const buttonSubmit = document.querySelector('.form__submit');
    
    buttonSubmit.addEventListener('click', e => {

        e.preventDefault();
        date = {};
        valid = true;

        name.forEach( element => {
    
            if (element === 'type' || element === 'delivery' || element === 'payment') {

                setDate(element, form[element].value);

            } else if (element === 'ferstName' || element === 'lastName' ||  element === 'country' || element === 'town') {

                if (form[element].value.match(/^(([a-zA-Z' -]{1,20})|([а-яА-ЯЁёІіЇїҐґЄє' -]{1,20}))$/u)) {
                    setDate(element, form[element].value);
                    removeClassError(form[element]);

                } else {
                    addClassError(form[element]);
                }   

            } else if (element === 'email') {

                if (form[element].value.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/g)) {
                    setDate(element, form[element].value);
                    removeClassError(form[element]);
                } else {
                    addClassError(form[element]);
                }

            } else if (element === 'tel' || (element === 'additional' && form[element].value >= 1)) {

                const number = form[element].value.replace(/[\s\-]/g, '');

                if ( number.match(/^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/g) ) {
                    setDate(element, number);
                    removeClassError(form[element]);
                } else {
                    addClassError(form[element]);
                }

            } else if (element === 'index') {

                if (form[element].value.match(/^\d{5}$/g)) {
                    setDate(element, form[element].value);
                    removeClassError(form[element]);
                } else {
                    addClassError(form[element]);
                }

            } else if (element === 'more') {

                if (form[element].value.length >= 2) {
                    setDate(element, form[element].value);
                }

            } else if (element === 'privateInformation') {

                if (form[element].checked) {
                    setDate(element, form[element].checked);
                    form[element].nextSibling.nextElementSibling.classList.remove('checkboxError');
                } else {
                    form[element].nextSibling.nextElementSibling.classList.add('checkboxError');
                    valid = false;
                }
            }
        })

        if (valid) {
            console.log('Validation is ok', date);
            form.reset();

        } else {
            console.log('Validation is not ok');
        }
    })
})
