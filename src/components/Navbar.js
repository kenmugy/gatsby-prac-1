import React from "react"
import { Link } from "gatsby"

const Logo = ({ to, text }) => <Link className="brand-logo left" to={to}>{text}</Link>

export default () => (
  <nav className="green z-depth-0">
    <div className="container nav-wrapper">
      <Logo to="/" text="BlooG" />
      <ul className="right">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      </ul>
    </div>
  </nav>
)
