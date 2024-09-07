import Loader from "../assets/loader"
import Layout from "../assets/Layout";
import About from "../assets/about";
import Projects from "../assets/projects";
import Contact from "../assets/contact";
import Footer from "../components/Footer";
import Skills from "../assets/skills";


const Home = () => {

  return (
    <div>
      <Loader/>
      <Layout>
        <section><About/></section>
        <section><Skills/></section>
        <section><Projects/></section>
        <section><Contact/></section>
        <footer><Footer/></footer>
      </Layout>
    </div>
  )
}

export default Home
