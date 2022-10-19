import React, { useEffect, useState } from 'react'
import './index.scss'
import letterLogo from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from './../AnimatedLetters/index'
import Logo from './Logo'
import Loader from 'react-loaders'

interface HomeProps {}

const Home = ({}: HomeProps) => {
  const [letterClass, setLetterClass] = useState('animate-text')
  const nameArray = Array.from('Latif')
  const jobArray = Array.from('Software Enginner')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('animate-text-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              index={0}
              letterClass={letterClass}
              strArray={Array.from('Hi,')}
            />
            <br />
            <AnimatedLetters
              index={5}
              letterClass={letterClass}
              strArray={Array.from("I'm ")}
            />
            <AnimatedLetters
              index={16}
              letterClass={letterClass}
              strArray={nameArray}
            />
            <br />
            <AnimatedLetters
              index={50}
              letterClass={letterClass}
              strArray={jobArray}
            />
          </h1>
          <h2>Frontend Developer / NodeJs Developer / RN Developer</h2>
          <Link to={'/contact'} className="flat-btn">
            Contact Me
          </Link>
        </div>
        <Logo />
      </div>
      <Loader active={true} type="pacman" />
    </>
  )
}

export default Home
