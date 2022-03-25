import React, { FunctionComponent, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { LinkCustom } from '../../common/link-custom/LinkCustom'
import { LinkDelayed } from '../../common/link-delayed/LinkDelayed'
import { NavBarItemStyles } from './NavBarItemStyles'

const NavBarItemStyled = styled.div`${NavBarItemStyles}`

interface NavBarItemPropsType {
  toUrl: string
  text: string
  delay: number
}

const renderLink = (
  delay: number,
  text: string,
  toUrl: string
): ReactNode => {
  if (delay === 0) {
    return (
      <LinkCustom to={toUrl}>
        { text }
      </LinkCustom>
    )
  }

  return (
    <LinkDelayed to={toUrl} >
      { text }
    </LinkDelayed>
  )
}

export const NavBarItem: FunctionComponent<NavBarItemPropsType> = ({
  toUrl,
  text,
  delay
}) => {
  const location = useLocation()

  return (
    <NavBarItemStyled selected={location?.pathname === toUrl}>
      {
        renderLink(
          delay,
          text,
          toUrl
        )
      }
    </NavBarItemStyled>
  )
}

