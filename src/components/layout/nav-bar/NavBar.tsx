import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { NavBarStyles } from './NavBarStyles'

const NavBarStyled = styled.div`${NavBarStyles}`

export const NavBar: FunctionComponent = () =>
  <NavBarStyled>
    <nav>
      <div className='nav-link-wrapper'>
        <Link to='/development'>
          Development
        </Link>
      </div>
      <div className='nav-link-wrapper'>
        <Link to='/design'>
          Design
        </Link>
      </div>
      <div className='nav-link-wrapper'>
        <Link to='/'>
          All
        </Link>
      </div>
      <div className='nav-link-wrapper'>
        <Link to='/contact'>
          Contact
        </Link>
      </div>
    </nav>
  </NavBarStyled>

