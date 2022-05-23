import React from 'react'
import './about.css'
import ME from '../../assets/me1.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className='container about__container' >
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt='About Image'></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Education</h5>
              <small>BS & MS in CS</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Experience</h5>
              <small>SDE Intern</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>Different Tech Stacks</small>
            </article>
          </div>
          <p>My name is Victoria Niu. I am currently a Master student at UCI studying software engineering. Having gained a bachelor degree in computer science, I have a solid foundation of computer and programming. I also have 2 work experiences in the tech field and have done multiple projects related to software engineering.</p>
        </div>
      </div>
    </section>
  )
}

export default About