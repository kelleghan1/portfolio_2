import React, { FunctionComponent } from 'react'
import { TagPStyles } from './TagPStyles'
import styled from 'styled-components'

const PTagStyled = styled.p`${TagPStyles}`

type PTagPropsType = {
  color?: string
}

export const TagP: FunctionComponent<PTagPropsType> = ({
  children,
  color
}) => <PTagStyled color={color}>{ children }</PTagStyled>