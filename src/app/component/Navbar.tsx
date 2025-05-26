'use client'

import { MenuIcon, UserIcon, MailIcon, FolderIcon } from './Icon'
import Resolution from '@/utils/ResolutionTracker';
import React, { useEffect, useState } from 'react';


interface NavbarProps {
    path: {
        name: string;
        link: string;
        icon: React.ReactNode;
    }[]
}

export default function Navbar() {

    const [deviceType, setDeviceType] = useState(Resolution.getDeviceType());

    useEffect(() => {
        setDeviceType(Resolution.getDeviceType());

        const unsubscribe = Resolution.addListener(() => {
            setDeviceType(Resolution.getDeviceType());
        });

        return () => unsubscribe();
    }, [])

    const path = [
        {
            name: "About me",
            link: "#",
            icon: <UserIcon w="24" h="24" color="#291F1E" />
        },
        {
            name: "Projects",
            link: "#",
            icon: <FolderIcon w="24" h="24" color="#291F1E" />
        },
        {
            name: "Contact",
            link: "#",
            icon: <MailIcon w="24" h="24" color="#291F1E" />
        }
    ]

    return (
        <>
            {deviceType === 'desktop' ? (
                <DesktopNavbar path={path} />
            ) : (
                <MobileNavbar path={path} />
            )}
        </>
    )
}

const DesktopNavbar = ({ path }: NavbarProps) => {
    return (
        <div
            className='fixed top-0 left-0 w-full py-4 navbar-shadow bg-backgroundColor'
        >
            <div
                className='max-w-[1280px] px-4 mx-auto flex justify-between items-center'
            >
                <p
                    className='text-2xl font-black text-primaryColor'
                >
                    PORTFOLIO
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
                                    className='font-normal text-primaryColor'
                                    href={item.link}
                                    key={index}
                                >
                                    {item.name}
                                </a>
                            ))
                        }
                    </div>
                    <button
                        className='bg-primaryColor py-[6px] px-[12px] rounded-xl font-semibold text-backgroundColor cursor-pointer hover:bg-accentColor hover:text-backgroundColor'
                    >
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    )
}

const MobileNavbar = ({ path }: NavbarProps ) => {

    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

    return (
        <div
            className='w-full py-4 navbar-shadow '
        >
            <div
                className='max-w-[1280px] px-4 mx-auto flex justify-between items-center'
            >
                <p
                    className='text-2xl font-bold text-primaryColor'
                >
                    Patchara K.
                </p>
                <div
                    className='relative'
                >
                    <button
                        className='p-2 cursor-pointer bg-accentColor rounded-xl'
                        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                        aria-label='Toggle Menu'
                    >
                        <MenuIcon
                            w="24"
                            h="24"
                            color="#F4F4ED"
                        />
                    </button>
                    {
                        isNavbarOpen && (
                            <div
                                className='absolute top-[46px] right-0 bg-backgroundColor border border-white w-[200px] rounded-lg shadow-lg flex flex-col items-center gap-4 p-4'
                            >
                                {
                                    path.map((item, index) => (
                                        <button
                                            className='flex items-center w-full gap-4 font-semibold text-secondaryColor justify-items-start'
                                            key={index}
                                            onClick={() => {
                                                setIsNavbarOpen(false);
                                            }}
                                        >
                                            {item.icon}
                                            <a
                                                href={item.link}
                                            >
                                                {item.name}
                                            </a>
                                        </button>
                                    ))
                                }
                            </div>
                        )

                    }
                </div>
            </div>
        </div>
    )
}
