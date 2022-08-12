import React from "react";
import { Task } from "../Task";
import "./style.css";

export function List(props) {
  return (
    <ul>
      {props.items.map((item) =>
        <Task
        key={item.id} 
        className={item.done ? "done" : ""}
        item={item} 
        onDeleteTask={props.onDeleteTask} 
        onDoneTask={props.onDoneTask}/>)}
    </ul>
  );
}
