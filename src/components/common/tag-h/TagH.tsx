import React, { FunctionComponent } from 'react'
import { TagHStyles } from './TagHStyles'
import styled from 'styled-components'

const H1TagStyled = styled.h1`${TagHStyles}`
const H2TagStyled = styled.h2`${TagHStyles}`
const H3TagStyled = styled.h3`${TagHStyles}`

type TagHProps = {
  size: number,
  margin: string,
  color?: string
}

export const TagH: FunctionComponent<TagHProps> = ({
  size,
  margin = '0',
  children,
  color
}) => {
  console.log(color)
  switch (size) {
    case 3:
      return (
        <H3TagStyled
          color={color}
          margin={margin}
        >
          { children }
        </H3TagStyled>
      )
      break
    case 2:
      return (
        <H2TagStyled
          color={color}
          margin={margin}
        >
          { children }
        </H2TagStyled>
      )
      break
    case 1:
      return (
        <H1TagStyled
          color={color}
          margin={margin}
        >
          { children }
        </H1TagStyled>
      )
      break
    default:
      return <p>{ children }</p>
  }
}