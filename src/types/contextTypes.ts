import { PortfolioItemType } from './dataTypes'

export type PortfolioMapType = {
  [key: string]: PortfolioItemType
}

export type PortfolioContextStateType = {
  portfolioMap: PortfolioMapType,
  projectIds: string[],
  isLoading: boolean
}

export type PortfolioContextValueType = PortfolioContextStateType & {
  setPortfolioMap: (value: PortfolioMapType) => void
}

