import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Projects() {
    const projects = [
        {
            name: "Password Generator",
            githubURL: "https://github.com/MikeChampion/Password_Generator",
            githubicon: "github",
            deployURL: "https://mikechampion.github.io/Password_Generator/",
            deployicon: "pulse",
            stack: "HTML, CSS, JS",
            image: "generator",
        },
        {
            name: "Password Generator",
            githubURL: "https://github.com/MikeChampion/Password_Generator",
            githubicon: "github",
            deployURL: "https://mikechampion.github.io/Password_Generator/",
            deployicon: "pulse",
            stack: "HTML, CSS, JS",
            image: "generator",
        },
        {
            name: "Password Generator",
            githubURL: "https://github.com/MikeChampion/Password_Generator",
            githubicon: "github",
            deployURL: "https://mikechampion.github.io/Password_Generator/",
            deployicon: "pulse",
            stack: "HTML, CSS, JS",
            image: "generator",
        },
      ];
       {/* <p> The PROJECTS page six projects including links to deployed app and github repo </p> */}
    return (
        <div id="projectsContainer" className="flex flex-col md:flex-row md:flex-wrap items-center md:justify-evenly m-8 w-11/12 lg:w-5/6 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="projectTile relative flex flex-wrap border-1 border-blue-700 rounded-lg w-11/12 md:w-5/12 lg:w-1/4">
                        <img src="/images/generator.jpg" alt="" className="rounded-lg w-full" />
                        <div className="projectOverlay flex flex-col gap-2 m-4 py-4 px-6 border-2 border-blue-900 lg:border-0 lg:m-0 lg:py-4 lg:px-6 lg:w-full lg:h-full lg:pl-10 lg:pt-12 bg-gray-200 bg-opacity-60 rounded-lg text-blue-900 absolute lg:opacity-0 lg:hover:opacity-100 lg:transition lg:delay-250">
                            <div className="projectTitle flex flex-row items-end gap-2 lg:gap-4 font-bold">
                                <a href={project.deployURL} className="underline md:text-md lg:text-lg" target="_blank" rel="noreferrer">
                                    {project.name}
                                </a>
                                <a href={project.githubURL} className="md:self-start" target="_blank" rel="noreferrer">
                                    <i title={project.name} className={`ion-logo-${project.githubicon} text-2xl`}></i>
                                </a>
                            </div>
                            <div className="font-bold">{project.stack}</div>  
                        </div>
                    </div>
                ))}
            
        </div>    
    )
}

Projects.propTypes = {
    name: PropTypes.string,
    githubURL: PropTypes.string,
    githubicon: PropTypes.string,
    deployURL: PropTypes.string,
    deployicon: PropTypes.string,
    stack: PropTypes.string,
    image: PropTypes.string
  };

export default Projects