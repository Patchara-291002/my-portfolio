import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GithubIcon, FileIcon, LinkedinIcon, MailIcon } from './Icon'


interface TextType {
    text: string;
    color: string;
}

interface ButtonProps {
    text: string;
    icon: React.ReactElement;
    textColor: string;
    bgColor: string;
}

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
            className='flex flex-col items-center justify-center w-full h-screen gap-1 px-4'
        >
            <Image
                src='/A guy.png'
                alt='A guy'
                width={250}
                height={250}
            />
            <div
                className='flex flex-wrap flex-col w-full max-w-[800px] font-normal text-secondaryColor'
            >
                <p
                    className='text-5xl font-black text-center text-primaryColor'
                >
                    Hi, I’m PAT
                </p>
                <div
                    className='flex flex-col w-full gap-1 mt-6 mb-1'
                >
                    <div
                        className='flex flex-wrap items-center justify-center w-full gap-2'
                    >
                        <TagButton text={"Patchara Kaewnissai"} color={"#0197F6"} />
                        <TagButton text={"22 years old"} color={"#F7B801"} />
                        <TagButton text={"Bachelor of Science (Applied Computer Science-Multimedia) KMUTT"} color={"#FF7D2C"} />
                        {/* {
                            LinkItem.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link}
                                >
                                    <button
                                        className='flex items-center gap-1 px-2 py-1 rounded-full cursor-pointer bg-white/70 button-shadow'
                                    >
                                        {
                                            React.cloneElement(item.icon, { color: "#291F1E", w: "16", h: "16" })
                                        }
                                        <p
                                            className='text-sm font-normal '
                                        >
                                            {item.name}
                                        </p>
                                    </button>
                                </Link>
                            ))
                        } */}
                    </div>
                </div>
                <CodeMockup />
                <div
                    className='flex items-center justify-center w-full gap-2 mt-4'
                >
                    <Button
                        text={"Resume"}
                        icon={<FileIcon w="24" h="24" color="#595D5F" />}
                        textColor='#595D5F'
                        bgColor='#FFFFFF'
                    />
                    <Button
                        text={"Get in touch"}
                        icon={<MailIcon w="24" h="24" color="#FFFFFF" />}
                        textColor='#F4F4ED'
                        bgColor='#FF7D2C'
                    />
                </div>
            </div>
        </div>
    )
}

const TagButton = ({ text, color }: TextType) => {
    return (
        <div
            className=''
        >
            <button
                className='flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-white/70 button-shadow text-nowrap'
            >
                <div
                    className='w-[10px] h-[10px] rounded-full'
                    style={{ backgroundColor: color }}
                />
                {text}
            </button>
        </div>
    )
}

const Button = ({ text, icon, textColor, bgColor }: ButtonProps) => {
    return (
        <button
            className='flex gap-2 px-6 py-2 font-bold cursor-pointer rounded-xl button-shadow'
            style={{ color: textColor, backgroundColor: bgColor }}
        >
            {icon}
            {text}
        </button>
    )
}

const CodeMockup = () => {
    return (
        <div className="w-full mt-4 mockup-code bg-primaryColor">
            <pre data-prefix="~" className='flex'>
                <code className='flex-1 text-yellow-500 text-pretty'>
                    I enjoy building web applications from the ground up from designing intuitive user interfaces
                </code>
            </pre>
            <pre data-prefix="~" className='flex'>
                <code className='flex-1 text-pink-500 text-pretty'>
                    To building backend systems. Web development is something I’m truly passionate about.
                </code>
            </pre>
            <pre data-prefix="~" className='flex'>
                <code className='flex-1 text-blue-500 text-pretty'>
                    I love turning ideas into real products and always enjoy learning new things along the way.
                </code>
            </pre>
            <pre data-prefix="~" className='flex'>
                <code className='flex-1 text-green-500 text-pretty'>
                    If you’re interested in working together or just want to connect, feel free to get in touch.
                </code>
            </pre>
        </div>
    )
}
