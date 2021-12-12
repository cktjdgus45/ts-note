{
    //generic-function
    function checkNotNull(arg: number | null): number { //-BAD
        if (arg == null) {
            throw new Error('not valid number');
        }
        return arg;
    }

    function checkNotNull2<GENERIC>(arg: GENERIC | null): GENERIC { //GENERIC -> T. , 여러개 타입을 받는다.
        if (arg == null) {
            throw new Error('not valid number');
        }
        return arg;
    }

    const number = checkNotNull2(123);
    const bool: boolean = checkNotNull2(true);
}