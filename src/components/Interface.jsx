import { programmingLanguages, frameworkLanguages, graphicEngines, skills } from "../utils/SkillInfo";
import { motion } from "framer-motion";

const Section = (props) => {
    const { children } = props;
    return (
        <motion.section
            className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}
            initial={{
                opacity: 0,
                y: 50
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 0.5
                }
            }}>
            {children}
        </motion.section>
    )
}

export const Interface = () => {
    return <div className="flex flex-col items-center w-screen">
        <AboutSection />

        <SkillsSection />
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
            <div className="bg-white px-1 italic w-full max-w-64">Johan Andreas Pranoto</div>
        </h1>
        <motion.p className="text-lg text-gray-600 mt-4"
            initial={{
                opacity: 0,
                y: 25
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 1.5
                }
            }}
        >
            I love games and code
            <br />
            A fast learner person
        </motion.p>
        <motion.button className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}
            initial={{
                opacity: 0,
                y: 25
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 2
                }
            }}
        >Contact Me</motion.button>
    </Section>
    )
}


const SkillsSection = () => {
    const skillList = skills;
    console.log(skillList, 'skill list');
    const listItems = skillList.map((number, index) =>
        index != 0 ?
            <ListSkills key={`skill-${index}`} title={number.title} list={number.list} isMargin={true}>{number.title}</ListSkills>
            : <ListSkills key={`skill-${index}`} title={number.title} list={number.list}>{number.title}</ListSkills>


    );
    return (
        <Section>
            {listItems}
            <div>
                Framework
                @Todo, list icon - icon framework engine and graphic engine used
            </div>
        </Section>
    )
}

const ListSkills = (props) => {
    const { title, list, isMargin } = props;
    console.log(title, list, 'title, list');
    return (
        <motion.div whileInView={"visible"}>
            <h2 className={"text-3xl font-bold " + (isMargin ? 'mt-10' : '')}>
                {title}
            </h2>
            <div className="mt-8 space-y-4">
                {
                    list.map((skill, index) => (
                        <div className="w-64" key={index}>
                            <motion.h3 className="text-md font-bold text-gray-800"
                                initial={{
                                    opacity: 0
                                }}
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            duration: 1,
                                            delay: 1 + index * 0.2
                                        }
                                    }
                                }}
                            >{skill.title}</motion.h3>
                            <div className="h-2 w-full bg-gray-50 rounded-full mt-2">
                                <motion.div className="h-full bg-indigo-500 rounded-full" style={{ width: `${skill.level}%` }}
                                    initial={{
                                        scaleX: 0,
                                        originX: 0
                                    }}
                                    variants={{
                                        visible: {
                                            scaleX: 1,
                                            transition: {
                                                duration: 1,
                                                delay: 1 + index * 0.2
                                            }
                                        }
                                    }}
                                ></motion.div>
                            </div>
                        </div>
                    ))}
            </div>
        </motion.div>

    )
}