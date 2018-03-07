import React from 'react'
import glamorous from 'glamorous'

const List = glamorous.ul({
  marginLeft: 0,
  paddingLeft: 0
})

export default ({ children, ...rest }) => {
  return <List {...rest}>{children}</List>
}
