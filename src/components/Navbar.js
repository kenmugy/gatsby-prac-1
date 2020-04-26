import React from "react"
import { Link } from "gatsby"

const Logo = ({ to, text }) => <Link className="brand-logo left" to={to}>{text}</Link>
const NavLinks = ({ to, text }) => <Link to={to}>{text}</Link>

export default () => (
  <nav className="green z-depth-0">
    <div className="container nav-wrapper">
      <Logo to="/" text="BooG" />
      <ul className="right">
        <li>
          <NavLinks to="/" text="Home" />
        </li>
        <li>
          <NavLinks to="/about" text="About" />
        </li>
        <li>
          <NavLinks to="/more" text="More" />
        </li>
      </ul>
    </div>
  </nav>
)
