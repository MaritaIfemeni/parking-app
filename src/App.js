import "./App.css";
import Component from "./Component";
import Body from "./Body";
import Testiclass from "./Testiclass";

function App() {
  return (
    <div className="App">
      <div >
        <header className="App-header">
          <Component/>
        </header>
        <section className="App-body">
          <Body />
        </section>
        <Testiclass />
      </div>
    </div>
  );
}

export default App;
