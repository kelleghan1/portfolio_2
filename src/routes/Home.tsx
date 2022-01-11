import React, { FunctionComponent } from 'react'
import { Redirect, useParams } from 'react-router'

// import { PortfolioList } from '../components/common/portfolio-list/PortfolioList'
import { PortfolioGrid } from '../components/common/portfolio-grid/PortfolioGrid'

type Params = {
  filter?: string
}

export const Home: FunctionComponent = () => {
  const { filter } = useParams<Params>()
  const filterToLowerCase = filter?.toLowerCase()

  if (
    filterToLowerCase &&
    filterToLowerCase !== 'design' &&
    filter !== 'development'
  ) return <Redirect to='/' />

  // return <PortfolioList filter={filterToLowerCase} />
  return <PortfolioGrid filter={filterToLowerCase} />
}

