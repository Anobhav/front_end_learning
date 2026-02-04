import TodoItem from "./TodoItem"

const ToDoItems = ({todoItem}){
    return (
        
      <div className="items-container">
        {todoItem.map((item)=>(
            <todoItem
                todoName={item.name}
                TodoDate={item.date}>
            </todoItem>
        ))}
        </div>
    )    
}

export default ToDoItems