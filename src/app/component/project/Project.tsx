'use client'

import Image from 'next/image'
import { useState, useEffect, useMemo } from 'react'
import { RightArrowIcon, LeftArrowIcon } from '../Icon'
import Resolution from '@/utils/ResolutionTracker';
import ProjectCardMobile from './ProjectCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

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
            name: 'TASKLY Student Task Managment',
            image: '/Home.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime doloremque excepturi vero labore veniam deleniti distinctio iusto similique, amet assumenda adipisci eaque debitis facere dolore doloribus officia exercitationem quidem. Doloribus.',
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
            name: 'TASKLY Student Task Managment',
            image: '/Home.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime doloremque excepturi vero labore veniam deleniti distinctio iusto similique, amet assumenda adipisci eaque debitis facere dolore doloribus officia exercitationem quidem. Doloribus.',
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
            name: 'TASKLY Student Task Managment',
            image: '/Home.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime doloremque excepturi vero labore veniam deleniti distinctio iusto similique, amet assumenda adipisci eaque debitis facere dolore doloribus officia exercitationem quidem. Doloribus.',
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
    ]

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

    return (
        <div
            className='flex items-center justify-center w-full min-h-screen px-4'
        >
            <div
                className='w-full max-w-[1280px] flex flex-col'
            >
                <div
                    className='text-center text-primaryColor'
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
                >
                    <Swiper
                        slidesPerView={slidePerPage}
                        centeredSlides={true}
                        spaceBetween={30}
                        initialSlide={1}
                        pagination={{
                            clickable: true,
                        }}
                        className=''
                    >
                        {
                            projects.map((project, index) => (
                                <SwiperSlide
                                    key={index}
                                >
                                    {({ isActive }) => (
                                        <div className={`w-full my-6 flex justify-center transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-50'} `}>
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

