import React, { FunctionComponent } from 'react'
import { Container } from '../container/Container'
import styled from 'styled-components'
import { PageRow } from '../page-row/PageRow'
import { Spacer } from '../spacer/Spacer'
import LogoImg from '../../../assets/images/site/kelleghanlogocompblack.png'
import { NavBar } from '../nav-bar/NavBar'
import { HeaderStyles } from './HeaderStyles'

const HeaderStyled = styled(PageRow)`${HeaderStyles}`

export const Header: FunctionComponent = () =>
  <HeaderStyled>
    <Container>
      <Spacer>
        <div className='logo-wrapper'>
          <img src={LogoImg} />
        </div>
        <NavBar />
      </Spacer>
    </Container>
  </HeaderStyled>

