import "./App.css";
import Component from "./Component";
import Testiclass from "./Testiclass";
import NewSpot from "./NewSpot";
import DataComponent from "./DataComponent";

function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <Component />
        </header>
        <section className="App-body">
          <DataComponent />
          <NewSpot />
        </section>
        <Testiclass />
      </div>
    </div>
  );
}

export default App;
