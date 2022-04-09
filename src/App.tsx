import React, { FunctionComponent } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { appStyles } from './AppStyles'
import { PortfolioContextProvider } from './components/context/PortfolioContextProvider'
import { Header } from './components/layout/header/Header'
import { Contact } from './routes/Contact'
import { Home } from './routes/Home'
import { Project } from './routes/Project'
import { ProjectDemo } from './routes/ProjectDemo'

const AppStyled = styled.div`${appStyles}`

export const App: FunctionComponent = () => {
  return (
    <AppStyled>
      <BrowserRouter>
        <PortfolioContextProvider>
          <Header />
          <Switch>
            <Route
              component={Home}
              exact
              path={[
                '/',
                '/:filter(design|development)'
              ]}
            />
            <Route
              component={Contact}
              exact
              path='/contact'
            />
            <Route
              component={Project}
              exact
              path='/project/:projectId'
            />
            <Route
              component={ProjectDemo}
              exact
              path='/project/:projectId/demo'
            />
            <Redirect to='/' />
          </Switch>
        </PortfolioContextProvider>
      </BrowserRouter>
    </AppStyled>
  )
}
