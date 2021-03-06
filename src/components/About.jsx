import headshot from "../images/headshot.jpg";

function About() {
    return (
        <div className="flex flex-col items-center mt-8 w-11/12">
            <h2 className="text-3xl font-bold">About Me</h2>
            <div className="flex flex-col items-center mt-8 mb-20 w-11/12 md:w-3/4 lg:w-1/2 gap-4 lg:gap-8">
                <div className="flex flex-col md:flex-row md:justify-around md:items-center items-center gap-4 md:gap-2">
                    <img
                        src={headshot}
                        alt=""
                        className="w-3/4 md:w-1/3 rounded-full"
                    />
                    <p className="md:w-3/5 lg:w-2/5">
                        Hi, I'm Mike Champion, and I'm here to
                        'champion' any web project you have to the
                        finish line! In my free time I play tabletop board
                        games, which involves digging in and
                        learning new rules, then explaining them to
                        the group (and possibly re-teaching once we
                        discover we have been doing something wrong).
                    </p>
                </div>
                    <p>
                        I completed a mainly back-end focused boot camp in 2017 where I learned Python, Java, MySQL, and refreshed my knowledge of HTML/CSS. In June of 2020 I got my Trusted Tester certification so that I can evaluate sites and help make them better for people using screen readers and other assistive technologies. I'm nearing the end of a full-stack boot camp where I have picked up JavaScript, TailwindCSS, React, NodeJS, and MongoDB. While web development is a new career path for me, I have years of learning via Google for positions where I was the entire IT department and experience managing people and cultivating relationships.
                    </p>
            </div>
        </div>
    )
}

export default About;