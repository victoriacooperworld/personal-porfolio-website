import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Victoria</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#'>Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.facebook.com/profile.php?id=100079850143828'><FaFacebookF/></a>
        <a href='https://www.instagram.com/victoriacooperworld/'><FiInstagram/></a>
        {/* <a href='www.twitter.com'><IoLogoTwitter/></a> */}
      </div>

      <div className="footer__copyright">
        <small>&copy; Victoria Niu </small>
      </div>
    </footer>
  )
}

export default Footer