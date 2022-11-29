import "./App.css";
import Component from "./Component";
import Body from "./Body";
import Testiclass from "./Testiclass";
import NewSpot from "./NewSpot";

function App() {
  const fetchData = () => {
    fetch("http://localhost:9999/areas")
      .then((response) => response.json())
      .then((data) => ({
        status: data.data.status,
        body: data.data.main,
      }))
      .then((obj) => {
        console.log(obj);
        // console.log(obj.body.data[0]);
      });
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className="App">
      <div>
        <header className="App-header">
          <Component />
        </header>
        <section className="App-body">
          <NewSpot />
          <Body />
        </section>
        <Testiclass />
        <button onClick={handleClick}>fetch backend</button>
      </div>
    </div>
  );
}

export default App;
