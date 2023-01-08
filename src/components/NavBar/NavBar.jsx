import React from 'react'
import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css'


export default function NavBar() {
  return (
    <>
    <nav className="navbar color navbar-expand-lg  position-fixed w-100">
  <div className="container ">
    <Link className="navbar-brand fs-1 ps-5 text-white" to="">Start React</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav pe-5 fs-3 ms-auto mb-2 mb-lg-0 fw-bold size ">
        <li className="nav-item ">
          <Link className="nav-link ms-2 text-white" aria-current="page" to="Portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ms-2 text-white" to="About">About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link ms-2 text-white" to="Contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </>
  )
}
