

function Navbar() {
  return (
  
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="DD">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="Valider">Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="OK">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="OK">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="OK">About</a>
        </li>
      </ul>
  
    </div>
  </div>
</nav>
  
  )
}

export default Navbar