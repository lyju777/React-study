import React, { useState,useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate() {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
  }, [count]);

  return (
    <div>
      <h1>현재 인원: {count}명</h1>
      <button disabled={isFull} onClick={increaseCount}>증가</button>
      <button  onClick={decreaseCount}>감소</button>
      {isFull && <h2>정원이 초과되었습니다.</h2>}
    </div>
  );
}

export default Accommodate;