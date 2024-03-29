import React,
{
  FunctionComponent,
  useEffect,
  useState
} from 'react'
import { useApolloClient } from '@apollo/client'
import { useLocation } from 'react-router-dom'
import { getPortfolioItems } from '../../services/graphQL'
import {
  PortfolioContextStateType,
  PortfolioContextValueType,
  PortfolioMapType
} from '../../types/contextTypes'
import { PortfolioItem } from '../../types/generatedGQLTypes'
import {
  HandleNavigationFunctionType,
  ImageLoadCallbackType,
  TrueMapType
} from '../../types/sharedTypes'
import { kelleghanDesignLogo } from '../../utils/constants/imageLinksCdn'
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
  const apolloClient = useApolloClient()
  const [ areHomeImagesLoaded, setAreHomeImagesLoaded ] = useState(intialPortfolioContextState.areHomeImagesLoaded)
  const [ isLoading, setIsLoading ] = useState(intialPortfolioContextState.isLoading)
  const [ isMobileNavOpen, setIsMobileNavOpen ] = useState(intialPortfolioContextState.isMobileNavOpen)
  const [ isNavigating, setIsNavigating ] = useState(intialPortfolioContextState.isNavigating)
  const [ portfolioMap, setPortfolioMap ] = useState(intialPortfolioContextState.portfolioMap)
  const [ projectIds, setProjectIds ] = useState(intialPortfolioContextState.projectIds)
  const [ projectImagesPreloaded, setProjectImagesPreloaded ] = useState(intialPortfolioContextState.projectImagesPreloaded)
  const location = useLocation()

  const portfolioPaths: TrueMapType = {
    '/': true,
    '/design': true,
    '/development': true
  }

  const getProjectPathId = (path: string): string => {
    const pathSplit = path.split('/')

    return pathSplit[1] === 'project' ? pathSplit[2] || '' : ''
  }

  const imageLoadCallback: ImageLoadCallbackType = imageUrl => {
    setProjectImagesPreloaded(prevState => ({ ...prevState, [imageUrl]: true }))
  }

  const getData = async (): Promise<void> => {
    const portfolioDataResponse = await getPortfolioItems(apolloClient)()
    const portfolioItems: PortfolioItem[] = portfolioDataResponse?.data?.portfolioItems ?? []
    const projectIds: string[] = []
    const newPortfolioMap: PortfolioMapType = {}
    const currentPathName = location?.pathname
    const homeImagesToPreload = []
    let individualImagesToPreload = [{ imageUrl: kelleghanDesignLogo }]

    for (const { projectId, homeImage, ...rest } of portfolioItems) {
      if (projectId && homeImage) {
        projectIds.push(projectId)
        homeImagesToPreload.push(homeImage)
        newPortfolioMap[projectId] = { projectId, homeImage, ...rest }
      }
    }

    const projectId = getProjectPathId(currentPathName)
    const portfolioItem = projectId && newPortfolioMap[projectId]

    if (portfolioItem) {
      individualImagesToPreload = [
        portfolioItem.primaryImage,
        ...individualImagesToPreload,
        ...portfolioItem.projectImages
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
            ...portfolioItem.projectImages
          ],
          imageLoadCallback
        )
      }

      return 200
    } else if (currentPathName === to) {
      event.preventDefault()
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
