import { useState, useEffect } from "react"
import Input from "./components/Input"
import List from "./components/List"

function App() {

  // Manage state of to-do items list
  const [list, setList] = useState([])

  // Manage state of to-do item
  const [itemValue, setItemValue] = useState('')

  // Hide items while editing
  const [hide, setHide] = useState(false)

  // Runs only on the first render. After render, this will retrieve the list from localstorage, converts it into object and set the list to display on screen
  useEffect(() => {
    if (!localStorage) return

    let localList = localStorage.getItem('list')        // Retrieves 'list' array and assigns it to 'localList'

    if (!localList) return

    localList = JSON.parse(localList)                   // Converts it from type string to object
    setList(localList)

  }, [])


  // Method to add items to list. Takes new item as parameter and adds it in the existing list
  const addList = (newValue) => {
    const newList = [...list, newValue]

    localStorage.setItem('list', JSON.stringify(newList))         // After adding item, updates the list in local storage
    setList(newList)                                              // Update the array 'list'
  }

  // Method to delete item in the list. Takes index of the item to be deleted as parameter.
  const deleteItem = (index) => {

    // Filters the 'list' and returns updated list without item with 'index'
    const newList = list.filter((item, itemIndex) => {
      return index !== itemIndex
    })

    localStorage.setItem('list', JSON.stringify(newList))
    setList(newList)
  }

  // Method to edit item in the list. Takes index of the item to be updated as parameter.
  const editItem = (index) => {

    const editValue = list[index]         // Stores the value of item to be edited
    setItemValue(editValue)               // Sets the input field with the value for editing. Updated value will be added.
    deleteItem(index)                     // Deletes the old value from the list. 

  }

  return (
    <>
      <Input
        addList={addList}
        itemValue={itemValue}
        setItemValue={setItemValue}
        setHide={setHide}
      />

      <List
        editItem={editItem}
        deleteItem={deleteItem}
        list={list}
        setHide={setHide}
        hide={hide}
      />
    </>
  )
}

export default App
