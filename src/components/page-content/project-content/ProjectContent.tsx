import React,
{
  FunctionComponent,
  ReactElement,
  ReactNode,
  useContext
} from 'react'
import styled from 'styled-components'
import { Image } from '../../common/image/Image'
import { LinkCustom } from '../../common/link-custom/LinkCustom'
import { LinkDelayed } from '../../common/link-delayed/LinkDelayed'
import { TagH } from '../../common/tag-h/TagH'
import { TagP } from '../../common/tag-p/TagP'
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
    githubLinks,
    id
  } = portfolioItem

  const renderProjectImage = (
    src: string,
    altText: string
  ): ReactElement =>
    <div
      className={`fade-in ${isNavigating ? 'fade-out' : ''}`}
      key={src}
    >
      <Spacer
        b={3}
        l={0}
        r={0}
        t={0}
      >
        <Image
          altText={altText}
          src={src}
        />
      </Spacer>
    </div>

  const renderLink = (
    url: string,
    label: string,
    isInternal: boolean
  ): ReactNode => {
    if (isInternal) {
      return (
        <LinkDelayed
          hasLinkStyling={true}
          to={url}
        >
          { label }
        </LinkDelayed>
      )
    }

    return (
      <LinkCustom
        hasLinkStyling={true}
        isExternal={true}
        target='_blank'
        to={url}
      >
        { label }
      </LinkCustom>
    )
  }

  const renderLinks = (): ReactElement | null => {
    const linkItems = [
      ...(productLinks ?? []),
      ...(githubLinks ?? [])
    ]

    if (!linkItems.length) return null

    return (
      <Spacer
        b={0}
        l={0}
        r={0}
        t={2}
      >
        {
          linkItems.map((
            {
              url,
              label,
              isInternal = false
            },
            index
          ) => (
            <Spacer
              b={(index === linkItems.length - 1) ? 0 : 1}
              key={`${id}${url}`}
              l={0}
              r={0}
              t={0}
            >
              <div className='link-item-wrapper'>
                {
                  renderLink(
                    url,
                    label,
                    isInternal
                  )
                }
              </div>
            </Spacer>
          ))
        }
      </Spacer>
    )
  }

  const renderDescription = (): ReactElement =>
    <div
      className={`fade-in ${isNavigating ? 'fade-out' : ''}`}
      key={`${name} description`}
    >
      <Spacer
        b={3}
        l={0}
        r={0}
        t={0}
      >
        <div className='description-wrapper'>
          <Spacer
            b={2.5}
            l={3}
            r={3}
            t={2.5}
          >
            <Spacer
              b={2}
              l={0}
              r={0}
              t={0}
            >
              <TagH size={2}>
                { name }
              </TagH>
            </Spacer>
            <Spacer
              b={2}
              l={0}
              r={0}
              t={0}
            >
              <TagH size={4}>
                { products.join(' • ') }
              </TagH>
            </Spacer>
            <TagP>
              { description }
            </TagP>
            { renderLinks() }
          </Spacer>
        </div>
      </Spacer>
    </div>

  const renderSingleImageContent = (
    column1: ReactNode[],
    column2: ReactNode[]
  ): ReactNode =>
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
        <Pure>
          <PureUnit pureClass='u-md-1-2'>
            <Spacer
              l={3}
              r={1.5}
              t={0}
            >
              { column1 }
            </Spacer>
          </PureUnit>
          <PureUnit pureClass='u-md-1-2'>
            <Spacer
              l={1.5}
              r={3}
              t={0}
            >
              { column2 }
            </Spacer>
          </PureUnit>
        </Pure>
      </div>
    </>

  const renderPureColumns = (
    column1: ReactNode[],
    column2: ReactNode[]
  ): ReactNode =>
    <Pure>
      <PureUnit pureClass='u-md-1-2'>
        <Spacer
          l={3}
          r={1.5}
          t={0}
        >
          { column1 }
        </Spacer>
      </PureUnit>
      <PureUnit pureClass='u-md-1-2'>
        <Spacer
          l={1.5}
          r={3}
          t={0}
        >
          { column2 }
        </Spacer>
      </PureUnit>
    </Pure>

  const renderColumnView = (): ReactNode => {
    const column1 = []

    const column2 = [
      <div
        className='column-description'
        key={`${name} description`}
      >
        { renderDescription() }
      </div>
    ]

    if (projectImagesPreloaded[primaryImage]) {
      column1.push(renderProjectImage(
        primaryImage,
        `${name} primary image`
      ))
    }

    images.forEach((
      imageUrl,
      index
    ) => {
      if (projectImagesPreloaded[imageUrl]) {
        if (index % 2 === 0) {
          column2.push(renderProjectImage(
            imageUrl,
            `${name} image ${index}`
          ))
        } else {
          column1.push(renderProjectImage(
            imageUrl,
            `${name} image ${index}`
          ))
        }
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
            { renderDescription() }
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

  const renderListView = (): ReactNode => {
    const column = [
      <div key={`${name} description`}>
        { renderDescription() }
      </div>
    ]

    if (projectImagesPreloaded[primaryImage]) {
      column.push(renderProjectImage(
        primaryImage,
        `${name} primary image`
      ))
    }

    images.forEach((
      imageUrl,
      index
    ) => {
      if (projectImagesPreloaded[imageUrl]) {
        column.push(renderProjectImage(
          imageUrl,
          `${name} image ${index}`
        ))
      }
    })

    return (
      <div className='list-wrapper'>
        <Spacer
          l={3}
          r={3}
          t={0}
        >
          { column }
        </Spacer>
      </div>
    )
  }

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
