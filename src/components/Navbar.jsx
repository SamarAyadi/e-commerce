import { NavLink , Link } from "react-router-dom"

function Navbar() {
  return (
  
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">🐧</Link>

   
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink activeclassname="active" className="nav-link " to="/">Home
            <span className="visually-hidden">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeclassname="active" className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeclassname="active" className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
  
   
  </div>
</nav>
  
  )
}

export default Navbar