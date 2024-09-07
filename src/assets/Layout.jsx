import Navbar from "../components/Navbar";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineX } from "react-icons/ai";
import { BsArrow90DegRight } from "react-icons/bs";
import propTypes from 'prop-types'

const Layout = ({children}) => {  
  return (
    <>
    <div className="h-full w-full fixed top-0 left-0">
      <div className="flex justify-between items-center lg:m-10 m-2">
        <div className="font-bold tracking-widest text-2xl">
          Aman Agarwal
        </div>
        <button className="btn-20"><span className="flex items-center gap-2"><p className="hidden lg:inline-block">Let&apos;s Connect </p><BsArrow90DegRight size={15}/></span></button>
      </div>
      <div className="lg:h-[67vh] h-[85vh] w-[10vw] flex flex-col justify-between">
        <div></div>
        <div className="flex flex-col lg:px-12 lg:py-12 lg:gap-10 gap-5 px-5 py-5 opacity-80">
          <a href="https://www.instagram.com/aman._.agarwal/">
            <FaInstagram
              size={30}
              className="hover:opacity-50 hover:animate-bounce"
            />
          </a>
          <a href="https://x.com/Aman33371393?t=-B4CkqEvPJh83X6tzBYfxA&s=08">
            <AiOutlineX
              size={30}
              className="hover:opacity-50 hover:animate-bounce"
            />
          </a>
          <a href="https://www.linkedin.com/in/aman-agarwal-7431ab228/">
            <FaLinkedin
              size={30}
              className="hover:opacity-50 hover:animate-bounce"
            />
          </a>
          <a href="https://www.github.com/kingtyrant69">
            <FaGithub
              size={30}
              className="hover:opacity-50 hover:animate-bounce"
            />{" "}
          </a>
        </div>
      </div>
      <div className="lg:flex items-center justify-center b-2 hidden">
        <Navbar />
      </div>
    </div>
    {children}
    </>
  );
};

Layout.propTypes = {
  children: propTypes.node
}

export default Layout;
