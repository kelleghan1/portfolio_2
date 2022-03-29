import React,
{
  FunctionComponent,
  ReactElement,
  ReactEventHandler,
  useRef,
  useState
} from 'react'
import { Flipped, Flipper } from 'react-flip-toolkit'
import styled from 'styled-components'
import { ButtonCustom } from '../../common/button-custom/ButtonCustom'
import { UseClickOutsideRefHandler } from '../../hooks/UseClickOutsideRefHandler'
import { NavMenuItem } from '../nav-menu-item/NavMenuItem'
import { Spacer } from '../spacer/Spacer'
import { NavMenuStyles } from './NavMenuStyles'

const NavMenuStyled = styled.div`${NavMenuStyles}`

export const NavMenu: FunctionComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const wrapperRef = useRef(null)

  const closeMenu = (): void => {
    if (isNavOpen) setIsNavOpen(false)
  }

  const handleOutsideRefClick = (): void => { closeMenu() }

  const handleLinkClick = (): void => {
    closeMenu()
  }

  UseClickOutsideRefHandler(
    wrapperRef,
    handleOutsideRefClick
  )

  const handleClick: ReactEventHandler = () => {
    setIsNavOpen(!isNavOpen)
  }

  const renderNavItems = (isMobile: boolean): ReactElement => {
    const spacerProps = isMobile
      ? ({
        b: 1,
        l: 3,
        r: 3,
        t: 1
      })
      : ({
        b: 0,
        l: 2,
        r: 0,
        t: 0
      })

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

  const renderNavLarge = (): ReactElement =>
    <nav className='large'>
      { renderNavItems(false) }
    </nav>

  const renderNavMobile = (): ReactElement =>
    <>
      <div className='hamburger-wrapper'>
        <ButtonCustom
          onClick={handleClick}
          title={isNavOpen ? 'Close nav menu' : 'Open nav menu'}
        >
          <div className='line-wrapper'>
            <div className='hamburger-line' />
            <div className='hamburger-line' />
            <div className='hamburger-line' />
          </div>
        </ButtonCustom>
      </div>
      <Flipper flipKey={isNavOpen}>
        <Flipped flipId='mobile-nav'>
          <nav
            className={`mobile ${isNavOpen ? 'open' : ''}`}
            ref={wrapperRef}
          >
            { renderNavItems(true) }
          </nav>
        </Flipped>
      </Flipper>
    </>

  return (
    <NavMenuStyled>
      { renderNavLarge() }
      { renderNavMobile() }
    </NavMenuStyled>
  )
}

