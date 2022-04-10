const Todo = (props) => {
    // property: sinh ra để truyền dữ liệu qua lại giữa các component
    // chỉ truyền dữ liệu từ cha xuống con, top => bottom
    const todos = props.todos
    return (
        <div className='todos-container'>
            <div className='title'>
                {props.title}
            </div>
            {todos.map(todo => {
                return (
                    <li className='todo-child' key={todo.id}>
                        {todo.title}
                    </li>
                )
            })}
            <hr />
        </div>
    )
}

export default Todo;