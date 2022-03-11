import React,
{
  FunctionComponent,
  ReactElement,
  useContext
} from 'react'
import styled from 'styled-components'
import { PortfolioContextValueType } from '../../../types/contextTypes'
import { PortfolioContext } from '../../context/PortfolioContextProvider'
import { PortfolioListItem } from '../portfolio-list-item/PortfolioListItem'
import { PortfolioListStyles } from './PortfolioListStyles'

const PortfolioListStyled = styled.div`${PortfolioListStyles}`

interface PortfolioListProps {
  filter?: string
}

export const PortfolioList: FunctionComponent<PortfolioListProps> = ({ filter }) => {
  const {
    portfolioMap,
    projectIds
  } = useContext(PortfolioContext) as PortfolioContextValueType

  // console.log(
  //   '###',
  //   filter
  // )

  const renderPageRow = (projectId: string): ReactElement | null => {
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

