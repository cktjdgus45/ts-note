{
    //TYPE ALIAS VS INTERFACE "언제 type을 쓰고 언제 interface를 써야 하는가." 
    //Interface는 어떤 것의 규격사항이다. obj간에 의사소통을 할때 정해진 규격에의해서 사용하는 계약서이다.
    //makeCoffee() 를 규격하고 그것을 따라간다.
    //이런 경우에 type을 쓰는건 좋지 않다. 규격을 정의하고 그것을 따라가는 것이라면, interface

    //type이란 데이터의 모습을 결정하는것
    //position {x:num , y:num} 같은 경우는 type을 쓰는 것이 낫다.
    //position을 구현하는 class가있는가? 아니라면 type.
    //구현을 하는것이라면 interface , 데이터의 모습을 나타내는 것이라면 type alias.
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