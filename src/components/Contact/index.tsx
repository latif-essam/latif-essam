import React from 'react'
import Loader from 'react-loaders'

import './index.scss'

interface ContactProps {}

const Contact = ({}: ContactProps) => {
  return (
    <>
      <div>Contact</div>

      <Loader type="pacman" active={true} />
    </>
  )
}

export default Contact
