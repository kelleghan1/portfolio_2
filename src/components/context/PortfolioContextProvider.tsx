import React,
{
  FunctionComponent,
  useEffect,
  useState
} from 'react'
import { useLocation } from 'react-router-dom'
import { getPortfolioData } from '../../services/getRequests'
import {
  PortfolioContextStateType,
  PortfolioContextValueType,
  PortfolioMapType
} from '../../types/contextTypes'
import { PortfolioItemType } from '../../types/dataTypes'
import { HandleNavigationFunctionType, TrueMapType } from '../../types/sharedTypes'
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
  projectImagesPreloaded: {}
}

const PortfolioContext = React.createContext<PortfolioContextStateType>(intialPortfolioContextState)

const PortfolioContextProvider: FunctionComponent = ({ children }) => {
  const [ portfolioMap, setPortfolioMap ] = useState(intialPortfolioContextState.portfolioMap)
  const [ projectIds, setProjectIds ] = useState(intialPortfolioContextState.projectIds)
  const [ isLoading, setIsLoading ] = useState(intialPortfolioContextState.isLoading)
  const [ isNavigating, setIsNavigating ] = useState(intialPortfolioContextState.isNavigating)
  const [ isMobileNavOpen, setIsMobileNavOpen ] = useState(intialPortfolioContextState.isMobileNavOpen)
  const [ areHomeImagesLoaded, setAreHomeImagesLoaded ] = useState(intialPortfolioContextState.areHomeImagesLoaded)
  const [ projectImagesPreloaded, setProjectImagesPreloaded ] = useState(intialPortfolioContextState.projectImagesPreloaded)
  const location = useLocation()

  const getProjectPathId = (path: string): string => {
    const pathSplit = path.split('/')

    if (pathSplit[1] === 'project') {
      return pathSplit[2] || ''
    }

    return ''
  }

  const getData = async (): Promise<void> => {
    const portfolioDataResponse = await getPortfolioData()
    const portfolioItems: PortfolioItemType[] = portfolioDataResponse?.data?.items
    const projectIds: string[] = []
    const newPortfolioMap: PortfolioMapType = {}
    const currentPathName = location?.pathname

    for (const item of portfolioItems) {
      if (item?.id) {
        projectIds.push(item.id)
        newPortfolioMap[item.id] = item
      }
    }

    const projectId = getProjectPathId(currentPathName)
    const portfolioItem = newPortfolioMap[projectId]

    if (portfolioItem) {
      void preloadImages([ portfolioItem.primaryImage, ...portfolioItem.images ])
        .then(imageUrls => {
          setProjectImagesPreloaded(prevState => ({ ...prevState, ...imageUrls }))
        })
    }

    void preloadImages(projectIds.map(projectId => newPortfolioMap[projectId].homeImage))
      .then(imageUrls => {
        setProjectImagesPreloaded(prevState => ({ ...prevState, ...imageUrls }))
        setAreHomeImagesLoaded(true)
      })

    setPortfolioMap(newPortfolioMap)
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
    const portFolioPaths: TrueMapType = {
      '/': true,
      '/design': true,
      '/development': true
    }

    if (
      !(
        currentPathName !== undefined &&
        portFolioPaths[currentPathName] &&
        portFolioPaths[to]
      )
    ) {
      setIsNavigating(true)

      const projectId = getProjectPathId(to)
      const portfolioItem = portfolioMap[projectId]

      if (portfolioItem) {
        void preloadImages([ portfolioItem.primaryImage, ...portfolioItem.images ])
          .then(imageUrls => {
            setProjectImagesPreloaded(prevState => ({ ...prevState, ...imageUrls }))
          })
      }

      return 200
    }

    return 0
  }

  const handleNavigationComplete = (): void => {
    scrollToTop()
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
    projectImagesPreloaded,
    setIsMobileNavOpen
  }

  return (
    <PortfolioContext.Provider value={contextValue}>
      { (!areHomeImagesLoaded || isLoading) && <LoadingOverlay /> }
      { children }
    </PortfolioContext.Provider>
  )
}

export { PortfolioContext, PortfolioContextProvider }
