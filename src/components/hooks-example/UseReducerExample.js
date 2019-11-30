import React, { useReducer } from "react";

const initialState = {
  count: 0
};

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
};

const UseReducerExample = props => {
  
  const [state, dispatchEvent] = useReducer(countReducer, initialState);

  const plusOne = () => {
    dispatchEvent({ type: "INCREMENT" });
  };

  const minusOne = () => {
    dispatchEvent({ type: "DECREMENT" });
  };

  return (
    <div>
      This is UseReducer Example Count : {state.count}
      <br />
      <button onClick={plusOne}>Increse By 1</button>
      <button onClick={minusOne}>Decrease By 1</button>
    </div>
  );
};

export default UseReducerExample;
