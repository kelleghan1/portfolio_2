import React,
{
  FunctionComponent,
  useContext
} from 'react'
import styled from 'styled-components'
import { PureUnit } from '../../../components/layout/pure-unit/PureUnit'
import { Pure } from '../../../components/layout/pure/Pure'
import { PortfolioContext } from '../../context/PortfolioContextProvider'
import { Container } from '../../layout/container/Container'
import { PageRow } from '../../layout/page-row/PageRow'
import { Spacer } from '../../layout/spacer/Spacer'
import { Image } from '../image/Image'
import { TagH } from '../tag-h/TagH'
import { TagP } from '../tag-p/TagP'
import { ProjectContentStyles } from './ProjectContentStyles'

const ProjectContentStyled = styled.div`${ProjectContentStyles}`

type ProjectContentProps = {
  projectId: string
}

export const ProjectContent: FunctionComponent<ProjectContentProps> = ({ projectId }) => {
  const { portfolioMap } = useContext(PortfolioContext)
  const portfolioItem = portfolioMap[projectId]

  const{
    description,
    images,
    name,
    primaryImage,
    products
  } = portfolioItem

  const renderProjectImage = (src: string) =>
    <Spacer
      b={3}
      key={src}
      l={0}
      r={0}
      t={0}
    >
      <Image src={src}/>
    </Spacer>

  const renderDescription = (
    description: string,
    name: string,
    products: string[]
  ) => (
    <Spacer
      b={3}
      key={name}
      l={0}
      r={0}
      t={0}
    >
      <div className='description-wrapper'>
        <Spacer
          b={3}
          l={3}
          r={3}
        >
          <div className='name-wrapper'>
            <TagH size={2}>
              { name }
            </TagH>
          </div>
          <div className='products-wrapper'>
            <TagH size={4}>
              { products.join(', ') }
            </TagH>
          </div>
          <TagP>
            { description }
          </TagP>
        </Spacer>
      </div>
    </Spacer>
  )

  const renderColumns = () => {
    const column1 = [ renderProjectImage(primaryImage) ]

    const column2 = [
      renderDescription(
        description,
        name,
        products
      )
    ]

    images.forEach((
      imageUrl,
      index
    ) => {
      if (index % 2 === 0) {
        column1.push(renderProjectImage(imageUrl))
      } else {
        column2.push(renderProjectImage(imageUrl))
      }
    })

    return (
      <div className='columns-wrapper'>
        <Pure>
          <PureUnit pureClass='u-md-1-2'>
            <Spacer
              l={3}
              r={1.5}
            >
              { column1 }
            </Spacer>
          </PureUnit>
          <PureUnit pureClass='u-md-1-2'>
            <Spacer
              l={1.5}
              r={3}
            >
              { column2 }
            </Spacer>
          </PureUnit>
        </Pure>
      </div>
    )
  }

  const renderList = () => {
    const column = [
      renderDescription(
        description,
        name,
        products
      ),
      renderProjectImage(primaryImage)
    ]

    for (const imageUrl of images) {
      column.push(renderProjectImage(imageUrl))
    }

    return (
      <div className='list-wrapper'>
        <Spacer
          l={3}
          r={3}
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
          { renderColumns() }
          { renderList() }
        </ProjectContentStyled>
      </Container>
    </PageRow>
  )
}

