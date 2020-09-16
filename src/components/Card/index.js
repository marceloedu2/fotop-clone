import React from 'react'
import { CardContent } from '@/components/Card/styles'
import { BiRightArrowAlt } from 'react-icons/bi'

const Card = ({ title, image }) => {
  return (
    <CardContent image={image}>
      <div>
        <span>{title}</span>
        <BiRightArrowAlt />
      </div>
    </CardContent>
  )
}

export default Card
