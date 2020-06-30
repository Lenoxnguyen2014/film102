import React, {useState} from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import {Burger} from "./Burger"
import Video from "./video"
function Header({ siteTitle, menuLinks }) {
  return(
    <nav className="navbar">
            <Link to="/" className="nav-item is-brand title is-2">
            {siteTitle}
          </Link>
          <nav className="navbar-end" >
          <Link to="/" className="navbar-item title is-5">
            <p>Home</p>
          </Link>
              {menuLinks.map(link => (
                <p key={link.name}>
                  <Link to={link.Link} className="navbar-item title is-5">
                    {link.name}
                  </Link>
                </p>
              ))}
          </nav>
        </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header