import React from "react";
import "./App.css";

const App = () => {
  return (
    <div class="container">
      <h1>Increment Decrement Counter App</h1>
      <div class="quantity">
        <button href="/" class="quantity__minus" title="decrement">
          <span>-</span>
        </button>
        <input name="quantity" type="text" class="quantity__input" value="0" />
        <button href="/" class="quantity__plus" title="increment">
          <span>+</span>
        </button>
      </div>
    </div>
  );
};

export default App;
