import React, {useState} from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle, menuLinks }) => (
    <nav class="navbar" role="navigation" aria-label="main navigation column">
            <Link to="/" className="title is-1">
            {siteTitle}
          </Link>

          <nav class="navbar-menu is-active column">
            <ul className="columns">
              {menuLinks.map(link => (
                <li className="column "
                  key={link.name}
                >
                  <Link to={link.Link} className="title is-4">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header