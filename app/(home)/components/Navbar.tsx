import Link from 'next/link';
import React from 'react';
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { cn } from '@/lib/utils';

const Navbar = ({className} : {className ?: string}) => {
    const socialProfiles = [
        {
            link: "https://www.linkedin.com/in/vipin-kiroula/",
            label: "Linkedin",
            icon: SiLinkedin,
        },
        {
            link: "https://github.com/Vipu97",
            label: "Github",
            icon: SiGithub,
        },
        {
            link: "https://twitter.com/Vkiroula43532",
            label: "Twitter",
            icon: SiX,
        }
    ]
    return (
        <nav className={cn("py-10 flex justify-between animate-move-down" , className)}>
            <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Vipin Kiroula 👩🏻‍💻</h1>
            <div className='flex gap-5 items-center'>
                {socialProfiles.map((social, index) => {
                    const Icon = social.icon;
                    return <Link href={social.link} key={index} aria-label={social.label}>
                        <Icon className='w-5 h-5 hover:scale-125 transition-all'/>
                    </Link>
                })}
            </div>
        </nav>
    )
}

export default Navbar