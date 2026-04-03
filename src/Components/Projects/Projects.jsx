import React from "react";
import ProjectCard from "./ProjectCard";
import pre_1 from "../../assets/pre_1.png";
import pre_4 from "../../assets/pre_4.png";
import pre_3 from "../../assets/pre_3.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 md:pt-10  text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
<ProjectCard
          title="Chat Application" image={pre_1} demoLink={"https://chat-app-nxmh.onrender.com"} sourceLink={"https://github.com/vipin1712/chat-application"}
main="This is my chatapplication that allows user to chat in real time .i used socket to make this happen .it facilitates the user sending messages and images for images storage i have used cloundinary"        />
        <ProjectCard
          title="E-Commerce" image={pre_4} demoLink={"https://e-commerce-1-0fch.onrender.com/"} sourceLink={"https://github.com/vipin1712/e-commerce"}
          main="This e-commerce web app is built using various web technologies, including Express.js, MongoDB, and JWT Authentication. It allows users to manage products, user registration, login, and cart functionalities"
        />
        <ProjectCard
          title="Basic Crud Operations" image={pre_3} demoLink={"https://crud-operation-frontend.onrender.com/"} sourceLink={"https://github.com/Afzal-Mia/CRUD_OPERATION"}
          main="Welcome to my CRUD Operations app, where I showcase my skills by performing Create, Read, Update, and Delete operations using React on the frontend and Node.js/Express on the backend."
        />
      </div>
    </div>
  );
};

export default Projects;
