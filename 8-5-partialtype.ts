{
    //Partail 이라는 유틸리티 타입은 기존의 타입중에서 부.분.적.인 것만 허용하고 싶을때 사용하는 타입.
    type Todo = {
        title: string;
        description: string;
        label: string;
        priority: 'high' | 'low';
    }

    function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
        return { ...todo, ...fieldsToUpdate };
    }

    const todo: Todo = {
        title: 'learn ts',
        description: 'study hard',
        label: 'study',
        priority: 'high'
    }
    const updated = updateTodo(todo, { priority: 'low' });
    console.log(updated);
}