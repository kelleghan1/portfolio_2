import React,
{
  FunctionComponent,
  ReactNode,
  useContext
} from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'
import styled from 'styled-components'
import { PortfolioGridItem } from '../../common/portfolio-grid-item/PortfolioGridItem'
import { PortfolioContext } from '../../context/PortfolioContextProvider'
import { Container } from '../../layout/container/Container'
import { PageRow } from '../../layout/page-row/PageRow'
import { Spacer } from '../../layout/spacer/Spacer'
import { PortfolioGridStyles } from './PortfolioGridStyles'

const PortfolioGridStyled = styled.div`${PortfolioGridStyles}`

interface PortfolioGridProps {
  filter?: string
}

export const PortfolioGrid: FunctionComponent<PortfolioGridProps> = ({ filter }) => {
  const {
    portfolioMap,
    projectIds,
    isNavigating,
    areHomeImagesLoaded
  } = useContext(PortfolioContext)

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
      120
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

    if (!areHomeImagesLoaded || isNavigating) return portfolioGridItems

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

      const {
        homeImage,
        name
      } = portfolioItem

      portfolioGridItems[portfolioGridItems.length] = (
        <Flipped
          flipId={projectId}
          key={projectId}
          onAppear={handleAppear}
          onExit={handleExit}
        >
          <PortfolioGridItem
            homeImage={homeImage}
            name={name}
            projectId={projectId}
          />
        </Flipped>
      )
    }

    return portfolioGridItems
  }

  // flipKey will will trigger reevaluation of items in the grid, triggering animation if they have changed.
  // Key is changed for prejectId length, filter, isInitialLoad, and isNavigating
  const flipKey = `${projectIds.length}${areHomeImagesLoaded ? '0' : '1'}${filter ?? '1'}${isNavigating ? '1' : '0'}`

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
          </Flipper>
        </Spacer>
      </Container>
    </PageRow>
  )
}

