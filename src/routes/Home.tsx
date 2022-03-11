import React, { FunctionComponent } from 'react'
import { useParams } from 'react-router'
import { PortfolioGrid } from '../components/common/portfolio-grid/PortfolioGrid'
// import { PortfolioList } from '../components/common/portfolio-list/PortfolioList'

type ParamsType = {
  filter?: string
}

export const Home: FunctionComponent = () => {
  const { filter } = useParams<ParamsType>()
  const filterToLowerCase = filter?.toLowerCase()

  // return <PortfolioList filter={filterToLowerCase} />
  return <PortfolioGrid filter={filterToLowerCase} />
}

