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


    //get set 예습
    class User {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }
        private internalAge = 0;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number) {
            if (num < 0) {
                throw new Error('value for age should be positive number');
            }
            this.internalAge = num;
        }

        constructor(private firstName: string, public lastName: string) {//counstructor argument에 선언은 내부변수로 선언하는것과 같다.this.firstName
        }
    }
    const user = new User('steve', 'jobs');
    // console.log(user.fullName); //steve jobs
    // user.firstName = "cha"
    // console.log(user.fullName);//steve jobs 변화가 되지 않기때문에 이럴때 get을 사용.

    user.age = 6; //set
    console.log(user.age)//get
}