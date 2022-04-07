import logo from './logo.svg';
import './App.css';

function App() {
  let name = "None"
  let number = 2022
  let obj = { name: 'None', channel: 'Bu lang kkk' }
  let link = 'https://github.com/nhatnv6767/react-hook'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World with React Hook - {name} in {obj.name}</h1>
        <a href={link} target="_blank">Visit my channel</a>
      </header>
    </div>
  );
}

// <a href={link} target="_blank">Visit my channel</a> 
// Sang 1 trang mới

export default App;
