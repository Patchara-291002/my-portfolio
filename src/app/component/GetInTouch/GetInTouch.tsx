'use client'

import { useEffect, useRef, useState } from 'react'
import { BlopIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, PinIcon, UserIcon } from '../Icon'
import Link from 'next/link';
import Form from './Form';
import Alert, { AlertRef } from './Alert';

import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText)

export default function GetInTouch() {
    const textRef = useRef(null)
    const alertRef = useRef<AlertRef>(null)

    const copyToClipboard = async (text: string, label: string) => {
        try {
            await navigator.clipboard.writeText(text);
            alertRef.current?.addAlert(`${label} copied to clipboard!`, '#10B981');
        } catch (err) {
            console.error("Failed to copy: ", err);
            alertRef.current?.addAlert('Failed to copy to clipboard', '#EF4444');
        }
    }

    useEffect(() => {
        const split = new SplitText(textRef.current, { type: "words, chars" });

        gsap.set(split.words, {
            display: "inline-block",
            whiteSpace: "nowrap"
        });

        const tl = gsap.timeline({
            // repeat: -1,        
            // yoyo: true,        
            // repeatDelay: 2   
            scrollTrigger: {
                trigger: textRef.current,
                start: "bottom 85%",
                toggleActions: "play none none none",
                markers: false
            }
        });

        tl
            .set(split.chars, {
                opacity: 0,
                x: 20,
            })
            .to(split.chars, {
                duration: 0.2,
                opacity: 1,
                x: 0,
                stagger: 0.02,
                ease: "power4.out"
            });

    }, []);

    return (
        <div className='flex items-center justify-center w-full min-h-screen px-4'>
            {/* Alert Component */}
            <Alert ref={alertRef} />

            <div className='flex flex-col md:flex-row justify-between w-full max-w-[1280px] gap-8 p-8 bg-white rounded-2xl button-shadow'>
                <div className='flex flex-col justify-between'>
                    <div
                        ref={textRef}
                    >
                        <p
                            className='text-6xl text-pretty font-black leading-tight text-accentColor'
                        >
                            Let's Get in Touch!
                        </p>
                        <p className='mt-2 text-lg font-normal text-secondaryColor'>
                            Got a question, an idea, or just want to say hello? I'd be happy to connect with you.
                        </p>
                    </div>
                    <div className='flex flex-col gap-1 text-primaryColor'>
                        <div className='flex items-center gap-1'>
                            <PhoneIcon w={"16"} h={"16"} color="#FF7D2C" />
                            <p
                                className='text-sm font-normal underline cursor-pointer text-primaryColor'
                                onClick={() => copyToClipboard("0654361772", "Phone number")}
                            >
                                (+66) 654361772
                            </p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <MailIcon w={"16"} h={"16"} color="#FF7D2C" />
                            <p
                                className='text-sm font-normal underline cursor-pointer text-primaryColor'
                                onClick={() => copyToClipboard("patchara.kaewnissai@gmail.com", "Email")}
                            >
                                patchara.kaewnissai@gmail.com
                            </p>
                        </div>
                        {/* <div className='flex items-center gap-1'>
                            <LinkedinIcon w={"16"} h={"16"} color="#FF7D2C" />
                            <Link href={"#"} className='' target='_blank'>
                                <p className='text-sm font-normal underline cursor-pointer text-primaryColor'>
                                    linkedIn
                                </p>
                            </Link>
                        </div> */}
                        <div className='flex items-center gap-1'>
                            <GithubIcon w={"16"} h={"16"} color="#FF7D2C" />
                            <Link href={"https://github.com/Patchara-291002"} className='' target='_blank'>
                                <p className='text-sm font-normal underline cursor-pointer text-primaryColor'>
                                    Github
                                </p>
                            </Link>
                        </div>
                        <div className='flex items-center gap-1'>
                            <PinIcon w={"16"} h={"16"} color="#FF7D2C" />
                            <p className='text-sm font-normal text-primaryColor'>
                                Bangkok, Thailand 10140
                            </p>
                        </div>
                    </div>
                </div>
                <Form alertRef={alertRef} />
            </div>
        </div>
    )
}