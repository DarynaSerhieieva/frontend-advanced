const reduser = (state = {}, action) => {
    switch (action.type) {
        case "OPERANT1": return {...state, operant1: action.payload};
        case "SINGS": return {...state, sings: action.payload};
        case "OPERANT2": return {...state, operant2: action.payload};
        case "SAVEREZ": return {...state, operant1: String(action.payload), operant2: "", sings: ""};
        case "ClEAR": return {...state, operant1: "", operant2: "", sings: ""};
        default: return state;
    }
}

export {reduser};