import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="bg-red-700">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </div>
      </header>
    </div>
  );
}

export default App;
