import React,
{
  FunctionComponent,
  ReactNode,
  useContext
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
  const {
    portfolioMap,
    projectIds
  } = useContext(PortfolioContext)

  const renderPortfolioGrid = (): ReactNode[] => {
    const portfolioGridItems = []

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
          onAppear={
            (
              appearElement,
              appearIndex
            ) => setTimeout(
              () => {
                setTimeout(
                  () => { appearElement.classList.add('fade-in') },
                  appearIndex * 16
                )
              },
              230
            )
          }
          onExit={
            (
              exitElement,
              exitIndex,
              removeElement
            ) => {
              exitElement.classList.add('fade-out')

              setTimeout(
                removeElement,
                200
              )
            }
          }
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

  return (
    <PageRow>
      <Container>
        <Spacer
          l={3}
          r={3}
        >
          <Flipper
            flipKey={`${filter ?? 'no-filter'}`}
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

