import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default ({ children }) => (
  <main>
    <Navbar />
    <div className="container">{children}</div>
    <Footer >
        kenmugy 2020
    </Footer>
  </main>
)
