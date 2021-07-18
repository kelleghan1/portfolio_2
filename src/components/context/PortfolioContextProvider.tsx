import React, { FunctionComponent, useState } from 'react'

const PortfolioContext = React.createContext({})

const PortfolioContextProvider: FunctionComponent = ({ children }) => {
  const [number, setNumber] = useState(11)

  const getData = () => {}
  return (
    <PortfolioContext.Provider value={{ number, setNumber }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export { PortfolioContext, PortfolioContextProvider }