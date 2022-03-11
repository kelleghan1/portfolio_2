import React,
{
  FunctionComponent,
  ReactElement,
  useState
} from 'react'
import styled from 'styled-components'
import { NavBarItem } from '../nav-bar-item/NavBarItem'
import { NavBarStyles } from './NavBarStyles'

const NavBarStyled = styled.div`${NavBarStyles}`

export const NavBar: FunctionComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const renderNav = (): ReactElement =>
    <nav className='large'>
      <NavBarItem
        text={'Development'}
        toUrl={'/development'}
      />
      <NavBarItem
        text={'Design'}
        toUrl={'/design'}
      />
      <NavBarItem
        text={'All'}
        toUrl={'/'}
      />
      <NavBarItem
        text={'Contact'}
        toUrl={'/contact'}
      />
    </nav>

  const renderNavMobile = (): ReactElement =>
    <div className='hamburger-wrapper'>
      <button>
        <div className='line-wrapper'>
          <div className='hamburger-line' />
          <div className='hamburger-line' />
          <div className='hamburger-line' />
        </div>
      </button>
    </div>

  return (
    <NavBarStyled>
      { renderNav() }
      { renderNavMobile() }
    </NavBarStyled>
  )
}

