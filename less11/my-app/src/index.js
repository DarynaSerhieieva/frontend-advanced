import { createStore } from "redux";
import { reduser } from "./reduser";

import { operant1, operant2, saveRez, sings, clear, mRes, mMinus, mPlus, mClear, mNum } from "./action";
import colcule from "./metod/cacule";

const keys = document.querySelector(".keys");
const screen = document.getElementById('screen');

keys.addEventListener("click", (event) => {
    const { value } = event.target;

    if (/^[0-9.-]/g.test(value)){
        store.dispatch(mRes(0));

        if (!store.getState().sings && store.getState().clickM === 1 ) {
            store.dispatch(operant1('', value));
            store.dispatch(mNum(0))
            return
        }

        if (store.getState().operant1 && store.getState().operant2 && /[-]/g.test(value)) {
            store.dispatch(saveRez(colcule(store.getState())));
            store.dispatch(sings(value));
            return
        } 

        if (store.getState().sings && store.getState().operant1 && !/[-]/g.test(value)) {

            if (/[.]/g.test(value) && (/[.]/.test(store.getState().operant2) || !store.getState().operant2)) {
                return
            }
            if (store.getState().clickM === 1 ) {
                store.dispatch(operant2('', value));
                store.dispatch(mNum(0))
                return
            }

            document.querySelector("#diz").disabled = false;
            store.dispatch(operant2(store.getState().operant2, value));
            return
        }

        if ( /[.]/g.test(value) && (/[.]/.test(store.getState().operant1) || !store.getState().operant1)) {
            return
        }

        if (!store.getState().operant1 && /[-]/g.test(value)) {
            store.dispatch(operant1(store.getState().operant1, value));
            return
        }

        if (store.getState().operant1 && /[-]/g.test(value)) {
            store.dispatch(sings(value));
            return
        }

        store.dispatch(operant1(store.getState().operant1, value));
    }

    if (/(mrc)/g.test(value)) {
        if (store.getState().click === 1) {
            store.dispatch(mClear());
            return
        }
        store.dispatch(mRes());
        screen.value = store.getState().memory || store.getState().operant1 || '';
        return
    }

    if (/(m-)/g.test(value) ) {
        store.dispatch(mMinus(store.getState().memory, screen.value));
        store.dispatch(mNum())
        return
    }

    if (/(m+)/g.test(value) ) {
        store.dispatch(mPlus(store.getState().memory, screen.value));
        store.dispatch(mNum())
        return
    }
    
    if (/[*/+]/.test(value) && /^(-?[0-9]?.)\d{1}/g.test(store.getState().operant1)) {
        store.dispatch(mRes(0));

        if (store.getState().operant2) {
            store.dispatch(saveRez(colcule(store.getState())));
            store.dispatch(sings(value));
            return
        } 
        store.dispatch(sings(value));
    }

    if (/[=]/.test(value)) {
        store.dispatch(saveRez(colcule(store.getState())));
        store.dispatch(mNum(1))
        document.querySelector("#diz").disabled = true;
    }

    if (/[C]/.test(value)) {
        store.dispatch(clear());
        store.dispatch(mNum(0))

    }
})

const store = createStore(reduser);

store.subscribe(() => {
    console.log(store.getState())
    if (store.getState().operant1 && !store.getState().operant2){
        screen.value = store.getState().operant1;
        return
    }

    if (store.getState().operant1 && store.getState().operant2){
        screen.value = store.getState().operant2;
        return
    }
    if (!store.getState().operant1 && !store.getState().operant2){
        screen.value = '';
        return
    }
});

