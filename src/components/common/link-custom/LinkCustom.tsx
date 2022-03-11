import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LinkCustomStyles } from './LinkCustomStyles'

const LinkCustomStyled = styled.span`${LinkCustomStyles}`

interface LinkCustomPropsType {
  to: string
}

export const LinkCustom: FunctionComponent<LinkCustomPropsType> = ({ children, to }) =>
  <LinkCustomStyled>
    <Link to={to}>
      { children }
    </Link>
  </LinkCustomStyled>

