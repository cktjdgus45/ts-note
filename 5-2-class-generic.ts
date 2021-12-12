{
    //either : a or b

    interface Either<L, R> {
        left: () => L;
        right: () => R;
    }

    class SimpleEither<L, R> implements Either<L, R>{ //제네릭 , 타입 유동성 극대화.
        constructor(private leftValue: L, private rightValue: R) { }
        left(): L {
            return this.leftValue;
        }
        right(): R {
            return this.rightValue;
        }
    }

    const either: SimpleEither<number, number> = new SimpleEither(4, 5);
    either.left(); //4
    either.right(); //5

    const best = new SimpleEither({ name: 'cha' }, 'hello generic');
    const a = best.left(); //{ name: 'cha' }
    const b = best.right(); //hello generic

    console.log(a, b)
}