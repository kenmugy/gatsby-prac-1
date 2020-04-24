import React from "react"
import { Link } from "gatsby"

const Logo = ({ to, text }) => <Link to={to}>{text}</Link>
const NavLinks = ({ to, text }) => <Link to={to}>{text}</Link>

export default () => (
  <nav>
    <Logo to="/" text="LOGO" />
    <div className="navlinks">
      <NavLinks to="/" text="Home" />
      <NavLinks to="/about" text="About" />
      <NavLinks to="/more" text="More" />
    </div>
  </nav>
)