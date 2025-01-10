import { useState } from "react";
import "./mycomponent.css";

function MyComponent() {
  let [counter, setCounter] = useState(0);

  const addValue = function () {
    if (counter < 12) {
      setCounter(counter + 1);
    }
  };

  const removeValue = function() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <div className="my-component">
        <h2>Counter Value: {counter}</h2>
        <button className="button" onClick={addValue}>Add Value</button>
        <button className="button" onClick={removeValue}>Remove Value</button>
      </div>
    </>
  );
}

export default MyComponent;
