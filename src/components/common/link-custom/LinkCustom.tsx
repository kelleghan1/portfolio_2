import React, { FunctionComponent, ReactEventHandler } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LinkCustomStyles } from './LinkCustomStyles'

const LinkCustomStyled = styled.span`${LinkCustomStyles}`

interface LinkCustomPropsType {
  to: string
  onClick?: ReactEventHandler
}

export const LinkCustom: FunctionComponent<LinkCustomPropsType> = ({
  children,
  onClick,
  to
}) =>
  <LinkCustomStyled>
    <Link
      onClick={onClick}
      to={to}
    >
      { children }
    </Link>
  </LinkCustomStyled>

