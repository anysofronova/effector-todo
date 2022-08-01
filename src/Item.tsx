import { FC } from "react";
import { deleteTodo, todoType, toggleDone } from "./store";

const Item: FC<todoType> = ({ id, text, done }) => {
  return (
    <div className={"item"}>
      <input type="checkbox" checked={done} onChange={() => toggleDone(id)} />
      <span className={done ? "done" : ""}>{text}</span>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
};

export default Item;
