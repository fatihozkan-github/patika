import React, { useState } from 'react'
import './ListTile.css'

function ListTile({ setTodoList, todoList }) {
    const [form, setForm] = useState({ title: "" })

    function onSubmit(event) {
        event.preventDefault()
        if (form.title !== '') {
            setTodoList([...todoList, { title: form.title, completed: false }])
        }
        setForm({ title: "" })
    }

    function removeTodo(item) { setTodoList(todoList.filter(_item => item !== _item)) }

    function markTodo(item) {
        todoList.forEach((_item) => {
            if (item === _item) {
                item.completed = !item.completed
            }
        })

        setTodoList([...todoList], item)
    }

    function filter(number) {
        if (number === 0) {
            console.log(todoList)
        }
        else if (number === 1) {
            setTodoList(todoList.filter((item) => item.completed !== true))
        }
        else if (number === 2) {
            setTodoList(todoList.filter((item) => item.completed !== false))
        }
    }

    function clearCompleted() {
        setTodoList(todoList.filter((item) => item.completed !== true))
    }

    return <>
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={onSubmit}>
                    <input className="new-todo" onChange={(event) => setForm({ title: event.target.value })} value={form.title} placeholder="What needs to be done?" autoFocus />
                </form>
            </header>

            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">Mark all as complete</label>

                <ul className="todo-list">
                    {todoList.map((item, index) => {
                        return <li key={index} className={item.completed ? "completed" : ""}>
                            <div className="view">
                                <input className="toggle" type="checkbox" checked={item.completed} onChange={() => markTodo(item)} />
                                <label>{item.title}</label>
                                <button className="destroy" onClick={() => removeTodo(item)}></button>
                            </div>
                        </li>
                    })}
                </ul>

            </section>

            <footer className="footer">

                <span className="todo-count"><strong>{todoList.length} </strong>items left</span>

                <ul className="filters">
                    <li><button onClick={() => filter(0)}>All</button></li>
                    <li><button onClick={() => filter(1)}>Active</button></li>
                    <li><button onClick={() => filter(2)}>Completed</button></li>
                </ul>

                <button onClick={clearCompleted} className="clear-completed">
                    Clear completed
                </button>
            </footer>
        </section>
    </>
}


export default ListTile