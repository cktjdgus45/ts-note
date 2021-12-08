{
    type Calculation = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

    const calculate = (Calculation: Calculation, n1: number, n2: number): number => {
        switch (Calculation) {
            case 'add':
                return n1 + n2;
            case 'substract':
                return n1 - n2;
            case 'multiply':
                return n1 * n2;
            case 'divide':
                return n1 / n2;
            case 'remainder':
                return n1 % n2;
            default:
                throw Error('unknown Caculation')
        }
    }

    console.log(calculate('add', 1, 3));
    console.log(calculate('substract', 3, 1));
    console.log(calculate('multiply', 4, 2));
    console.log(calculate('divide', 4, 2));
    console.log(calculate('remainder', 5, 2));
}

