{
    //Javascript - Proto Type

    const x = {};
    const y = {};
    console.log(x)
    console.log(y)
    console.log(x.__proto__ == y.__proto__)

    const array = []
    console.log(array) // [] < Prototype Array < Prototype Object

    function CoffeeMachine(beans) {
        this.beans = beans;
        // this.makeCoffee = shots => {
        //     console.log('making coffee...')
        // }
    }
    CoffeeMachine.prototype.makeCoffee = shots => {
        console.log('making coffee ...')
    }

    const machine1 = new CoffeeMachine(10); // machine < CoffeeMachine < Object
    const machine2 = new CoffeeMachine(20);

    console.log(machine1, machine2)

    function LatteMachine(milk) {
        this.milk = milk;
    }

    LatteMachine.prototype = Object.create(CoffeeMachine.prototype); // prototype을 사용한 상속.

    const latteMachine = new LatteMachine(123);
    console.log(latteMachine); // latteMachine < LatteMachine(constructor , prototype) < Object (prototype)
    latteMachine.makeCoffee(); // CoffeMachine의 기능.


}