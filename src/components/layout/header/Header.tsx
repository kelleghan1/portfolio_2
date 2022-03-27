import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import LogoImg from '../../../assets/images/site/kelleghanlogocompblack.png'
import { Image } from '../../common/image/Image'
import { LinkDelayed } from '../../common/link-delayed/LinkDelayed'
import { Container } from '../container/Container'
import { NavBar } from '../nav-bar/NavBar'
import { PageRow } from '../page-row/PageRow'
import { Spacer } from '../spacer/Spacer'
import { HeaderStyles } from './HeaderStyles'

const HeaderStyled = styled.div`${HeaderStyles}`

export const Header: FunctionComponent = () =>
  <PageRow stickyMobile>
    <Container>
      <HeaderStyled>
        <Spacer
          l={3}
          r={3}
        >
          <div className='header-wrapper'>
            <div className='logo-wrapper'>
              <div className='logo-link-wrapper'>
                <LinkDelayed to={'/'}>
                  <Image src={LogoImg} />
                </LinkDelayed>
              </div>
            </div>
            <div className='nav-wrapper'>
              <NavBar />
            </div>
          </div>
        </Spacer>
      </HeaderStyled>
    </Container>
  </PageRow>

