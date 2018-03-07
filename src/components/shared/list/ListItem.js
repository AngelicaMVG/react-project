import React from 'react'
import glamorous from 'glamorous'

const ListItem = glamorous.li({
  listStyle: 'none',
  marginBottom: 20
})

export default ({ children, ...rest }) => {
  return <ListItem {...rest}>{children}</ListItem>
}
