import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav'
import { useState, useEffect } from 'react'
import Todo from './views/Todo'
import Covid from './views/Covid'
import { Countdown, NewCountDown } from './views/Countdown'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
    console.log('>>>> Run use effect address')
    // việc thêm [] <dependencies> nghĩa là hàm useEffect này chỉ chạy duy nhất 
    // 1 lần <=> ComponentDidmount
    // chạy 1 lần duy nhất sau khi render lần đầu
  }, [address]);
  // khi address thay doi thi ham nay moi chay tiep


  useEffect(() => {
    console.log('>>>> Run use effect todos')
  }, [todos]);


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
  // sự kiện khi hết giờ
  const onTimesup = () => {
    // alert('Times up')
  }
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />


        </header>

        <div style={{ background: '#282c34', color: 'white' }}>
          <Switch>
            <Route path="/" exact>
              <Covid />
            </Route>
            <Route path="/timer">
              <Countdown onTimesup={onTimesup} />

              <span>------------------------------</span>
              <NewCountDown onTimesup={onTimesup} />
            </Route>
            <Route path="/todo">
              <Todo
                todos={todos}
                title={'All todos'}
                deleteDataTodo={deleteDataTodo}
              />
              <input type="text" value={address} onChange={(event) => handleOnChangeInput(event)} />
              <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button>
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  );
}
// không dùng vòng for,
// vì for lặp theo từng index, chứ không lặp theo từng object ở trong nó

// <a href={link} target="_blank">Visit my channel</a> 
// Sang 1 trang mới

export default App;
