import { useStore } from "effector-react";
import $store, { addTodo, deleteTodo, setNewTodo, toggleDone } from "./store";
import { MouseEvent } from "react";

const App = () => {
  const store = useStore($store);
  const handleAddTask = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo();
  };
  return (
    <div>
      <div>
        <h2>Add a task</h2>
        <form>
          <input
            type="text"
            value={store.newTodo}
            onChange={(e) => setNewTodo(e.currentTarget.value)}
          />
          <button onClick={handleAddTask}>Add</button>
        </form>
      </div>
      <div>
        <h2>Todo List:</h2>
        {store.todoList.map((i) => (
          <div key={i.id}>
            <input
              type="checkbox"
              checked={i.done}
              onChange={() => toggleDone(i.id)}
            />
            {i.text}
            <button onClick={() => deleteTodo(i.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
