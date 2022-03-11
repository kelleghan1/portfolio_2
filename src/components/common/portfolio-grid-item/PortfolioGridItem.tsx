import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Image } from '../image/Image'
import { LinkCustom } from '../link-custom/LinkCustom'
import { PortfolioGridItemStyles } from './PortfolioGridItemStyles'

const PortfolioGridItemStyled = styled.div`${PortfolioGridItemStyles}`

type PortfolioGridItemPropsType = {
  homeImage: string,
  projectId: string
}

export const PortfolioGridItem: FunctionComponent<PortfolioGridItemPropsType> = ({
  homeImage,
  projectId
}) => {
  return (
    <PortfolioGridItemStyled>
      <div className='image-wrapper'>
        <LinkCustom to={`/project/${projectId}`}>
          <Image src={ homeImage } />
        </LinkCustom>
      </div>
    </PortfolioGridItemStyled>
  )
}

