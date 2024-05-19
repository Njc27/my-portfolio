import React from 'react'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>@NJC</a>

      <ul className='personalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#aboutme">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* <div className='footer_socials'>
      <a href="https://www.instagram.com/jc_namitha/" target='_blank'><GrInstagram/></a>
      <a href="https://www.facebook.com/" target='_blank'><BsFacebook/></a>
      <a href="https://www.twitter.com/" target='_blank'><AiFillTwitterCircle/></a>
      </div> */}

      <div className='footer_copyright'>
        <small>&copy; NJC Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer