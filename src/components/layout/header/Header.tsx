import React, { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'
import { Image } from '../../common/image/Image'
import { LinkDelayed } from '../../common/link-delayed/LinkDelayed'
import { Container } from '../container/Container'
import { NavMenuMobile } from '../nav-menu-mobile/NavMenuMobile'
import { NavMenu } from '../nav-menu/NavMenu'
import { PageRow } from '../page-row/PageRow'
import { Spacer } from '../spacer/Spacer'
import { HeaderStyles } from './HeaderStyles'

const HeaderStyled = styled.div`${HeaderStyles}`

export const Header: FunctionComponent = () => {
  const renderHeaderLogo = (): ReactNode =>
    <div className='logo-wrapper'>
      <div className='logo-link-wrapper'>
        <LinkDelayed
          isBlock
          to='/'
        >
          <Image
            altText='Kelleghan Design homepage'
            aspectRatio='720 / 288'
            src='https://ik.imagekit.io/l1kppwkihn2/Kelleghan_Design/site/tr:w-720,ar-720-288/kelleghanlogocompblack_fvMZ5QD2k.png'
          />
        </LinkDelayed>
      </div>
    </div>

  return (
    <PageRow>
      <Container>
        <HeaderStyled>
          <Spacer
            l={3}
            r={3}
          >
            <div className='header-wrapper desktop-header'>
              { renderHeaderLogo() }
              <div className='nav-wrapper'>
                <NavMenu />
              </div>
            </div>
          </Spacer>
        </HeaderStyled>
        <HeaderStyled className='mobile-header-content'>
          <Spacer
            l={3}
            r={3}
          >
            <div className='header-wrapper'>
              { renderHeaderLogo() }
              <div className='nav-wrapper'>
                <NavMenuMobile />
              </div>
            </div>
          </Spacer>
        </HeaderStyled>
      </Container>
    </PageRow>
  )
}
