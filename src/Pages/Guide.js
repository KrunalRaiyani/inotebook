import React, {useEffect } from 'react'


const Guide = (props) => {


    useEffect(() => {
        document.title = "iNotebook - Guide"
        props.setProgress(100)
    }, [])
    return (
        <div className="container px-4">
            <h2 className="my-5 pt-0 pb-2 your-notes-heading">How to Use</h2>

            <h4 className='mt-4 mb- list-title'>Step 1: Sign Up</h4>
            <p>Go to the <span className='hilight'>signup</span> page and fill out the required information. Please note that you should not use your real password of the email.</p>
            <img src="/img/guide1.png" className=' my-3 ms-3 create-img' alt="" />

            <h4 className='mt-4 mb- list-title'>Step 2: Log In</h4>
            <p>If you have already signed up, go to the <span className='hilight'>login</span> page and enter your email and password to log in.</p>
            <img src="/img/guide2.png" className=' my-3 ms-3 create-img' alt="" />


            <h4 className='mt-4 mb- list-title'>Step 3: Create a New Note</h4>
            <p>After login, press the <span className='hilight'>"Create"</span> button to create a new note.</p>
            <img src="/img/create.png" className=' my-3 ms-3 create-img' alt="" />

            <h4 className='mt-4 mb- list-title'>Step 4: Edit a Note</h4>
            <p>To edit a note, click on the <span className='hilight'>"Pen Icon"</span> button associated with the note and make the necessary changes.</p>
            <img src="/img/Edit.png" className='my-3 guide-img' alt="" />

            <h4 className='mt-4 mb- list-title'>Step 5: Delete a Note</h4>
            <p>If you want to delete a note, click on the  <span className='hilight'>"Delete"</span> button associated with the note to remove it.</p>
            <img src="/img/delete.png" className='my-3 guide-img' alt="" />
        </div>

    )
}

export default Guide