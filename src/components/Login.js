import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from './Alert'
import Spinner from './Spinner'


const Login = (props) => {

    useEffect(() => {
        document.title = "iNotebook - Login Page"
        props.setProgress(100)
    }, [])

    const [detail, setDetail] = useState({ email: "", password: "" })
    const [showAlert, setShowAlert] = useState(false)
    const [alertValue, setalertValue] = useState({ color: "", type: "", massage: "" })
    const [showSpinner, setShowSpinner] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        setShowSpinner(true)
        e.preventDefault()
        const responce = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: detail.email, password: detail.password })
        })
        const json = await responce.json()

        if (json.success) {
            localStorage.setItem('token', json.authtoken)
            setalertValue({ color: "success", type: "Success", massage: "Login successfull" })
            setShowSpinner(false)
            setShowAlert(true)
            setTimeout(() => {
                navigate("/")
            }, 200);
        }
        else {
            setShowSpinner(false)
            setalertValue({ color: "danger", type: "Error", massage: "Plese enter valid email and password" })
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
            <div className='container pt-lg-5 d-flex align-items-center justify-content-lg-around  flex-column-reverse flex-lg-row login-container'>
                <img src="/img/login.png" className='login-img pt-4 mb-5 ' alt="" />
                <form onSubmit={handleSubmit} className="login-form mb-2">
                    <h2 className='text-center pb-4'>Login</h2>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control inp-border border-1" onChange={handleChange} value={detail.email} id="email" name='email' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 mt-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control inp-border border-1" onChange={handleChange} value={detail.password} name='password' id="password" autoComplete="on" />
                    </div>
                    <button type="submit" className="btn btn-outline-primary fw-semibold border-2 mt-4 w-100">Login</button>
                </form>

            </div>
        </>
    )
}

export default Login