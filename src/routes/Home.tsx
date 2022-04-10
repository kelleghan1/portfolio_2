import React, { FunctionComponent } from 'react'
import { useParams } from 'react-router'
import { PortfolioGrid } from '../components/page-content/portfolio-grid/PortfolioGrid'
// import { PortfolioList } from '../components/common/portfolio-list/PortfolioList'

interface ParamsType {
  filter?: string
}

export const Home: FunctionComponent = () => {
  const { filter } = useParams<ParamsType>()
  const filterToLowerCase = filter?.toLowerCase()

  // return <PortfolioList filter={filterToLowerCase} />
  return <PortfolioGrid filter={ filterToLowerCase } />
}

