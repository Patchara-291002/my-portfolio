'use client'

import Image from 'next/image'
import { useState, useEffect, useMemo, useRef } from 'react'
import { RightArrowIcon, LeftArrowIcon } from '../Icon'
import Resolution from '@/utils/ResolutionTracker';
import ProjectCardMobile from './ProjectCard';

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

gsap.registerPlugin(ScrollTrigger);

interface ProjectProps {
    project: {
        name: string;
        image: string;
        description: string;
        techStack: string[];
        demoLink: string;
        githubLink: string;
    }
}

export default function Project() {

    const projects = [
        {
            name: 'Taskly – Task Management for Students',
            image: '/Home.jpg',
            description: 'A web-based task management tool designed for students to create projects, collaborate with teammates, track task progress, and receive notifications.',
            techStack: [
                'Next.js',
                'Tailwind CSS',
                'Node.js',
                'AWS S3',
                'MongoDB'
            ],
            demoLink: '#',
            githubLink: '#'
        },
        {
            name: 'Image Uploader',
            image: '/Home.jpg',
            description: 'A backend service for uploading images and storing them on AWS S3. Returns a public URL for accessing the uploaded file.',
            techStack: [
                'Node.js',
                'AWS S3',
                'multer'
            ],
            demoLink: '#',
            githubLink: '#'
        },
        {
            name: 'Weather App',
            image: '/Home.jpg',
            description: 'A simple weather app that displays current weather data based on the city name entered by the user, focusing on API usage and frontend development.',
            techStack: [
                'Vite',
                'Tailwind CSS',
            ],
            demoLink: '#',
            githubLink: '#'
        },
        {
            name: 'Todo List',
            image: '/Home.jpg',
            description: 'A basic todo list application that stores tasks using localStorage. Built to practice UI design and state management in the browser.',
            techStack: [
                'Vite',
                'Tailwind CSS',
            ],
            demoLink: '#',
            githubLink: '#'
        },
    ]

    const textRef = useRef(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const [deviceType, setDeviceType] = useState(Resolution.getDeviceType());

    const slidePerPage = useMemo(() => {
        if (deviceType === 'desktop') {
            return 3;
        } else if (deviceType === 'tablet') {
            return 2;
        } else {
            return 1;
        }
    }, [deviceType]);

    useEffect(() => {
        setDeviceType(Resolution.getDeviceType());

        const unsubscribe = Resolution.addListener(() => {
            setDeviceType(Resolution.getDeviceType());
        });

        return () => unsubscribe();
    }, [])

    useEffect(() => {

        if (!containerRef.current) return;

        gsap.set(textRef.current, { opacity: 0, y: 100 });

        const projectItems = containerRef.current?.querySelectorAll('.project-item');
        gsap.set(projectItems, { x: 100 });

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
                duration: 1,
                ease: "power2.out"
            })
            .to(projectItems, {
                x: 0,
                scale: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: "back.out(1.7)"
            });

    }, [])

    return (
        <div
            className='flex items-center justify-center w-full min-h-screen px-4'
        >
            <div
                className='w-full max-w-[1280px] flex flex-col'
            >
                <div
                    className='text-center text-primaryColor'
                    ref={textRef}
                >
                    <p
                        className='text-2xl font-normal'
                    >
                        My projects
                    </p>
                    <p
                        className='text-lg font-light'
                    >
                        These are the tools I work with regularly to bring ideas to life.
                    </p>
                </div>
                <div
                    className='mt-2'
                    ref={containerRef}
                >
                    <Swiper
                        slidesPerView={slidePerPage}
                        centeredSlides={true}
                        spaceBetween={30}
                        initialSlide={1}
                        pagination={{
                            clickable: true,
                        }}
                    >
                        {
                            projects.map((project, index) => (
                                <SwiperSlide
                                    key={index}
                                >
                                    {({ isActive }) => (
                                        <div className={`project-item w-full my-6 flex justify-center transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-50'} `}>
                                            <ProjectCardMobile
                                                project={project}
                                                isActive={isActive}
                                            />
                                        </div>
                                    )}
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>
            </div>
        </div>
    )
}

