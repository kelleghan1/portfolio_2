import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import LogoImg from '../../../assets/images/site/kelleghanlogocompblack.png'
import { Image } from '../../common/image/Image'
import { Container } from '../container/Container'
import { NavBar } from '../nav-bar/NavBar'
import { PageRow } from '../page-row/PageRow'
import { Spacer } from '../spacer/Spacer'
import { HeaderStyles } from './HeaderStyles'

const HeaderStyled = styled(PageRow)`${HeaderStyles}`

export const Header: FunctionComponent = () =>
  <HeaderStyled>
    <Container>
      <Spacer>
        <div className='logo-wrapper'>
          <Image src={LogoImg} />
        </div>
      </Spacer>
      <Spacer>
        <NavBar />
      </Spacer>
    </Container>
  </HeaderStyled>

