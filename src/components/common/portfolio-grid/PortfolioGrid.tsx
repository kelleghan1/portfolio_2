import React,
{
  FunctionComponent,
  useContext
} from 'react'
import styled from 'styled-components'
import {
  PortfolioContext,
  PortfolioContextValueType,
  PortfolioItemType
} from '../../context/PortfolioContextProvider'
import { PageRow } from '../../layout/page-row/PageRow'
import { PortfolioGridStyles } from './PortfolioGridStyles'

const PortfolioGridStyled = styled.div`${PortfolioGridStyles}`

type PortfolioGridProps = {
  filter?: string
}

export const PortfolioGrid: FunctionComponent<PortfolioGridProps> = ({ filter }) => {
  const { portfolioItems } = useContext(PortfolioContext) as PortfolioContextValueType

  const renderPageRow = (item: PortfolioItemType) => {
    return (
      <PageRow
        color={item.rowColor}
        key={item.id}
      >
        <div>
          {filter}
        </div>
        <div>
          {item.name}
        </div>
      </PageRow>
    )
  }

  return (
    <PortfolioGridStyled>
      { portfolioItems.map(renderPageRow)}
    </PortfolioGridStyled>
  )
}

