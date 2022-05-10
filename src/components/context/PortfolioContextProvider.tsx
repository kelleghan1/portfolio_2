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
import { HandleNavigationFunctionType, ImageLoadCallbackType } from '../../types/sharedTypes'
import { kelleghanDesignLogo } from '../../utils/constants/imageLinksCdn'
import { portfolioPaths } from '../../utils/constants/shared'
import {
  preloadImagesSet,
  preloadImagesIndividual,
  scrollToTop
} from '../../utils/helpers'
import { LoadingOverlay } from '../common/loading-overlay/LoadingOverlay'

const intialPortfolioContextState: PortfolioContextStateType = {
  areHomeImagesLoaded: false,
  isLoading: true,
  isMobileNavOpen: false,
  isNavigating: false,
  portfolioMap: {},
  projectIds: [],
  projectImagesPreloaded: {}
}

const PortfolioContext = React.createContext<PortfolioContextStateType>(intialPortfolioContextState)

const PortfolioContextProvider: FunctionComponent = ({ children }) => {
  const [ areHomeImagesLoaded, setAreHomeImagesLoaded ] = useState(intialPortfolioContextState.areHomeImagesLoaded)
  const [ isLoading, setIsLoading ] = useState(intialPortfolioContextState.isLoading)
  const [ isMobileNavOpen, setIsMobileNavOpen ] = useState(intialPortfolioContextState.isMobileNavOpen)
  const [ isNavigating, setIsNavigating ] = useState(intialPortfolioContextState.isNavigating)
  const [ portfolioMap, setPortfolioMap ] = useState(intialPortfolioContextState.portfolioMap)
  const [ projectIds, setProjectIds ] = useState(intialPortfolioContextState.projectIds)
  const [ projectImagesPreloaded, setProjectImagesPreloaded ] = useState(intialPortfolioContextState.projectImagesPreloaded)
  const location = useLocation()

  const getProjectPathId = (path: string): string => {
    const pathSplit = path.split('/')

    if (pathSplit[1] === 'project') {
      return pathSplit[2] || ''
    }

    return ''
  }

  const imageLoadCallback: ImageLoadCallbackType = imageUrl => {
    setProjectImagesPreloaded(prevState => ({ ...prevState, [imageUrl]: true }))
  }

  const getData = async (): Promise<void> => {
    const portfolioDataResponse = await getPortfolioData()
    const portfolioItems: PortfolioItemType[] = portfolioDataResponse?.data?.items
    const projectIds: string[] = []
    const newPortfolioMap: PortfolioMapType = {}
    const currentPathName = location?.pathname
    const homeImagesToPreload = []
    let individualImagesToPreload = [ kelleghanDesignLogo ]

    for (const { id, homeImage, ...rest } of portfolioItems) {
      if (id && homeImage) {
        projectIds.push(id)
        homeImagesToPreload.push(homeImage)
        newPortfolioMap[id] = { id, homeImage, ...rest }
      }
    }

    const projectId = getProjectPathId(currentPathName)
    const portfolioItem = newPortfolioMap[projectId]

    if (portfolioItem) {
      individualImagesToPreload = [
        portfolioItem.primaryImage,
        ...individualImagesToPreload,
        ...portfolioItem.images
      ]
    }

    void preloadImagesIndividual(
      individualImagesToPreload,
      imageLoadCallback
    )

    void preloadImagesSet(homeImagesToPreload)
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
    if (
      !portfolioPaths[currentPathName] ||
      !portfolioPaths[to]
    ) {
      setIsNavigating(true)

      const projectId = getProjectPathId(to)
      const portfolioItem = portfolioMap[projectId]

      if (portfolioItem) {
        void preloadImagesIndividual(
          [
            portfolioItem.primaryImage,
            ...portfolioItem.images
          ],
          imageLoadCallback
        )
      }

      return 200
    } else if (currentPathName === to) {
      event.preventDefault()
      scrollToTop()
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
      { isLoading && <LoadingOverlay /> }
      { children }
    </PortfolioContext.Provider>
  )
}

export { PortfolioContext, PortfolioContextProvider }
