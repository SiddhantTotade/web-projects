import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Increment Decrement Counter App</h1>
      <div className="quantity">
        <button
          href="/"
          className="quantity__minus"
          title="decrement"
          onClick={() => dispatch(decNumber())}
        >
          <span>-</span>
        </button>
        <input
          name="quantity"
          type="text"
          className="quantity__input"
          value={myState}
          onChange={(state) => state.changeNumber}
        />
        <button
          href="/"
          className="quantity__plus"
          title="increment"
          onClick={() => dispatch(incNumber(5))}
        >
          <span>+</span>
        </button>
      </div>
    </div>
  );
};

export default App;
