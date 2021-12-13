{
    const obj = {
        name: 'cha'
    }
    obj.name;
    obj['name'];

    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    }

    type Name = Animal['name'] //string type
    const text: Name = 'string type';

    type Gender = Animal['gender']; // 'male'|'female'

    type Keys = keyof Animal; //'name' | 'age'| 'gender'
    const keys: Keys = 'age';

    type Person = {
        name: string;
        gender: Animal['gender'];
    }

    const person: Person = {
        name: 'cha',
        gender: 'male'
    }
}