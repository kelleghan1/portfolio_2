import React, { FunctionComponent, Suspense } from 'react'
import { useParams } from 'react-router'
import { LoadingOverlay } from '../components/common/loading-overlay/LoadingOverlay'
// import { PortfolioList } from '../components/common/portfolio-list/PortfolioList'
const PortfolioGrid = React.lazy(async () => await import('../components/page-content/portfolio-grid/PortfolioGrid'))

interface ParamsType {
  filter?: string
}

export const Home: FunctionComponent = () => {
  const { filter } = useParams<ParamsType>()
  const filterToLowerCase = filter?.toLowerCase()

  // return <PortfolioList filter={filterToLowerCase} />
  return (
    <Suspense fallback={<LoadingOverlay />}>
      <PortfolioGrid filter={filterToLowerCase} />
    </Suspense>
  )
}
