import { useState } from "react";
function Counter() {
  const [count, setcount] = useState(0);
  function updateCount() {
    const newcount = count + 1;
    setcount(newcount);
  }
  function reduceCount() {
    const newcount = count - 1;
    setcount(newcount);
  }
  const styleforbtn = {
    marginLeft: "10px",
  };
  const styleforcountDiv = {
    padding: "10px",
  };
  return (
    <div
      style={{
        border: "2px solid white",
        marginBottom: "20px",
        ...styleforcountDiv,
      }}
    >
      <h3>Count:{count}</h3>
      <button onClick={updateCount}>update count</button>
      <button style={styleforbtn} onClick={reduceCount}>
        reduce count
      </button>
    </div>
  );
}
export default Counter;
