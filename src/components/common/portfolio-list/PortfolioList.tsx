import React,
{
  FunctionComponent,
  useContext
} from 'react'
import styled from 'styled-components'
import { PortfolioContextValueType } from '../../../types/contextTypes'
import { PortfolioContext } from '../../context/PortfolioContextProvider'
import { PortfolioListStyles } from './PortfolioListStyles'
import { PortfolioListItem } from '../portfolio-list-item/PortfolioListItem'

const PortfolioListStyled = styled.div`${PortfolioListStyles}`

type PortfolioListProps = {
  filter?: string
}

export const PortfolioList: FunctionComponent<PortfolioListProps> = ({ filter }) => {
  const {
    portfolioMap,
    projectIds
  } = useContext(PortfolioContext) as PortfolioContextValueType

  console.log(
    '###',
    filter
  )

  const renderPageRow = (projectId: string) => {
    const portfolioItem = portfolioMap[projectId]

    if (!portfolioItem) return null

    const {
      description,
      homeImage,
      id,
      name,
      rowColor,
      textColor,
      products
    } = portfolioItem

    return (
      <PortfolioListItem
        description={description}
        homeImage={homeImage}
        id={id}
        key={id}
        name={name}
        products={products}
        rowColor={rowColor}
        textColor={textColor}
      />
    )
  }

  return (
    <PortfolioListStyled>
      { projectIds.map(renderPageRow) }
    </PortfolioListStyled>
  )
}

