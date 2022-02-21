const reduser = (state = {}, action) => {
    switch (action.type) {
        case "OPERANT1": return {...state, operant1: action.payload};
        case "SINGS": return {...state, sings: action.payload};
        case "OPERANT2": return {...state, operant2: action.payload};
        case "SAVEREZ": return {...state, operant1: action.payload, operant2: "", sings: ""};
        case "ClEAR": return {...state, operant1: '', operant2: "", sings: ""};
        case "MEMORYMINUS": return {...state, memory: action.payload};
        case "MEMORYPLUS": return {...state, memory: action.payload};
        case "MEMORYRES": return {...state, click: action.payload};
        case "MEMORYCLEAR": return {...state, memory: '', click: ''}
        case "MEMORYNUM": return {...state, clickM: action.payload} 

        default: return state;
    }
}

export {reduser};