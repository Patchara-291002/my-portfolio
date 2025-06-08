import React from 'react'
import { MailIcon } from '../Icon'

export default function GetInTouch() {
    return (
        <div
            className='flex items-center justify-center w-full min-h-screen px-4'
        >
            <div
                className='flex items-center gap-8'
            >
                <p
                    className='text-6xl font-black leading-tight text-accentColor'
                >
                    Let's <br /> Get in <br /> Touch!
                </p>
                <div className="p-8 bg-white-20 rounded-lg min-w-[300px] button-shadow">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/70 focus-within:outline-1 focus-within:outline-accentColor ">
                        <MailIcon
                            w="20"
                            h="20"
                            color="#666666"
                        />
                        <input
                            type="email"
                            placeholder="mail@site.com"
                            required
                            className="flex-1 bg-white border-none outline-none selection:bg-accentColor"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Form = () => {
    return (
        <form
            className=''
        >
            <input
            />
        </form>
    )
}
