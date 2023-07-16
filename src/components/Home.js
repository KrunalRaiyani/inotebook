import React, { useContext, useState,useEffect } from 'react'
import Notes from './Notes'
import noteContext from '../context/notes/noteContext'
import Alert from './Alert'


const Home = (props) => {

    useEffect(() => {
        document.title = "iNotebook - Your Personal Task Manager"
        props.setProgress(100)
    }, [])
    

    const context = useContext(noteContext)

    const { addNote,showAlert,alertValue } = context

    const [note, setNote] = useState({ title: "", description: "" })

    const handleClick = (e) => {
        e.preventDefault()
        addNote(note.title, note.description)
        setNote({ title: "", description: "" })
    }

    const inpChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }



    

    return (
        <>
         <div className='w-50 m-auto'>
         {showAlert && <Alert color={alertValue.color} type={alertValue.type} massage={alertValue.massage} />}
         </div>
            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header"  style={{ background: "rgb(244 244 244 / 51%))"}}>
                            <h1 className="modal-title fs-5" id="exampleModalLabel" >Create Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label mb-2">Title</label>
                                    <input type="text" className="form-control inp-border mb-4" placeholder='Title' id="title" name='title' value={note.title} onChange={inpChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label mb-2">Description</label>
                                    <input type="text" className="form-control inp-border mb-4" placeholder='Description' id="description" name='description' value={note.description} onChange={inpChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer pt-3" style={{ background: "rgb(244 244 244 / 51%)"}}>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.title.trim().length < 2 || note.description.trim().length < 2} type="submit" className="btn btn-success" onClick={handleClick} data-bs-dismiss="modal">Create Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <Notes/>
        </>
  
    )
}
export default Home