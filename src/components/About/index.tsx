import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import { aboutParaghraphs, skills } from '../../constants/staticData'
import AnimatedLetters from '../AnimatedLetters'

import './index.scss'

interface AboutProps {}

const About = ({}: AboutProps) => {
  const [letterClass, setLetterClass] = useState('animate-text')

  useEffect(() => {
    setTimeout(() => setLetterClass('animate-text-hover'), 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={Array.from('About me')}
              index={15}
            />
          </h1>
          {aboutParaghraphs.map(({ content }, index) => (
            <p key={index}>{content}</p>
          ))}
        </div>
        <div className="skills">
          <div className="cube-spinner">
            {skills.map(({ classN, color, icon, title }) => (
              <div className={classN} key={classN}>
                <FontAwesomeIcon icon={icon} color={color} textAnchor={title} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </>
  )
}

export default About
