import "./App.css";
import Counter from "./Counter";
import Team from "./team";
import User from "./component/User";
import Players from "./component/Players";

function App() {
  function handler() {
    alert("You Just Click Button 1");
  }
  const handler2 = () => {
    alert("You Just Click Button 2");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h1>Vite + React</h1>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handler}>Click Me</button>
      <button onClick={handler2}>Click Me</button>
      <button
        onClick={() => {
          alert("you Just Click Button 3");
        }}
      >
        Click Me
      </button>
      <button onClick={() => addToFive(3)}>Add</button>
      <Players></Players>
      <User></User>
    </>
  );
}

export default App;
