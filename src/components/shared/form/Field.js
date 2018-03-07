import React from 'react'
import glamorous from 'glamorous'
import { colors } from '../colors'

const FieldWrapper = glamorous.input({
  boxSizing: 'border-box',
  width: '100%',
  height: 40,
  outline: 'none',
  border: `1px solid ${colors.gray}`,
  borderRadius: 4,
  marginBottom: 20,
  padding: '10px',
  ':focus': {
    border: `1px solid ${colors.primary}`,
    boxShadow: `0px 0px 10px -2x§px ${colors.primary}`
  }
})

const LabelWrapper = glamorous.label({})

export default props => {
  return (
    <div>
      <LabelWrapper>{props.label}</LabelWrapper>
      <FieldWrapper {...props} />
    </div>
  )
}
