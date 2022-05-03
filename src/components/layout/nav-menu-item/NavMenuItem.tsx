import React, { FunctionComponent } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { LinkDelayed } from '../../common/link-delayed/LinkDelayed'
import { NavMenuItemStyles } from './NavMenuItemStyles'

const NavMenuItemStyled = styled.div`${NavMenuItemStyles}`

interface NavMenuItemPropsType {
  toUrl: string
  text: string
  handleClick?: () => void
  tabIndex?: number
}

export const NavMenuItem: FunctionComponent<NavMenuItemPropsType> = ({
  toUrl,
  text,
  handleClick,
  tabIndex
}) => {
  const location = useLocation()
  const navMenuItemClassname = location?.pathname === toUrl ? 'selected' : ''

  return (
    <NavMenuItemStyled className={navMenuItemClassname}>
      <LinkDelayed
        handleClick={handleClick}
        tabIndex={tabIndex}
        to={toUrl}
      >
        { text }
      </LinkDelayed>
    </NavMenuItemStyled>
  )
}
