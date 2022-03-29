import React, { ReactNode, FunctionComponent, ReactEventHandler } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LinkCustomStyles } from './LinkCustomStyles'

const LinkCustomStyled = styled.span`${LinkCustomStyles}`

interface LinkCustomPropsType {
  to: string
  onClick?: ReactEventHandler
  isExternal?: boolean
  target?: string
  showLinkStyling?: boolean
}

export const LinkCustom: FunctionComponent<LinkCustomPropsType> = ({
  children,
  onClick,
  to,
  isExternal,
  target,
  showLinkStyling
}) => {
  const linkCLassname = showLinkStyling ? 'show-link-styling' : ''

  const renderLink = (): ReactNode => {
    if (isExternal) {
      return (
        <a
          className={linkCLassname}
          href={to}
          id='test'
          onClick={onClick}
          rel="noreferrer"
          target={target}
        >
          { children }
        </a>
      )
    }

    return (
      <Link
        className={linkCLassname}
        onClick={onClick}
        target={target}
        to={to}
      >
        { children }
      </Link>
    )
  }

  return (
    <LinkCustomStyled>
      { renderLink() }
    </LinkCustomStyled>
  )
}

