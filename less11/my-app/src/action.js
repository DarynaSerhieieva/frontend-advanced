const operant1 = (value1 = "", value2) => {
    return {
        type: "OPERANT1",
        payload: value1 + value2,
    }
}

const operant2 = (value1 = "", value2) => {
    return {
        type: "OPERANT2",
        payload: value1 + value2,
    }
}

const sings = (value) => {
    return {
        type: "SINGS",
        payload: value,
    }
}

const saveRez = (value) => {
    return {
        type: "SAVEREZ",
        payload: value,
    }
}

const clear = () => {
    return {
        type: "ClEAR"
    }
}

const mMinus = (value1 = '', value2 = '') => {
    return {
        type: "MEMORYMINUS",
        payload: +value1 - +value2
    }
}

const mPlus = (value1 = '', value2 = '') => {
    return {
        type: "MEMORYPLUS",
        payload: +value1 + +value2
    }
}

const mRes = (click = 1) => {
    return {
        type: "MEMORYRES",
        payload: click
    }
}

const mClear = () => {
    return {
        type: "MEMORYCLEAR"
    }
}

const mNum = (click = 1) => {
    return {
        type: "MEMORYNUM",
        payload: click
    }
}

export  {operant1, operant2, sings, saveRez, clear, mMinus, mPlus, mRes, mClear, mNum};
