import React, { FunctionComponent } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { LinkDelayed } from '../../common/link-delayed/LinkDelayed'
import { NavBarItemStyles } from './NavBarItemStyles'

const NavBarItemStyled = styled.div`${NavBarItemStyles}`

interface NavBarItemPropsType {
  toUrl: string
  text: string
  handleCLick?: () => void
}

export const NavBarItem: FunctionComponent<NavBarItemPropsType> = ({
  toUrl,
  text,
  handleCLick
}) => {
  const location = useLocation()

  return (
    <NavBarItemStyled selected={location?.pathname === toUrl}>
      <LinkDelayed
        handleCLick={handleCLick}
        to={toUrl}
      >
        { text }
      </LinkDelayed>
    </NavBarItemStyled>
  )
}

