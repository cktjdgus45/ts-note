{
    ///Type Assertion 똥.똥. 정말 장담하는게아니라면 사용 xxx

    function jsStrFunc(): any {
        return 'string';
    }
    const result = jsStrFunc();
    result.lenth()//any 타입이기때문에 lenth 사용 불가. 하지만 나는확신한다. 이럴때 assertion 사용.

        (result as string).length; //asertion.
    <string>result;

    const wrong: any = 5;
    console.log((wrong as Array<number>));
    wrong.push();
}