import React, { useState } from "react";
import "./style.css";

export function Form(props) {
  const [text, setText] = useState("");

  function handleText(event) {
    setText(event.target.value);
  }

  function addTask(event) {
    event.preventDefault();
    if (text) {
      props.onAddItem(text);
      setText("");
    }
  }

  return (
    <form>
      <div>
        <label htmlFor="titleTask">Título da Tarefa:</label>

        <div>
          <input
              name="titleTask"
              onChange={handleText}
              type="text"
              value={text}
              placeholder="Digite aqui..."
            />
          <button onClick={addTask}>Add</button>
        </div>
      </div>
    </form>
  );
}
