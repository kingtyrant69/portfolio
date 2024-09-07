import { BsArrow90DegRight } from "react-icons/bs";

const ProjectCard = ({title, stack, content, image_url, footer, color}) => {
  return (
    <div>
      <div className={`${color} h-screen w-full lg:rounded-t-[80px] rounded-t-[50px] p-24`}>
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row lg:gap-20 gap-5 w-1/2">
              <p className=" text-slate-700">{stack}</p>
            <div className="">
              <p className="text-slate-700 font-bold hover:underline cursor-pointer">{title}</p>
              <p className="text-slate-700">({footer})</p>
            </div>
          </div>
            <div className="flex items-center justify-center w-1/2">
              <p className="text-slate-700">
                {content}
              </p>
            </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="lg:w-2/3 w-0"></div>
            <img src={image_url} className="w-[100%] lg:w-[50%] h-fit hover:scale-105 transition lg:mt-20 mt-10 fade-in"/>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
