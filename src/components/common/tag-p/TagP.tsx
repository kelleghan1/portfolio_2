import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { TagPStyles } from './TagPStyles'

const PTagStyled = styled.p`${TagPStyles}`

type PTagPropsType = {
  color?: string
}

export const TagP: FunctionComponent<PTagPropsType> = ({
  children,
  color
}) => <PTagStyled color={color}>{ children }</PTagStyled>