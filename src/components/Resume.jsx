import PropTypes from "prop-types";

function Resume() {
    const front = ["HTML5", "CSS3", "TailwindCSS", "Responsive WWeb Design", "Accessibility Testing", "JavaScript", "ES6", "React", "jQuery", "Bootstrap", "Github", "Npm", "WebPack", "Chrome DevTools"];
    const back = ["NodeJS", 'Express', "MySQL", "MySQL Workbench", "MongoDB", "MongoDB Compass", "MongoDB Atlas", "Jest", "Mongoose", "Apollo", "Java", "Python", "Spring", "Django"];

    return (
        <div className="flex flex-col items-center mt-8 w-11/12">
            <h2 className="text-3xl font-bold">My Resume</h2>
            <div className="flex flex-col items-center w-11/12 mt-8 mb-20 lg:w-5/6 gap-4">
                <p className="self-center font-bold">Download my resume <a href="./assets/pdf/Michael_Champion_Resume_0621.pdf" className="underline" download>here</a></p>

                <div className="flex flex-col md:flex-row md:justify-between mb-20 w-4/5 md:w-3/4 lg:w-3/5 gap-4"> 
                    <div className="flex flex-col w-full md:w-2/5">
                        <h3 className="text-2xl font-bold">Front end</h3>
                        <ul>
                            {front.map((front, index) => {
                                return <li key={index} className="ml-4 text-xl">{front}</li>;
                            })}
                        </ul>
                    </div>
                    <div className="flex flex-col w-full md:w-2/5">
                        <h3 className="text-2xl font-bold">Back end</h3>
                        <ul>
                            {back.map((back, index) => {
                                return <li key={index} className="ml-4 text-xl">{back}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

Resume.propTypes = {
    front: PropTypes.array,
    back: PropTypes.array
  };

export default Resume