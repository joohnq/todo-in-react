import React from "react";
import { Card } from "../Card";
import "./style.css";

export function Task(props) {
  function DoneImg(props) {
    if (props.done) {
      return <img alt="Check Done" src="./check-enabled.svg"></img>;
    } else {
      return <img alt="Check Off" src="./check-disabled.svg"></img>;
    }
  }

  return (
    <li key={props.item.id}>
      <button
        onClick={() => {
          props.onDoneTask(props.item);
        }}
      >
        <DoneImg done={props.item.done}></DoneImg>
      </button>

      {props.item.text}

      <button
        onClick={() => {
          props.onDeleteTask(props.item);
        }}
      >
        <img alt="Delete" src="./trash.svg"></img>
      </button>
    </li>
  );
}
