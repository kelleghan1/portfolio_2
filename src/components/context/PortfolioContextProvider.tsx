import React,
{
  FunctionComponent,
  useEffect,
  useState
} from 'react'
import { getPortfolioData } from '../../services/getRequests'
import {
  PortfolioContextStateType,
  PortfolioContextValueType,
  PortfolioMapType
} from '../../types/contextTypes'
import { PortfolioItemType } from '../../types/dataTypes'
import { HandleNavigationFunctionType } from '../../types/sharedTypes'
import {
  preloadImages,
  scrollToTop
} from '../../utils/helpers'
import { LoadingOverlay } from '../common/loading-overlay/LoadingOverlay'

const intialPortfolioContextState: PortfolioContextStateType = {
  portfolioMap: {},
  projectIds: [],
  isLoading: true,
  isNavigating: false,
  isMobileNavOpen: false,
  areHomeImagesLoaded: false,
  projectImagePreloadMap: {}
}

const PortfolioContext = React.createContext<PortfolioContextStateType>(intialPortfolioContextState)

const PortfolioContextProvider: FunctionComponent = ({ children }) => {
  const [ portfolioMap, setPortfolioMap ] = useState(intialPortfolioContextState.portfolioMap)
  const [ projectIds, setProjectIds ] = useState(intialPortfolioContextState.projectIds)
  const [ isLoading, setIsLoading ] = useState(intialPortfolioContextState.isLoading)
  const [ isNavigating, setIsNavigating ] = useState(intialPortfolioContextState.isNavigating)
  const [ isMobileNavOpen, setIsMobileNavOpen ] = useState(intialPortfolioContextState.isMobileNavOpen)
  const [ areHomeImagesLoaded, setAreHomeImagesLoaded ] = useState(intialPortfolioContextState.areHomeImagesLoaded)
  const [ projectImagePreloadMap, setProjectImagePreloadMap ] = useState(intialPortfolioContextState.projectImagePreloadMap)

  const getData = async (): Promise<void> => {
    const portfolioDataResponse = await getPortfolioData()
    const portfolioItems: PortfolioItemType[] = portfolioDataResponse?.data?.items
    const projectIds: string[] = []
    const portfolioMap: PortfolioMapType = {}

    for (const item of portfolioItems) {
      if (item?.id) {
        projectIds.push(item.id)
        portfolioMap[item.id] = item

        void preloadImages([ item.primaryImage, ...item.images ])
          .then(() => {
            setProjectImagePreloadMap(prevState => ({ ...prevState, [item.id]: true }))
          })
      }
    }

    void preloadImages(projectIds.map(projectId => portfolioMap[projectId].homeImage))
      .then(() => { setAreHomeImagesLoaded(true) })

    setPortfolioMap(portfolioMap)
    setProjectIds(projectIds)
    setIsLoading(false)
  }

  useEffect(
    () => { void getData() },
    []
  )

  const handleNavigation: HandleNavigationFunctionType = (
    currentPathName,
    event,
    to
  ) => {
    const portFolioPaths = [
      '/',
      '/design',
      '/development'
    ]

    if (
      !(
        currentPathName !== undefined &&
        portFolioPaths.includes(currentPathName) &&
        portFolioPaths.includes(to)
      )
    ) {
      setIsNavigating(true)
      scrollToTop()

      return 250
    }

    scrollToTop()

    return 0
  }

  const handleNavigationComplete = (): void => {
    setIsNavigating(false)
  }

  const contextValue: PortfolioContextValueType = {
    areHomeImagesLoaded,
    handleNavigation,
    handleNavigationComplete,
    isLoading,
    isMobileNavOpen,
    isNavigating,
    portfolioMap,
    projectIds,
    projectImagePreloadMap,
    setIsMobileNavOpen
  }

  return (
    <PortfolioContext.Provider value={contextValue}>
      { isLoading && <LoadingOverlay /> }
      { children }
    </PortfolioContext.Provider>
  )
}

export { PortfolioContext, PortfolioContextProvider }
