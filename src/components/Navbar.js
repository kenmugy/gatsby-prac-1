import React from "react"
import { Link } from "gatsby"
import styles from './navbar.module.scss'

const Logo = ({ to, text }) => <Link className="brand-logo left" to={to}>{text}</Link>

export default () => (
  <nav className="green z-depth-0">
    <div className="container nav-wrapper">
      <Logo to="/" text="BlooG" />
      <ul className="right">
      <li >
        <Link to="/" activeClassName={styles.active}>Home</Link>
      </li>
      <li>
        <Link to="/about" activeClassName={styles.active}>About</Link>
      </li>
      <li>
        <Link to="/blog" activeClassName={styles.active}>Blog</Link>
      </li>
      <li>
        <Link to="/contact" activeClassName={styles.active}>Contact</Link>
      </li>
      </ul>
    </div>
  </nav>
)
