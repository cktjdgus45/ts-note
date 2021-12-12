{
    //TYPE ALIAS VS INTERFACE "언제 type을 쓰고 언제 interface를 써야 하는가." 

    type PositionType = {
        x: number;
        y: number;
    }

    interface PositionInterface {
        x: number;
        y: number;
    }

    //둘다 오브젝트형태로 만드는것이 가능하다.
    const obj1: PositionType = {
        x: 1,
        y: 1
    }
    const obj2: PositionInterface = {
        x: 1,
        y: 1,
    }

    //둘다 클래스형태로 만드는것이 가능하다.
    class Pos1 implements PositionType {
        x: number;
        y: number;
    }

    class Pos2 implements PositionInterface {
        z: number;
        x: number;
        y: number;
    }

    //둘다 확장형태로 만드는것이 가능하다.

    interface ZPositionInterface extends PositionInterface {
        z: number;
    }
    type ZPositionType = PositionType & { z: number };

    //what only interface can do - merge

    interface PositionInterface {
        z: number;
    }
    // type PositionType{}  불가.


    //what only type can do - computed properties

    type Person = {
        name: string,
        age: number
    }
    type Name = Person['name']; //string

    type NumberType = number;
    type Direaction = 'left' | 'right' | 'up' | 'down';

}