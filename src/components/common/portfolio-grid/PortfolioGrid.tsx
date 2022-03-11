import React,
{
  FunctionComponent,
  ReactElement,
  useContext
} from 'react'
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

  const renderPortfolioGrid = (): ReactElement[] => {
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
        <PortfolioGridItem
          homeImage={homeImage}
          key={projectId}
          projectId={projectId}
        />
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
          <PortfolioGridStyled>
            { renderPortfolioGrid() }
          </PortfolioGridStyled>
        </Spacer>
      </ Container>
    </ PageRow>
  )
}

