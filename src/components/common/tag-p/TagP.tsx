import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { TagPStyles } from './TagPStyles'

const TagPStyled = styled.p`${TagPStyles}`

interface PTagPropsType {
  color?: string
}

export const TagP: FunctionComponent<PTagPropsType> = ({
  children,
  color
}) => <TagPStyled color={color}>{ children }</TagPStyled>
