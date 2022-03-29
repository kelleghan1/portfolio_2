import React, { FunctionComponent } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { LinkDelayed } from '../../common/link-delayed/LinkDelayed'
import { NavMenuItemStyles } from './NavMenuItemStyles'

const NavMenuItemStyled = styled.div`${NavMenuItemStyles}`

interface NavMenuItemPropsType {
  toUrl: string
  text: string
  handleCLick?: () => void
}

export const NavMenuItem: FunctionComponent<NavMenuItemPropsType> = ({
  toUrl,
  text,
  handleCLick
}) => {
  const location = useLocation()
  const navMenuItemClassname = location?.pathname === toUrl ? 'selected' : ''

  return (
    <NavMenuItemStyled className={navMenuItemClassname}>
      <LinkDelayed
        handleCLick={handleCLick}
        to={toUrl}
      >
        { text }
      </LinkDelayed>
    </NavMenuItemStyled>
  )
}
