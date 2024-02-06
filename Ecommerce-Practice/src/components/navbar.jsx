import React from 'react'

function navbar() {
  return (
    <>
      <>
      <nav className="navbar" >
        <div className="nav-container">
          <NavLink to="/Home" className="nav-logo">
            <img src={SSLogo} alt="/"></img>
            {/* <i className="fas fa-code"></i> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/Home" className="nav-links" onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-links" onClick={handleClick}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/join" className="nav-links" onClick={handleClick}>
                Join
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              {username ? (
                <>
                  <NavLink
                    to="/profile"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    {username}
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Login
                  </NavLink>
                </>
              )}
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
    </>
  )
}

export default navbar
