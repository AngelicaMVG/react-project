import React from 'react'
import glamorous from 'glamorous'
import { lighten } from 'polished'
import { colors } from '../colors'

const Button = glamorous.button({
  width: '100%',
  height: 43,
  borderRadius: 4,
  backgroundColor: colors.primary,
  color: colors.white,
  textTransform: 'uppercase',
  letterSpacing: 2,
  fontSize: 12,
  outline: 'none',
  transition: 'background-color .2s',
  ':hover': {
    backgroundColor: lighten(0.1, colors.primary),
    cursor: 'pointer'
  }
})

export default ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>
}
