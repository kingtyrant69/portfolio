import { BsArrow90DegRight } from "react-icons/bs";

const ProjectCard = ({title, stack, content, image_url, footer, color}) => {
  return (
    <div>
      <div className={`${color} h-screen w-full lg:rounded-t-[80px] rounded-t-[50px] lg:p-24 p-12`}>
        <div className="flex lg:flex-row flex-col justify-center gap-16">
          <div className="flex flex-row-reverse justify-between lg:justify-normal lg:gap-20 lg:flex-row lg:w-2/3">
              <p className=" text-slate-700">{stack}</p>
            <div>
              <p className="text-slate-700 font-bold hover:underline cursor-pointer">{title}</p>
              <p className="text-slate-700">({footer})</p>
            </div>
          </div>
          <div className="flex lg:flex-col flex-col-reverse items-center justify-center lg:w-2/3 gap-16 lg:gap-20">
          <button className="lg:hidden btn-20"><span className="flex items-center gap-2"><p>Link</p><BsArrow90DegRight size={15}/></span></button>
            <p className="text-slate-700">
              {content}
            </p>
            <img src={image_url} className="w-[100%] h-fit hover:scale-105 transition"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
