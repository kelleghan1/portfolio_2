import React, { FunctionComponent, useEffect, useState } from 'react'
import { getPortfolioData } from '../../services/getRequests'
import { PortfolioItemType } from '../../types/dataTypes'
import {
  PortfolioContextStateType,
  PortfolioContextValueType,
  PortfolioMapType
} from '../../types/contextTypes'

const intialPortfolioContextState: PortfolioContextStateType = {
  portfolioMap: {},
  projectIds: []
}

const PortfolioContext = React.createContext<PortfolioContextStateType>(intialPortfolioContextState)

const PortfolioContextProvider: FunctionComponent = ({ children }) => {
  const [portfolioMap, setPortfolioMap] = useState(intialPortfolioContextState.portfolioMap)
  const [projectIds, setProjectIds] = useState(intialPortfolioContextState.projectIds)

  const getData = async () => {
    const portfolioDataResponse = await getPortfolioData()
    const portfolioItems: PortfolioItemType[] = portfolioDataResponse?.data?.items
    const projectIds: string[] = []
    const portfolioMap: PortfolioMapType = {}

    for (const item of portfolioItems) {
      if (item?.id) {
        projectIds.push(item.id)
        portfolioMap[item.id] = item
      }
    }

    setPortfolioMap(portfolioMap)
    setProjectIds(projectIds)
  }

  useEffect(
    () => { getData() },
    []
  )

  const contextValue: PortfolioContextValueType = {
    portfolioMap,
    projectIds,
    setPortfolioMap
  }

  return (
    <PortfolioContext.Provider value={contextValue}>
      {children}
    </PortfolioContext.Provider>
  )
}

export { PortfolioContext, PortfolioContextProvider }