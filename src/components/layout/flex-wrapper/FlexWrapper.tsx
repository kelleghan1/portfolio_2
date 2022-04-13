import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { FlexWrapperStyles } from './FlexWrapperStyles'

interface FlexWrapperPropsType {
  flexColumn?: boolean
  backgroundColor?: string
}

const FlexWrapperStyled = styled.div`${FlexWrapperStyles}`

export const FlexWrapper: FunctionComponent<FlexWrapperPropsType> = ({
  backgroundColor,
  children,
  flexColumn
}) => {
  const className = flexColumn ? 'flex-column' : ''

  return (
    <FlexWrapperStyled
      backgroundColor={backgroundColor}
      className={className}
    >
      { children }
    </FlexWrapperStyled>
  )
}
