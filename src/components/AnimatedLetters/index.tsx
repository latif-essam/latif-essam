import React from 'react'
import './index.scss'

interface AnimatedLettersProps {
  letterClass: string
  strArray: string[]
  index: number
}

const AnimatedLetters = ({
  letterClass,
  strArray,
  index,
}: AnimatedLettersProps) => {
  return (
    <span>
      {strArray.map((l, i) => (
        <span key={l + i + index} className={`${letterClass} _${i + index}`}>
          {l}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
