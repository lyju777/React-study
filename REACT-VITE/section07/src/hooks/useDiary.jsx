import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);

  const [CurrentDiaryItem, setCurrentDiaryItem] = useState();

  useEffect(() => {
    const CurrentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );
    if (!CurrentDiaryItem) {
      window.alert("해당 일기가 존재하지 않습니다.");
      nav("/", { replace: true });
    }
    setCurrentDiaryItem(CurrentDiaryItem);
  }, [id, data]);

  return CurrentDiaryItem;
};

export default useDiary;
