import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "./layout.module.scss"

export default ({ children }) => (
  <div className={styles.whole}>
    <div className={styles.up}>
      <Navbar />
      <div className="container">{children}</div>
    </div>
    <Footer />
  </div>
)
