"use client";
import React from 'react';
import Title from './Title'
import { HoverEffect } from '@/components/ui/cardHover';
import { SiReact,SiNextdotjs,SiTailwindcss,SiJavascript,SiBootstrap,SiCss3,SiHtml5,SiNodedotjs,SiExpress,SiMongodb,SiMongoose,SiFirebase,SiGit,SiGithub,SiCplusplus, SiRedux , SiTypescript} from "react-icons/si";

const Skills = () => {
    const skills = [
        {
            title : "React",
            Icon : SiReact,
        },
        {
            title : "Next.js",
            Icon : SiNextdotjs,
        },
        {
            title : "Tailwind",
            Icon : SiTailwindcss,
        },
        {
            title : "Javascript",
            Icon : SiJavascript,
        },
        {
            title : "CSS3",
            Icon : SiCss3,
        },
        {
            title : "HTML5",
            Icon : SiHtml5,
        },
        {
            title : "Node.js",
            Icon : SiNodedotjs,
        },
        {
            title : "Express",
            Icon : SiExpress,
        },
        {
            title : "MongoDB",
            Icon : SiMongodb,
        },
        {
            title : "Mongoose",
            Icon : SiMongoose,
        },
        {
            title : "Bootstrap",
            Icon : SiBootstrap,
        },
        {
            title : "Git",
            Icon : SiGit,
        },
        {
            title : "Github",
            Icon : SiGithub,
        },
        {
            title : "Firebase",
            Icon : SiFirebase,
        },
        {
            title : "C++",
            Icon : SiCplusplus,
        },
        {
            title : "Redux",
            Icon : SiRedux,
        },
        {
            title : "Typescript",
            Icon : SiTypescript,
        }
    ]
  return (
    <div className='max-w-6xl mx-auto px-0 sm:px-8 text-white'>
        <Title text={"Skills 🔪"}  className="flex flex-col items-center justify-center -rotate-6" />
        <HoverEffect items = {skills} />
    </div>
  )
}

export default Skills