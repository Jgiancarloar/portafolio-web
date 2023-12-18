import React from 'react'
import Heading from '../layout/heading'
import img1 from '../assets/about-me.jpg'
import Button from '../layout/button'
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

const Aboutme = () => {
  return (
    <div className='flex flex-col items-center'>
      <img src={img1} alt="" />
      <div className='flex flex-col items-center gap-8'>
        <Heading title="jheyson alvarez" />
        <span className='text-2xl font-semibold -mt-8'>Frontend Developer</span>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ut,
          assumenda similique ipsum dolore perspiciatis voluptatibus in eaque eius eos,
          quasi facere odio, exercitationem a optio enim placeat reiciendis dicta!</p>
        <Button name="Contactame" />
        <div className='flex gap-5 text-4xl text-green-600'>
          <FaLinkedin />
          <FaGithub />
          <FaFilePdf />
        </div>
      </div>
    </div>
  )
}

export default Aboutme
