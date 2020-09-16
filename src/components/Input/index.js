import React from 'react'
import { InputContainer } from '@/components/Input/styles'

const Input = ({ name, icon: Icon, ...rest }) => {
  return (
    <InputContainer>
      <input {...rest} />
      {Icon && <Icon />}
    </InputContainer>
  )
}

export default Input
