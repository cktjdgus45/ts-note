{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    //public :기본값 , 공개
    //private  : 비밀 , 외부에서 접근불가 , 자식도 불가.
    //protected : 상속에서 외부는 접근불가 , 자식클래스만 가능.
    //캡슐화 .

    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;//변하지 않는 값. 클래스 자체의 특성. class level ,클래스와 연결 .
        private coffeeBeans: number = 0; // instance (object) level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker { //class level , 클래스를 반환. 멤버변수안쓰니 static.
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
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
    const maker2 = CoffeeMaker.makeMachine(32);
    console.log(maker2)
}