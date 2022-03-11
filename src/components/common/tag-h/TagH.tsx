import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { TagHStyles } from './TagHStyles'

const H1TagStyled = styled.h1`${TagHStyles}`
const H2TagStyled = styled.h2`${TagHStyles}`
const H3TagStyled = styled.h3`${TagHStyles}`
const H4TagStyled = styled.h4`${TagHStyles}`

interface TagHProps {
  size: number
  margin?: string
  color?: string
}

export const TagH: FunctionComponent<TagHProps> = ({
  size,
  margin = '0',
  children,
  color
}) => {
  switch (size) {
    case 4:
      return (
        <H4TagStyled
          color={color}
          margin={margin}
        >
          { children }
        </H4TagStyled>
      )
    case 3:
      return (
        <H3TagStyled
          color={color}
          margin={margin}
        >
          { children }
        </H3TagStyled>
      )
    case 2:
      return (
        <H2TagStyled
          color={color}
          margin={margin}
        >
          { children }
        </H2TagStyled>
      )
    case 1:
      return (
        <H1TagStyled
          color={color}
          margin={margin}
        >
          { children }
        </H1TagStyled>
      )
    default:
      return <p>{ children }</p>
  }
}
