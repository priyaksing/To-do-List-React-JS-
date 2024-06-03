import React, { useState } from 'react'
import Card from './Card'

function List(props) {

    //Destructure the required props
    const { list, hide } = props

    return (
        // If hide is true, sets display to none for the items
        <ul className={hide ? 'hidden main' : 'main'}>

            {/* Map the 'list' array to display in required format. Calls the 'Card.jsx', passing on the entire props and index of the item in the list */}
            {list.map((item, index) => (

                <Card {...props} key={index} index={index} >
                    <p>{item}</p>
                </Card>

            ))}
        </ul>
    )
}

export default List
