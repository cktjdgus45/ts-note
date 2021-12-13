{
    type Video = {   //쓰는 이유 .  Video를 고치면 VideoOptinal도 찾아가서 고쳐야하는 불편함때문.
        title: string;
        author: string;
    };
    type VideoOptional = {
        title?: string;
        author?: string;
    }
    [1, 2].map(item => item * item);// [1,4]로 변환.

    type Optional<T> = {
        [P in keyof T]?: T[P] //for..in 키를 하나하나 씩 도는 연산자.  //재네릭이랑 비슷 , 재사용성을 높혀줌.
    };
    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P];
    };
    type VideoOtional2 = Optional<Video>;
    const videoOp2: VideoOtional2 = {
        title: "hi"
    };

    type Animal = {
        name: string,
        age: number
    };
    const animal: Optional<Animal> = {
        name: 'bear'
    };

    const videoReadOnly: ReadOnly<Video> = {
        title: 'hi',
        author: 'cha'
    }
    // videoReadOnly.author= 변경하려 하면 오류 발생.

    type Nullable<T> = {
        [P in keyof T]: T[P] | null
    }
    const obj3: Nullable<Video> = {
        title: 'ji',
        author: null
    }
}