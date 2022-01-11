import React,
{
  FunctionComponent,
  useContext
} from 'react'
import styled from 'styled-components'
import { PortfolioContextValueType } from '../../../types/contextTypes'
import { PortfolioContext } from '../../context/PortfolioContextProvider'
import { PortfolioGridStyles } from './PortfolioGridStyles'
import { PortfolioGridItem } from '../portfolio-grid-item/PortfolioGridItem'
import { PageRow } from '../../layout/page-row/PageRow'
import { Container } from '../../layout/container/Container'
import { Spacer } from '../../layout/spacer/Spacer'

const PortfolioGridStyled = styled.div`${PortfolioGridStyles}`

type PortfolioGridProps = {
  filter?: string
}

export const PortfolioGrid: FunctionComponent<PortfolioGridProps> = ({ filter }) => {
  const {
    portfolioMap,
    projectIds
  } = useContext(PortfolioContext) as PortfolioContextValueType

  console.log(
    '###',
    filter
  )

  const renderGridItem = (projectId: string) => {

    const portfolioItem = portfolioMap[projectId]

    if (!portfolioItem) return null

    const {
      homeImage,
      id
    } = portfolioItem

    return (
      <PortfolioGridItem
        homeImage={homeImage}
        id={id}
        key={id}
      />
    )
  }

  return (
    <PageRow>
      <Container>
        <Spacer
          l={3}
          r={3}
        >
          <PortfolioGridStyled>
            { projectIds.map(renderGridItem) }
          </PortfolioGridStyled>
        </Spacer>
      </ Container>
    </ PageRow>
  )
}

