import React from 'react'
import Heading from '../layout/heading'
import img2 from '../assets/skills.png'
import { FaHtml5,FaCss3Alt,FaReact,FaGithub,FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiMysql } from "react-icons/si";

const Skills = () => {
  return (
    <div className='flex flex-col items-center gap-5'>
      <div className='flex flex-col items-center'>
      <Heading title="mis habilidades" />
      <img src={img2} alt="mis-habilidades" />
      </div>
      <div className='text-green-600 text-5xl flex flex-wrap gap-10 justify-center'>
      <FaHtml5 />
      <FaCss3Alt />
      <IoLogoJavascript />
      <FaReact />
      <BiLogoTailwindCss />
      <FaBootstrap />
      <SiMysql />
      <FaGithub />
      </div>
    </div>
  )
}

export default Skills