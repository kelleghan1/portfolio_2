import React,
{
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'
import styled from 'styled-components'
import { PortfolioContext } from '../../context/PortfolioContextProvider'
import { Container } from '../../layout/container/Container'
import { PageRow } from '../../layout/page-row/PageRow'
import { Spacer } from '../../layout/spacer/Spacer'
import { PortfolioGridItem } from '../portfolio-grid-item/PortfolioGridItem'
import { PortfolioGridStyles } from './PortfolioGridStyles'

const PortfolioGridStyled = styled.div`${PortfolioGridStyles}`

interface PortfolioGridProps {
  filter?: string
}

export const PortfolioGrid: FunctionComponent<PortfolioGridProps> = ({ filter }) => {
  const [areImagesLoaded, setAreImagesLoaded] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  const {
    portfolioMap,
    projectIds,
    isNavigating
  } = useContext(PortfolioContext)

  useEffect(
    () => {
      void preloadImages(projectIds.map(projectId => portfolioMap[projectId].homeImage))
        .then(() => {
          setAreImagesLoaded(true)
          setIsInitialLoad(false)
        })
    },
    [
      projectIds,
      portfolioMap
    ]
  )

  const preloadImages = async (imageUrls: string[]): Promise<null[]> =>
    await Promise.all(imageUrls.map(async url =>
      await new Promise(resolve => {
        const imageObject = new Image()
        imageObject.onload = () => { resolve(null) }
        imageObject.src = url
      })))

  const handleAppear = (
    appearElement: HTMLElement,
    appearIndex: number
  ): void => {
    setTimeout(
      () => {
        setTimeout(
          () => { appearElement.classList.add('fade-in') },
          appearIndex * 16
        )
      },
      150
    )
  }

  const handleExit = (
    exitElement: HTMLElement,
    exitIndex: number,
    removeElement: () => void
  ): void => {
    exitElement.classList.add('fade-out')

    setTimeout(
      removeElement,
      200
    )
  }

  const renderPortfolioGrid = (): ReactNode[] => {
    const portfolioGridItems: ReactNode[] = []

    if (!areImagesLoaded || isInitialLoad || isNavigating) return portfolioGridItems

    for (let i = 0; i < projectIds.length; i++) {
      const projectId = projectIds[i]
      const portfolioItem = portfolioMap[projectId]

      if (
        !portfolioItem ||
        (
          filter &&
          !portfolioItem?.categories?.includes(filter)
        )
      ) continue

      const { homeImage } = portfolioItem

      portfolioGridItems[portfolioGridItems.length] = (
        <Flipped
          flipId={projectId}
          key={projectId}
          onAppear={handleAppear}
          onExit={handleExit}
        >
          <PortfolioGridItem
            homeImage={homeImage}
            projectId={projectId}
          />
        </Flipped>
      )
    }

    return portfolioGridItems
  }

  // flipKey will will trigger reevaluation of items in the grid, triggering animation if they have changed.
  // Key is changed for prejectId length, filter, isInitialLoad, and isNavigating
  const flipKey = `${projectIds.length}${filter ?? '1'}${isInitialLoad ? '1' : '0'}${isNavigating ? '1' : '0'}`

  return (
    <PageRow>
      <Container>
        <Spacer
          l={3}
          r={3}
          t={0}
        >
          <Flipper
            flipKey={flipKey}
            handleEnterUpdateDelete={
              ({
                hideEnteringElements,
                animateEnteringElements,
                animateExitingElements,
                animateFlippedElements
              }) => {
                hideEnteringElements()

                void animateExitingElements()
                  .then(animateFlippedElements)

                void animateEnteringElements()
              }
            }
            spring={{ stiffness: 1190, damping: 120 }}
          >
            <PortfolioGridStyled>
              { renderPortfolioGrid() }
            </PortfolioGridStyled>
          </ Flipper>
        </ Spacer>
      </ Container>
    </ PageRow>
  )
}

