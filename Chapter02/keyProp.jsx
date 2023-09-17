import React from "react"; 
import ReactDOM from "react-dom";  

function TodoItem(props) { 
    const { item: todo } = props; 
    return <li>{todo.id}: {todo.message}</li>; 
} 

function TodoList(props) { 
    const { todos: list } = props; 
    const updatedTodos = list.map((todo) => { 
        return <TodoItem key={todo.id} item={todo} />; 
    }); 

    return <ul>{updatedTodos}</ul>; 
} 

const devTodoItems = [{id: 1, message:"Write a component"}, {id:2, message:"Test it"}, {id:3, message:"Publish the component"}]; 

ReactDOM.render( 
    <TodoList todos={ devTodoItems } />, 
    document.getElementById("root") 
); 