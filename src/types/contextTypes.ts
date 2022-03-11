import { PortfolioItemType } from './dataTypes'

export interface PortfolioMapType {
  [key: string]: PortfolioItemType
}

export interface PortfolioContextStateType {
  portfolioMap: PortfolioMapType
  projectIds: string[]
  isLoading: boolean
}

export type PortfolioContextValueType = PortfolioContextStateType & {
  setPortfolioMap: (value: PortfolioMapType) => void
}

