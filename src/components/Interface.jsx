const Section = (props) => {
    const { children } = props;
    return (
        <section className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}>
            {children}
        </section>
    )
}

export const Interface = () => {
    return <div className="flex flex-col items-center w-screen">
        <AboutSection />
        
        <SkillsSection/>
        <Section>
            <h1>
                Experience
            </h1>
        </Section>
        <Section>
            <h1>
                Projects
            </h1>
        </Section>
        <Section>
            <h1>
                Contact
            </h1>
        </Section>
    </div>
}

const AboutSection = () => {
    return (<Section>
        <h1 className="text-6xl font-extrabold leading-snug">Hi, I'm
            <br />
            <span className="bg-white px-1 italic">Johan Andreas Pranoto</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
            I love games and code
            <br />
            A fast learner person
        </p>
        <button className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}>Contact Me</button>
    </Section>
    )
}

const programmingLanguages = [
        {
            title : "Javascript",
            level : 95
        },
        {
            title : "Typescript",
            level : 80
        },
        {
            title : "PHP",
            level: 95
        },
        {
            title: "PostgreSQL",
            level: 75
        },
        {
            title: "MySQL",
            level: 70
        },
        {
            title: "Dart",
            level: 60
        },
        {
            title: "C#",
            level: 65
        }
]

const frameworkLanguages = [
    {
        title: "ReactJs(Javascript)",
        level: 70
    },
    {
        title: "Vuejs(Javascript)",
        level: 95
    },
    {
        title: "NodeJs(Typescript)",
        level: 85
    },
    {
        title: "Nestjs(Typescript)",
        level: 85
    },
    {
        title: "Flutter",
        level: 75
    },
    {
        title: "Laravel",
        level: 95
    },
]

const graphicEngines =[
    {
        title: "UnrealEngine (v4, v5)",
        level: 60
    },
    {
        title: "Unity Engine",
        level: 65
    },
    {
        title: "ThreeJs",
        level: 70
    }
] 

// const languages = [
//     {
//         title : "English",
//         level : 75
//     }
// ]

const SkillsSection = () => {
    return (
        <Section>
            Skills
        </Section>
    )
}