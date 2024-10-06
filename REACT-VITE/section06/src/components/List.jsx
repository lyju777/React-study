import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChageSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilterdData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filterdTodos = getFilterdData();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("호출");

    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedDate();

  return (
    <div className="List">
      <h4>Todo List👍</h4>
      <div>
        <div>total:{totalCount}</div>
        <div>doneCount:{doneCount}</div>
        <div>notDoneCount:{notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChageSearch}
        placeholder="검색어를 입력하세요."
        type="text"
      />
      <div className="todos_wrapper">
        {filterdTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
