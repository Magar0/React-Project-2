import React, { useState } from "react";
import Items from "./Items";
import './styleTodo.css'

import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';


const Todo = () => {

    const [inputList, setInputList] = useState("")
    const [items, setItems] = useState([])

    const inputEvent = (event) => {
        setInputList(event.target.value)
    }

    const addItems = () => {

        setItems(pre => {
            return [...pre, inputList]
        })
        setInputList("")
    }

    const deleteItem = (id) => {

        setItems((pre) => {                 // passing all items except whose id match index

            return pre.filter((curElem, ind) => {
                if (ind !== id) {
                    return curElem
                }
            })
        })
    }


    const myStyle = {
        width: "100%"
    }

    return (
        <>
            <div className="container">
                <div className="todo-box py-4 px-5 rounded-4">
                    <h1>ToDo List</h1>
                    <div className>

                        <input type="text" className="mt-3 mb-2 mx-1" placeholder="Add Item" onChange={inputEvent} value={inputList} />
                        <Button size="small" variant="contained" color="success" className="btn " onClick={addItems}> <AddIcon /> </Button>
                    </div>

                    <ol style={myStyle}>
                        {items.map((curItem, index) => {
                            return (
                                <Items key={index} id={index} curItem={curItem} delete={deleteItem} />
                            )
                        })}
                    </ol>

                </div>
            </div>
        </>
    )
}

export default Todo;