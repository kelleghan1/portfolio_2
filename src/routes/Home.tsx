import React, { FunctionComponent } from 'react'
import { Redirect, useParams } from 'react-router'
import { PortfolioGrid } from '../components/common/portfolio-grid/PortfolioGrid'
// import { PortfolioList } from '../components/common/portfolio-list/PortfolioList'

type ParamsType = {
  filter?: string
}

export const Home: FunctionComponent = () => {
  const { filter } = useParams<ParamsType>()
  const filterToLowerCase = filter?.toLowerCase()

  if (
    filterToLowerCase &&
    filterToLowerCase !== 'design' &&
    filter !== 'development'
  ) return <Redirect to='/' />

  // return <PortfolioList filter={filterToLowerCase} />
  return <PortfolioGrid filter={filterToLowerCase} />
}

