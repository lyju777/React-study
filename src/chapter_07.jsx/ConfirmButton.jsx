import React, { useState } from "react";

function useConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((isConfirmed) => !isConfirmed);
  };

  return (
    <button onClick={handleConfirm}>
      {isConfirmed ? "Confirmed" : "Not Confirmed"}
    </button>
  );
}

export default useConfirmButton;
