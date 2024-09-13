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
            content="Our MERN stack project, Testimonials, is designed to collect and showcase user feedback seamlessly. Utilizing MongoDB for data storage, Express.js and Node.js for server-side logic, and React for a dynamic front-end, this application allows users to submit, view, and manage testimonials effortlessly."
            image_url="/image.png"
            stack="MERN Stack"
            color="bg-[#d2d6e0]"
          />
        </div>
        <div className="sticky top-0">
          <ProjectCard
            title="Twitter App"
            footer="Clone Type"
            content="TweetStream is a Twitter clone built with Next.js, offering a sleek and responsive social media experience. Users can post tweets, follow others, and interact with a live feed of updates. Utilizing Next.js for server-side rendering and static site generation, TweetStream ensures fast load times and optimal performance. "
            image_url="/image2.png"
            stack="NextJS, PostgreSQL"
            color="bg-red-200"
          />
        </div>
        <div className="sticky top-0">
          <ProjectCard
            title="Portfolio Website"
            footer="Portfolio"
            content="My Portfolio is a sleek, modern portfolio website crafted with Vite and React. Leveraging Vite's fast build times and hot module replacement, My Portfolio offers a smooth, responsive experience for viewing projects, skills, and achievements."
            image_url="/image3.png"
            stack="Vite+React"
            color="bg-[#a29ab9]"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
