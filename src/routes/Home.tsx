import React, { FunctionComponent } from 'react'
import { Spacer } from '../components/layout/spacer/Spacer'
import { PageRow } from '../components/layout/page-row/PageRow'
import { Container } from '../components/layout/container/Container'

export const Home: FunctionComponent = () => {
  return (
    <PageRow>
      <Container>
        <Spacer>
          <div>
            home
          </div>
        </Spacer>
      </Container>
    </PageRow>
  )
}
