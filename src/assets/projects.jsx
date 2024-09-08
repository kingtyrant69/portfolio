import ProjectCard from "../components/Project-card";

const Projects = () => {
  return (
    <div className="flex flex-col z-[5000]">
      <div>
      <p className="text-[50px] font-[500] m-16 mt-0 flex justify-center">
        Recent Projects
      </p>
      </div>
      <div>
        <div className="sticky top-0">
          <ProjectCard
            title="Testimonials"
            footer="Saas Product"
            content="You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:bg-gradient-to-r to apply the bg-gradient-to-r utility at only medium screen sizes and above."
            image_url="/image.png"
            stack="MERN Stack"
            color="bg-blue-300"
          />
        </div>
        <div className="sticky top-0">
          <ProjectCard
            title="Twitter App"
            footer="Clone Type"
            content="If you need to use a one-off background-image value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value."
            image_url="/image.png"
            stack="NextJS, PostgreSQL"
            color="bg-green-300"
          />
        </div>
        <div className="sticky top-0">
          <ProjectCard
            title="Weather App"
            footer="External Api"
            content="You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:bg-gradient-to-r to apply the bg-gradient-to-r utility at only medium screen sizes and above."
            image_url="/image.png"
            stack="MERN Stack"
            color="bg-red-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
