import { useEffect } from "react";

function Even() {
  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다</div>;
}

export default Even;
