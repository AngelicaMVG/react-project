import React from 'react'
import glamorous from 'glamorous'

const Area = glamorous.div(
  {},
  ({ columnStart, columnEnd, rowStart, rowEnd, area }) => ({
    gridColumnStart: columnStart,
    gridColumnEnd: columnEnd,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd,
    gridArea: area
  })
)

export default ({ children, ...rest }) => {
  return <Area {...rest}>{children}</Area>
}
