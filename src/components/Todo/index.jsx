import React from "react";
import { useState } from "react";
import { List } from "../List";
import { Form } from "../Form";
import { Item } from "../Item";
import './style.css'

export function Todo(){
    const [items, setItems] = useState([])

    function onAddItem(text){
        let it = new Item(text)

        setItems([...items, it])
    }

    function onDeleteTask(item){
        let filteredItems = items.filter(it => it.id != item.id)

        setItems(filteredItems)
    }

    return (
        <div className="container">
            <h1>Todo List</h1>
            <Form onAddItem={onAddItem}/>
            <List onDeleteTask={onDeleteTask} items={items}/>
        </div>
    )
}