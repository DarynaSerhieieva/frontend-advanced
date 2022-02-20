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

export  {operant1, operant2, sings, saveRez, clear};
