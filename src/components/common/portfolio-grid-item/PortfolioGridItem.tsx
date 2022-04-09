import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Image } from '../image/Image'
import { LinkDelayed } from '../link-delayed/LinkDelayed'
import { PortfolioGridItemStyles } from './PortfolioGridItemStyles'

const PortfolioGridItemStyled = styled.div`
  ${PortfolioGridItemStyles}
`

interface PortfolioGridItemPropsType {
  homeImage: string
  projectId: string
  name: string
}

export const PortfolioGridItem: FunctionComponent<PortfolioGridItemPropsType> = ({
  homeImage,
  projectId,
  name,
  ...rest
}) => (
  <PortfolioGridItemStyled {...rest} >
    <div className='image-wrapper'>
      <LinkDelayed
        isBlock
        to={`/project/${projectId}`}
      >
        <Image
          altText={`View project page for ${name}`}
          aspectRatio={'1 / 1'}
          src={ homeImage }
        />
      </LinkDelayed>
    </div>
  </PortfolioGridItemStyled>
)

