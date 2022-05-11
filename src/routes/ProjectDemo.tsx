import React,
{
  FunctionComponent,
  ReactElement,
  Suspense,
  useContext
} from 'react'
import {
  useParams,
  Redirect
} from 'react-router'
import { LoadingOverlay } from '../components/common/loading-overlay/LoadingOverlay'
import { PortfolioContext } from '../components/context/PortfolioContextProvider'

const KnightMovesDemo = React.lazy(async () => await import('../components/page-content/knight-moves-demo/KnightMovesDemo'))

interface ParamsType {
  projectId: string
}

const projectDemoMap: {[key: string]: ReactElement} = {
  knightmoves: <KnightMovesDemo />
}

export const ProjectDemo: FunctionComponent = () => {
  const { projectId } = useParams<ParamsType>()

  const {
    portfolioMap,
    projectIds,
    isLoading
  } = useContext(PortfolioContext)

  if (isLoading) return null

  if (projectDemoMap[projectId] === undefined) {
    if (
      portfolioMap[projectId] &&
      projectIds.includes(projectId)
    ) {
      return <Redirect to={`/project/${projectId}`} />
    }

    return <Redirect to='/' />
  }

  return (
    <Suspense fallback={<LoadingOverlay />}>
      { projectDemoMap[projectId] }
    </Suspense>
  )
}
