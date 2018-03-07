import React from 'react'
import { NavLink } from 'react-router-dom'
import glamorous from 'glamorous'
import { darken } from 'polished'
import { colors } from '../colors'

const Link = glamorous(NavLink)({
  textDecoration: 'none',
  color: colors.link
})

export default props => {
  return <Link {...props} />
}
