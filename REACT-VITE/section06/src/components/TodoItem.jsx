import { memo } from "react";
import "./TodoItem.css";

function TodoItem({ todo, onUpdate, onDelete }) {
  const onChanageCheckbox = () => {
    onUpdate(todo.id);
  };

  const onClickDeleteButton = () => {
    onDelete(todo.id);
  };
  return (
    <div className="TodoItem">
      <input
        onChange={onChanageCheckbox}
        checked={todo.isDone}
        type="checkbox"
      />
      <div className="content">{todo.content}</div>
      <div className="date">{new Date(todo.date).toLocaleDateString}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
}

export default memo(TodoItem);
