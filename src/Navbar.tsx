
function Navbar() {
    return (
      <nav className="navbar">
        <a href="#" className="logo">
          <span className="logo-symbol" aria-hidden="true">✦</span>
          <span>AutomateX</span>
        </a>

        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    );
  }

  export default Navbar;
