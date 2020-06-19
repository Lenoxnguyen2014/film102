import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const activeStyles = {
  background: 'white',
  color:  "rebeccapurple"
}
const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: "rebeccapurple",
      marginBottom: "1.rem",
    }}
  >
    <div
      style={{
        background: "rebeccapurple",
        marginBottom: "1.45rem",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "1.45rem 1.0875rem",
          display: "flex",
          justifyItems: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, flex: 1 }}>
          <Link to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
            // activeStyles={activeStyles}
            activeClassName="active"

          >
            {siteTitle}
          </Link>
        </h1>
        <div>
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link style={{ color: `white` }} activeStyles={{activeStyles}} to={link.Link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header