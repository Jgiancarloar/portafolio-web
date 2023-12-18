import React from 'react'
import Navbar from './components/Navbar'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contactme from './components/Contactme'



function App() {

  return (
    <div>
      <header className='wrapper fixed top-0 right-0 left-0 md:'>
        <Navbar />
      </header>

      <main className='wrapper'>
        <div id='about-me' 
          className='bg-white h-screen px-10 py-12 flex flex-col justify-center items-center'>
          <Aboutme />
        </div>
        <div id='skills'
          className='bg-stone-100 h-screen px-10 py-12 flex flex-col justify-center items-center'>
          <Skills />
        </div>
        <div id='projects'
          className='bg-white h-screen px-10 py-12 flex flex-col justify-center items-center'>
          <Projects />
        </div>
        <div id='contact'
          className='h-screen py-12 flex flex-col justify-center items-center'>
          <Contactme />
        </div>
      </main>
    </div>
  )
}

export default App
