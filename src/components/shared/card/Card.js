import React from 'react'
import glamorous from 'glamorous'
import { colors } from '../colors'

const Card = glamorous.div(
  {
    borderRadius: 4,
    padding: 20,
  },
  ({ color }) => ({
    backgroundColor: colors[color] || colors.white
  })
)

export default ({ children, ...rest }) => {
  return <Card {...rest}>{children}</Card>
}
