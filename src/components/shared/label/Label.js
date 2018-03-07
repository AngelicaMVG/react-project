import React from 'react'
import glamorous from 'glamorous'
import { colors } from '../colors'

const Label = glamorous.span({}, ({ color }) => ({
  border: `1px solid ${colors[color]}`,
  display: 'inline-block',
  padding: '1px 2px',
  borderRadius: 4,
  fontSize: 10,
  textTransform: 'uppercase',
  color: colors[color]
}))

export default ({ children, ...rest }) => {
  return <Label {...rest}>{children}</Label>
}
