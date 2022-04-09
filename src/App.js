import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav'

function App() {
  let name = "None"

  const handleEventClick = (event) => {
    console.log('Click me', event)
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
