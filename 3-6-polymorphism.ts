{
    //다형성 의 가장 큰 장점 . 공통된 API호출.
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean() {
            console.log('cleaning the machine');
        }

        private grindBeans(shots: number) {
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans');
            }
            console.log(`grinding beans for ${shots}`);
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }
        private preheat() {
            console.log('heating up ...');
        }
        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots}shots...`);
            return {
                shots,
                hasMilk: false
            }
        }
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class CaffeLatteMachin extends CoffeeMachine { //상속 extends
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans);//자식에서 생성자를 만들땐 부모생성자를 불러와야함 .super() , 부모생성자가 받는 인자값도 받와아야함 ,beans.
        }
        private steamMilk(): void {
            console.log('Steaming some milk...')
        }
        makeCoffee(shots: number): CoffeeCup { //부모에게 물러받은 함수 override 가능.(아예새로운 것으로)
            const coffee = super.makeCoffee(shots); //super은 부모클래스의 함수를 바로 불러옴. 
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(coffeebeans: number, private sugar: number) {
            super(coffeebeans);
        }
        private pourSugar(): void {
            console.log(`pour ${this.sugar} sugar`)
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.pourSugar();
            return {
                ...coffee,
                hasMilk: false,
                hasSugar: true
            }
        }
    }

    // const machine = new CoffeeMachine(32);
    // const latteMachine = new CaffeLatteMachin(23, 'SSSS');
    const sweetMachine = new SweetCoffeeMaker(23, 15);
    // const coffee = latteMachine.makeCoffee(1);
    const sweetCoffee = sweetMachine.makeCoffee(2);
    console.log(sweetCoffee)
}