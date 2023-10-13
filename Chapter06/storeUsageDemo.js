import { createStore } from "redux";
import todoReducer from "reducers/todoReducer";

const store = createStore(todoReducer); // Create a store
const firstTodo = addTodo({ name: "Running", priority: 2 });

console.log(firstTodo);
store.dispatch(firstTodo); // Dispatch a todo

const secondTodo = addTodo({ name: "Eating", priority: 1 });
console.log(secondTodo);
store.dispatch(secondTodo);
console.log(store.getState()); // Returns the todos list
