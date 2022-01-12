import React,
{
  FunctionComponent,
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

type PortfolioGridProps = {
  filter?: string
}

export const PortfolioGrid: FunctionComponent<PortfolioGridProps> = ({ filter }) => {
  const {
    portfolioMap,
    projectIds
  } = useContext(PortfolioContext)

  // console.log(
  //   '###',
  //   filter
  // )

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

