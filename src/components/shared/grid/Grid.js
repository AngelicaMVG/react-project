import React from 'react'
import glamorous from 'glamorous'

const Grid = glamorous.div(
  {},
  ({ columns, rows, gap, template, rowGap, columnGap }) => ({
    '@supports (display: grid)': {
      display: 'grid',
      gridTemplateColumns: columns,
      gridTemplateRows: rows,
      gridGap: gap,
      gridRowGap: rowGap,
      gridColumnGap: columnGap,
      gridTemplate: template
    }
  })
)

export default ({ children, ...rest }) => {
  return <Grid {...rest}>{children}</Grid>
}
