import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {

  const apiUrl =process.env.REACT_APP_API_URL

  let allNote = []

  const [note, setNote] = useState(allNote)


  const [showAlert, setShowAlert] = useState(false)
  const [alertValue, setalertValue] = useState({color: "",type: "",massage: ""})

  // get note
  const getNote = async () => {
    // api call
    const responce = await fetch(`${apiUrl}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    })
    const json = await responce.json()
    setNote(json)

  }

  // Add a note
  const addNote = async(title,description) => {
  // api call

  const responce = await fetch(`${apiUrl}/api/notes/addnote`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem('token')
    },
    body: JSON.stringify({title, description})
  })
  const data = await  responce.json()
  
    // add note on frontend

    setNote(note.concat(data))

  }

  // Delete a note
  const deleteNote = async(id) => {

    // delete on frontend
    
    let newNote = note.filter((note) => {
      if(note._id !== id){
      setShowAlert(true)
      setalertValue({color: "success",type: "Success",massage: "Delete successfull"})
    }
      return note._id !== id
    })

  setNote(newNote)

      // api call

      const responce = await fetch(`${apiUrl}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      })
      const json = responce.json()

  }

  // Eadit a note
  const eaditNote = async (id,title, description) => {


  //  update on frontend

  let noteCopy = JSON.parse(JSON.stringify(note));
 

  for (let i = 0; i < noteCopy.length; i++) {
     if(noteCopy[i]._id === id){
        noteCopy[i].title = title;
        noteCopy[i].description = description;
        setShowAlert(true)
        setalertValue({color: "success",type: "Success",massage: "Edite successfull"})
        break;
     }
    
  }
 
  setNote(noteCopy)


    // api call

    const responce = await fetch(`${apiUrl}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title, description})
    })
    const json =  responce.json()



  }

  showAlert&&setTimeout(() => {
    setShowAlert(false)
  }, 2000);


  return (
    <NoteContext.Provider value={{ note, setNote, addNote, deleteNote, eaditNote, getNote,showAlert,alertValue}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState