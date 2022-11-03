import logo from './logo.svg';
import './App.css';
import Component from './Component';
import Testiclass from './Testiclass';

function App() {
  const testiteksti = "test";

  return (
    <div>
      <Component irma={testiteksti}/>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
        </header>
      </div>
      <Component irma="testi2"/>
    </div>
  );
}

export default App;
