import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Loader from "./assets/loader"
import Layout from "./assets/Layout"
import About from "./assets/about"
import Skills2 from "./assets/skills2"
import Projects from "./assets/projects"
import Contact from "./assets/contact"
import Footer from "./components/Footer"


function App() {

  return (
    <div>
      <Loader/>
      <Layout>
        <section id="about"><About/></section>
        <section id="skills"><Skills2/></section>
        <section id="projects"><Projects/></section>
        <section id="contact"><Contact/></section>
        <footer><Footer/></footer>
        
      </Layout>
    </div>
  )
}

export default App
