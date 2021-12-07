{
    //Intersection Types : & and느낌 

    type Student = {
        name: string;
        score: number;
    }

    type Worker = {
        employeeId: number;
        work: () => void;
    }

    function internwork(person: Student & Worker) {
        console.log(person.employeeId, person.name, person.score, person.work())
    }

    internwork({
        name: 'chasunghyeon',
        score: 100,
        employeeId: 123123123412421,
        work: () => { }
    })
}