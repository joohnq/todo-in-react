import React from "react";
import './style.css'

export function List(props){
    return (
        <ul>
            {props.items.map(item => 
            <li 
            key={item.id}> 
                {item.text}
                <button onClick={() => {props.onDeleteTask(item)} }>
                    <img src="/trash.svg" alt="Delete Task" />
                </button>
            </li>)}
        </ul>
    )
}