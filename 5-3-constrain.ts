{
    interface Employee {
        pay(): void;
    }

    class FullTimeEmployee implements Employee {
        pay(): void {
            console.log('full time');
        }
        workFullTime() {

        }
    }

    class PartTimeEmployee implements Employee {
        pay(): void {
            console.log('part time');
        }
        workPartTime() {

        }
    }
    //세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 똥. pay똥.
    function pay(employee: Employee): Employee {
        employee.pay();
        return employee;
    }

    function payGeneric<T extends Employee>(employee: T): T { // 제네릭이지만 interface확장한 애들만. 제네릭 조건
        employee.pay();
        return employee;
    }

    const cha = new FullTimeEmployee();
    const bob = new PartTimeEmployee();
    const chaAfterPay = pay(cha); //fulltime 인지 part time 인지 모르게 됨. ->제네릭
    const bobAfterPay = pay(bob);

    const obj = {
        name: 'cha',
        age: 20,
    }
    const obj2 = {
        animal: 'dog',
    }

    function getValue<T, K extends keyof T>(obj: T, key: K): T[K] { // key의 타입을 좀 더 명확히 선언. return 값도 명확히.
        return obj[key];
    }
    console.log(getValue(obj, 'name')); //cha
    console.log(getValue(obj, 'age')); //20
    console.log(getValue(obj2, 'animal')); //dog

}