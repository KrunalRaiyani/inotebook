import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

const Noteitem = (props) => {

    const context = useContext(noteContext)
    const { deleteNote } = context

    const { note, updateNote, num } = props

    const noteDelete = (id) => [
        deleteNote(id)
    ]

    const colors = [
        {
            cardTitle: "#57e757",
            card: "#a9ffa9"
        },
        {
            cardTitle: "#ff7676",
            card: "#ffa9a9"
        },
        {
            cardTitle: "#FFF778",
            card: "#ffffa9"
        },
        {
            cardTitle: "#FFA958",
            card: "#FFD3A9"
        },
        {
            cardTitle: "#57d8e7",
            card: "#a9ebf9"
        },
        {
            cardTitle: "#ff6dde",
            card: "#ffa9eb"
        },
        {

            cardTitle: "#57a1e7",
            card: "#a9d5ff"
        },
        {
            cardTitle: "#D876FF",
            card: "#EBB0FF"
        },
        {
            cardTitle: "#f5a77d",
            card: "#FFCDB2"
        }
    ]

    return (
        <div className="container py-4 col-xxl-3 col-xl-4 col-lg-4 col-md-5 m-md-auto m-lg-0 m-0 px-md-0 px-lg-4 px-4 ">
            {
                <div className="card h-100" style={{ boxShadow: "rgb(130 130 130 / 40%) 0px 4px 20px 6px" }}>
                    <div className="card-header d-flex justify-content-between px-4 note-card-head" style={{ backgroundColor: colors[num].cardTitle }}>
                        <h5 className="card-title" style={{ width: "70%" }}>{note.title}</h5>
                        <div className='btn-contaier'>
                            <button className='btn-style btn-edit me-2' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { updateNote(note) }} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg></button>
                            <button className='btn-style btn-del' onClick={() => { noteDelete(note._id) }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                            </svg></button>
                        </div>
                    </div>
                    <div className="card-body" style={{ backgroundColor: colors[num].card }}>
                        <p className="card-text">{note.description}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Noteitem