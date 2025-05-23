'use client'

import { MenuIcon } from './Icon'
import { useState } from 'react';


interface NavbarProps {
    path: {
        name: string;
        link: string;
    }[]
}

interface MobileNavbarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isOpen: boolean) => void;
}

export default function Navbar() {

    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const path = [
        {
            name: "About me",
            link: "#"
        },
        {
            name: "Projects",
            link: "#"
        },
        {
            name: "Contact",
            link: "#"
        }
    ]

    return (
        <>
            <div className="hidden lg:block">
                <DesktopNavbar path={path} />
            </div>

            <div className="block lg:hidden">
                <MobileNavbar path={path} setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
            </div>

            {
                isSidebarOpen && (
                    <MobileSidebar path={path} setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
                )
            }
        </>
    )
}

const DesktopNavbar = ({ path }: NavbarProps) => {
    return (
        <div
            className='w-full py-4 navbar-shadow'
        >
            <div
                className='max-w-[1280px] px-4 mx-auto flex justify-between items-center'
            >
                <p
                    className='text-3xl font-bold text-primaryColor'
                >
                    Patchara K.
                </p>
                <div
                    className='flex items-center justify-between gap-10'
                >
                    <div
                        className='flex items-center justify-between gap-6'
                    >
                        {
                            path.map((item, index) => (
                                <a
                                    className='font-medium text-secondaryColor'
                                    href={item.link}
                                    key={index}
                                >
                                    {item.name}
                                </a>
                            ))
                        }
                    </div>
                    <button
                        className='bg-accentColor py-[6px] px-[12px] rounded-xl font-semibold text-backgroundColor cursor-pointer'
                    >
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    )
}

const MobileNavbar = ({ path, setIsSidebarOpen, isSidebarOpen }: NavbarProps & MobileNavbarProps) => {
    return (
        <div
            className='w-full py-4 navbar-shadow'
        >
            <div
                className='max-w-[1280px] px-4 mx-auto flex justify-between items-center'
            >
                <p
                    className='text-3xl font-bold text-primaryColor'
                >
                    Patchara K.
                </p>
                <button
                    className='p-2 cursor-pointer bg-accentColor rounded-xl'
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <MenuIcon
                        w="24"
                        h="24"
                        color="#F4F4ED"
                    />
                </button>
            </div>
        </div>
    )
}

const MobileSidebar = ({ path, setIsSidebarOpen, isSidebarOpen }: NavbarProps & MobileNavbarProps) => {
    return (
        <div
            className='absolute inset-0 z-10 w-full h-screen bg-black/20 blur-sm'
        >
            <div
                className='absolute top-0 right-0 w-[50%] bg-backgroundColor navbar-shadow h-full'
            >
                {
                    path.map((item, index) => (
                        <a
                            className='font-medium text-secondaryColor'
                            href={item.link}
                            key={index}
                        >
                            {item.name}
                        </a>
                    ))
                }
            </div>
        </div>
    )
}
