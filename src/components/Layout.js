import React from "react"
import Navbar from "./Navbar"
import styles from './layout.module.css'

export default ({ children }) => (
  <main>
    <Navbar />
    <div className={styles.container}>{children}</div>
  </main>
)
