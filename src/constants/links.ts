import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const navLinks = [
  { classN: 'home', to: '/', icon: faHome },
  { classN: 'about', to: '/about', icon: faUser },
  { classN: 'contact', to: '/contact', icon: faEnvelope },
  { classN: 'portfolio', to: '/portfolio', icon: faSuitcase },
]

const social_links = [
  {
    name: 'Github',
    icon: faGithub,
    color: '#4d4d4e',
    link: 'https://github.com/latif-essam/',
  },
  {
    name: 'LinkedIn',
    icon: faLinkedin,
    color: '#4d4d4e',
    link: 'https://www.linkedin.com/in/latifessam/',
  },
  {
    name: 'facebook',
    icon: faFacebook,
    color: '#4d4d4e',
    link: 'https://facebook.com',
  },
]

export { navLinks, social_links }
