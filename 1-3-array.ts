{
    //Array
    const fruits: string[] = ['banana', 'apple'];
    const numbers: Array<number> = [1, 2, 3];
    //readonly 는 함수내부에서 수정못하도록 지정하는 타입. fruits.push()불가능 많이쓰임.
    function printArray(fruits: readonly string[]) {
        // fruits.push() 불가.
    }

    //tuple -> interface , type alias, class

    //배열이긴 배열인데 , 다른타입을 동시에 가질수 있는 배열이다.
    let student: [string, number]; //tuple
    student = ['name', 123];
    student[0] //name
    student[1] //123  
    //가독성이 떨어진다. 그래서 사용권장 xxx. student.age , student.name  이 낫다. ->type alias 나 object destructuring 사용.
    const [name, age] = student; //react useState()와 비슷.
}