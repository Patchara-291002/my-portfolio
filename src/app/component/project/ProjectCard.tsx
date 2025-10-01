import Image from 'next/image'
import { useState, useEffect } from 'react'

interface ProjectProps {
    project: {
        name: string;
        image: string;
        description: string;
        techStack: string[];
        demoLink: string;
        githubLink: string;
    },
    isActive?: boolean;
}

export default function ProjectCardMobile({ project, isActive }: ProjectProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (!isActive && isOpen) {
            setIsOpen(false);
        }
    }, [isActive, isOpen]);

    const handleToggle = () => {
        if (isActive) {
            setIsOpen(!isOpen);
        }
    }

    return (
        <div
            className={`relative w-[400px] flex flex-col p-2 transition-all duration-300 ease-in-out rounded-lg bg-white/70 button-shadow ${!isActive ? 'cursor-default' : 'cursor-pointer'}`}
            style={{
                height: isOpen ? "520px" : '267px',
            }}
            onClick={handleToggle}
        >
            <p
                className='my-1 font-semibold text-center text-primaryColor'
            >
                {project.name}
            </p>
            <div
                className='flex flex-col w-full h-full '
            >
                <div
                    className='z-20 shrink-0 w-full h-full max-h-[220px]'
                >
                    <Image
                        src={project.image}
                        alt='taskly'
                        width={1000}
                        height={1000}
                        className='w-full rounded-lg max-h-[220px]'
                    />
                </div>

                <div
                    className='relative w-full h-full'
                >
                    <div
                        className={`absolute h-full z-10 w-full rounded-lg transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}
                        style={{
                            pointerEvents: isOpen ? 'auto' : 'none',
                        }}
                    >
                        <div
                            className='flex flex-col justify-between gap-2 h-full'
                        >
                            <div
                                className='flex flex-col justify-between gap-2 mt-2'
                            >
                                <div
                                    className='flex flex-wrap gap-1'
                                >
                                    {project.techStack.map((tech, index) => (
                                        <button
                                            className='flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-white/70 button-shadow text-nowrap'
                                            key={index}
                                        >
                                            {tech}
                                        </button>
                                    ))}
                                </div>
                                <p className='text-sm font-light'>
                                    {project.description}
                                </p>
                            </div>
                            <div
                                className='flex items-center justify-end gap-2'
                            >
                                <button className='px-4 py-2 text-sm font-medium rounded-lg cursor-pointer bg-primaryColor text-backgroundColor button-shadow'
                                    onClick={() => window.open(project.githubLink, '_blank')}
                                >
                                    Github
                                </button>
                                {project.demoLink !== '' && (
                                    <button className='px-4 py-2 text-sm font-medium rounded-lg cursor-pointer bg-accentColor text-backgroundColor button-shadow'
                                        onClick={() => window.open(project.githubLink, '_blank')}
                                    >
                                        Demo
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
