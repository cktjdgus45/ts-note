{
    //Javascript = THIS

    console.log(this) //브라우저 환경에선 window가 this.

    class Counter {
        count = 0;
        increase = function () { // arrow function 으로 바꾸면 this가 선언될 당시 스코프의 주체를 유지한다(기억한다.) bind() 대체용.
            console.log(this)
        }
    }

    const counter = new Counter();
    counter.increase(); // class Counter 가 this.

    // const caller = counter.increase;
    // caller(); //this의 포인터가 const변수 caller에 향했지만 const ,let으로 선언한 것은 window에 할당되지 않아서 undefined가 뜨게됨. 해결할려면 bind함수써야함.

    const caller = counter.increase.bind(counter);
    caller();


    class Bob { };
    const bob = new Bob();
    bob.run = counter.increase;
    bob.run(); // class Bob이 불러서 this는 Bob.
}