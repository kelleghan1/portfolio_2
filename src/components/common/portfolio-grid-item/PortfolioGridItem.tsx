import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Image } from '../image/Image'
import { LinkCustom } from '../link-custom/LinkCustom'
import { PortfolioGridItemStyles } from './PortfolioGridItemStyles'

const PortfolioGridItemStyled = styled.div`
  ${PortfolioGridItemStyles}
`

interface PortfolioGridItemPropsType {
  homeImage: string
  projectId: string
}

export const PortfolioGridItem: FunctionComponent<PortfolioGridItemPropsType> = ({
  homeImage,
  projectId,
  ...rest
}) => {
  return (
    <PortfolioGridItemStyled {...rest}>
      <div className='image-wrapper'>
        <LinkCustom to={`/project/${projectId}`}>
          <Image src={ homeImage } />
        </LinkCustom>
      </div>
    </PortfolioGridItemStyled>
  )
}

