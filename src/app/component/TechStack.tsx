'use client'

import React, { useState, useEffect, useRef } from 'react'
import { HtmlIcon, CssIcon, JavascriptIcon, TypescriptIcon, ReactIcon, NextjsIcon, TailwindIcon, HerokuIcon, MongodbIcon, PostmanIcon, FigmaIcon, GithubIcon, MysqlIcon, ChakraIcon } from './Icon'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

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
            name: "Chakra UI",
            icon: <ChakraIcon />
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
            name: "MySQL",
            icon: <MysqlIcon />
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

    const textRef = useRef(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        gsap.set(textRef.current, { opacity: 0, y: 100 });

        const techItems = containerRef.current?.querySelectorAll('.tech-item');
        gsap.set(techItems, { opacity: 0, y: 50, scale: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current, 
                start: "top 85%",     
                end: "bottom 85%",              
                scrub: true,
                toggleActions: "play none none reverse", 
                markers: false,        
            }
        });

        tl
            .to(textRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            })
            .to(techItems, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: "back.out(1.7)"
            }, "-=0.5");
    }, [])

    return (
        <div
            className='flex items-center justify-center w-full min-h-screen px-4'
        >
            <div
                className='w-full max-w-[1200px] flex flex-col'
            >
                <div
                    ref={textRef}
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
                    ref={containerRef}
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
            className='tech-item button-shadow md:w-[150px] md:h-[150px] w-[100px] h-[100px] rounded-lg bg-white/70 flex flex-col gap-2 items-center justify-center hover:translate-y-[-4px] transition-all duration-300 ease-in-out text-secondaryColor '
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


