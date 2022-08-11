import React from "react";
import "./style.css";

export function List(props) {
  function DoneImg(props) {
    if (props.done) {
      return <img alt="Check Done" src="./check-enabled.svg"></img>;
    } else {
      return <img alt="Check Off" src="./check-disabled.svg"></img>;
    }
  }

  return (
    <ul>
      {props.items.map((item) => (
        <li className={item.done ? "done" : ""} key={item.id}>
          <button
            onClick={() => {
              props.onDoneTask(item);
            }}
          >
            <DoneImg done={item.done}></DoneImg>
          </button>

          {item.text}

          <button
            onClick={() => {
              props.onDeleteTask(item);
            }}
          >
            <img alt="Delete" src="./trash.svg"></img>
          </button>
        </li>
      ))}
    </ul>
  );
}
