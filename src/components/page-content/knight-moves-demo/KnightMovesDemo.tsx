import React, { FunctionComponent, useContext } from 'react'
import { KnightMoves } from 'knight-moves'
import styled from 'styled-components'
import { PortfolioContext } from '../../context/PortfolioContextProvider'
import { Container } from '../../layout/container/Container'
import { PageRow } from '../../layout/page-row/PageRow'
import { Spacer } from '../../layout/spacer/Spacer'
import { KnightMovesDemoStyles } from './KnightMovesDemoStyles'

const KnightMovesDemoStyled = styled.div`${KnightMovesDemoStyles}`

export const KnightMovesDemo: FunctionComponent = () => {
  const { isNavigating } = useContext(PortfolioContext)

  return (
    <PageRow>
      <Container>
        <Spacer
          l={3}
          r={3}
          t={0}
        >
          <KnightMovesDemoStyled className={`fade-in ${isNavigating ? 'fade-out' : ''}`}>
            <KnightMoves quadrantSize={15} />
          </KnightMovesDemoStyled>
        </Spacer>
      </Container>
    </PageRow>
  )
}

