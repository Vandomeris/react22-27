import { useState } from "react"

export default function TodoItem({ todo, changeCompleted, deleteTodo, editTitle }) {

    const [isEditing, setIsEditing] = useState(false)

    function toggleEdit() {
        setIsEditing(!isEditing)
    }

    return (
        <div>


            {
                isEditing
                    ? (<input type="text" value={todo.title} onInput={(e) => editTitle(todo.id, e.target.value)} />)
                    : (<span className={todo.completed && 'completed'}>{todo.title}</span>)
            }

            <input type="checkbox" checked={todo.completed} onChange={() => changeCompleted(todo.id)} />
            <button onClick={() => deleteTodo(todo.id)}>X</button>
            <button onClick={() => toggleEdit()}>
                {isEditing ? 'Сохранить' : "Редактировать"}
            </button>
        </div>
    )

}