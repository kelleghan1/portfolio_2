import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { appStyles } from './AppStyles'
// import { Pure } from './components/pure/Pure'
// import { PureUnit } from './components/pure-unit/PureUnit'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './routes/Home'
import { Test } from './routes/Test'
import { Container } from './components/container/Container'
// import { Pure } from './components/pure/Pure'
// import { PureUnit } from './components/pure-unit/PureUnit'

const AppStyled = styled.div`${appStyles}`

export const App: FunctionComponent = () => {
  return (
    <AppStyled>
      <BrowserRouter>
        <Container>
          <Switch>
            <Route
              component={Home}
              exact
              path='/'
            />
            <Route
              component={Test}
              exact
              path='/test'
            />
          </Switch>
        </Container>
      </BrowserRouter>
      {/* <Pure>
        <PureUnit pureClass='u-1 u-lg-1-2'>PURE1</PureUnit>
        <PureUnit pureClass='u-1 u-lg-1-2'>PURE1</PureUnit>
      </Pure> */}
    </AppStyled>
  )
}
