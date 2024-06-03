import React, { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { Pencil } from 'lucide-react'
import { SquareCheck } from 'lucide-react'

function Card(props) {

    // Destructure the children and other props passed in the component
    const { children, deleteItem, editItem, index, setHide } = props

    return (
        <li className='todoItem'>
            {/** Here children is set as <p>{item}</p> */}
            {children}
            <div className="icons">
                <Pencil
                    className='icon'
                    onClick={() => {
                        editItem(index); {/** This will call the editItem method with the index of the item */ }
                        setHide(true); {/** Sets hide to true to hide the rest of the items. This will avoid user to edit another item */ }
                    }}
                />

                {/** Calls the deleteItem method delete item with index */}
                <Trash2
                    className='icon'
                    onClick={() => deleteItem(index)}
                />
            </div>
        </li>
    )
}

export default Card
