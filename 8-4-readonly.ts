{
    //Type들은 이미 개발자들이 많이 정의해서 만들어둠. 
    type Todo = {
        title: string;
        description: string;
    }

    function display(todo: Readonly<Todo>) {
        // todo.title ='jsjs'; 보여주기만해야하는데 어떤 개발자가 변경할 사고가 일어날 수 있음.
        // todo.title= 'ss'; 오류 발생.
    }
}