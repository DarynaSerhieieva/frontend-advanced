import Storage from "./Storage.js";

const changeLike = (add, id, like) => {
    const imgLike = document.getElementById('like');

    Storage.storeg[id].like = like;
    Storage.storeg[id].add = add;

    localStorage['menu'] = JSON.stringify(Storage.storeg);
    
    if (add) {
        imgLike.src = './img/heart-add.svg';
    } else {
        imgLike.src = './img/heart-border.svg';
    }
}

export default changeLike;