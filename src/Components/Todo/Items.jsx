import React, { useState } from 'react'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const Items = (props) => {

    const [line, setLine] = useState(false)

    const cut = () => {
      
        line ? setLine(false) : setLine(true)       //using ternary operator to change line value
    }

    if (props.curItem !== "") {

        return (
            <>
                <li className='fs-5 mb-2'>
                    <span className="text border-2" style={{ textDecoration: line ? "line-through" : "none" }} onClick={() => cut()}>
                        {props.curItem}
                    </span>
                    <Button className='float-end' onClick={() => props.delete(props.id)} ><DeleteIcon /></Button></li>
            </>

        )
    }
}

export default Items