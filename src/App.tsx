import { useStore } from "effector-react";
import $store, { addTodo, setNewTodo } from "./store";
import { MouseEvent } from "react";
import Item from "./Item";

const App = () => {
  const store = useStore($store);
  const handleAddTask = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo();
  };
  return (
    <div className={"main"}>
      <div className={"form"}>
        <h2>Add a task</h2>
        <form>
          <input
            type="text"
            value={store.newTodo}
            onChange={(e) => setNewTodo(e.currentTarget.value)}
            placeholder={"Learn Effector..."}
          />
          <button onClick={handleAddTask}>Add</button>
        </form>
      </div>
      <div>
        <h2>Todo List:</h2>
        <div className={"list"}>
          {store.todoList.map((i) => (
            <Item key={i.id} done={i.done} text={i.text} id={i.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
