import { useState } from "react"

import TodoItem from "./TodoItem"

export default function TodoList() {

    const [todos, setTodos] = useState([
        { id: 1, title: 'Покормить кота', completed: false },
        { id: 2, title: 'Забрать зарплату', completed: true },
        { id: 3, title: 'Купить молоко', completed: false },
    ])

    const [activeElement, setActiveElement] = useState(null)

    function editTitle(id: number, newTitle: string) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = newTitle
                }
                return todo
            })
        )
    }

    function deleteTodo(id: number) {
        setTodos(
            todos.filter(todo => {
                return todo.id !== id
            })
        )
    }

    function changeCompleted(id: number) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    const [newTodo, setNewTodo] = useState('')


    function createTodo(e) {
        if (e.key === 'Enter') {
            setTodos([
                ...todos,
                { id: Date.now(), title: newTodo, completed: false }
            ])
            setNewTodo('')
        }
    }




    return (
        <div>
            <div>
                <input className="text-bold" value={newTodo} onInput={(e) => setNewTodo(e.target.value)} type="text" onKeyDown={(e) => createTodo(e)} placeholder="Введите новое дело" />
            </div>


            <div>

                <div>
                    <h2>Новые дела</h2>

                    {
                        todos.filter(todo => todo.completed === false).map(todo => (
                            <div className={todo.id === activeElement && 'chosen'} onClick={() => setActiveElement(todo.id)}>
                                <TodoItem
                                    todo={todo}
                                    changeCompleted={changeCompleted}
                                    deleteTodo={deleteTodo}
                                    editTitle={editTitle}
                                />
                            </div>

                        ))
                    }

                </div>


                <div>
                    <button>⬇</button>
                    <button>⬆</button>
                </div>


                <div>
                    <h2>Завершенные дела</h2>


                    {
                        todos.filter(todo => todo.completed === true).map(todo => (
                            <div className={todo.id === activeElement && 'chosen'} onClick={() => setActiveElement(todo.id)}>
                                <TodoItem
                                    todo={todo}
                                    changeCompleted={changeCompleted}
                                    deleteTodo={deleteTodo}
                                    editTitle={editTitle} />
                            </div>
                        ))
                    }

                </div>



            </div>



            {/* {
                todos.map(todo => (

                    <TodoItem
                        todo={todo}
                        changeCompleted={changeCompleted}
                        deleteTodo={deleteTodo}
                        editTitle={editTitle} />
                ))
            } */}
        </div>
    )

}