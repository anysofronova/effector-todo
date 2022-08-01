import { createEvent, createStore } from "effector";
import { v4 as uuidv4 } from "uuid";

type todoType = {
  id: string;
  done: boolean;
  text: string;
};
type storeType = {
  todoList: todoType[];
  newTodo: string;
};

const addTodoToList = (todos: todoType[], text: string): todoType[] => [
  ...todos,
  { id: uuidv4(), done: false, text },
];
const toggleDoneTodo = (todos: todoType[], id: string): todoType[] =>
  todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : { ...todo }
  );
const deleteTodoFromList = (todos: todoType[], id: string): todoType[] =>
  todos.filter((todo) => todo.id !== id);

export const addTodo = createEvent();
export const setNewTodo = createEvent<string>();
export const toggleDone = createEvent<string>();
export const deleteTodo = createEvent<string>();

const $store = createStore<storeType>({ todoList: [], newTodo: "" })
  .on(setNewTodo, (state, newTodo) => ({ ...state, newTodo }))
  .on(addTodo, (state) => ({
    ...state,
    newTodo: "",
    todoList: addTodoToList(state.todoList, state.newTodo),
  }))
  .on(toggleDone, (state, id) => ({
    ...state,
    todoList: toggleDoneTodo(state.todoList, id),
  }))
  .on(deleteTodo, (state, id) => ({
    ...state,
    todoList: deleteTodoFromList(state.todoList, id),
  }));

export default $store;
