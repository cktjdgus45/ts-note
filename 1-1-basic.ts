{
    //type
    //Primitive : number , string ,boolean,sumbol,null,undefuned
    //Object : function,array...

    //number
    const num: number = 0.3;

    //string
    const str: string = 'hello';

    //boolean
    const bool: boolean = false;

    //undefined  비었나,안비었나 애매한.
    let name: undefined; //이렇게안씀
    let age: number | undefined; //숫자 또는 미결정.
    age = undefined;
    age = 3;
    function find(): number | undefined {
        return undefined; //찾으면 숫자 리턴, 못찾으면 undefined 리턴
    }

    //null 비었다! 명확히.
    let person: null; //이렇게안씀
    let person2: string | null; //있을수도 없을수도 있다 의미 나타냄. 보편적으로 undefined를 더씀.

}