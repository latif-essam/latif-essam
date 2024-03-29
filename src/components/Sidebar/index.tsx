import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import './index.scss'
import LogoS from './../../assets/images/l.svg'
import LogoSubtitle from './../../assets/images/logo_fname_white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navLinks, social_links } from '../../constants/links'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive'

// interface SidebarProps {}

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)
  const isD = useMediaQuery({
    query: '(min-width:1200px)',
  })
  const isT = useMediaQuery({
    query: '(min-width:501px) and (max-width:1199px)',
  })
  const isM = useMediaQuery({
    query: '(max-width:500px)',
  })
  console.log({ isD, isT, isM })
  return (
    <div
      className={`${isD ? 'nav-bar' : ''}${isM ? 'mobile' : ''}${
        isT ? 'tablet' : ''
      } ${showNav ? 'showNav' : ''}`}
    >
      <Link className="logo" to={'/'} onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" style={{ width: '50px' }} />
        <img src={LogoSubtitle} alt="latif-essam" className="logo-sub" />
      </Link>

      <nav>
        {navLinks.map(({ classN, icon, to }, index) => (
          <NavLink
            end
            to={to}
            key={classN + index}
            className={`link-${classN}`}
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon
              icon={icon}
              style={classN === 'portfolio' ? {} : {}}
              color="#4d4d4e"
            />
          </NavLink>
        ))}
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
      {isM &&
        (showNav ? (
          <FontAwesomeIcon
            icon={faClose}
            color="#ffd700"
            onClick={() => setShowNav(false)}
            size="1x"
            className="nav-icon"
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            color="#ffd700"
            onClick={() => setShowNav(true)}
            size="1x"
            className="nav-icon"
          />
        ))}
    </div>
  )
}

export default Sidebar
