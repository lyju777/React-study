import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREASSE":
      return state + action.data;
    case "DECREASSE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    dispatch({
      type: "INCREASSE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASSE",
      data: 1,
    });
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
