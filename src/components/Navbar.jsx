import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    }

    return (
        <div>
            <div className="flex flex-row justify-between p-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div>
                    <Link to="/" className="font-black text-2xl p-1 cursor-pointer">
                        <p className="inline-block text-green-600">J.<span className="text-black">code</span></p>
                    </Link>
                </div>
                <nav className="hidden md:flex gap-5 font-medium p-1 cursor-pointer">
                    <Link to="about-me" spy={true} smooth={true} duration={500}>Sobre mi</Link>
                    <Link to="skills" spy={true} smooth={true} duration={500}>Habilidades</Link>
                    <Link to="projects" spy={true} smooth={true} duration={500}>Proyectos</Link>
                    <Link to="contact" spy={true} smooth={true} duration={500}>Contacto</Link>
                </nav>
                <div className="flex md:hidden" onClick={handleChange}>
                    <div className="p-2">
                        <AiOutlineMenu size={22} />
                    </div>
                </div>
            </div>
            <div className={`${menu ? "translate-x-0" : "-translate-x-full"}
            md:hidden flex flex-col items-center absolute bg-white left-0 top-20
            font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                <Link to="about-me" spy={true} smooth={true} duration={500}>Sobre mi</Link>
                <Link to="skills" spy={true} smooth={true} duration={500}>Habilidades</Link>
                <Link to="projects" spy={true} smooth={true} duration={500}>Proyectos</Link>
                <Link to="contact" spy={true} smooth={true} duration={500}>Contacto</Link>
            </div>
        </div>
    )
}

export default Navbar