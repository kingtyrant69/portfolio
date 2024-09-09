import { useEffect, useRef, useState } from "react";
import SkillCard from "../components/skillCard";

const Skills = () => {
  const [list, setList] = useState(["HTML", "CSS", "JavaScript"]);
  const [image, setImage] = useState("./1.avif");
  const [title, setTitle] = useState("Frontend Development");
  const [width, setWidth] = useState(0);
  const [content, setContent] = useState("./1.avif");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sectionHeight = window.innerHeight;

    // Change content based on scroll position
    if (scrollPosition < sectionHeight / 2) {
      setContent("./1.avif");
    } else if (
      scrollPosition >= sectionHeight / 2 &&
      scrollPosition < sectionHeight + sectionHeight / 2
    ) {
      setContent("./image.png");
    } else {
      setContent("./1.avif");
    }
  };

  useEffect(() => {
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
            <div className="flex justify-between items-center">
              `
              <div className="flex justify-between items-center">
                <p className="text-[60px] font-medium p-2">Skillsets</p>
              </div>
              <div className="hidden lg:inline-block rounded-full bg-slate-200 h-[29px] relative overflow-hidden w-1/2">
                <div
                  className=" rounded-full bg-black h-full flex relative"
                  style={{ width, transition: "width 0.1s ease" }}
                ></div>
              </div>
            </div>
            <div className="p-2 snap-container">
              <div className="snap-section">
                <SkillCard
                  image_url={content}
                  title="Frontend"
                  secondTitle="Skills"
                  skills={["HTML", "CSS", "JavaScript"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
