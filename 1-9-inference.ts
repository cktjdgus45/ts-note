{
    //Type inference //꼬박꼬박 타입을 안적어줘도 알아서 추론해서 타입을 정해주지만 타입을 명시해주는것이 좋음.!! 너무너무뻔한것만 생략해도됨. 

    let text = 'hi'; //타입스크립트가 자동으로 선언하면서 스트링이라고 정함. 타입이 뻔한경우는 생략해서 적어도됨.
    // text = 2; 오류. 

    function print(message) {//argument 의 ... 은 any타입으로 되어있어서 뜨는 warning
    }

    function print2(message: string = "string") {//type을 설정해줘도 되고 default 값을 넣어도됨.
    }

    function add(x: number, y: number) {
        return x + y;
    }
    const result = add(1, 2); //result 는 자동으로 숫자가 타입이 추론됨. 
}