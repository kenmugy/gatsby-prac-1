import React from "react"
import { Link } from "gatsby"
import Navbar from "./Navbar"

export default ({ children }) => (
  <main>
    <Navbar />
    <div className="container">{children}</div>
  </main>
)
