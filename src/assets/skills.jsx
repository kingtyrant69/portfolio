import { useState } from "react";
import SkillCard from "../components/skillCard";

const Skills = () => {
  const [list, setList] = useState(["HTML", "CSS", "JavaScript"]);
  const [image, setImage] = useState("./image.png");
  const [title, setTitle] = useState("Frontend Development");

  return (
    <div className="sticky top-0">
    <div className="bg-slate-50 h-[100vh]">   
      <div className="flex justify-center items-center lg:pr-24">
        <div className="lg:inline-block hidden w-[40%]"></div>
        <div>
          <div>
            <div className="flex justify-between items-center">
              <p className="text-[45px] font-medium p-2 ">Skillsets</p>
            </div>
          </div>
          <div className="p-2">
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
