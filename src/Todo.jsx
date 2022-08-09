import React from "react";

export function Todo(){
    return (
        <div className="container">
            <h1>Todo List</h1>
            <form action="">
                <input type="text" />
                <button>Add</button>
            </form>

            <ul>
                <li>Item1</li>
                <li>Item2</li>
                <li>Item3</li>
            </ul>
        </div>
    )
}