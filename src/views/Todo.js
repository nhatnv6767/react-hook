const Todo = (props) => {
    // property: sinh ra để truyền dữ liệu qua lại giữa các component
    // chỉ truyền dữ liệu từ cha xuống con, top => bottom
    const { todos, title, deleteDataTodo } = props
    const handleDelete = (id) => {
        deleteDataTodo(id)
    }
    return (
        <div className='todos-container'>
            <div className='title'>
                {title}
            </div>
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <li className='todo-child' >
                            {todo.title}
                            &nbsp;&nbsp;<span onClick={() => handleDelete(todo.id)}>
                                x
                            </span>
                        </li>

                    </div>
                )
            })}
            <hr />
        </div>
    )
}

export default Todo;