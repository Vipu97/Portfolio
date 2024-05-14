import React from 'react';
import Title from './Title';
import { SiReact, SiTailwindcss, SiJavascript, SiCss3, SiHtml5, SiNodedotjs, SiExpress, SiMongodb, SiMongoose, SiFirebase } from "react-icons/si";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/directionHover';

const Project = () => {
    const projects = [
        {
            title: "Virtual Classroom",
            tech: [SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiFirebase, SiMongodb, SiMongoose, SiJavascript, SiHtml5, SiCss3],
            link: "https://virtual-classroom-client.vercel.app/",
            cover: "/project-1.png",
            background: "rgb(14 116 144)",
        },
        {
            title: "HomeStays",
            tech: [SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiMongoose, SiJavascript, SiHtml5, SiCss3],
            link: "https://home--stays.vercel.app/",
            cover: "/project-2.png",
            background: "rgb(74 222 128)",
        },
        {
            title: "Use Popcorn",
            tech: [SiReact, SiCss3, SiHtml5, SiJavascript],
            link: "https://use-pop-corn-seven.vercel.app/",
            cover: "/project-3.png",
            background: "rgb(236 72 153)",
        },
        {
            title: "Weather App",
            tech: [SiReact, SiCss3, SiHtml5, SiJavascript],
            link: "https://weather-app-mauve-phi-94.vercel.app/",
            cover: "/project-4.png",
            background: "rgb(253 224 71)",
        },
        {
            title: "Nike Landing Page",
            tech: [SiReact, SiCss3, SiHtml5, SiJavascript],
            link: "https://nike-landing-page-elsqx759m-vipu97.vercel.app/",
            cover: "/project-5.png",
            background: "rgb(14 165 233)",
        },
        {
            title: "Pig Game",
            tech: [SiCss3, SiHtml5, SiJavascript],
            link: "https://diccce-game.netlify.app/",
            cover: "/project-6.png",
            background: "#d1d5db"
        }

    ]
    return (
        <div className='py-10 mt-4 p-2 sm:p-0'>
            <Title text={"Projects 🎨"} className="flex flex-col items-center justify-center rotate-6" />
            <div className='grid grid-cols-1 sm:grid-cols-2 pt-12 gap-5'>
                {projects.map((project, idx) => {
                    return (
                        <Link href={project.link} key={idx} 
                        style={{border : `5px solid ${project.background}`}}
                        className= "rounded-md" >
                            
                            <DirectionAwareHover
                                imageUrl={project.cover}
                                className='w-full space-y-5 cursor-pointer'
                            >
                                <div className='space-y-5'>
                                    <h1 className='text-2xl font-bold'>{project.title}</h1>
                                    <div className='flex items-center gap-5'>
                                        {project.tech.map((Icon, index) => {
                                            return <Icon key={index} className='w-7 h-7 ' />
                                        })}
                                    </div>

                                </div>
                            </DirectionAwareHover>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Project