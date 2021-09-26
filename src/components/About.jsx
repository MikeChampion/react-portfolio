function About() {
    return (
        <div className="flex flex-col items-center mt-8 w-11/12">
            <h2>About Me</h2>
            <div className="flex flex-col items-center w-11/12">
                <img
                    src="./images/headshot.jpg"
                    alt=""
                    className="py-4 w-3/4 rounded-full"
                />
                <article className="flex flex-col gap-4 mb-16">
                        <p>
                            Hi, I&#39;m Mike Champion, and I&#39;m here to
                            &#39;champion&#39; any web project you have to the
                            finish line! (And, yes, I&#39;m fluent in puns,
                            word play, and dad jokes.)
                        </p>
                        <p>
                            I completed the LC101 course at LaunchCode
                            in 2017, where I learned Python, Java,
                            MySQL, and refreshed my knowledge of
                            HTML/CSS. Since then I&#39;ve picked up
                            JavaScript, Flexbox, and some Bootstrap
                            along the way. In June of 2020 I got my
                            Trusted Tester certification. While web
                            development is a new career path for me, I
                            have years of learning via Google for
                            positions where I was the entire IT
                            department and experience managing people
                            and cultivating relationships.
                        </p>
                        <p className="">
                            In my free time, I play tabletop board
                            games, which involves digging in and
                            learning new rules, and explaining them to
                            the group (and then refactoring once we
                            discover we have one of the rules wrong).
                        </p>
                </article>
            </div>
        </div>
    )
}

export default About;