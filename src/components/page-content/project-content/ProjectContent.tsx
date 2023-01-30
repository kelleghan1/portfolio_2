import React,
{
  FunctionComponent,
  ReactElement,
  useContext
} from 'react'
import styled from 'styled-components'
import { ProjectDescription } from '../../common/project-description/ProjectDescription'
import { ProjectImage } from '../../common/project-image/ProjectImage'
import { PortfolioContext } from '../../context/PortfolioContextProvider'
import { Container } from '../../layout/container/Container'
import { PageRow } from '../../layout/page-row/PageRow'
import { PureUnit } from '../../layout/pure-unit/PureUnit'
import { Pure } from '../../layout/pure/Pure'
import { Spacer } from '../../layout/spacer/Spacer'
import { ProjectContentStyles } from './ProjectContentStyles'

const ProjectContentStyled = styled.div`${ProjectContentStyles}`

interface ProjectContentProps {
  projectId: string
}

const ProjectContent: FunctionComponent<ProjectContentProps> = ({ projectId }) => {
  const {
    portfolioMap,
    isNavigating,
    projectImagesPreloaded
  } = useContext(PortfolioContext)

  const portfolioItem = portfolioMap[projectId]

  const {
    description,
    images,
    name,
    primaryImage,
    products,
    productLinks,
    githubLinks
  } = portfolioItem

  const renderColumnView = (): ReactElement => {
    const column1 = [
      renderProjectImage(
        `${name} primary image`,
        primaryImage.url
      )
    ]

    const column2 = [
      <div
        className='column-description'
        key={`${name} description`}
      >
        { renderProjectDescription() }
      </div>
    ]

    images.forEach((
      { url },
      index
    ) => {
      if (index % 2 === 0) {
        column2.push(
          renderProjectImage(
            `${name} image ${index}`,
            url
          )
        )
      } else {
        column1.push(
          renderProjectImage(
            `${name} image ${index}`,
            url
          )
        )
      }
    })

    return (
      <div className='columns-wrapper'>
        <div className='block-description'>
          <Spacer
            b={0}
            l={3}
            r={3}
            t={0}
          >
            { renderProjectDescription() }
          </Spacer>
        </div>
        {
          [ ...images, primaryImage ].length < 2
            ? renderSingleImageContent(
              column1,
              column2
            )
            : renderPureColumns(
              column1,
              column2
            )
        }
      </div>
    )
  }

  const renderProjectDescription = (): ReactElement =>
    <ProjectDescription
      description={description}
      githubLinks={githubLinks ?? []}
      isNavigating={isNavigating}
      name={name}
      productLinks={productLinks ?? []}
      products={products.map(product => product.name)}
    />

  const renderProjectImage = (
    altText: string,
    imageUrl: string
  ): ReactElement =>
    <ProjectImage
      altText={altText}
      imageUrl={imageUrl}
      isLoaded={projectImagesPreloaded[imageUrl]}
      isNavigating={isNavigating}
      key={imageUrl}
    />

  const renderPureColumns = (
    column1: ReactElement[],
    column2: ReactElement[]
  ): ReactElement =>
    <Pure>
      <PureUnit pureClass='u-sm-1-2'>
        <Spacer
          l={3}
          r={1.25}
          t={0}
        >
          { column1 }
        </Spacer>
      </PureUnit>
      <PureUnit pureClass='u-sm-1-2'>
        <Spacer
          l={1.25}
          r={3}
          t={0}
        >
          { column2 }
        </Spacer>
      </PureUnit>
    </Pure>

  const renderSingleImageContent = (
    column1: ReactElement[],
    column2: ReactElement[]
  ): ReactElement =>
    <>
      <div className='single-image-tablet-columns'>
        <Spacer
          l={3}
          r={3}
          t={0}
        >
          { column1 }
        </Spacer>
      </div>
      <div className='single-image-desktop-columns'>
        {
          renderPureColumns(
            column1,
            column2
          )
        }
      </div>
    </>

  const renderListView = (): ReactElement =>
    <div className='list-wrapper'>
      <Spacer
        l={3}
        r={3}
        t={0}
      >
        { renderProjectDescription() }
        {
          renderProjectImage(
            `${name} primary image`,
            primaryImage.url
          )
        }
        {
          images.map((
            { url },
            index
          ) => (
            renderProjectImage(
              `${name} image ${index}`,
              url
            )
          ))
        }
      </Spacer>
    </div>

  return (
    <PageRow>
      <Container>
        <ProjectContentStyled>
          { renderColumnView() }
          { renderListView() }
        </ProjectContentStyled>
      </Container>
    </PageRow>
  )
}

export default ProjectContent
