{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT: number = 7;//변하지 않는 값. 클래스 자체의 특성. class level ,클래스와 연결 .
        coffeeBeans: number = 0; // instance (object) level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker { //class level , 클래스를 반환. 멤버변수안쓰니 static.
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffe(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false
            }
        }
    }
    const maker = new CoffeeMaker(32);
    console.log(maker);
    const maker2 = CoffeeMaker.makeMachine(32);
    console.log(maker2)
}