import {
  Dispatch,
  SetStateAction
} from 'react'
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
  isMobileNavOpen: boolean
}

export type PortfolioContextValueType = PortfolioContextStateType & {
  handleNavigation: HandleNavigationFunctionType
  setIsMobileNavOpen: Dispatch<SetStateAction<boolean>>
  handleNavigationComplete: () => void
}

