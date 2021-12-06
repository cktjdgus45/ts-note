{
    //typescript
    function add(n1: number, n2: number): number {
        return n1 + n2;
    }

    //Typescript
    function fetchNum(id: string): Promise<number> {
        //...code
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }

    // js->ts
    // Optional parameter
    function printName(firstName: string, lastName?: string) {
        console.log(firstName)
        console.log(lastName)
    }
    printName('cha', 'sunghyun');
    printName('cha');
    printName('cha', undefined);

    //Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();

    //Rest parameter
    function addMulti(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }
    console.log(addMulti(1, 2));
    console.log(addMulti(1, 2, 3, 4));
    console.log(addMulti(1, 2, 3, 4, 5, 6));
}