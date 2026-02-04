import AppName from "./components/AppName";
import AddTodo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems"
import './App.css'

function App() {
  let todoItem=[{
    name:"Buy milk",
    dueDate:'4,10,24'
  },
  {
    name:"Go to college",
    dueDate:'4,10,24'
  }]
  return ( 
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <ToDoItems ToDoItems={todoItem}></ToDoItems>
      </center>
  );
}

export default App;
