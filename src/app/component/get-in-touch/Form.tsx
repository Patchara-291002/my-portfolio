'use client'

import { useState } from 'react'
import { MailIcon, PhoneIcon, UserIcon } from '../Icon'
import emailjs from '@emailjs/browser'
import { AlertRef } from './Alert'

interface InputTextProps {
    placeholder?: string;
    type?: string;
    icon?: React.ReactNode;
    value?: string;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FormProps {
    alertRef: React.RefObject<AlertRef | null>;
}

export default function Form({ alertRef }: FormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const [isLoading, setIsLoading] = useState(false)

    const SERVICE_ID = 'service_3hyf9sn'
    const TEMPLATE_ID = 'template_yrwfdif'
    const PUBLIC_KEY = 'TeLDFJ_-SJBZksUgz'

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData(prevData => ({
            ...prevData,
            message: e.target.value
        }));
    }

    const handelSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.email || !formData.message) {
            alertRef.current?.addAlert("Please fill in all required fields.", '#EF4444'); // แดง
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alertRef.current?.addAlert("Please enter a valid email address.", '#EF4444'); // แดง
            return;
        }

        setIsLoading(true);

        try {
            // ส่งอีเมลผ่าน EmailJS
            const templateParams = {
                // ข้อมูลของคนที่กรอกฟอร์ม
                name: formData.name,           
                email: formData.email,    
                phone: formData.phone || 'ไม่ได้ระบุ', 
                message: formData.message,   
                time: new Date().toLocaleString('th-TH')               
            };

            const result = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                templateParams,
                PUBLIC_KEY
            );

            console.log('Email sent successfully:', result);
            alertRef.current?.addAlert("Message sent successfully! I'll get back to you soon.", '#10B981'); // เขียว

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });

        } catch (error) {
            console.error('Error sending email:', error);
            alertRef.current?.addAlert("Failed to send message. Please try again later.", '#EF4444'); // แดง
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={handelSubmit} className="flex text-sm flex-col w-full gap-2 rounded-lg max-w-[500px]">
            <InputText
                name='name'
                placeholder='Your Name *'
                type='text'
                value={formData.name}
                onChange={handleInputChange}
                icon={<UserIcon w="20" h="20" color="#595D5F" />}
            />
            <InputText
                name='email'
                placeholder='Your Email *'
                type='email'
                value={formData.email}
                onChange={handleInputChange}
                icon={<MailIcon w="20" h="20" color="#595D5F" />}
            />
            <InputText
                name='phone'
                placeholder='Your Phone (optional)'
                type='tel'
                value={formData.phone}
                onChange={handleInputChange}
                icon={<PhoneIcon w="20" h="20" color="#595D5F" />}
            />
            <div className="flex items-center gap-2 px-6 py-4 rounded-xl bg-white focus-within:outline-2 focus-within:shadow-lg focus-within:shadow-accentColor/50 focus-within:outline-[#FF7D2C] button-shadow">
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleTextareaChange}
                    placeholder="Your Message *"
                    required
                    className="flex-1 resize-none field-sizing-content max-w-[300px] min-h-[150px] bg-white border-none outline-none selection:bg-accentColor"
                />
            </div>
            <div className='flex justify-end'>
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`px-6 py-3 mt-2 font-bold text-white rounded-lg cursor-pointer text-md button-shadow transition-all duration-200 ${isLoading
                            ? 'bg-gray-400 cursor-not-allowed opacity-70'
                            : 'bg-accentColor hover:bg-orange-600 active:scale-95 hover:shadow-lg'
                        }`}
                >
                    {isLoading ? (
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                        </div>
                    ) : (
                        'Send Message'
                    )}
                </button>
            </div>
        </form>
    )
}

const InputText = ({ placeholder, type, icon, value, onChange, name }: InputTextProps) => {
    return (
        <div className="flex items-center gap-2 px-6 py-4 rounded-xl bg-white focus-within:outline-2 focus-within:shadow-lg focus-within:shadow-accentColor/50 focus-within:outline-[#FF7D2C] button-shadow">
            {icon}
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={placeholder?.includes('*')}
                className="flex-1 bg-white border-none outline-none selection:bg-accentColor"
            />
        </div>
    )
}