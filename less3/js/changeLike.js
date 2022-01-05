import Storage from "./Storage.js";

const changeLike = (add, id, like) => {

    Storage.storeg[id].like = like;
    Storage.storeg[id].add = add;

    localStorage['menu'] = JSON.stringify(Storage.storeg);
}

export default changeLike;