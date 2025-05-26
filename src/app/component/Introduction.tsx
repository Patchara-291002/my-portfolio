import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GithubIcon, FileIcon, LinkedinIcon } from './Icon'

export default function Introduction() {

    const LinkItem = [
        {
            name: "CV",
            link: "#",
            icon: <FileIcon w="24" h="24" color="#291F1E" />
        },
        {
            name: "Github",
            link: "#",
            icon: <GithubIcon w="24" h="24" color="#291F1E" />
        },
        {
            name: "LinkedIn",
            link: "#",
            icon: <LinkedinIcon w="24" h="24" color="#291F1E" />
        }
    ]

    return (
        <div
            className='flex items-center justify-center w-full h-screen'
        >
            <div
                className='flex flex-col max-w-[800px] font-normal text-secondaryColor'
            >
                <p
                    className='text-5xl font-extrabold text-accentColor'
                >
                    Hi, I’m PAT
                </p>
                <p
                    className='mt-4 text-primaryColor'
                >
                    Name : Patchara Kaewnissai
                    <br />
                    Age : 22 years old
                    <br />
                    Education : Education : Bachelor of Science (Applied Computer Science-Multimedia) KMUTT
                </p>
                <p
                    className='mt-1 text-primaryColor text-balance'
                >
                    I enjoy building web applications from the ground up — from designing intuitive user interfaces to building backend systems. Web development is something I’m truly passionate about. I love turning ideas into real, usable products and always enjoy learning new things along the way. If you’re interested in working together or just want to connect, feel free to get in touch or check out my CV below.
                </p>
                <div
                    className='flex items-center gap-4 mt-4'
                >
                    {
                        LinkItem.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                            >
                                <button
                                    className='p-1 border-2 rounded-sm border-primaryColor hover:bg-[#FFFBF4]'
                                >
                                    {item.icon}
                                </button>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <Image
                src='/A guy.png'
                alt='A guy'
                width={400}
                height={400}
            />
        </div>
    )
}
