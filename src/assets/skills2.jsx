import React from 'react'
import { motion } from 'framer-motion'

const Skills2 = () => {
    const marqueeVariants = {
        animate: {
          x: [-5000, 0], // Reduced width
          transition: {
            repeat: Infinity,
            duration: 30, // Adjusted duration
            ease: "linear",
          },
        },
      }
  return (
    <section className='lg:h-[80vh] h-[50vh] overflow-hidden sticky top-0'>
        <div className='mb-30 mt-20 bg-slate-50'>
      <motion.section 
        className="md:w-[1800px] w-[600px] md:h-[160px] h-[80px] bg-[#3d4352] flex justify-center items-center mb-3 -ml-2 rotate-[3deg] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.div
          className="scrolling-text whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          <span className="md:text-[120px] text-[40px] __className_e799de text-white inline-block" style={{ width: "8000px" }}>
            NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; MONGODB &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; MONGODB &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; MONGODB &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; MONGODB &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; MONGODB &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; MONGODB &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; MONGODB &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; MONGODB &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; MONGODB &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; MONGODB &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; MONGODB &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; MONGODB &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; MONGODB &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; MONGODB &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; MONGODB &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; MONGODB &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; MONGODB &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; MONGODB &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp;
          </span>
        </motion.div>
      </motion.section>

      <motion.section 
        className="md:w-[1800px] w-[600px] md:h-[160px] h-[80px] bg-[#735fb0] flex justify-center items-center -ml-3 -rotate-[3deg] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      > 
        <motion.div
          className="scrolling-text whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          <span className="md:text-[120px] text-[40px] __className_e799de text-white inline-block" style={{ width: "8000px" }}>
            UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; NODE.JS &nbsp; # &nbsp; BACKEND &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; SQL &nbsp; # &nbsp; UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; NODE.JS &nbsp; # &nbsp; BACKEND &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; SQL &nbsp; # &nbsp; UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; NODE.JS &nbsp; # &nbsp; BACKEND &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; SQL &nbsp; # &nbsp; UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; NODE.JS &nbsp; # &nbsp; BACKEND &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; SQL &nbsp; # &nbsp; UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; NODE.JS &nbsp; # &nbsp; BACKEND &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; SQL &nbsp; # &nbsp; UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; NODE.JS &nbsp; # &nbsp; BACKEND &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; SQL &nbsp; # &nbsp; UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; NODE.JS &nbsp; # &nbsp; BACKEND &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; SQL &nbsp; # &nbsp; UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; NODE.JS &nbsp; # &nbsp; BACKEND &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; SQL &nbsp; # &nbsp; UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; NODE.JS &nbsp; # &nbsp; BACKEND &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; SQL &nbsp; # &nbsp; UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; NODE.JS &nbsp; # &nbsp; BACKEND &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; SQL &nbsp; # &nbsp; UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; NODE.JS &nbsp; # &nbsp; BACKEND &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; SQL &nbsp; # &nbsp; UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; NODE.JS &nbsp; # &nbsp; BACKEND &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; SQL &nbsp; # &nbsp; UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; NODE.JS &nbsp; # &nbsp; BACKEND &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; SQL &nbsp; # &nbsp; UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; NODE.JS &nbsp; # &nbsp; BACKEND &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; SQL &nbsp; # &nbsp; UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; NODE.JS &nbsp; # &nbsp; BACKEND &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; SQL &nbsp; # &nbsp; UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; NODE.JS &nbsp; # &nbsp; BACKEND &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; SQL &nbsp; # &nbsp; UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; NODE.JS &nbsp; # &nbsp; BACKEND &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; SQL &nbsp; # &nbsp; UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; NODE.JS &nbsp; # &nbsp; BACKEND &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; SQL &nbsp; # &nbsp;
          </span>
        </motion.div>
      </motion.section>
      </div>
    </section>
  );
}

export default Skills2;
