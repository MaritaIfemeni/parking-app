import './App.css';
import Component from './Component';
import Testiclass from './Testiclass';

function App() {

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <Component />
        </header>
        
        <Testiclass />
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

    </div>
  );
}

export default App;
