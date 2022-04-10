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
          to="/"
        >
          <Image
            altText='Kelleghan Design homepage'
            src="https://ik.imagekit.io/l1kppwkihn2/Kelleghan_Design/site/kelleghanlogocompblack_oIgmytkWui.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649531438837"
          />
        </LinkDelayed>
      </div>
    </div>

  return (
    <PageRow>
      <Container>
        <HeaderStyled>
          <Spacer
            l={ 3 }
            r={ 3 }
          >
            <div className='header-wrapper'>
              { renderHeaderLogo() }
              <div className='nav-wrapper' >
                <NavMenu />
              </div>
            </div>
          </Spacer>
        </HeaderStyled>
        <HeaderStyled className='mobile-header-content'>
          <Spacer
            l={ 3 }
            r={ 3 }
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
