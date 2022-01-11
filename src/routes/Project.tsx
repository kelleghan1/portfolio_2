import React, { FunctionComponent } from 'react'
import { Spacer } from '../components/layout/spacer/Spacer'
import { PageRow } from '../components/layout/page-row/PageRow'
import { Container } from '../components/layout/container/Container'
import { useParams } from 'react-router'

type Params = {
  projectId?: string
}

export const Project: FunctionComponent = () => {
  const { projectId } = useParams<Params>()

  return (
    <PageRow>
      <Container>
        <Spacer>
          <div>
            Design
          </div>
        </Spacer>
      </Container>
    </PageRow>
  )
}
