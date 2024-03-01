import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import CreateNote from './Components/CreateNote';
import Note from './Components/Note';
import { useState } from 'react';


const App = () => {

  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {

    setAddItem((prevData) => {
      return [...prevData, note];
    });
  }

  const  onDelete = (id) =>{
     setAddItem((oldData)=>
       oldData.filter((curData , index) =>{
        return index != id;
       })
     )
  }

  return (
    <>
      <Header></Header>
      <CreateNote passNote={addNote}></CreateNote>

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem = {onDelete}
          />
        )
      })}
      <Footer></Footer>

    </>
  )
}

export default App;
