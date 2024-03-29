import React,
{
  FunctionComponent,
  MutableRefObject,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import { HandleEnterUpdateDelete } from 'flip-toolkit/lib/types'
import { Flipper, Flipped } from 'react-flip-toolkit'
import styled from 'styled-components'
import { LoadingOverlay } from '../../common/loading-overlay/LoadingOverlay'
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

const PortfolioGrid: FunctionComponent<PortfolioGridProps> = ({ filter }) => {
  const [ isInitialLoad, setIsInitialLoad ] = useState(true)
  const {
    portfolioMap,
    projectIds,
    isNavigating,
    areHomeImagesLoaded
  } = useContext(PortfolioContext)

  const loadElement: MutableRefObject<null> = useRef(null)

  useEffect(
    () => { setIsInitialLoad(false) },
    [ loadElement ]
  )

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

  const handleEnterUpdateDeleteProp: HandleEnterUpdateDelete = useCallback(
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
    },
    []
  )

  const renderPortfolioGrid = (): ReactElement[] => {
    const portfolioGridItems: ReactElement[] = []

    for (let i = 0; i < projectIds.length; i++) {
      const projectId = projectIds[i]
      const portfolioItem = portfolioMap[projectId]

      if (
        !portfolioItem ||
        (
          filter &&
          !portfolioItem?.categories?.find(category => category.name === filter)
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
            homeImage={homeImage.imageUrl}
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
  const flipKey = `
    ${loadElement.current === null ? '0' : '1'}
    ${projectIds.length}${areHomeImagesLoaded ? '0' : '1'}
    ${filter ?? '1'}
    ${isNavigating ? '1' : '0'}
  `

  return (
    <>
      { !areHomeImagesLoaded && <LoadingOverlay fadeIn={false} /> }
      <PageRow>
        <Container>
          <Spacer
            l={3}
            r={3}
            t={0}
          >
            <Flipper
              flipKey={flipKey}
              handleEnterUpdateDelete={handleEnterUpdateDeleteProp}
              spring={{
                stiffness: 1190,
                damping: 120
              }}
            >
              <div ref={loadElement}>
                <PortfolioGridStyled>
                  {
                    (
                      isInitialLoad ||
                      isNavigating ||
                      !areHomeImagesLoaded
                    )
                      ? null
                      : renderPortfolioGrid()
                  }
                </PortfolioGridStyled>
              </div>
            </Flipper>
          </Spacer>
        </Container>
      </PageRow>
    </>
  )
}

export default PortfolioGrid
