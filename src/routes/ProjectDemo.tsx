import React,
{
  FunctionComponent,
  ReactElement,
  useContext
} from 'react'
import {
  useParams,
  Redirect
} from 'react-router'
import { PortfolioContext } from '../components/context/PortfolioContextProvider'
import { KnightMovesDemo } from '../components/page-content/knight-moves-demo/KnightMovesDemo'

interface ParamsType {
  projectId: string
}

const projectDemoMap: {[key: string]: ReactElement} = {
  knightmoves: <KnightMovesDemo />
}

const ProjectDemo: FunctionComponent = () => {
  const { projectId } = useParams<ParamsType>()

  const {
    portfolioMap,
    projectIds,
    isLoading
  } = useContext(PortfolioContext)

  if (isLoading) return null

  if (projectDemoMap[projectId] === undefined) {
    if (
      !portfolioMap[projectId] ||
      !projectIds.includes(projectId)
    ) {
      return <Redirect to='/' />
    }

    return <Redirect to={`/project/${projectId}`} />
  }

  return projectDemoMap[projectId]
}

export default ProjectDemo
