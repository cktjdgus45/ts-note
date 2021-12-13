{
    type Check<T> = T extends string ? boolean : number;
    type Type = Check<string>; //boolean

    //typescript 공식문서
    type TypeName<T> = T extends string
        ? 'string'
        : T extends boolean
        ? 'boolean'
        : T extends undefined
        ? 'undefined'
        : T extends Function
        ? 'function'
        : 'object';

    type T0 = TypeName<string>; //string
    type T1 = TypeName<''>; //string
    type T2 = TypeName<() => void>; //function
    type T3 = TypeName<true>; //boolean
}