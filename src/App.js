import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav'
import { useState, useEffect } from 'react'
import Todo from './views/Todo'

function App() {
  // state sẽ trả ra 1 array, array này có 2 phần tử 
  // phần tử đầu tiên là biến, phần tử thứ 2 là 1 function xử lý khi biến có sự thay đổi
  // ngoặc [] - array destrucring: giản lược
  let [name, setName] = useState('None');
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Watching TV', type: 'Nut' },
    { id: 'todo2', title: 'Fixing bugs', type: 'Nut' },
    { id: 'todo3', title: 'Cho con bú', type: 'No Nut November' },
    { id: 'todo4', title: 'Xỉa răng', type: 'No Nut November' }
  ])

  // is a function
  // will run after first render
  // will run when re-render
  useEffect(() => {
    console.log('>>>> Run use effect')
    // việc thêm [] <dependencies> nghĩa là hàm useEffect này chỉ chạy duy nhất 
    // 1 lần <=> ComponentDidmount
    // chạy 1 lần duy nhất sau khi render lần đầu
  }, [address]);
  // khi address thay doi thi ham nay moi chay tiep


  const handleEventClick = (event) => {
    if (!address) {
      alert('empty input')
      return
    }
    // hook not merge state
    let newTodo = { id: Math.floor(Math.random() * 30000), title: address, type: 'Nut' }
    setTodos([...todos, newTodo])
    setAddress('')
  }

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value)
  }

  const deleteDataTodo = (id) => {
    let currentTodos = todos
    currentTodos = currentTodos.filter(item => item.id !== id)
    setTodos(currentTodos)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World with React Hook - {name}</h1>
        <Todo
          todos={todos}
          title={'All todos'}
          deleteDataTodo={deleteDataTodo}
        />

        <Todo
          todos={todos.filter(item => item.type === 'Nut')}
          title={`Nut's todos`}
          deleteDataTodo={deleteDataTodo}
        />
        <input type="text" value={address} onChange={(event) => handleOnChangeInput(event)} />
        <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button>
      </header>
    </div>
  );
}
// không dùng vòng for,
// vì for lặp theo từng index, chứ không lặp theo từng object ở trong nó

// <a href={link} target="_blank">Visit my channel</a> 
// Sang 1 trang mới

export default App;
