{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    //추상화 : maker. 했을때 커피만들기위해서 무엇을먼저해야하고 뭘해야하지? 라는 고민이 생긴다.
    //이런것을 해결하기 위해 간단한 인터페이스 구현을 해주는 것이 추상화 이다.
    //접근제어자 , 캡슐화를 통해서 추상화를 할 수도 있고 , 인터페이스(interface)를 통해서도 추상화를 할 수 있다.

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;//변하지 않는 값. 클래스 자체의 특성. class level ,클래스와 연결 .
        private coffeeBeans: number = 0; // instance (object) level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine { //class level , 클래스를 반환. 멤버변수안쓰니 static.
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
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
            // if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
            //     throw new Error('Not enough coffee beans');
            // }
            // this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
            // return {
            //     shots,
            //     hasMilk: false
            // }
        }
    }
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    maker.fillCoffeeBeans(23);
    maker.makeCoffee(2);

    const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
    // maker2.fillCoffeeBeans(23); 오류 발생 , 실행불가 , 이유는 타입이 인터페이스 타입이고 인터페이스는 규정대로 써져있는 함수만 사용해야 함.
    maker2.makeCoffee(2);

}