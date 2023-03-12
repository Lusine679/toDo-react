function ToDoItem({todo, onChange, onDelete}){
    return (
        <div className="item">
            <label>
                <input type="checkbox" checked={todo.isCompleted} onChange={(e) => {
                    // e.target.checked
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    });
                }}/>
                {todo.text }
                <submit onClick={() => {
                    onDelete(todo)
                }}>x</submit>
            </label>
        </div>
    );
}

export default ToDoItem;