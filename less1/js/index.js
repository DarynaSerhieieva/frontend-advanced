
window.addEventListener('DOMContentLoaded', e => {

    const name = ['ferstName', 'lastName', 'email', 'tel', 'additional', 'country', 'town', 'index', 'privateInformation'];
    
    const form = document.querySelector('.form');
    const buttonSubmit = document.querySelector('.form__submit');
    
    buttonSubmit.addEventListener('click', e => {
        e.preventDefault();
        name.forEach( element => {
            console.log(form[element])
        })
    })
})
const regex = ["/^(([a-zA-Z' -]{1,20})|([а-яА-ЯЁёІіЇїҐґЄє' -]{1,20}))$/u", "/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/g"]

// tel vali
// function checkNumber(AStr) {
//     AStr = AStr.replace(/[\s\-]/g, '');
//     return AStr.match(/^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/) != null;
//   }
  
//   function showCheck(AStr) {
//     console.log(checkNumber(AStr));
//   }