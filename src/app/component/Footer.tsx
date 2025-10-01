import React from 'react'

export default function Footer() {
    return (
        <div
            className='flex flex-col justify-end w-full h-[400px] bg-primaryColor px-4 py-4 drop-shadow-2xl'
        >
            <div
                className='max-w-[1280px] h-[200px] mx-auto w-full'
            >
                <div
                    className='flex flex-col justify-between h-full'
                >
                    <div
                        className='flex flex-col justify-between gap-4 sm:flex-row'
                    >
                        <div>
                            <p
                                className='text-xl font-black text-backgroundColor text-nowrap'
                            >
                                Patchara Kaewnissai
                            </p>
                            <p
                                className='font-light text-backgroundColor'
                            >
                                Fullstack Developer
                            </p>
                        </div>
                        <div
                            className='flex justify-between w-full max-w-[500px] text-sm text-backgroundColor'
                        >
                            {/* <div
                                className='flex flex-col gap-2'
                            >
                                <p
                                >
                                    About Me
                                </p>
                                <p
                                >
                                    Projects
                                </p>
                                <p
                                >
                                    Contact
                                </p>
                            </div> */}
                            <div
                                className='flex flex-col gap-2'
                            >
                                <p>
                                    patchara.kaewnissai@gmail.com
                                </p>
                                <p>
                                    Resume
                                </p>
                                <p>
                                    Github
                                </p>
                            </div>
                            <div
                                className='flex flex-col gap-2'
                            >
                                {/* <p>
                                    LinkedIn
                                </p> */}
                                <p>
                                    Facebook
                                </p>
                                <p>
                                    Line
                                </p>
                                <p>
                                    Instagram
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className='flex justify-end font-light text-backgroundColor'
                    >
                        <p>
                            © 2023 Patchara Kaewnissai. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
