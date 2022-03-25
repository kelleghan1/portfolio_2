import { PortfolioItemType } from './dataTypes'
import { HandleNavigationFunctionType } from './sharedTypes'

export interface PortfolioMapType {
  [key: string]: PortfolioItemType
}

export interface PortfolioContextStateType {
  isLoading: boolean
  isNavigating: boolean
  portfolioMap: PortfolioMapType
  projectIds: string[]
}

export type PortfolioContextValueType = PortfolioContextStateType & {
  handleNavigation: HandleNavigationFunctionType
  handleNavigationComplete: () => void
}

