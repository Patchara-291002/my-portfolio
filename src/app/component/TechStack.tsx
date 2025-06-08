import React from 'react'
import { HtmlIcon, CssIcon, JavascriptIcon, TypescriptIcon, ReactIcon, NextjsIcon, TailwindIcon, HerokuIcon, MongodbIcon, PostmanIcon, FigmaIcon, GithubIcon } from './Icon'


interface TechStackItemProps {
    name: string;
    icon: React.ReactElement<IconProps>;
}

interface IconProps {
    w?: string;
    h?: string;
}

export default function TechStack() {

    const techStack = [
        {
            name: "HTML",
            icon: <HtmlIcon />
        },
        {
            name: "CSS",
            icon: <CssIcon />
        },
        {
            name: "JavaScript",
            icon: <JavascriptIcon />
        },
        {
            name: "TypeScript",
            icon: <TypescriptIcon />
        },
        {
            name: "React.js",
            icon: <ReactIcon />
        },
        {
            name: "Next.js",
            icon: <NextjsIcon />
        },
        {
            name: "Tailwind CSS",
            icon: <TailwindIcon />
        },
        {
            name: "Heroku",
            icon: <HerokuIcon />
        },
        {
            name: "MongoDB",
            icon: <MongodbIcon />
        },
        {
            name: "Postman",
            icon: <PostmanIcon />
        },
        {
            name: "Figma",
            icon: <FigmaIcon />
        },
        {
            name: "GitHub",
            icon: <GithubIcon />
        }
    ];

    return (
        <div
            className='flex items-center justify-center w-full min-h-screen px-4'
        >
            <div
                className='w-full max-w-[1200px] flex flex-col'
            >
                <div
                    className='text-center text-primaryColor'
                >
                    <p
                        className='text-2xl font-normal'
                    >
                        My Tech Stack
                    </p>
                    <p
                        className='text-lg font-light'
                    >
                        These are the tools I work with regularly to bring ideas to life.
                    </p>
                </div>
                <div
                    className='grid w-full gap-4 mt-8 md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] grid-cols-[repeat(auto-fit,minmax(100px,1fr))]'
                >
                    {
                        techStack.map((item, index) => (
                            <TechStackItem
                                key={index}
                                name={item.name}
                                icon={item.icon}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const TechStackItem = ({ name, icon }: TechStackItemProps) => {
    return (
        <div
            className='button-shadow md:w-[150px] md:h-[150px] w-[100px] h-[100px] rounded-lg bg-white/70 flex flex-col gap-2 items-center justify-center hover:translate-y-[-4px] transition-all duration-300 ease-in-out text-secondaryColor '
        >
            {React.cloneElement(icon, { w: "32", h: "32" })}
            <p
                className='font-nomal'
            >
                {name}
            </p>
        </div>
    )
}


