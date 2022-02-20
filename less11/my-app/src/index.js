import { createStore } from "redux";
import { reduser } from "./reduser";

import { operant1, operant2, saveRez, sings, clear } from "./action";
import colcule from "./metod/cacule";

const keys = document.querySelector(".keys");
const screen = document.getElementById('screen');

keys.addEventListener("click", (event) => {
    const { value } = event.target;

    if (/[0-9.-]/g.test(value)){

        // if (/[-]/g.test(value) && (/[-]/.test(store.getState().operant1))) {
        //     return
        // }
        // if (/[-]/g.test(value) && /[-]/.test(store.getState().operant2)) {
        //     return
        // }

        if (/[.]/g.test(value) && /[.]/.test(store.getState().operant1)) {
            return
        }
        if (/[.]/g.test(value) && /[.]/.test(store.getState().operant2)) {
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

        if (store.getState().sings) {
            document.querySelector("#diz").disabled = false;

            if (!store.getState().operant2 && /[-]/g.test(value)) {
                store.dispatch(operant2(store.getState().operant2, value));
                return
            }

            if (store.getState().operant2 && /[-]/g.test(value)) {
                store.dispatch(sings(value));
                return
            } 

            store.dispatch(operant2(store.getState().operant2, value));
            return
        } 
        store.dispatch(operant1(store.getState().operant1, value));

    }
    
    if (/[*/+]/.test(value)) {
        if (store.getState().operant2) {
            store.dispatch(saveRez(colcule(store.getState())));
            store.dispatch(sings(value));
            return
        } 
        store.dispatch(sings(value));
    }

    if (store.getState().operant2) {
        
    }

    if (/[=]/.test(value)) {
        store.dispatch(saveRez(colcule(store.getState())));
        document.querySelector("#diz").disabled = true;
    }

    if (/[C]/.test(value)) {
        store.dispatch(clear());

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
        screen.value = 0;
        return
    }
});

