import React, { useState } from 'react'

function Input(props) {

    // Destructure the props
    const { addList, itemValue, setItemValue, setHide } = props

    return (
        <>
            <h1 className='title'>To-<span>Do</span></h1>
            <header>
                <input
                    type="text"
                    placeholder='Enter items to do'
                    value={itemValue}
                    onChange={(e) => {
                        setItemValue(e.target.value)
                    }}
                />
                <button onClick={() => {
                    addList(itemValue)                  // Calls the addList method to add itemValue in the list
                    setItemValue('')                    // Clears the input field after clicking
                    setHide(false)                      // Set hide false and displays the items
                }}>
                    Add
                </button>
            </header>
        </>
    )
}

export default Input
