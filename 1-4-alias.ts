{
    // Type Alias *ts의 꽃*

    type Text = string;
    const name: Text = 'paul';
    const address: Text = 'Seoul';

    type Num = number;
    const num1: Num = 1;
    const num2: Num = 2;

    type Student = {
        name: string,
        age: number
    }
    const student1: Student = {
        name: 'chasunghyeon',
        age: 25
    }

    //String Literal Types
    type Name = 'name';
    let chaName: Name = 'name';
    type JSON = 'json';
    let json: JSON = 'json';
    type Boal = true;
    // const isCat:Boal = false; (x)
    const isCat: Boal = true; //(o)
    //String Literal Types 왜 쓸까? 
}