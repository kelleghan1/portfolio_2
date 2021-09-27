import React, { FunctionComponent, useEffect, useState } from 'react'

export type PortfolioItemType = {
  description: string,
  homeImage: string,
  id: string,
  images: string[],
  primaryImage: string,
  rowColor: string,
  products: string[],
  name: string,
  types: string[],
}

const portfolioItemArray: PortfolioItemType[] = [
  {
    rowColor: '#fff',
    types: ['development'],
    name: 'Dropzio',
    id: 'dropzio',
    homeImage: '../images/primary/dropziomocksquare.jpg',
    products: ['Logo', 'Mobile App'],
    primaryImage: '../images/primary/dropzio.jpg',
    images: [
      '../images/mockups/dropziomock3.jpg',
      '../images/mockups/dropziomock1.jpg',
      '../images/mockups/dropziomock2.jpg',
      '../images/mockups/dropziomock4.jpg'
    ],
    description: 'Dropzio is a geolocation hybrid app that allows users to post images and messages to their current location. The posts then become visible to other users in the vicinity. Dropzio was created with Cordova and Ionic and was written in AngularJS. The back end was created using Ruby on Rails and manages users, posts, and geographic data through CRUD operations. The logo was created with Adobe Illustrator. You can see the front end on GitHub <a href="https://github.com/kelleghan1/dropzioApp2" target="_blank"><strong>here</strong></a> and the back end <a href="https://github.com/kelleghan1/dropzio_server"target="_blank"><strong>here</strong></a>.'
  }
]

export type PortfolioContextStateType = {
  portfolioItems: PortfolioItemType[]
}

export type PortfolioContextValueType = PortfolioContextStateType & {
  setPortfolioItems: (value: PortfolioItemType[]) => void
}

const intialPortfolioContextState: PortfolioContextStateType = {
  portfolioItems: [] as PortfolioItemType[]
}

const PortfolioContext = React.createContext<PortfolioContextStateType>(intialPortfolioContextState)

const PortfolioContextProvider: FunctionComponent = ({ children }) => {
  const [portfolioItems, setPortfolioItems] = useState(intialPortfolioContextState.portfolioItems)

  const getData = async () => {
    return setTimeout(
      () => {
        setPortfolioItems(portfolioItemArray)
      },
      2000
    )
  }

  useEffect(
    () =>{ getData() },
    []
  )

  const contextValue: PortfolioContextValueType = { portfolioItems, setPortfolioItems }

  return (
    <PortfolioContext.Provider value={contextValue}>
      {children}
    </PortfolioContext.Provider>
  )
}

export { PortfolioContext, PortfolioContextProvider }