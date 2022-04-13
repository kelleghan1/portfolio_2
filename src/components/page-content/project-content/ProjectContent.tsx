import React,
{
  FunctionComponent,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import styled from 'styled-components'
import { preloadImages } from '../../../utils/helpers'
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

export const ProjectContent: FunctionComponent<ProjectContentProps> = ({ projectId }) => {
  const [ areImagesLoaded, setAreImagesLoaded ] = useState(false)

  const {
    portfolioMap,
    isNavigating
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

  useEffect(
    () => {
      void preloadImages(images)
        .then(() => { setAreImagesLoaded(true) })
    },
    [ projectId ]
  )

  const renderProjectImage = (
    src: string,
    altText: string
  ): ReactElement =>
    <Spacer
      b={3}
      key={src}
      l={0}
      r={0}
      t={0}
    >
      <Image
        altText={altText}
        src={src}
      />
    </Spacer>

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
        target={!isInternal ? '_blank' : undefined}
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
              <div className='link-item-wrapper' >
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

  const renderDescription = (): ReactElement => (
    <Spacer
      b={3}
      key={name}
      l={0}
      r={0}
      t={0}
    >
      <div className='description-wrapper'>
        <Spacer
          l={3}
          r={3}
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
              { products.join(', ') }
            </TagH>
          </Spacer>
          <TagP>
            { description }
          </TagP>
          { renderLinks() }
        </Spacer>
      </div>
    </Spacer>
  )

  const renderColumnView = (): ReactNode => {
    if (!areImagesLoaded) return null

    const column1 = [
      renderProjectImage(
        primaryImage,
        `${name} primary image`
      )
    ]

    const column2 = [
      renderDescription()
    ]

    images.forEach((
      imageUrl,
      index
    ) => {
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
    })

    return (
      <div className={`fade-in columns-wrapper ${isNavigating ? 'fade-out' : ''}`}>
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
    )
  }

  const renderListView = (): ReactNode => {
    if (!areImagesLoaded) return null

    const column = [
      renderDescription(),
      renderProjectImage(
        primaryImage,
        `${name} primary image`
      )
    ]

    images.forEach((
      imageUrl,
      index
    ) => {
      column.push(renderProjectImage(
        imageUrl,
        `${name} image ${index}`
      ))
    })

    return (
      <div className={`fade-in list-wrapper ${isNavigating ? 'fade-out' : ''}`}>
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

