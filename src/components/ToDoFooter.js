function ToDoFooter({todos, onClearCompleted}){
    const completedSize = todos.filter((todo) => todo.isCompleted).length;
    return(
        <div className="todoFooter">
            <span> {completedSize}/{todos.length} Complated </span>
            <button onClick={onClearCompleted}>Clear Complated</button>
        </div>
    );
}

export default ToDoFooter;