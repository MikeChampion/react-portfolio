import PropTypes from "prop-types";

function Projects() {
    {/* Images should be 750w x 400h x 72dpi */}
    const projects = [
        {
            name: "Fitness Tracker",
            githubURL: "https://github.com/MikeChampion/fitness-tracker",
            icon: "logo-github",
            deployURL: "https://frozen-dusk-31622.herokuapp.com/",
            stack: "HTML, CSS, NodeJS, Express, Morgan, MySQL",
            image: "fitness.jpg"
        },
        {
            name: "Tech Blog",
            githubURL: "https://github.com/MikeChampion/tech-blog",
            icon: "logo-github",
            deployURL: "https://fierce-scrubland-84529.herokuapp.com/",
            stack: "HTML, CSS, Handlebars, NodeJS, Express, MySQL",
            image: "techBlog.jpg"
        },
        {
            name: "Employee Tracker",
            githubURL: "https://github.com/MikeChampion/employee-tracker",
            icon: "play-circle-outline",
            deployURL: "https://watch.screencastify.com/v/jyvtj5KVKoF1fjMzUNSB",
            stack: "NodeJS, MySQL",
            image: "empTracker.png"
        },
        {
            name: "Team Builder",
            githubURL: "https://github.com/MikeChampion/team-builder",
            icon: "play-circle-outline",
            deployURL: "https://watch.screencastify.com/v/woGBJdJ9EAjG5RZ8fgFL",
            stack: "HTML, CSS, NodeJS, Inquirer, Jest",
            image: "teamBuilder.png"
        },
        {
            name: "Weather App",
            githubURL: "https://github.com/MikeChampion/weather-app",
            icon: "logo-github",
            deployURL: "https://mikechampion.github.io/weather-app/",
            stack: "HTML, CSS, JS, OpenWeatherMap API",
            image: "weather.jpg"
        },
        {
            name: "Password Generator",
            githubURL: "https://github.com/MikeChampion/Password_Generator",
            icon: "logo-github",
            deployURL: "https://mikechampion.github.io/Password_Generator/",
            stack: "HTML, CSS, JS",
            image: "generator.jpg"
        },
      ];
       
    return (
        <div className="flex flex-col items-center mt-8 w-11/12">
        <h2 className="text-3xl font-bold">My projects</h2>
        <div id="projectsContainer" className="flex flex-col md:flex-row md:flex-wrap items-center md:justify-evenly mt-8 mb-20 w-11/12 lg:w-5/6 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="projectTile relative flex flex-wrap border border-blue-700 rounded-lg w-11/12 md:w-5/12 lg:w-1/4">
                        <img src={`./images/${project.image}`} alt="" className="rounded-lg w-full" />
                        <div className="projectOverlay flex flex-col gap-2 m-4 md:m-2 py-4 px-6 border-2 border-blue-900 lg:border-0 lg:m-0 lg:py-4 lg:px-6 lg:w-full lg:h-full lg:pl-10 lg:pt-12 bg-gray-100 bg-opacity-60 rounded-lg text-blue-900 absolute lg:opacity-0 lg:hover:opacity-100 lg:transition lg:delay-150">
                            <div className="projectTitle flex flex-row justify-start items-center gap-2 lg:gap-4 font-bold">
                                <a href={project.deployURL} className="underline text-base md:text-lg lg:text-xl" target="_blank" rel="noreferrer">
                                    {project.name}
                                </a>
                                <a href={project.githubURL} className="md:self-start" target="_blank" rel="noreferrer">
                                    <ion-icon title={project.name} name={project.icon} class={"text-lg md:text-xl lg:text-2xl text-blue-900"}></ion-icon>
                                </a>
                            </div>
                            <div className="text-xs md:text-sm lg:text-base font-bold">{project.stack}</div>  
                        </div>
                    </div>
                ))}
            
        </div>    </div>
    )
}

Projects.propTypes = {
    name: PropTypes.string,
    githubURL: PropTypes.string,
    icon: PropTypes.string,
    deployURL: PropTypes.string,
    stack: PropTypes.string,
    image: PropTypes.string
  };

export default Projects