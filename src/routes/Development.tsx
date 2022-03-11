import React, { FunctionComponent } from 'react'
import { Container } from '../components/layout/container/Container'
import { PageRow } from '../components/layout/page-row/PageRow'
import { Spacer } from '../components/layout/spacer/Spacer'

export const Development: FunctionComponent = () => {
  return (
    <PageRow>
      <Container>
        <Spacer>
          <div>
            Development
          </div>
        </Spacer>
      </Container>
    </PageRow>
  )
}
