import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav'
import { useState } from 'react'

function App() {
  // state sẽ trả ra 1 array, array này có 2 phần tử 
  // phần tử đầu tiên là biến, phần tử thứ 2 là 1 function xử lý khi biến có sự thay đổi
  // ngoặc [] - array destrucring: giản lược
  let [name, setName] = useState('None');
  const [address, setAddress] = useState('')

  const handleEventClick = (event) => {
    // setName là hàm bất đồng bộ
    setName('Another name')
    console.log('Click me', name)
  }

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value)
    console.log(event.target.value)
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World with React Hook - {name}</h1>
        <input type="text" value={address} onChange={(event) => handleOnChangeInput(event)} />
        <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button>
      </header>
    </div>
  );
}

// <a href={link} target="_blank">Visit my channel</a> 
// Sang 1 trang mới

export default App;
