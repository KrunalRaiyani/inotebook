import {  useRef, useState } from "react"
import { NavLink, Link, useNavigate } from "react-router-dom"

const Navbar = () => {



  const ref = useRef()

  const navigate = useNavigate()

  const [navOpen, setNavOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate("/login")
  }

  const [flag, setFlag] = useState(true)
  const navStatus = () => {
    flag?setFlag(false):setFlag(true )
  }

  const closeNavbar = () => {
      if (!flag) {
        ref.current.click()
        setNavOpen(false)
        setFlag(true)
      }
  }




  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-style px-3 py-3 px-sm-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"> iNotebook</Link>
        <button className="navbar-toggler" onClick={navStatus} ref={ref} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/" onClick={closeNavbar}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={closeNavbar}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/guide" onClick={closeNavbar}>How to use</NavLink>
            </li>
          </ul>
          {!localStorage.getItem('token') ? <div>
            <Link className="btn btn-outline-success fw-semibold border-2 me-2 px-3 py-1" onClick={closeNavbar} to="/login">Login</Link>
            <Link className="btn btn-outline-danger fw-semibold border-2 ms-2 px-3 py-1" onClick={closeNavbar} to="signup">Sign Up</Link></div> :
            <Link className="btn btn-outline-danger fw-semibold border-2 px-3 py-1" onClick={handleLogout} onMouseUp={closeNavbar} to="login">Logout</Link>}
        </div>
      </div>
    </nav>



  )
}

export default Navbar