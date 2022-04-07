import logo from './logo.svg';
import './App.css';

function App() {
  let name = "None"
  let number = 2022
  let obj = { name: 'None', channel: 'Bu lang kkk' }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World with React Hook - {name} in {obj.name}</h1>
      </header>
    </div>
  );
}

export default App;
