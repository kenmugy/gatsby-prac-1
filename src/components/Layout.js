import React from "react"
import Navbar from "./Navbar"
import styles from './layout.module.css'
import Footer from "./Footer"

export default ({ children }) => (
  <main>
    <Navbar />
    <div className={styles.container}>{children}</div>
    <Footer >
        kenmugy 2020
    </Footer>
  </main>
)
