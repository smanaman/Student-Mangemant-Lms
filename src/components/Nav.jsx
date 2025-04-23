import React from 'react'
// import { Link } from 'react-router-dom'
import "./Nav.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MyBrand</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <Link to="/view">Home</Link>
            </a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
                        <Link to="/Add">Features</Link>

            </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          <Link to="/edit">Edit</Link>

          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <Link to="/view">view</Link>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Nav