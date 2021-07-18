import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { appStyles } from './AppStyles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './routes/Home'
import { Contact } from './routes/Contact'
import { Development } from './routes/Development'
import { Design } from './routes/Design'
// import { Pure } from './components/pure/Pure'
// import { PureUnit } from './components/pure-unit/PureUnit'
import { Header } from './components/layout/header/Header'

const AppStyled = styled.div`${appStyles}`

export const App: FunctionComponent = () => {
  return (
    <AppStyled>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            component={Home}
            exact
            path='/'
          />
          <Route
            component={Design}
            exact
            path='/design'
          />
          <Route
            component={Development}
            exact
            path='/development'
          />
          <Route
            component={Contact}
            exact
            path='/contact'
          />
        </Switch>
      </BrowserRouter>
      {/* <Pure>
        <PureUnit pureClass='u-1 u-lg-1-2'>PURE1</PureUnit>
        <PureUnit pureClass='u-1 u-lg-1-2'>PURE1</PureUnit>
      </Pure> */}
    </AppStyled>
  )
}
