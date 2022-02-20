const colcule = ({operant1, operant2, sings}) => {
    switch (sings) {
        case "+": return +operant1 + +operant2;
        case "-": return +operant1 - +operant2;
        case "*": return +operant1 * +operant2;
        case "/": return +operant1 / +operant2;
        default: throw new Error("no sing")
    }
}

export default colcule;