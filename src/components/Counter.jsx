import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  // nafn
  // variable = n'impacte pas sur la partie visuelle => usestate()Impact la partie rendering

  return (
    <>
      <h2>My Counter</h2>
      <div>{count}</div>
      <button className="btn btn-danger" onClick={increment}>
        Increment
      </button>
    </>
  );
}

export default Counter;
