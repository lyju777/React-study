import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const CurrentDiaryItem = useDiary(params.id);

  usePageTitle(`${params.id}번 일기 수정`);

  const onClickDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      // 삭제 로직
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("수정하시겠습니까?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button onClick={() => nav(-1)} text={"< 뒤로 가기"}></Button>
        }
        rightChild={
          <Button
            onClick={onClickDelete}
            text={"삭제하기"}
            type={"NEGATIVE"}
          ></Button>
        }
      />
      <Editor initData={CurrentDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
