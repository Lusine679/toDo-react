import ToDoItem from "./ToDoItem";

function ToDoList({todos, onChange, onDelete}){
    return (
        <div className="listItem">
            {
                todos.map((todo) => {
                    return (
                        <ToDoItem 
                        key={todo.id} 
                        todo={todo}
                        onChange={onChange}
                        onDelete={onDelete}
                        /> 
                    )
                })
            }
        </div>
    );
}

export default ToDoList;