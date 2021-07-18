import React, { FunctionComponent } from 'react'
import { Spacer } from '../components/layout/spacer/Spacer'
import { PageRow } from '../components/layout/page-row/PageRow'
import { Container } from '../components/layout/container/Container'

export const Contact: FunctionComponent = () => {
  return (
    <PageRow>
      <Container>
        <Spacer>
          <div>
            Contact
          </div>
        </Spacer>
      </Container>
    </PageRow>
  )
}
