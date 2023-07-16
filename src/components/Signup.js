import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'
import Alert from './Alert'

const Signup = (props) => {

    useEffect(() => {
        document.title = "iNotebook - Signup Page"
        props.setProgress(100)
    }, [])

    const [detail, setDetail] = useState({ name: "", email: "", password: "", cpassword: "" })
    const [showAlert, setShowAlert] = useState(false)
    const [alertValue, setalertValue] = useState({ color: "", type: "", massage: "" })
    const [showSpinner, setShowSpinner] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {

        setShowSpinner(true)

        e.preventDefault()
        if (detail.password === detail.cpassword) {
            const responce = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/createuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: detail.name, email: detail.email, password: detail.password })
            })
            const json = await responce.json()
            if (json.success) {
                localStorage.setItem('token', json.authtoken)
                setalertValue({ color: "success", type: "Success", massage: "Signup successfull" })
                setShowSpinner(false)
                setShowAlert(true)
                setTimeout(() => {
                    navigate("/")
                }, 200);
            }
        }
        else {
            setShowSpinner(false)
            setalertValue({ color: "danger", type: "Error", massage: "Plese check your password and confirm password" })
            setShowAlert(true)
        }
    }
    showAlert && setTimeout(() => {
        setShowAlert(false)
    }, 3000);

    const handleChange = (e) => {
        setDetail({ ...detail, [e.target.name]: e.target.value })
    }
    return (
        <>
            {showSpinner && <Spinner />}
            {showAlert && <Alert color={alertValue.color} type={alertValue.type} massage={alertValue.massage} />}
            <div className='container my-4 d-flex align-items-center justify-content-lg-around  flex-column-reverse flex-lg-row login-container'>
                <img src="/img/signup.png" className='signup-img' alt="" />
                <form onSubmit={handleSubmit} className="login-form" >
                    <h2 className='text-center pb-4 pt-4'>Sign Up</h2>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control inp-border border-1 mt-2" onChange={handleChange} value={detail.name} required id="name" name='name' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control inp-border border-1 mt-2" onChange={handleChange} value={detail.email} required id="email" name='email' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control inp-border border-1 mt-2" onChange={handleChange} value={detail.password} minLength={5} required name='password' id="password" autoComplete="on" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control inp-border border-1 mt-2" onChange={handleChange} value={detail.cpassword} minLength={5} required name='cpassword' id="cpassword" autoComplete="on" />
                    </div>
                    <button type="submit" className="btn btn-outline-primary fw-semibold border-2 mt-4 w-100">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Signup