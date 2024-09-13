import { useState, useEffect, useRef } from "react";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
const Contact = () => {
  const sectionRef = useRef(null);
  const [width, setWidth] = useState("100%");
  function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) return;
      lastCall = now;
      return func(...args);
    };
  }
  useEffect(() => {
    const handleScroll = throttle(() => {
      if (sectionRef.current) {
        const section = sectionRef.current;
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const visibleHeight = Math.max(
          0,
          Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
        );
        const sectionHeight = rect.height;
        const visibilityPercentage = visibleHeight / sectionHeight;
        const newWidth = 100 - visibilityPercentage * 25;

        setWidth(`${newWidth}%`);
      }
    },100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="top-0 sticky">
      <div
        ref={sectionRef}
        className="flex justify-center h-[110vh] bg-slate-50"
      > 
        <div
          className={` bg-black flex flex-col gap-20 rounded-[80px] p-16`}
          style={{
            width: window.innerWidth >= 640 ? width : 'auto', // Apply dynamic width for larger screens only
            transition: window.innerWidth >= 640 ? 'width 0.1s ease' : 'none', // Apply transition only for larger screens
          }}
        >
          <p className="xl:text-[130px] lg:text-[100px] text-[60px] text-white inline leading-none font-[500] tracking-[-.01em]">Get In Touch With Me!</p>
          <div className="flex justify-between lg:items-center flex-col lg:flex-row gap-10">
          <div className="form-container">
            <form className="form" action="mailto:aman.agarwal.1509@gmail.com" method="POST" encType="text/plain" name="EmailForm">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" required="" />
              </div>
              <div className="form-group">
                <label htmlFor="textarea">How Can I Help You?</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  rows="10"
                  cols="50"
                  required=""
                ></textarea>
              </div>
              <button className="form-submit-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className=" lg:w-1/3 flex flex-col gap-2 text-xl">
            <p className="text-white flex items-center gap-2 opacity-50"><MdOutlinePhone/>+91-7003959371</p>
            <p className="text-white flex items-center gap-2 opacity-50"><MdOutlineEmail/>aman.agarwal.1509@gmail.com</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
