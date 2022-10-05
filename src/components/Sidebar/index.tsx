import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './index.scss'
import LogoS from './../../assets/images/logo-s.png'
import LogoSubtitle from './../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { social_links } from '../../constants/links'

// interface SidebarProps {}

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to={'/'}>
        <img src={LogoS} alt="Logo" />
        <img src={LogoSubtitle} alt="latif-essam" className="logo-sub" />
      </Link>
      <nav>
        <NavLink to={'/'}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink to={'/about'} className="link-about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink to={'/contact'} className="link-contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        {social_links.map(({ name, icon, color, link }, index) => (
          <li key={index}>
            <a href={link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={icon} color={color} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
