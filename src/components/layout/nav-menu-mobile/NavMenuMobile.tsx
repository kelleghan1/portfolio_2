import React,
{
  FunctionComponent,
  ReactElement,
  useRef,
  useContext
} from 'react'
import { Flipped, Flipper } from 'react-flip-toolkit'
import styled from 'styled-components'
import { PortfolioContextValueType } from '../../../types/contextTypes'
import { PortfolioContext } from '../../context/PortfolioContextProvider'
import { UseClickOutsideRefHandler } from '../../hooks/UseClickOutsideRefHandler'
import { NavMenuItem } from '../nav-menu-item/NavMenuItem'
import { Spacer } from '../spacer/Spacer'
import { NavMenuMobileStyles } from './NavMenuMobileStyles'

const NavBarStyled = styled.div`${NavMenuMobileStyles}`

export const NavMenuMobile: FunctionComponent = () => {
  const {
    setIsMobileNavOpen,
    isMobileNavOpen
  } = useContext(PortfolioContext) as PortfolioContextValueType

  const wrapperRef = useRef(null)

  const closeMenu = (): void => {
    if (isMobileNavOpen) setIsMobileNavOpen(false)
  }

  const handleOutsideRefClick = (): void => { closeMenu() }

  const handleLinkClick = (): void => {
    closeMenu()
  }

  UseClickOutsideRefHandler(
    wrapperRef,
    handleOutsideRefClick
  )

  const renderNavItems = (): ReactElement => {
    const spacerProps = {
      b: 1,
      l: 3,
      r: 3,
      t: 1
    }

    return (
      <>
        <div className='nav-bar-item-wrapper'>
          <Spacer {...spacerProps} >
            <NavMenuItem
              handleCLick={handleLinkClick}
              text={'Development'}
              toUrl={'/development'}
            />
          </Spacer>
        </div>
        <div className='nav-bar-item-wrapper'>
          <Spacer {...spacerProps} >
            <NavMenuItem
              handleCLick={handleLinkClick}
              text={'Design'}
              toUrl={'/design'}
            />
          </Spacer>
        </div>
        <div className='nav-bar-item-wrapper'>
          <Spacer {...spacerProps} >
            <NavMenuItem
              handleCLick={handleLinkClick}
              text={'All'}
              toUrl={'/'}
            />
          </Spacer>
        </div>
        <div className='nav-bar-item-wrapper'>
          <Spacer {...spacerProps} >
            <NavMenuItem
              handleCLick={handleLinkClick}
              text={'Contact'}
              toUrl={'/contact'}
            />
          </Spacer>
        </div>
      </>
    )
  }

  return (
    <NavBarStyled>
      <Flipper flipKey={isMobileNavOpen}>
        <Flipped flipId='mobile-nav'>
          <nav
            className={`mobile ${isMobileNavOpen ? 'open' : ''}`}
            ref={wrapperRef}
          >
            { renderNavItems() }
          </nav>
        </Flipped>
      </Flipper>
    </NavBarStyled>
  )
}

