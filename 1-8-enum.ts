{
    //Enum //타입스크립트에선 가능한 안쓰는게 좋음.  차라리 UNION을씀.

    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wedneday';

    let daysOfWeek: DaysOfWeek = 'Monday';
    daysOfWeek = 'Tuesday'; //타입보장을해줌.

    //Javascript
    const MAX_NUMS = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1, "WEDSDAY": 2 });
    // DAYS_ENUM.MONDAY;
    // DAYS_ENUM.TUESDAY;
    // DAYS_ENUM.WEDSDAY;

    //Typescript
    enum Days { //default 0~ ,설정은 Monday=2 , Monday='summer' ,문자도 설정가능.
        Monday = 2,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Satureday,
        Sunday
    }
    console.log(Days.Monday); //2
    console.log(Days.Tuesday); //3

    let day: Days = Days.Satureday;
    day = Days.Thursday;
    day = 10;  //똥. 아무런 문제가없어서. 타입이 정확히 보장이 되지 않음. NOT STRICT.
}