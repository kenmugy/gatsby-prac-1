import React from "react"
import Layout from "../components/Layout"
import img from "../images/pretty-0.jpg"
import "./about.module.css"
import Header from "../components/Header"

export default () => (
  <Layout>
  <Header title="About" emoji="👀" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, ad vero?
      Magni autem ex velit soluta inventore error totam molestiae minus sapiente
      cumque, laudantium minima a perferendis iste nulla non.
    </p>
    <div className="profile">
      <img src={img} alt="pretty babe" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        corporis debitis perferendis adipisci fuga illo hic, architecto numquam
        molestiae ab consectetur ex molestias sequi vel totam vero, ipsa laborum
        aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perspiciatis maiores architecto culpa eaque corrupti. Nostrum, aliquam
        quisquam architecto temporibus id facilis labore nihil, fugit iste
        explicabo eligendi ullam maxime corrupti.
      </p>
    </div>
  </Layout>
)
