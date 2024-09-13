import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [translatePercent, setTranslatePercent] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="bg-white rounded-full border-2 w-[25%] h-14 border-slate-300 opacity-90">
      <div className="absolute bg-black rounded-full z-[-1] content-[''] w-[6%] h-14" style={{translate:`${translatePercent}% 0`, transition:"translate 0.3s ease"}}></div>
      <ul className="grid grid-cols-4 items-center justify-center" onMouseLeave={()=>{setTranslatePercent(0); setActiveIndex(0);}}>
      {["About", "Skills", "Projects", "Contact"].map((item, index) => (
          <li
            key={index}
            className={`font-bold cursor-pointer flex justify-center items-center rounded-full h-14 
              ${activeIndex === index ? "text-white" : "text-black"}`} // Dynamically change text color
            onMouseEnter={() => {
              setTranslatePercent(index * 105); // Adjust the percentage based on the item
              setActiveIndex(index); // Set active index to change text color
            }}
            onClick={() => {}}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
