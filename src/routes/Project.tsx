import React,
{
  FunctionComponent,
  Suspense,
  useContext
} from 'react'
import {
  useParams,
  Redirect
} from 'react-router'
import { LoadingOverlay } from '../components/common/loading-overlay/LoadingOverlay'
import { PortfolioContext } from '../components/context/PortfolioContextProvider'
const ProjectContent = React.lazy(async () => await import('../components/page-content/project-content/ProjectContent'))

interface ParamsType {
  projectId: string
}

export const Project: FunctionComponent = () => {
  const { projectId } = useParams<ParamsType>()

  const {
    portfolioMap,
    projectIds,
    isLoading
  } = useContext(PortfolioContext)

  if (isLoading) return null

  if (
    !portfolioMap[projectId] ||
    !projectIds.includes(projectId)
  ) return <Redirect to='/' />

  return (
    <Suspense fallback={<LoadingOverlay />}>
      <ProjectContent projectId={projectId} />
    </Suspense>
  )
}
