import Loader from "../assets/loader"
import Layout from "../assets/Layout";
import About from "../assets/about";
import Projects from "../assets/projects";
import Contact from "../assets/contact";
import Footer from "../components/Footer";
import { useEffect } from "react";
  import Skills2 from "../assets/skills2";


  const Home = () => {
    
  return (
    <div>
      <Loader/>
      <Layout>
        <section><About/></section>
         <section><Skills2/></section>
        <section><Projects/></section>
        <section><Contact/></section>
        <footer><Footer/></footer>
      </Layout>
    </div>
  )
}

export default Home
