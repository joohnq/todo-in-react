import React from "react";
import { useState } from "react";
import { Task } from "../Task";
import './style.css'

export function Todo(){
    const [text, setText] = useState("")
    const [items, setItems] = useState([])

    function handleText(event){
        setText(event.target.value)
    }

    function addTask(event){
        event.preventDefault()
        if(text){
            setItems([...items, text])
            setText("")
        }
    }

    return (
        <div className="container">
            <h1>Todo List</h1>
            <form action="">
                <input onChange={handleText} type="text" value={text}/>
                <button onClick={addTask}>Add</button>
            </form>

            <ul>
                {items.map(item => <Task value={item} />)}
            </ul>
        </div>
    )
}