import {
  Dispatch,
  SetStateAction
} from 'react'
import { PortfolioItem } from './generatedGQLTypes'
import {
  HandleNavigationFunctionType,
  TrueMapType
} from './sharedTypes'

export interface PortfolioMapType {
  [key: string]: PortfolioItem
}

export interface PortfolioContextStateType {
  areHomeImagesLoaded: boolean
  isLoading: boolean
  isMobileNavOpen: boolean
  isNavigating: boolean
  portfolioMap: PortfolioMapType
  projectIds: string[]
  projectImagesPreloaded: TrueMapType
}

export type PortfolioContextValueType = PortfolioContextStateType & {
  handleNavigation: HandleNavigationFunctionType
  setIsMobileNavOpen: Dispatch<SetStateAction<boolean>>
  handleNavigationComplete: () => void
}
