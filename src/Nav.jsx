import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineWorkHistory} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineContactPhone} from 'react-icons/md'
import { useState } from 'react'
import './style.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#aboutme" onClick={()=>setActiveNav('#aboutme')} className={activeNav==='#aboutme' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav==='#skills' ? 'active' : ''}><MdOutlineWorkHistory/></a>
      <a href="#projects" onClick={()=>setActiveNav('#projects')} className={activeNav==='#projects' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><MdOutlineContactPhone/></a>
    </nav>
  )
}

export default Nav