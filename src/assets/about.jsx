import Typewriter from "../components/typewriter";

const About = () => {
  return (
    <>
      <div className="relative top-1/2 left-1/5 flex lg:flex-row flex-col items-center lg:mx-[11vw] xl:mx-[20%] lg:my-[32vh] mx-[5vw] my-[30vh] p-2">
        <div className="flex-1 min-h-52">
          <div className="lg:text-[110px] text-[80px] font-[500] opacity-85 tracking-wide">
            <p className="typewriter w-fit">
              <Typewriter
                toRotate={["Code.", "Create.", "Innovate."]}
                period={500}
              />
            </p>
          </div>
        </div>
        <div className="uppercase text-[20px]">
          Hello, I am <strong>Aman Agarwal</strong>,<br /> a full-stack web
          developer <br />
          from Kolkata, India.
        </div>
      </div>
    </>
  );
};

export default About;
