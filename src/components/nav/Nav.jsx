import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {AiOutlineBook}  from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageAltCheck} from 'react-icons/bi'
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav("#")} className={activeNav==='#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav("#about")} className={activeNav==='#about' ? 'active' : ''}><FaUserCircle/></a>
      <a href='#experience' onClick={() => setActiveNav("#experiences")} className={activeNav==='#experiences' ? 'active' : ''}><AiOutlineBook/></a>
      {/* <a href='#services' onClick={() => setActiveNav("#services")} className={activeNav==='#services' ? 'active' : ''}><RiServiceLine/></a> */}
      <a href='#contact' onClick={() => setActiveNav("#contact")} className={activeNav==='#contact' ? 'active' : ''}><BiMessageAltCheck/></a>
    </nav>
  )
}

export default Nav