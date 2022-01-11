import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { appStyles } from './AppStyles'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Home } from './routes/Home'
import { Contact } from './routes/Contact'
// import { Development } from './routes/Development'
// import { Design } from './routes/Design'
// import { Pure } from './components/pure/Pure'
// import { PureUnit } from './components/pure-unit/PureUnit'
import { Header } from './components/layout/header/Header'
import { PortfolioContextProvider } from './components/context/PortfolioContextProvider'

const AppStyled = styled.div`${appStyles}`

export const App: FunctionComponent = () => {
  return (
    <AppStyled>
      <BrowserRouter>
        <PortfolioContextProvider>
          <Header />
          <Switch>
            <Route
              component={Contact}
              exact
              path='/contact'
            />
            <Route
              component={Contact}
              exact
              path='/project/:projectId'
            />
            <Route
              component={Home}
              exact
              path={[
                '/',
                '/:filter'
              ]}
            />
            <Redirect to='/' />
          </Switch>
        </PortfolioContextProvider>
      </BrowserRouter>
    </AppStyled>
  )
}
