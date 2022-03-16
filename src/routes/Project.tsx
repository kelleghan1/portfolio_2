import React,
{
  FunctionComponent,
  useContext
} from 'react'
import {
  useParams,
  Redirect
} from 'react-router'
import { ProjectContent } from '../components/common/project-content/ProjectContent'
import { PortfolioContext } from '../components/context/PortfolioContextProvider'

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

  return <ProjectContent projectId={projectId} />
}