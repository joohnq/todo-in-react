import React, { useState } from "react";
import "./style.css";

export function Form(props) {
    const [text, setText] = useState("")

    function handleText(event){
        setText(event.target.value)
    }

    function addTask(event){
        event.preventDefault()
        if(text){
            props.onAddItem(text)
            setText("")
        }
    }

  return (
    <form>
      <input 
      onChange={handleText} 
      type="text" 
      value={text} />

      <button 
      onClick={addTask}>Add</button>
    </form>
  );
}
