import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav'
import { useState } from 'react'

function App() {
  // state sẽ trả ra 1 array, array này có 2 phần tử 
  // phần tử đầu tiên là biến, phần tử thứ 2 là 1 function xử lý khi biến có sự thay đổi
  // ngoặc [] - array destrucring: giản lược
  let [name, setName] = useState('None');

  const handleEventClick = (event) => {
    name = 'Another name'
    console.log('Click me', name)
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World with React Hook - {name}</h1>
        <input type="text" />
        <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button>
      </header>
    </div>
  );
}

// <a href={link} target="_blank">Visit my channel</a> 
// Sang 1 trang mới

export default App;
