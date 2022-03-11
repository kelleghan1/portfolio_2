import React, { FunctionComponent } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { LinkCustom } from '../../common/link-custom/LinkCustom'
import { NavBarItemStyles } from './NavBarItemStyles'

const NavBarItemStyled = styled.div`${NavBarItemStyles}`

type NavBarItemPropsType = {
  toUrl: string,
  text: string
}

export const NavBarItem: FunctionComponent<NavBarItemPropsType> = ({
  toUrl,
  text
}) => {
  const location = useLocation()

  return (
    <NavBarItemStyled selected={location?.pathname === toUrl}>
      <LinkCustom to={toUrl}>
        { text }
      </LinkCustom>
    </NavBarItemStyled>
  )
}

