import React, { useState, useEffect } from "react";
import { List } from "../List";
import { Form } from "../Form";
import { Item } from "../Item";
import { Modal } from "../Modal";
import { BtnCreate } from "../BtnCreate";
import './style.css'

export function Todo(){
    const [items, setItems] = useState([])

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem("taskOnLS"))
        if(savedItems){
            setItems(savedItems)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("taskOnLS", JSON.stringify(items))
    },[items])

    function onAddItem(text){
        let it = new Item(text)

        setItems([...items, it])
    }

    function onDeleteTask(item){
        let filteredItems = items.filter(it => it.id != item.id)

        setItems(filteredItems)
    }

    function onDoneTask(item){
        let updatedItems = items.map(it => {
            if(it.id == item.id){
                it.done = !it.done
            }

            return it
        })

        setItems(updatedItems)
    }

    return (
        <div className="container">
            <h1>Todo List</h1>
            {/* <Form onAddItem={onAddItem}/> */}
            <BtnCreate />
            <List onDeleteTask={onDeleteTask} onDoneTask={onDoneTask} 
            items={items}/>
            <Modal />
        </div>
    )
}