import { useEffect, useRef, useState } from "react";
import SkillCard from "../components/skillCard";

const Skills = () => {
  const [list, setList] = useState(["HTML", "CSS", "JavaScript"]);
  const [image, setImage] = useState("./1.avif");
  const [title, setTitle] = useState("Frontend Development");

  const sectionRef = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
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
        const newWidth = visibilityPercentage * 100;

        setWidth(`${newWidth}%`);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="sticky top-0">
    <div className="bg-slate-50 h-[100vh] lg:p-20">   
      <div className="flex justify-center items-center">
        <div className="lg:inline-block hidden w-[20%]"></div>
        <div>
            <div className="flex justify-between items-center">``
                <div className="flex justify-between items-center">
                <p className="text-[60px] font-medium p-2">Skillsets</p>
                </div>
                <div className="hidden lg:inline-block rounded-full bg-slate-200 h-[29px] relative overflow-hidden w-1/2">
                <div className=" rounded-full bg-black h-full flex relative" style={{width,  transition:'width 0.5s ease'}}>
                    
                </div>
                </div>
            </div>
          <div className="p-2" ref={sectionRef}>
            <SkillCard
              image_url={image}
              title={title}
              secondTitle="Skills"
              skills={list}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;
