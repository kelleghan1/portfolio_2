import React, { ReactNode, FunctionComponent, ReactEventHandler } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LinkCustomStyles } from './LinkCustomStyles'

const LinkCustomStyled = styled.span`${LinkCustomStyles}`

interface LinkCustomPropsType {
  hasLinkStyling?: boolean
  isBlock?: boolean
  isExternal?: boolean
  onClick?: ReactEventHandler
  tabIndex?: number
  target?: string
  to: string
}

export const LinkCustom: FunctionComponent<LinkCustomPropsType> = ({
  children,
  onClick,
  to,
  isExternal,
  target,
  hasLinkStyling,
  tabIndex,
  isBlock
}) => {
  let linkCLassname = hasLinkStyling ? 'show-link-styling' : ''

  if (isBlock) linkCLassname += ' display-block'

  const renderLink = (): ReactNode => {
    if (isExternal) {
      return (
        <a
          className={linkCLassname}
          href={to}
          id='test'
          onClick={onClick}
          rel="noreferrer"
          tabIndex={tabIndex}
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
        tabIndex={tabIndex}
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

